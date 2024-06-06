(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1197],{41197:e=>{e.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@tbank/tui-editor';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-placeholder').then(({Placeholder}) =>\n                    Placeholder.configure({\n                        emptyNodeClass: 't-editor-placeholder',\n                        placeholder: \"Type '/' for command\", // Notion like\n                        includeChildren: true,\n                    }),\n                ),\n                import('@tbank/tui-editor').then(({tuiCreateGroupExtension}) =>\n                    tuiCreateGroupExtension({nested: false, createOnEnter: true}),\n                ),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    protected control = new FormControl('');\n\n    constructor() {\n        this.control.patchValue(\n            '<div data-type=\"group\"><p>This is a boring paragraph.</p></div><div data-type=\"group\"><p>And another draggable paragraph.</p></div><div data-type=\"group\"><p>Let’s finish with a boring paragraph.</p></div>',\n        );\n    }\n}\n"}}]);