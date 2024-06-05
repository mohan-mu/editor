import {NgModule} from '@angular/core';
import {TuiEditorResizableModule} from '@tbank/tui-editor/components/editor-resizable';

import {TuiIframeEditorComponent} from './iframe-editor.component';

@NgModule({
    imports: [TuiEditorResizableModule],
    declarations: [TuiIframeEditorComponent],
    exports: [TuiIframeEditorComponent],
})
export class TuiIframeEditorModule {}
