"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[2927],{22927:n=>{n.exports='<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <embed-tool tuiItem></embed-tool>\n\n        <span class="hint">\n            <tui-svg src="tuiIconArrowLeft"></tui-svg>\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n\n<h4>HTML:</h4>\n<div [innerHTML]="safe(control.value)"></div>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n'}}]);