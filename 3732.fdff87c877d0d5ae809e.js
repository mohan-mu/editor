(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[3732],{83732:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {\n    defaultEditorExtensions,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_VALUE_TRANSFORMER,\n} from '@tbank/tui-editor';\n\nimport {ExampleEditorCleanupHtmlTransformer} from './transformer';\n\n@Component({\n    selector: 'tui-editor-cleanup-html-example-1',\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: defaultEditorExtensions,\n        },\n        {\n            provide: TUI_EDITOR_VALUE_TRANSFORMER,\n            useClass: ExampleEditorCleanupHtmlTransformer,\n        },\n    ],\n})\nexport class TuiEditorCleanupHtmlExample1 {\n    control = new FormControl(\n        '<p class=\"t-content\">TipTap Editor</p>',\n        Validators.required,\n    );\n}\n"}}]);