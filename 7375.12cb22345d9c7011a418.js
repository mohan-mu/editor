(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[7375],{17375:(t,e,o)=>{o.r(e),o.d(e,{ExampleTuiEditorPasteImageToolModule:()=>q});var n=o(12057),i=o(24751),r=o(34016),l=o(70997),s=o(44427),a=o(46331),u=o(221),c=o(54789),p=o(82847),g=o(23917),d=o(12628),m=o(31414),h=o(74788),f=o(98267),v=o(62463);const w={addProseMirrorPlugins:()=>[new v.Sy({props:{handleDOMEvents:{paste:(t,e)=>{var o,n;const i=null!==(n=null===(o=e.clipboardData)||void 0===o?void 0:o.getData("text/plain"))&&void 0!==n?n:"";if(/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(i)){const o=t.state.schema.nodes.imageEditor.create({src:i}),n=t.state.tr.replaceSelectionWith(o);setTimeout((()=>t.dispatch(n))),e.preventDefault()}}}}})]};var Z=o(10215),_=o(98952),b=o(92815);const y=["dropdown"];function A(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"div",4),h.TgZ(1,"label",5),h.TgZ(2,"div",6),h._uU(3,"Image URL"),h.qZA(),h.TgZ(4,"div",7),h.TgZ(5,"tui-input-inline",8),h.NdJ("ngModelChange",(function(e){return h.CHM(t),h.oxw().url=e}))("keydown.enter",(function(){h.CHM(t);const e=h.oxw();return e.insertImage(e.url)})),h._uU(6),h.qZA(),h.qZA(),h.qZA(),h.qZA()}if(2&t){const t=e.$implicit,o=h.oxw();h.Q6J("tuiActiveZoneParent",t),h.xp6(5),h.ekj("t-input_filled",o.url),h.Q6J("ngModel",o.url),h.xp6(1),h.hij(" ",o.placeholder," ")}}let x=(()=>{class t{constructor(t){this.editor=t,this.youtubeLogo='<?xml version="1.0" ?><svg width="24px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="385.829,128 385.829,256 347.429,291.072 307.2,256 272.457,241.371 306.59,165.51 " style="fill:#D32E2A;"/><polygon points="384,385.219 256,385.219 255.39,383.391 226.133,356.291 255.39,308.041 270.629,271.848   355.962,302.043 " style="fill:#3A5BBC;"/><polygon points="256.61,128.61 288.305,164.901 256.61,203.959 241.371,240.152 161.524,200.253 128,126.781   256,126.781 " style="fill:#FBBB00;"/><polygon points="239.543,270.629 204.495,346.843 126.171,384 126.171,256 163.962,232.558 204.8,256 " style="fill:#28B446;"/><polygon points="512,256 384,385.219 270.629,271.848 307.2,256 385.829,256 " style="fill:#518EF8;"/><polygon points="255.39,383.391 255.39,512 126.171,384 239.543,270.629 255.39,307.2 255.39,308.041 " style="fill:#91C646;"/><polygon points="241.371,240.152 204.8,256 126.171,256 0,256 128,126.781 " style="fill:#FFD837;"/><polygon points="385.829,128 272.457,241.371 256.61,204.8 256.61,203.959 256.61,128.61 256.61,0 " style="fill:#F14336;"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',this.placeholder="https://image.com/etc.png",this.url=""}insertImage(t){var e;t&&(this.editor.setImage(t),null===(e=this.dropdown)||void 0===e||e.close())}}return t.ɵfac=function(e){return new(e||t)(h.Y36(m.$3))},t.ɵcmp=h.Xpm({type:t,selectors:[["image-tool"]],viewQuery:function(t,e){if(1&t&&h.Gf(y,5),2&t){let t;h.iGM(t=h.CRH())&&(e.dropdown=t.first)}},decls:5,vars:4,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","appearance","flat","automation-id","youtube-tool__button",1,"tool-button",3,"icon","pseudoActive","focusable"],["youtubeDropdown",""],[1,"youtube-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,e){if(1&t&&(h.TgZ(0,"tui-hosted-dropdown",0,1),h._UZ(2,"button",2),h.YNc(3,A,7,5,"ng-template",null,3,h.W1O),h.qZA()),2&t){const t=h.MAs(1),o=h.MAs(4);h.Q6J("content",o),h.xp6(2),h.Q6J("icon",e.youtubeLogo)("pseudoActive",t.open)("focusable",t.open)}},directives:[g.o1,_.Ek,d.v0,u.e,b.l,i.JJ,i.On],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.youtube-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-url[_ngcontent-%COMP%]{max-width:12.5rem;min-width:12.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"],changeDetection:0}),t})();var T=o(56210);let U=(()=>{class t{constructor(){this.builtInTools=[m._2.Undo],this.control=new i.NI("")}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=h.Xpm({type:t,selectors:[["tui-editor-paste-image-tool-example-1"]],features:[h._Bn([{provide:m.Wf,deps:[h.zs3],useFactory:t=>[Promise.resolve().then(o.bind(o,66826)).then((({StarterKit:t})=>t)),Promise.resolve().then(o.bind(o,45267)).then((({tuiCreateImageEditorExtension:e})=>e({injector:t}).extend(w)))]}])],decls:6,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(t,e){1&t&&(h.TgZ(0,"tui-editor",0),h.ynx(1,1),h._UZ(2,"image-tool",2),h.TgZ(3,"span",3),h._UZ(4,"tui-svg",4),h._uU(5," click it "),h.qZA(),h.BQk(),h.qZA()),2&t&&h.Q6J("formControl",e.control)("tools",e.builtInTools)},directives:[Z.a,i.JJ,i.oH,x,T.w,c.PN],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),t})(),C=(()=>{class t{constructor(){this.example1={HTML:o.e(7801).then(o.t.bind(o,87801,17)),TypeScript:o.e(2683).then(o.t.bind(o,72683,17)),LESS:o.e(6731).then(o.t.bind(o,46731,17)),"image-tool/paste.extension.ts":o.e(1142).then(o.t.bind(o,81142,17)),"image-tool/image-tool.component.ts":o.e(5496).then(o.t.bind(o,55496,17)),"image-tool/image-tool.template.html":o.e(2852).then(o.t.bind(o,62852,17)),"image-tool/image-tool.styles.less":o.e(1313).then(o.t.bind(o,71313,17)),"image-tool/image-tool.module.ts":o.e(4116).then(o.t.bind(o,34116,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=h.Xpm({type:t,selectors:[["editor-emoji-tool"]],features:[h._Bn([{provide:m.Wf,useValue:m.PD}])],decls:31,vars:1,consts:[["header","Editor","package","ADDON-EDITOR","type","components"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icons/bundled","fragment","sanitizer"],["id","custom-image-tool","heading","Custom image tool",3,"content"],[1,"tui-list","tui-space_bottom-6"],[1,"tui-list__item"],["tuiLink","","target","_blank","rel","noreferrer","href","https://tiptap.dev/api/introduction"],["tuiText","<tui-editor>"]],template:function(t,e){1&t&&(h.TgZ(0,"tui-doc-page",0),h.TgZ(1,"p"),h._uU(2," Rich Text Editor based on "),h.TgZ(3,"a",1),h._uU(4," TipTap Editor "),h.qZA(),h._uU(5," for using with Angular forms. For safety reasons use a "),h.TgZ(6,"a",2),h._uU(7," sanitizer "),h.qZA(),h._uU(8," with this component. "),h.qZA(),h.TgZ(9,"tui-doc-example",3),h._uU(10," You can create your own tool: "),h.TgZ(11,"ul",4),h.TgZ(12,"li",5),h._uU(13," Create component with tool button (which can get access to "),h.TgZ(14,"a",6),h._uU(15," original TipTap editor API "),h.qZA(),h._uU(16," via "),h.TgZ(17,"code"),h._uU(18,"TuiTiptapEditorService"),h.qZA(),h._uU(19," from "),h.TgZ(20,"code"),h._uU(21,"@tinkoff/tui-editor"),h.qZA(),h._uU(22," ). "),h.qZA(),h.TgZ(23,"li",5),h._uU(24," Pass the component as content projection (with "),h.TgZ(25,"code"),h._uU(26,'ngProjectAs="tools"'),h.qZA(),h._uU(27," ) to "),h._UZ(28,"code",7),h._uU(29," . "),h.qZA(),h.qZA(),h._UZ(30,"tui-editor-paste-image-tool-example-1"),h.qZA(),h.qZA()),2&t&&(h.xp6(9),h.Q6J("content",e.example1))},directives:[f.qo,p.V,r.yS,f.f2,a.v_,U],encapsulation:2,changeDetection:0}),t})(),k=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=h.oAB({type:t}),t.ɵinj=h.cJS({imports:[[i.u5,n.ez,d.fN,b.z,g.jh,u.A,_.dp]]}),t})(),q=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=h.oAB({type:t}),t.ɵinj=h.cJS({imports:[[n.ez,u.A,c.EI,p.j,g.jh,d.fN,l.fV,i.u5,i.UX,m.T_,k,m.GK,r.Bz.forChild((0,s.Ve)(C)),a.Zp]]}),t})()}}]);