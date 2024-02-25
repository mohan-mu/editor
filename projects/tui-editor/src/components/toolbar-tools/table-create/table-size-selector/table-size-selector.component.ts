import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {tuiGetViewportWidth} from '@taiga-ui/core';

const MAX_COLS_NUMBER = 15;
const MAX_ROWS_NUMBER = 15;
const MIN_DISTANCE_PX = 70;

@Component({
    standalone: true,
    selector: 'tui-table-size-selector',
    imports: [TuiRepeatTimesModule],
    templateUrl: './table-size-selector.template.html',
    styleUrls: ['./table-size-selector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableSizeSelectorComponent {
    private readonly win = inject(WINDOW);

    @Output()
    readonly selectSize = new EventEmitter<{cols: number; rows: number}>();

    tableSize = {
        rows: 1,
        cols: 1,
    };

    get columnsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.cols + 1), MAX_COLS_NUMBER);
    }

    get rowsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.rows + 1), MAX_ROWS_NUMBER);
    }

    tableSelectHovered(x: number, y: number): boolean {
        return x < this.tableSize.rows && y < this.tableSize.cols;
    }

    updateCurrentSize(rows: number, cols: number, event: MouseEvent): void {
        if (tuiGetViewportWidth(this.win) - event.clientX > MIN_DISTANCE_PX) {
            this.tableSize = {rows, cols};
        }
    }

    select(): void {
        this.selectSize.emit(this.tableSize);
    }
}
