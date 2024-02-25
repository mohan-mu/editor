import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {combineLatest, map} from 'rxjs';

import {TUI_EDITOR_DEFAULT_TOOLS} from '../../../constants/default-editor-tools';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TuiEditorTool} from '../../../enums/editor-tool';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-font-style',
    imports: [TuiHintModule, TuiButtonModule, NgIf, TuiHostedDropdownModule, AsyncPipe],
    templateUrl: './font-style.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyleComponent {
    private toolsSet = new Set<TuiEditorTool>(TUI_EDITOR_DEFAULT_TOOLS);

    @Input()
    set enabledTools(value: Set<TuiEditorTool> | readonly TuiEditorTool[]) {
        this.toolsSet = new Set(value);
    }

    readonly editorTool: typeof TuiEditorTool = TuiEditorTool;

    readonly options = inject(TUI_EDITOR_OPTIONS);
    readonly editor = inject(TuiTiptapEditorService);
    readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    readonly fontStyleState$ = combineLatest([
        this.editor.isActive$('bold'),
        this.editor.isActive$('italic'),
        this.editor.isActive$('underline'),
        this.editor.isActive$('strike'),
    ]).pipe(
        map(([bold, italic, underline, strike]) => ({
            bold,
            italic,
            underline,
            strike,
        })),
    );

    isEnabled(tool: TuiEditorTool): boolean {
        return this.toolsSet.has(tool);
    }
}
