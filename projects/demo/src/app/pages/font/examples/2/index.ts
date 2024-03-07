import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    tuiEditorOptionsProvider,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'tui-editor-font-example-2',
    imports: [ReactiveFormsModule, TuiEditorSocketComponent, TuiEditorComponent],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiEditorOptionsProvider({
            fontOptions: () =>
                [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map(size => ({
                    px: size,
                    name: `${size}`,
                    ngStyle: {'font-size': '1rem'},
                })),
        }),
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tinkoff/tui-editor').then(({TuiFontSize}) => TuiFontSize),
            ],
        },
    ],
})
export class TuiEditorFontExample2 {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];

    protected control = new FormControl(`
        <p><span style="font-size: 96px">96</span></p>
        <p><span style="font-size: 72px">72</span></p>
        <p><span style="font-size: 48px">48</span></p>
        <p><span style="font-size: 36px">36</span></p>
        <p><span style="font-size: 30px">30</span></p>
        <p><span style="font-size: 24px">24</span></p>
        <p><span style="font-size: 18px">18</span></p>
        <p><span style="font-size: 14px">14</span></p>
        <p><span style="font-size: 12px">12</span></p>
        <p><span style="font-size: 11px">11</span></p>
        <p><span style="font-size: 10px">10</span></p>
        <p><span style="font-size: 9px">9</span></p>
        <p><span style="font-size: 8px">8</span></p>
    `);
}
