"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[2704],{12704:o=>{o.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';\n\n@Component({\n    selector: 'tui-editor-color-picker-tool-example-1',\n    templateUrl: './index.html',\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tinkoff/tui-editor/extensions/font-color').then(\n                    ({FontColor}) => FontColor,\n                ),\n                import('@tinkoff/tui-editor/extensions/background-color').then(\n                    ({BackgroundColor}) => BackgroundColor,\n                ),\n            ],\n        },\n    ],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TuiEditorColorPickerToolExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n\n    readonly control = new FormControl('');\n}\n"}}]);