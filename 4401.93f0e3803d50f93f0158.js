(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[4401],{44401:n=>{n.exports="import {ChangeDetectionStrategy, Component, Inject, ViewChild} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {\n    TUI_ATTACH_FILES_LOADER,\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorAttachedFile,\n    TuiEditorComponent,\n    TuiEditorTool,\n} from '@tbank/tui-editor';\n\nimport {fileLoader} from './file-loader';\nimport {FileIoService} from './filesio.service';\n\n@Component({\n    selector: 'tui-editor-upload-files-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tbank/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),\n                import('@tbank/tui-editor/extensions/link').then(({TuiLink}) => TuiLink),\n                import('@tbank/tui-editor/extensions/jump-anchor').then(\n                    ({TuiJumpAnchor}) => TuiJumpAnchor,\n                ),\n                import('@tbank/tui-editor/extensions/file-link').then(\n                    ({TuiFileLink}) => TuiFileLink,\n                ),\n            ],\n        },\n        {\n            provide: TUI_ATTACH_FILES_LOADER,\n            deps: [FileIoService],\n            useFactory: fileLoader,\n        },\n    ],\n})\nexport class TuiEditorUploadFilesExample1 {\n    @ViewChild(TuiEditorComponent)\n    private readonly wysiwyg?: TuiEditorComponent;\n\n    readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Link,\n        TuiEditorTool.Attach,\n    ];\n\n    control = new FormControl('');\n\n    constructor(@Inject(FileIoService) readonly fileIoService: FileIoService) {}\n\n    /**\n     * @note: attach file as a link\n     * you can also implement your own file mapping mechanism\n     * because you have all the necessary data for this\n     */\n    attach(files: TuiEditorAttachedFile[]): void {\n        files.forEach(file => this.wysiwyg?.editor?.setFileLink(file));\n    }\n}\n"}}]);