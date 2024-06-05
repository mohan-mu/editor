import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tbank/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tbank/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tbank/tui-editor/tokens';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-details',
    templateUrl: './details.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsComponent {
    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
    ) {}

    setDetails(): void {
        this.editor.setDetails();
    }
}
