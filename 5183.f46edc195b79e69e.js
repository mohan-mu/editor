(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5183],{5183:o=>{o.exports='<tui-editor\n    *ngIf="control"\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    Placeholder\n</tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket\n    class="socket"\n    [content]="control.value || \'\'"\n/>\n\n<h4>Markdown:</h4>\n<pre class="markdown">{{ toMarkdown(control.value) }}</pre>\n'}}]);