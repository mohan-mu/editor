(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[1447],{81447:e=>{e.exports="import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiPreviewModule} from '@taiga-ui/addon-preview';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {TuiEditorImagePreviewModule} from '@tinkoff/tui-editor';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport {ImagePreviewExampleComponent} from './image-preview.component';\n\n@NgModule({\n    imports: [\n        CommonModule,\n        TuiPreviewModule,\n        TuiButtonModule,\n        PolymorpheusModule,\n        TuiEditorImagePreviewModule,\n    ],\n    declarations: [ImagePreviewExampleComponent],\n    exports: [\n        TuiEditorImagePreviewModule,\n        TuiEditorImagePreviewModule,\n        ImagePreviewExampleComponent,\n    ],\n})\nexport class ImagePreviewExampleModule {}\n"}}]);