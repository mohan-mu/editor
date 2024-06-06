(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5499],{25499:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@tbank/tui-editor';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tbank/tui-editor').then(({tuiCreateGroupExtension}) =>\n                    tuiCreateGroupExtension({\n                        draggable: false,\n\n                        // @note: you can override css styles with your own classes\n                        groupNodeClass: 'group',\n                        groupPointerNodeClass: '', // anyway element doesn't exists if `draggable` is false\n                    }),\n                ),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    protected control = new FormControl('');\n\n    constructor() {\n        this.control.patchValue(\n            '<p>This is a boring paragraph.</p><div data-type=\"group\"><p>And another paragraph.</p><div data-type=\"group\"><p>And a nested paragraph.</p><div data-type=\"group\"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>',\n        );\n    }\n}\n"}}]);