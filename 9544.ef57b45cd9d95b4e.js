(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[9544],{79544:t=>{t.exports="import {AsyncPipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';\nimport {TuiActiveZone} from '@taiga-ui/cdk';\nimport {TuiButton, TuiDropdown} from '@taiga-ui/core';\nimport type {AbstractTuiEditor} from '@taiga-ui/editor';\nimport {\n    TUI_EDITOR_OPTIONS,\n    TuiColorSelector,\n    TuiTiptapEditorService,\n} from '@taiga-ui/editor';\nimport {distinctUntilChanged, map, share} from 'rxjs';\n\n@Component({\n    standalone: true,\n    selector: 'custom-color-picker',\n    imports: [TuiActiveZone, TuiDropdown, TuiButton, AsyncPipe, TuiColorSelector],\n    templateUrl: './custom-color-picker.component.html',\n    styleUrls: ['./custom-color-picker.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class CustomColorPicker {\n    private readonly defaultOptions = inject(TUI_EDITOR_OPTIONS);\n\n    protected selectedColor = '';\n    protected readonly editor: AbstractTuiEditor = inject(TuiTiptapEditorService);\n    protected readonly fontColor$ = this.editor.stateChange$.pipe(\n        map(() =>\n            this.editor.getOriginTiptapEditor().isFocused\n                ? this.editor[`get${this.type}` as const]?.() || 'transparent'\n                : 'transparent',\n        ),\n        distinctUntilChanged(),\n        share(),\n    );\n\n    @Input()\n    public colors: ReadonlyMap<string, string> = this.defaultOptions.colors;\n\n    @Input()\n    public icon?: string;\n\n    @Input()\n    public type: 'BackgroundColor' | 'FontColor' = 'FontColor';\n\n    protected onValueChange(color: string): void {\n        this.selectedColor = color;\n    }\n\n    protected setColor(): void {\n        this.editor[`set${this.type}` as const]?.(this.selectedColor);\n    }\n}\n"}}]);