import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiAutoFocus, tuiIsElement} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiScrollbar} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

import type {AbstractTuiEditor} from '../../abstract/editor-adapter.abstract';
import type {
    TuiEditorLinkPrefix,
    TuiEditorLinkProtocol,
} from '../../constants/default-link-options-handler';
import {
    TUI_EDITOR_LINK_HASH_PREFIX,
    TUI_EDITOR_LINK_HTTPS_PREFIX,
} from '../../constants/default-link-options-handler';
import {TuiTiptapEditorService} from '../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../tokens/editor-options';
import {TUI_EDITOR_LINK_TEXTS} from '../../tokens/i18n';
import {TuiFilterAnchorsPipe} from './pipes/filter-anchors.pipe';
import {TuiShortUrlPipe} from './pipes/short-url.pipe';
import {tuiEditLinkParseUrl} from './utils/edit-link-parse-url';

@Component({
    standalone: true,
    selector: 'tui-edit-link',
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        NgIf,
        TuiAutoFocus,
        TuiButton,
        TuiFilterAnchorsPipe,
        TuiInputInline,
        TuiLink,
        TuiScrollbar,
        TuiShortUrlPipe,
    ],
    templateUrl: './edit-link.template.html',
    styleUrls: ['./edit-link.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:selectionchange)': 'onSelectionChange()',
        '(mousedown)': 'onMouseDown($event)',
    },
})
export class TuiEditLink {
    private readonly doc: Document | null = inject(WA_WINDOW)?.document ?? null;
    private isOnlyAnchorMode: boolean = this.detectAnchorMode();
    private readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});

    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected url: string = this.getHrefOrAnchorId();
    protected edit = !this.url;
    protected prefix: TuiEditorLinkPrefix = this.makeDefaultPrefix();
    protected anchorIds = this.getAllAnchorsIds();
    protected readonly texts$ = inject(TUI_EDITOR_LINK_TEXTS);

    @Input('editor')
    public inputEditor: AbstractTuiEditor | null = null;

    @Output()
    public readonly addLink = new EventEmitter<string>();

    @Output()
    public readonly removeLink = new EventEmitter<void>();

    @Input()
    public set anchorMode(mode: boolean) {
        this.isOnlyAnchorMode = mode;
        this.prefix = mode ? TUI_EDITOR_LINK_HASH_PREFIX : this.makeDefaultPrefix();
    }

    public get anchorMode(): boolean {
        return this.isOnlyAnchorMode;
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    protected get defaultProtocol(): TuiEditorLinkProtocol {
        return this.options.linkOptions?.protocol ?? TUI_EDITOR_LINK_HTTPS_PREFIX;
    }

    protected get prefixIsHashMode(): boolean {
        return this.prefix === TUI_EDITOR_LINK_HASH_PREFIX;
    }

    protected get hasUrl(): boolean {
        return !!this.url;
    }

    protected get href(): string {
        return `${this.prefix}${this.url}`;
    }

    protected get showAnchorsList(): boolean {
        return !this.anchorMode && this.edit && this.anchorIds.length > 0;
    }

    protected onSelectionChange(): void {
        if (this.isViewMode) {
            this.url = this.getHrefOrAnchorId();
            this.anchorMode = this.detectAnchorMode();
        }
    }

    protected onMouseDown(event: MouseEvent): void {
        if (tuiIsElement(event.target) && !event.target.matches('a, button, input')) {
            event.preventDefault();
        }
    }

    protected setAnchor(anchor: string): void {
        this.url = anchor;
        this.changePrefix(true);
    }

    protected changePrefix(isPrefix: boolean): void {
        this.prefix = isPrefix ? TUI_EDITOR_LINK_HASH_PREFIX : this.defaultProtocol;
    }

    protected onSave(): void {
        if (this.url) {
            this.addLink.emit(this.href);
        } else {
            this.removeLink.emit();
        }
    }

    protected onBackspace(): void {
        if (!this.url) {
            this.prefix = this.isOnlyAnchorMode
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : this.defaultProtocol;
        }
    }

    protected onEdit(): void {
        this.edit = true;
    }

    protected onRemove(): void {
        this.removeLink.emit();
    }

    protected onChange(url: string): void {
        this.url = this.removePrefix(url);
    }

    protected onClear(): void {
        this.url = '';
    }

    private get isViewMode(): boolean {
        return !this.edit;
    }

    private makeDefaultPrefix(): TuiEditorLinkPrefix {
        const a = this.getAnchorElement();
        const defaultPrefix =
            (tuiEditLinkParseUrl(a?.getAttribute('href') ?? '')
                .prefix as TuiEditorLinkPrefix) || this.defaultProtocol;

        if (a) {
            return (!a.getAttribute('href') && a.getAttribute('id')) ||
                a.getAttribute('href')?.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : defaultPrefix;
        }

        return defaultPrefix;
    }

    private detectAnchorMode(): boolean {
        const a = this.getAnchorElement();

        return !a?.href && !!a?.getAttribute('id');
    }

    private getFocusedParentElement(): HTMLElement | null {
        return this.doc?.getSelection?.()?.focusNode?.parentElement || null;
    }

    private getAnchorElement(): HTMLAnchorElement | null {
        const focusable = this.getFocusedParentElement();

        return (
            focusable?.closest('a') ??
            focusable?.querySelector('img')?.closest('a') ??
            null
        );
    }

    private getHrefOrAnchorId(): string {
        const a = this.getAnchorElement();

        return a
            ? this.removePrefix(a.getAttribute('href') ?? a.getAttribute('id') ?? '')
            : this.url;
    }

    private removePrefix(url: string): string {
        const fullPath =
            url.startsWith(TUI_EDITOR_LINK_HASH_PREFIX) ||
            this.prefix === TUI_EDITOR_LINK_HASH_PREFIX ||
            url.startsWith('/') ||
            url.startsWith('./') ||
            url.startsWith('http') ||
            url.startsWith('://')
                ? url
                : `${this.prefix ?? ''}${url}`;

        const {prefix, path} = tuiEditLinkParseUrl(fullPath);
        const expectAnchorMode =
            this.isOnlyAnchorMode ||
            prefix === TUI_EDITOR_LINK_HASH_PREFIX ||
            (prefix === '' && this.prefix === TUI_EDITOR_LINK_HASH_PREFIX);

        if (expectAnchorMode) {
            this.prefix = TUI_EDITOR_LINK_HASH_PREFIX;
        } else if (prefix === '') {
            this.prefix = this.defaultProtocol;
        } else {
            this.prefix = prefix as TuiEditorLinkPrefix;
        }

        return path;
    }

    private getAllAnchorsIds(): string[] {
        const nodes: Element[] = Array.from(
            this.editor
                ?.getOriginTiptapEditor()
                ?.view.dom.querySelectorAll('[data-type="jump-anchor"]') ?? [],
        );

        return Array.from(nodes)
            .map((node) => node.getAttribute('id') ?? '')
            .filter(Boolean);
    }
}
