(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[537],{30537:t=>{t.exports='<tui-data-list>\n    <div #container>\n        <button\n            *ngFor="let item of getFilteredItems(items, mentionSuggestions); let i = index"\n            #button\n            tuiOption\n            (click)="setMention.emit(item)"\n            (keydown.enter)="setMention.emit(item)"\n        >\n            {{ item.name }}\n            <tui-avatar\n                size="s"\n                [src]="item.avatar || (item.name | tuiInitials)"\n            />\n        </button>\n    </div>\n</tui-data-list>\n'}}]);