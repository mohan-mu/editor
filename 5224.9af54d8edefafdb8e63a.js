(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[5224],{85224:n=>{n.exports='import {ChangeDetectionStrategy, Component, ViewEncapsulation} from \'@angular/core\';\nimport {FormControl} from \'@angular/forms\';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from \'@tinkoff/tui-editor\';\n\n@Component({\n    selector: \'tui-editor-checkbox-example-1\',\n    templateUrl: \'./index.html\',\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(\'@tinkoff/tui-editor/extensions/starter-kit\').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import(\'@tiptap/extension-text-style\').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorCheckboxExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size, TuiEditorTool.List];\n\n    control = new FormControl(`\n    <p>Which do you prefer?</p>\n    <ul data-type="taskList">\n        <li\n            data-checked="true"\n            data-type="taskItem"\n        >\n            <label>\n                <input\n                    checked="checked"\n                    type="checkbox"\n                />\n                <span></span>\n            </label>\n            <div>\n                <p>Taiga UI</p>\n                <ul data-type="taskList">\n                    <li\n                        data-checked="false"\n                        data-type="taskItem"\n                    >\n                        <label>\n                            <input type="checkbox" />\n                            <span></span>\n                        </label>\n                        <div><p>v3.x</p></div>\n                    </li>\n                    <li\n                        data-checked="true"\n                        data-type="taskItem"\n                    >\n                        <label>\n                            <input\n                                checked="checked"\n                                type="checkbox"\n                            />\n                            <span></span>\n                        </label>\n                        <div><p>v4.x</p></div>\n                    </li>\n                </ul>\n            </div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>Material</p></div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>Prime NG</p></div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>NG-Zorro</p></div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>Bootstrap</p></div>\n        </li>\n    </ul>\n    <p></p>\n    `);\n}\n'}}]);