import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiEditorMarkTextExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-mark-text',
    imports: [
        TuiEditorMarkTextExample1,
        TuiDocExampleModule,
        RouterLink,
        TuiLinkModule,
        TuiDocPageModule,
    ],
    templateUrl: './editor-mark-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleTuiEditorMarkTextComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
