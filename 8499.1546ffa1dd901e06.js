(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8499],{88499:t=>{t.exports="import {HttpClient, HttpClientModule} from '@angular/common/http';\nimport {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TUI_IS_STACKBLITZ, TuiDestroyService} from '@taiga-ui/cdk';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TUI_IMAGE_LOADER,\n    TuiEditorComponent,\n    TuiEditorSocketComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\nimport {switchMap, takeUntil} from 'rxjs';\n\n@Component({\n    standalone: true,\n    selector: 'tui-editor-resizable-editor-example-1',\n    imports: [\n        ReactiveFormsModule,\n        HttpClientModule,\n        TuiEditorSocketComponent,\n        TuiEditorComponent,\n    ],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tinkoff/tui-editor').then(({tuiCreateImageEditorExtension}) =>\n                    tuiCreateImageEditorExtension({injector}),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorResizableEditorExample1 {\n    private readonly imageLoader = inject(TUI_IMAGE_LOADER);\n    private readonly isStackblitz = inject(TUI_IS_STACKBLITZ);\n    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';\n\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    base64Image$ = inject(HttpClient)\n        .get(`${this.relativePath}assets/images/lumberjack.png`, {responseType: 'blob'})\n        .pipe(switchMap(file => this.imageLoader(file)));\n\n    control = new FormControl('');\n\n    constructor() {\n        this.base64Image$\n            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))\n            .subscribe(src => {\n                this.control.patchValue(\n                    `\n                    <img data-type=\"image-editor\" src=\"${src}\" width=\"300\">\n                    <p>Try to drag right border of image!</p>\n                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.\n                `,\n                );\n            });\n    }\n}\n"}}]);