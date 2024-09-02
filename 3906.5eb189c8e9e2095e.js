(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3906],{3906:n=>{n.exports="import {isPlatformServer} from '@angular/common';\nimport {\n    ChangeDetectionStrategy,\n    Component,\n    inject,\n    PLATFORM_ID,\n    ViewChild,\n} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport type {SafeHtml} from '@angular/platform-browser';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {TUI_IS_E2E, tuiPure, tuiTypedFromEvent} from '@taiga-ui/cdk';\nimport type {TuiEditorAttachedFile} from '@taiga-ui/editor';\nimport {\n    TUI_ATTACH_FILES_LOADER,\n    TUI_ATTACH_FILES_OPTIONS,\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\nimport type {Observable} from 'rxjs';\nimport {map, of} from 'rxjs';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditor],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),\n                import('@taiga-ui/editor').then(({TuiLink}) => TuiLink),\n                import('@taiga-ui/editor').then(({TuiJumpAnchor}) => TuiJumpAnchor),\n                import('@taiga-ui/editor').then(({TuiFileLink}) => TuiFileLink),\n                import('@taiga-ui/editor').then(({TuiVideo}) => TuiVideo),\n                import('@taiga-ui/editor').then(({TuiAudio}) => TuiAudio),\n                import('@taiga-ui/editor').then(({TuiSource}) => TuiSource),\n            ],\n        },\n        {\n            provide: TUI_ATTACH_FILES_LOADER,\n            useFactory:\n                () =>\n                ([file]: File[]): Observable<\n                    Array<TuiEditorAttachedFile<{type: string}>>\n                > => {\n                    if (!file) {\n                        return of([]);\n                    }\n\n                    const fileReader = new FileReader();\n\n                    // For example, instead of uploading to a file server,\n                    // we convert the result immediately into content to base64\n                    fileReader.readAsDataURL(file);\n\n                    return tuiTypedFromEvent(fileReader, 'load').pipe(\n                        map(() => [\n                            {\n                                name: file.name,\n\n                                /* base64 or link to the file on your server */\n                                link: String(fileReader.result),\n\n                                attrs: {\n                                    type: file.type,\n                                },\n                            },\n                        ]),\n                    );\n                },\n        },\n        {\n            provide: TUI_ATTACH_FILES_OPTIONS,\n            useValue: {\n                accept: 'video/mp4,video/x-m4v,video/*,audio/x-m4a,audio/*',\n                multiple: false,\n            },\n        },\n    ],\n    host: {\n        class: 'html5-editor-example',\n        '[class._e2e]': 'isE2E',\n    },\n})\nexport default class Example {\n    @ViewChild(TuiEditor)\n    private readonly wysiwyg?: TuiEditor;\n\n    private readonly sanitizer = inject(DomSanitizer);\n    private readonly isNotStatic =\n        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));\n\n    protected readonly isE2E = inject(TUI_IS_E2E);\n\n    protected readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Link,\n        TuiEditorTool.Attach,\n    ];\n\n    protected readonly control = new FormControl(\n        this.isNotStatic\n            ? ''\n            : `\n            <p>Here is video: </p>\n\n            <video controls=\"controls\" width=\"100%\" preload=\"auto\" controlsList=\"nodownload\">\n                <source src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n            </video>\n\n            <p>Here is audio: </p>\n            <audio controls style=\"width: 100%\" preload=\"auto\" controlsList=\"nodownload\">\n              <source src=\"https://www.w3docs.com/build/audios/audio.mp3\" type=\"audio/mp3\">\n            </audio>\n\n            <p></p>\n            `,\n        Validators.required,\n    );\n\n    @tuiPure\n    protected safe(content: string | null): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');\n    }\n\n    protected attach([file]: Array<TuiEditorAttachedFile<{type: string}>>): void {\n        const tag = `${file?.attrs?.type ?? ''}`.split('/')[0];\n\n        this.wysiwyg?.editor\n            ?.getOriginTiptapEditor()\n            ?.commands.insertContent(\n                `<${tag} controls width=\"100%\"><source src=\"${file?.link}\" type=\"${file?.attrs?.type}\"></${tag}><p><a href=\"${file?.link}\" download=\"${file?.name}\">Download ${file?.name}</a></p>`,\n            );\n    }\n}\n"}}]);