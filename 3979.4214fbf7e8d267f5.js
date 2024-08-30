(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3979],{33979:o=>{o.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';\n\nimport {CustomColorPicker} from './custom-color-picker';\n\n@Component({\n    standalone: true,\n    imports: [CustomColorPicker, ReactiveFormsModule, TuiEditor],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@taiga-ui/editor').then(({TuiFontColor}) => TuiFontColor),\n                import('@taiga-ui/editor').then(\n                    ({TuiBackgroundColor}) => TuiBackgroundColor,\n                ),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected readonly control = new FormControl('');\n}\n"}}]);