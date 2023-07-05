"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[2683],{72683:t=>{t.exports="import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';\n\nimport {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';\n\n@Component({\n    selector: 'tui-editor-paste-image-tool-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tinkoff/tui-editor/extensions/image-editor').then(\n                    ({tuiCreateImageEditorExtension}) =>\n                        tuiCreateImageEditorExtension({injector}).extend(\n                            IMAGE_CLIPBOARD_PASTE_EXTENSION,\n                        ),\n                ),\n            ],\n        },\n    ],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TuiEditorPasteImageToolExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n    readonly control = new FormControl('');\n}\n"}}]);