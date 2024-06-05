(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[8199],{78199:n=>{n.exports="import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tbank/tui-editor';\n\n@Component({\n    selector: 'tui-editor-code-block-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useFactory: () => [\n                import('@tbank/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorCodeBlockExample1 implements OnInit {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];\n\n    control = new FormControl('');\n\n    async ngOnInit(): Promise<void> {\n        const [code] = tuiTryParseMarkdownCodeBlock(\n            await tuiRawLoad(import('./example.md?raw')),\n        );\n\n        this.control.patchValue(code);\n    }\n}\n"}}]);