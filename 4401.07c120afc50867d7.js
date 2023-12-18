(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[4401],{44401:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, Inject, ViewChild} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiLoaderModule} from '@taiga-ui/core';\nimport {\n    TUI_ATTACH_FILES_LOADER,\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorAttachedFile,\n    TuiEditorComponent,\n    TuiEditorModule,\n    TuiEditorSocketModule,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\nimport {fileLoader} from './file-loader';\nimport {FileIoService} from './filesio.service';\n\n@Component({\n    standalone: true,\n    selector: 'tui-editor-upload-files-example-1',\n    imports: [\n        TuiEditorSocketModule,\n        TuiLoaderModule,\n        TuiEditorModule,\n        AsyncPipe,\n        ReactiveFormsModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),\n                import('@tinkoff/tui-editor/extensions/link').then(\n                    ({TuiLink}) => TuiLink,\n                ),\n                import('@tinkoff/tui-editor/extensions/jump-anchor').then(\n                    ({TuiJumpAnchor}) => TuiJumpAnchor,\n                ),\n                import('@tinkoff/tui-editor/extensions/file-link').then(\n                    ({TuiFileLink}) => TuiFileLink,\n                ),\n            ],\n        },\n        {\n            provide: TUI_ATTACH_FILES_LOADER,\n            deps: [FileIoService],\n            useFactory: fileLoader,\n        },\n    ],\n})\nexport class TuiEditorUploadFilesExample1 {\n    @ViewChild(TuiEditorComponent)\n    private readonly wysiwyg?: TuiEditorComponent;\n\n    readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Link,\n        TuiEditorTool.Attach,\n    ];\n\n    control = new FormControl('');\n\n    constructor(@Inject(FileIoService) readonly fileIoService: FileIoService) {}\n\n    /**\n     * @note: attach file as a link\n     * you can also implement your own file mapping mechanism\n     * because you have all the necessary data for this\n     */\n    attach(files: TuiEditorAttachedFile[]): void {\n        files.forEach(file => this.wysiwyg?.editor?.setFileLink(file));\n    }\n}\n"}}]);