(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[9095],{99095:n=>{n.exports='<ng-template\n    #previewImages\n    let-dialog\n>\n    <tui-preview [rotatable]="true">\n        <img\n            *ngIf="image"\n            alt=""\n            loading="lazy"\n            class="t-image-preview"\n            [src]="image.src"\n        />\n\n        <button\n            icon="tuiIconCloseLarge"\n            title="Close"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            (click)="dialog.complete()"\n        ></button>\n    </tui-preview>\n</ng-template>\n'}}]);