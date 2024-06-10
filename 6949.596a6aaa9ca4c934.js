(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6949],{76949:e=>{e.exports="import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TuiActiveZoneDirective, TuiAutoFocusDirective} from '@taiga-ui/cdk';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiTiptapEditorService} from '@taiga-ui/editor';\nimport {TuiInputInlineComponent} from '@taiga-ui/kit';\nimport {TuiHostedDropdownComponent, TuiHostedDropdownModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    selector: 'embed-tool',\n    imports: [\n        FormsModule,\n        TuiAutoFocusDirective,\n        TuiInputInlineComponent,\n        TuiActiveZoneDirective,\n        TuiButtonDirective,\n        TuiHostedDropdownModule,\n    ],\n    templateUrl: './embed-tool.template.html',\n    styleUrls: ['./embed-tool.styles.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiEmbedTool {\n    @ViewChild('dropdown')\n    private readonly dropdown?: TuiHostedDropdownComponent;\n\n    private readonly editor = inject(TuiTiptapEditorService);\n\n    protected placeholder = 'https://my-embed.site.com/etc1235';\n    protected url = '';\n\n    protected embedSource(src: string): void {\n        if (src) {\n            this.editor.setIframe({src});\n\n            this.url = '';\n            this.dropdown?.close();\n        }\n    }\n}\n"}}]);