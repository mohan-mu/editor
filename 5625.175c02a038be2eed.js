(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5625],{65625:n=>{n.exports='<div\n    #dropdown\n    tuiDropdownAlign="left"\n    class="t-wrapper"\n    [tuiDropdown]="smileDropdown"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="icon"\n        automation-id="smiles-tool__button"\n        iconStart="@tui.star"\n        size="s"\n        tuiIconButton\n        type="button"\n        class="tool-button"\n    ></button>\n    <ng-template #smileDropdown>\n        <div class="smiles">\n            <button\n                *ngFor="let smile of smiles"\n                type="button"\n                class="smile"\n                [innerHTML]="smile"\n                (click)="insertSmile(smile)"\n            ></button>\n        </div>\n    </ng-template>\n</div>\n'}}]);