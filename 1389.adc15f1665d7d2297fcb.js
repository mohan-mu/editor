(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[1389],{51389:n=>{n.exports='<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <button\n            tuiItem\n            tuiIconButton\n            type="button"\n            size="s"\n            icon="tuiIconDropletLarge"\n            appearance="icon"\n            class="t-tool t-tool_margin"\n            (click)="toggleHighlight()"\n        ></button>\n    </ng-container>\n</tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]="control.value || \'\'"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n'}}]);