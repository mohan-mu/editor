(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3601],{13601:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var n=o(20755),i=o(43226),a=o(89768),u=o(99503),r=o(38875),s=o(53365),d=o(41071),l=o(6823),c=o(88074),p=o(22185),m=o(75106);function g(e,t){1&e&&(n._uU(0," Disabled state (use "),n.TgZ(1,"code"),n._uU(2,"formControl.disable()"),n.qZA(),n._uU(3," ) "))}function h(e,t){1&e&&n._uU(0," Example pass HTML code ")}function A(e,t){1&e&&n._uU(0," Example text shown on empty focused input ")}function y(e,t){1&e&&n._uU(0," Allowed edit tools ")}function Z(e,t){1&e&&n._uU(0,' Value of CSS-property "min-height" ')}function T(e,t){1&e&&n._uU(0,' Value of CSS-property "max-height" ')}function _(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"tui-doc-demo",3)(1,"tui-editor",4),n._uU(2," Start typing "),n.qZA(),n.TgZ(3,"h4"),n._uU(4,"HTML:"),n.qZA(),n._UZ(5,"tui-editor-socket",5),n.TgZ(6,"h4"),n._uU(7,"Text:"),n.qZA(),n.TgZ(8,"p"),n._uU(9),n.qZA()(),n.TgZ(10,"tui-doc-documentation"),n.YNc(11,g,4,0,"ng-template",6),n.NdJ("documentationPropertyValueChange",(function(t){n.CHM(e);const o=n.oxw();return n.KtG(o.disabled=t)})),n.YNc(12,h,1,0,"ng-template",7),n.NdJ("documentationPropertyValueChange",(function(t){n.CHM(e);const o=n.oxw();return n.KtG(o.control.setValue(t))})),n.YNc(13,A,1,0,"ng-template",8),n.NdJ("documentationPropertyValueChange",(function(t){n.CHM(e);const o=n.oxw();return n.KtG(o.exampleText=t)})),n.YNc(14,y,1,0,"ng-template",9),n.NdJ("documentationPropertyValueChange",(function(t){n.CHM(e);const o=n.oxw();return n.KtG(o.tools=t)})),n.qZA(),n.TgZ(15,"tui-doc-documentation",10),n.YNc(16,Z,1,0,"ng-template",11),n.NdJ("documentationPropertyValueChange",(function(t){n.CHM(e);const o=n.oxw();return n.KtG(o.minHeight=t)})),n.YNc(17,T,1,0,"ng-template",12),n.NdJ("documentationPropertyValueChange",(function(t){n.CHM(e);const o=n.oxw();return n.KtG(o.maxHeight=t)})),n.qZA(),n.TgZ(18,"tui-doc-documentation",13)(19,"p"),n._uU(20,"Install core-based packages:"),n.qZA(),n._UZ(21,"tui-doc-code",14),n.TgZ(22,"p"),n._uU(23,"Install editor:"),n.qZA(),n._UZ(24,"tui-doc-code",15),n.TgZ(25,"p"),n._uU(26," Don't forget that Taiga UI is fully-tree-shakable. "),n.TgZ(27,"b"),n._uU(28,"You can import even just one entity from our library"),n.qZA(),n._uU(29," and be sure that there is no redundant code in your bundle. Bundlphobia badge shows size of the whole library. "),n.qZA(),n.TgZ(30,"ol",16)(31,"li")(32,"p"),n._uU(33,"Add to the global styles:"),n.qZA(),n._UZ(34,"tui-doc-code",17),n.qZA(),n.TgZ(35,"li")(36,"p"),n._uU(37,"Icons are not included in the bundle:"),n.qZA(),n._UZ(38,"tui-doc-code",18),n.qZA(),n.TgZ(39,"li")(40,"p"),n._uU(41," Import an Angular module for forms and "),n.TgZ(42,"code"),n._uU(43,"TuiEditorModule"),n.qZA(),n._uU(44," in the same module where you want to use our component: "),n.qZA(),n._UZ(45,"tui-doc-code",19),n.qZA(),n.TgZ(46,"li")(47,"p"),n._uU(48,"Add to the template:"),n.qZA(),n._UZ(49,"tui-doc-code",20),n.qZA(),n.TgZ(50,"li"),n._UZ(51,"tui-doc-code",21),n.qZA()()()}if(2&e){const e=n.oxw();n.Q6J("sticky",!1),n.xp6(1),n.Udp("max-height",e.maxHeight,"px")("min-height",e.minHeight,"px"),n.Q6J("exampleText",e.exampleText)("focusable",e.focusable)("formControl",e.control)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tools",e.tools)("tuiAutoFocus",!e.isE2E),n.xp6(4),n.Q6J("content",e.control.value||""),n.xp6(4),n.Oqu(e.control.value),n.xp6(2),n.Q6J("documentationPropertyValue",e.disabled),n.xp6(1),n.Q6J("documentationPropertyValue",e.control.value),n.xp6(1),n.Q6J("documentationPropertyValue",e.exampleText),n.xp6(1),n.Q6J("documentationPropertyValues",e.toolsVariants)("documentationPropertyValue",e.tools),n.xp6(2),n.Q6J("documentationPropertyValue",e.minHeight),n.xp6(1),n.Q6J("documentationPropertyValue",e.maxHeight),n.xp6(17),n.Q6J("code",e.exampleStyles),n.xp6(4),n.Q6J("code",e.exampleIcons),n.xp6(7),n.Q6J("code",e.exampleModule),n.xp6(4),n.Q6J("code",e.exampleHtml),n.xp6(2),n.Q6J("code",e.exampleComponent)}}function U(e,t){if(1&e&&(n.TgZ(0,"h2"),n._uU(1,"TUI_EDITOR_OPTIONS"),n.qZA(),n._uU(2," You can configure some editor's params via DI-token "),n.TgZ(3,"code"),n._uU(4,"TUI_EDITOR_OPTIONS"),n.qZA(),n._uU(5," . "),n.TgZ(6,"p")(7,"strong"),n._uU(8,"Usage:"),n.qZA()(),n._UZ(9,"tui-doc-code",22),n.TgZ(10,"p")(11,"strong"),n._uU(12,"Description of the available configurations:"),n.qZA()(),n.TgZ(13,"dl")(14,"dt")(15,"code"),n._uU(16,"colors"),n.qZA()(),n.TgZ(17,"dd",23),n._uU(18," map of colors in toolbar's dropdowns with color-selection. "),n.TgZ(19,"p"),n._uU(20," It accepts "),n._UZ(21,"code",24),n._uU(22," : the "),n.TgZ(23,"strong"),n._uU(24,"key"),n.qZA(),n._uU(25," is the name of the color (used only for hint and accessibility), the "),n.TgZ(26,"strong"),n._uU(27,"value"),n.qZA(),n._uU(28," – HTML color code. "),n.qZA()(),n.TgZ(29,"dt")(30,"code"),n._uU(31,"blankColor"),n.qZA()(),n.TgZ(32,"dd",23),n._uU(33," Null color. It is used in situations when there is no color selected. "),n.TgZ(34,"p"),n._uU(35," it accepts "),n.TgZ(36,"code"),n._uU(37,"string"),n.qZA(),n._uU(38," (HTML color code). "),n.qZA()(),n.TgZ(39,"dt")(40,"code"),n._uU(41,"fontOptions"),n.qZA()(),n.TgZ(42,"dd",23),n._uU(43,"You can customize your own list of font sizes in editor."),n.qZA(),n.TgZ(44,"dt")(45,"code"),n._uU(46,"translate"),n.qZA()(),n.TgZ(47,"dd",23),n._uU(48," Although not all browsers recognize this attribute, it is respected by automatic translation systems such as Google Translate, and may also be respected by tools used by human translators. As such it's important that web authors use this attribute to mark content that should not be translated.. "),n.qZA(),n.TgZ(49,"dt")(50,"code"),n._uU(51,"icons"),n.qZA()(),n.TgZ(52,"dd",23),n._uU(53," You can redefine "),n.TgZ(54,"a",25),n._uU(55," icons "),n.qZA(),n._uU(56," by names. "),n.TgZ(57,"a",26),n._uU(58," More -> "),n.qZA()(),n.TgZ(59,"dt")(60,"code"),n._uU(61,"spellcheck"),n.qZA()(),n.TgZ(62,"dd",23),n._uU(63,"Defines whether the editor may be checked for spelling errors."),n.qZA(),n.TgZ(64,"dt")(65,"code"),n._uU(66,"enableDefaultStyles"),n.qZA()(),n.TgZ(67,"dd",23),n._uU(68," By default, editor styles will be included without encapsulation, if you want your own styles, you can disable them. "),n.qZA()()),2&e){const e=n.oxw();n.xp6(9),n.Q6J("code",e.exampleEditorOptionsToken)}}const x=(()=>{var e;class t{constructor(){this.exampleModule=o.e(6510).then(o.t.bind(o,46510,17)),this.exampleHtml=o.e(7802).then(o.t.bind(o,97802,17)),this.exampleComponent=o.e(8681).then(o.t.bind(o,98681,17)),this.exampleEditorOptionsToken=o.e(5445).then(o.t.bind(o,75445,17)),this.exampleStyles=o.e(3705).then(o.t.bind(o,23705,17)),this.exampleIcons=o.e(8817).then(o.t.bind(o,78817,17)),this.isE2E=(0,n.f3M)(u.oDT),this.control=new i.NI('\n        <h2>What is Lorem Ipsum?</h2>\n        <p>\n            <a\n                href="https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp"\n            >\n                Lorem Ipsum\n            </a>\n            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy\n            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </p>\n    '),this.exampleText="",this.minHeight=null,this.maxHeight=null,this.readOnly=!1,this.focusable=!0,this.pseudoInvalid=null,this.pseudoFocused=null,this.pseudoHovered=null,this.toolsVariants=[r.TUI_EDITOR_DEFAULT_TOOLS,[r.TuiEditorTool.Bold,r.TuiEditorTool.Italic,r.TuiEditorTool.Strikethrough,r.TuiEditorTool.HR]],this.tools=this.toolsVariants[0]}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=n.Xpm({type:e,selectors:[["editor-starter-page"]],standalone:!0,features:[n._Bn([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:r.TUI_EDITOR_DEFAULT_EXTENSIONS}]),n.jDz],decls:3,vars:0,consts:[["header","Editor","type","components"],["pageTab","API"],["pageTab","Options"],[3,"sticky"],[3,"exampleText","focusable","formControl","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tools","tuiAutoFocus"],[1,"tui-example",3,"content"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","ngModel","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","exampleText","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tools","documentationPropertyType","ReadonlyArray<TuiEditorTool>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.minHeight.px","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","style.maxHeight.px","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","How to install"],["code","npm i @taiga-ui/{cdk,core,kit,icons}"],["code","npm i @tinkoff/tui-editor"],[1,"b-demo-steps"],["filename","styles.less",3,"code"],["filename","angular.json",3,"code"],["filename","app.module.ts",3,"code"],["filename","app.component.html",3,"code"],["filename","app.component.ts",3,"code"],[3,"code"],[1,"tui-space_bottom-5"],["tuiText","ReadonlyMap<string, string>"],["href","https://github.com/taiga-family/tui-editor/blob/main/projects/tui-editor/tokens/editor-options.ts#L74","rel","noreferrer","target","_blank","tuiLink",""],["href","https://taiga-ui.dev/icons/mapping","rel","noreferrer","target","_blank","tuiLink",""]],template:function(e,t){1&e&&(n.TgZ(0,"tui-doc-page",0),n.YNc(1,_,52,28,"ng-template",1),n.YNc(2,U,69,1,"ng-template",2),n.qZA())},dependencies:[a.JF,s.c,a.Lq,d.q,l.n,a.mG,c.F,i.UX,i.JJ,i.oH,u.kaH,a.Lx,p.z,m.B,r.TuiEditorSocketComponent,r.TuiEditorComponent],changeDetection:0}),t})()}}]);