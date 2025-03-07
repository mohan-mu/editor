import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {map, type Observable} from 'rxjs';

import type {AbstractTuiEditor} from '../../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-details-remove',
    imports: [AsyncPipe, NgIf, TuiButton, TuiHint],
    templateUrl: './details-remove.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsRemove implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected disabled$: Observable<boolean> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    public removeDetails(): void {
        this.editor?.removeDetails();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.disabled$ =
            this.editor?.isActive$('details').pipe(map((isActive) => !isActive)) ?? null;
    }
}
