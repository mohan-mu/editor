(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[9801],{79801:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiDataList, TuiInitialsPipe} from '@taiga-ui/core';\nimport {TuiAvatarComponent} from '@taiga-ui/kit';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@tbank/tui-editor';\n\nimport type {User} from './mention';\nimport {Mentions} from './mention';\n\n@Component({\n    standalone: true,\n    imports: [\n        TuiEditor,\n        ReactiveFormsModule,\n        TuiDataList,\n        NgForOf,\n        TuiAvatarComponent,\n        TuiInitialsPipe,\n        TuiEditorSocket,\n        Mentions,\n        NgIf,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tbank/tui-editor').then(({TuiLink}) => TuiLink),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tbank/tui-editor').then(({TuiMention}) => TuiMention),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    @ViewChild(TuiEditor)\n    protected readonly wysiwyg?: TuiEditor;\n\n    protected readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Size,\n        TuiEditorTool.Link,\n    ];\n\n    protected control = new FormControl(`\n        <p><span class=\"my-mention\" data-type=\"mention\">@a.inkin</span> FYI</p>\n    `);\n\n    protected setMention(item: User): void {\n        const editor = this.wysiwyg?.editor?.getOriginTiptapEditor();\n\n        if (!editor) {\n            return;\n        }\n\n        const replaceText = `<span class=\"my-mention\" data-type=\"mention\">@${item.login}</span>&nbsp;`;\n        const to = editor.state.selection.to;\n        const from =\n            editor.state.selection.from -\n            (this.wysiwyg?.mentionSuggestions.length ?? 0) -\n            1;\n\n        editor.chain().focus().insertContentAt({from, to}, replaceText).run();\n    }\n}\n"}}]);