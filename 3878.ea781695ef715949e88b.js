(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[3878],{63878:n=>{n.exports='import {ChangeDetectionStrategy, Component, Inject, Injector} from \'@angular/core\';\nimport {FormControl, Validators} from \'@angular/forms\';\nimport {DomSanitizer, SafeHtml} from \'@angular/platform-browser\';\nimport {TUI_IS_CYPRESS, tuiPure} from \'@taiga-ui/cdk\';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from \'@tinkoff/tui-editor\';\n\n@Component({\n    selector: \'tui-editor-embed-iframe-example-1\',\n    templateUrl: \'./index.html\',\n    styleUrls: [\'./index.less\'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import(\'@tinkoff/tui-editor/extensions/starter-kit\').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import(\'@tinkoff/tui-editor/extensions/iframe-editor\').then(\n                    ({createIframeEditorExtension}) =>\n                        createIframeEditorExtension(injector),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorEmbedIframeExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n\n    readonly control = new FormControl(\n        `\n        <p>Here is an online IDE:</p>\n        <iframe\n         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${\n             this.isCypress ? \'\' : \'%2Cresult\'\n         }&editable=true"\n         height="375"\n         width="100%"\n         scrolling="no"\n         frameborder="no"\n         loading="lazy"\n         allowtransparency="true"\n         data-type="iframe-editor"\n         allowfullscreen="true">\n        </iframe>\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"\n            height="42"\n            width="100%"\n            data-type="iframe-editor">\n        </iframe>\n        <p></p>\n    `,\n        Validators.required,\n    );\n\n    constructor(\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n        @Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean,\n    ) {}\n\n    @tuiPure\n    safe(content: string): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content);\n    }\n}\n'}}]);