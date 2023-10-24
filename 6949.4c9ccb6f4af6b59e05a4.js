(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[6949],{76949:e=>{e.exports="import {ChangeDetectionStrategy, Component, Inject, ViewChild} from '@angular/core';\nimport {TuiHostedDropdownComponent} from '@taiga-ui/core';\n\nimport {TuiTiptapEditorService} from '../../../../../../../../../tui-editor';\n\n@Component({\n    selector: 'embed-tool',\n    templateUrl: './embed-tool.template.html',\n    styleUrls: ['./embed-tool.styles.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiEmbedToolComponent {\n    @ViewChild('dropdown')\n    private readonly dropdown?: TuiHostedDropdownComponent;\n\n    placeholder = 'https://my-embed.site.com/etc1235';\n    url = '';\n\n    constructor(\n        @Inject(TuiTiptapEditorService)\n        private readonly editor: TuiTiptapEditorService,\n    ) {}\n\n    embedSource(src: string): void {\n        if (src) {\n            this.editor.setIframe({src});\n\n            this.url = '';\n            this.dropdown?.close();\n        }\n    }\n}\n"}}]);