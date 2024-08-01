import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {timer} from 'rxjs';

import {AbstractTuiEditorResizable} from '../../components/editor-resizable/editor-resizable.abstract';
import {TuiEditorResizable} from '../../components/editor-resizable/editor-resizable.component';
import {TUI_EDITOR_RESIZE_EVENT} from '../../constants/default-events';
import type {TuiEditableImage} from './image-editor.options';
import {TUI_IMAGE_EDITOR_OPTIONS} from './image-editor.options';

@Component({
    standalone: true,
    selector: 'tui-image-editor',
    imports: [TuiEditorResizable],
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageEditor
    extends AbstractTuiEditorResizable<TuiEditableImage>
    implements AfterViewInit
{
    @ViewChild('resizable', {static: true})
    private readonly resizable?: TuiEditorResizable;

    private readonly sanitizer = inject(DomSanitizer);
    private readonly el = inject(ElementRef);
    private readonly win = inject(WA_WINDOW);
    private readonly destroyRef = inject(DestroyRef);

    @HostBinding('attr.contenteditable')
    protected contenteditable = false;

    protected focused = false;

    protected readonly options = inject(TUI_IMAGE_EDITOR_OPTIONS);

    public override get height(): number | string | null {
        return null;
    }

    public get minWidth(): number {
        return this.options.minWidth || 0;
    }

    public get maxWidth(): number {
        return this.options.maxWidth || 0;
    }

    public ngAfterViewInit(): void {
        if (this.minWidth > 0) {
            this.updateMinWidth();
        }
    }

    public updateSize([width]: readonly [width: number, height?: number]): void {
        this.currentWidth = Math.max(this.minWidth, Math.min(this.maxWidth, width));
        this.attrs.width = this.currentWidth;

        this.notifyUpdate();
    }

    @HostBinding('attr.data-drag-handle')
    protected get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    @tuiPure
    protected get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src);
    }

    protected get alt(): string {
        return this.attrs.alt || '';
    }

    protected get title(): string {
        return this.attrs.title || '';
    }

    @HostListener('document:click.silent', ['$event.target'])
    protected currentTargetIsFocused(node: Node): void {
        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        }
    }

    private selectFakeText(): void {
        if (this.win.document) {
            const range = this.win.document.createRange();

            this.el.nativeElement.querySelector('p')?.focus();

            range.selectNode(this.el.nativeElement);
            this.win.getSelection()?.removeAllRanges();
            this.win.getSelection()?.addRange(range);
        }
    }

    private updateMinWidth(): void {
        timer(100)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                const naturalWidth =
                    this.resizable?.container?.nativeElement.querySelector('img')
                        ?.naturalWidth ??
                    this.resizable?.width ??
                    this.attrs.width ??
                    0;

                if (this.minWidth > parseInt(naturalWidth as string, 10)) {
                    this.updateSize([this.minWidth]);
                }
            });
    }

    private notifyUpdate(): void {
        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
        );
    }
}
