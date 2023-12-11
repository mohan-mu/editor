(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[585],{30585:n=>{n.exports="import {DOCUMENT} from '@angular/common';\nimport {\n    ChangeDetectionStrategy,\n    Component,\n    Inject,\n    Injector,\n    ViewChild,\n} from '@angular/core';\nimport {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';\nimport {TUI_IS_STACKBLITZ, TuiDestroyService, TuiValidationError} from '@taiga-ui/cdk';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_MAX_IMAGE_WIDTH,\n    TUI_EDITOR_MIN_IMAGE_WIDTH,\n    TUI_IMAGE_LOADER,\n    TuiEditorComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\nimport {imageLoader} from './image-loader';\nimport {ImgbbService} from './imgbb.service';\n\n@Component({\n    selector: 'tui-editor-upload-images-example-1',\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tinkoff/tui-editor/extensions/image-editor').then(\n                    ({createImageEditorExtension}) =>\n                        createImageEditorExtension(injector),\n                ),\n                import('@tiptap/extension-image').then(({default: Image}) =>\n                    Image.configure({inline: true, allowBase64: true}),\n                ),\n            ],\n        },\n        {\n            provide: TUI_EDITOR_MIN_IMAGE_WIDTH,\n            useValue: 150,\n        },\n        {\n            provide: TUI_EDITOR_MAX_IMAGE_WIDTH,\n            useValue: 400,\n        },\n        {\n            provide: TUI_IMAGE_LOADER,\n            useFactory: imageLoader,\n            deps: [ImgbbService],\n        },\n    ],\n})\nexport class TuiEditorUploadingImagesExample1 {\n    @ViewChild(TuiEditorComponent, {static: true})\n    private readonly editor?: TuiEditorComponent;\n\n    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';\n\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    control = new FormControl('');\n\n    constructor(\n        @Inject(DOCUMENT) readonly doc: Document,\n        @Inject(ImgbbService) readonly imgbbService: ImgbbService,\n        @Inject(TUI_IS_STACKBLITZ) private readonly isStackblitz: boolean,\n    ) {\n        this.control.patchValue(\n            `\n                <img data-type=\"image-editor\" src=\"${this.relativePath}assets/images/lumberjack.png\" width=\"300\">\n                <p>Try to drag right border of image!</p>\n                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>\n                <img src=\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==\" />`,\n        );\n    }\n\n    readonly validator = ({value}: AbstractControl): ValidationErrors | null =>\n        this.editor?.focused ||\n        this.imgbbService.isLoading ||\n        !this.doc.hasFocus() || // possible that file dialog is open\n        value.length\n            ? null\n            : {\n                  empty: new TuiValidationError('ERROR: content must not be empty'),\n              };\n}\n"}}]);