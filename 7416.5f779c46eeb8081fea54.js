"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[7416],{7416:(L,T,o)=>{o.r(T),o.d(T,{ExampleTuiEditorPasteEmojiToolModule:()=>O});var m=o(12057),a=o(24751),g=o(34016),Z=o(70997),A=o(44427),f=o(46331),r=o(221),h=o(54789),v=o(82847),u=o(23917),c=o(12628),l=o(31414),t=o(74788),E=o(98267),y=o(10215),x=o(98952);function C(n,e){if(1&n){const i=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){const p=t.CHM(i).$implicit;return t.oxw(2).insertSmile(p)}),t.qZA()}2&n&&t.Q6J("innerHTML",e.$implicit,t.oJD)}function j(n,e){if(1&n&&(t.TgZ(0,"div",4),t.YNc(1,C,1,1,"button",5),t.qZA()),2&n){const i=e.$implicit,s=t.oxw();t.Q6J("tuiActiveZoneParent",i),t.xp6(1),t.Q6J("ngForOf",s.smiles)}}let P=(()=>{class n{constructor(i){this.editor=i,this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(i){this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${i}</p>`).insertContent(" ").run()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(l.$3))},n.\u0275cmp=t.Xpm({type:n,selectors:[["smiles-tool"]],decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","icon","tuiIconStarLarge","appearance","icon","automation-id","smiles-tool__button",1,"tool-button",3,"pseudoActive","focusable"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["type","button","class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],["type","button",1,"smile",3,"innerHTML","click"]],template:function(i,s){if(1&i&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t._UZ(2,"button",2),t.YNc(3,j,2,2,"ng-template",null,3,t.W1O),t.qZA()),2&i){const d=t.MAs(1),p=t.MAs(4);t.Q6J("content",p),t.xp6(2),t.Q6J("pseudoActive",d.open)("focusable",d.open)}},directives:[u.o1,x.Ek,c.v0,r.e,m.sg],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"],changeDetection:0}),n})();var U=o(56210);let S=(()=>{class n{constructor(){this.builtInTools=[l._2.Undo],this.control=new a.NI("")}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-editor-paste-emoji-tool-example-1"]],features:[t._Bn([{provide:l.Wf,useValue:[Promise.resolve().then(o.bind(o,66826)).then(({StarterKit:e})=>e),o.e(3451).then(o.bind(o,93451)).then(({EmojiExtension:e})=>e)]}])],decls:7,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(i,s){1&i&&(t.TgZ(0,"tui-editor",0),t._uU(1," Smiles are custom tool. Try it. "),t.ynx(2,1),t._UZ(3,"smiles-tool",2),t.TgZ(4,"span",3),t._UZ(5,"tui-svg",4),t._uU(6," click it "),t.qZA(),t.BQk(),t.qZA()),2&i&&t.Q6J("formControl",s.control)("tools",s.builtInTools)},directives:[y.a,a.JJ,a.oH,P,U.w,h.PN],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),n})(),M=(()=>{class n{constructor(){this.example1={HTML:o.e(991).then(o.t.bind(o,30991,17)),TypeScript:o.e(4900).then(o.t.bind(o,94900,17)),LESS:o.e(9603).then(o.t.bind(o,79603,17)),"smiles-tool/emoji.extension.ts":o.e(3408).then(o.t.bind(o,83408,17)),"smiles-tool/smiles-tool.component.ts":o.e(6118).then(o.t.bind(o,6118,17)),"smiles-tool/smiles-tool.template.html":o.e(8097).then(o.t.bind(o,58097,17)),"smiles-tool/smiles-tool.styles.less":o.e(4886).then(o.t.bind(o,94886,17)),"smiles-tool/smiles-tool.module.ts":o.e(4306).then(o.t.bind(o,74306,17))}}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["editor-paste-emoji-tool"]],features:[t._Bn([{provide:l.Wf,useValue:l.PD}])],decls:31,vars:1,consts:[["header","Editor","package","ADDON-EDITOR","type","components"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icons/bundled","fragment","sanitizer"],["id","custom-tool","heading","Custom emoji tool",3,"content"],[1,"tui-list","tui-space_bottom-6"],[1,"tui-list__item"],["tuiLink","","target","_blank","rel","noreferrer","href","https://tiptap.dev/api/introduction"],["tuiText","<tui-editor>"]],template:function(i,s){1&i&&(t.TgZ(0,"tui-doc-page",0),t.TgZ(1,"p"),t._uU(2," Rich Text Editor based on "),t.TgZ(3,"a",1),t._uU(4," TipTap Editor "),t.qZA(),t._uU(5," for using with Angular forms. For safety reasons use a "),t.TgZ(6,"a",2),t._uU(7," sanitizer "),t.qZA(),t._uU(8," with this component. "),t.qZA(),t.TgZ(9,"tui-doc-example",3),t._uU(10," You can create your own tool: "),t.TgZ(11,"ul",4),t.TgZ(12,"li",5),t._uU(13," Create component with tool button (which can get access to "),t.TgZ(14,"a",6),t._uU(15," original TipTap editor API "),t.qZA(),t._uU(16," via "),t.TgZ(17,"code"),t._uU(18,"TuiTiptapEditorService"),t.qZA(),t._uU(19," from "),t.TgZ(20,"code"),t._uU(21,"@tinkoff/tui-editor"),t.qZA(),t._uU(22," ). "),t.qZA(),t.TgZ(23,"li",5),t._uU(24," Pass the component as content projection (with "),t.TgZ(25,"code"),t._uU(26,'ngProjectAs="tools"'),t.qZA(),t._uU(27," ) to "),t._UZ(28,"code",7),t._uU(29," . "),t.qZA(),t.qZA(),t._UZ(30,"tui-editor-paste-emoji-tool-example-1"),t.qZA(),t.qZA()),2&i&&(t.xp6(9),t.Q6J("content",s.example1))},directives:[E.qo,v.V,g.yS,E.f2,f.v_,S],encapsulation:2,changeDetection:0}),n})(),J=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,c.fN,u.jh,r.A,x.dp]]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,r.A,h.EI,v.j,u.jh,c.fN,Z.fV,a.u5,a.UX,l.T_,J,l.GK,g.Bz.forChild((0,A.Ve)(M)),f.Zp]]}),n})()}}]);