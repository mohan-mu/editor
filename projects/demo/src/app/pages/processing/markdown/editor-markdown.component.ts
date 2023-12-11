import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
    TuiDocExample,
} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

@Component({
    selector: 'editor-markdown',
    templateUrl: './editor-markdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
        {
            /**
             * @description:
             * prevent parse 'example.md'
             */
            provide: TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
            useValue: (value: string): string[] => [value],
        },
    ],
})
export class ExampleTuiEditorMarkdownComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'example.md': import('./examples/1/example.md?raw'),
    };
}
