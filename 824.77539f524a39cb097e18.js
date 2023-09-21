(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[824],{20824:(o,t,e)=>{e.r(t),e.d(t,{ExampleTuiEditorColorPickerToolModule:()=>M});var n=e(12057),i=e(24751),r=e(34016),c=e(18424),s=e(67274),l=e(57080),a=e(74788),u=e(15997),p=e(73460),d=e(42328),h=e(19586),m=e(88002),g=e(87519),f=e(9945),k=e(98778),b=e(16331),C=e(18289),v=e(26383),w=e(55788);function _(o,t){if(1&o){const o=a.EpF();a.TgZ(0,"tui-color-selector",5),a.NdJ("colorChange",(function(t){return a.CHM(o),a.oxw().onValueChange(t)})),a.qZA(),a.TgZ(1,"button",6),a.NdJ("click",(function(){return a.CHM(o),a.oxw().setColor()})),a._uU(2," Use color "),a.qZA()}if(2&o){const o=t.$implicit,e=a.oxw();a.Q6J("color",e.selectedColor)("colors",e.colors)("tuiActiveZoneParent",o)}}let Z=(()=>{class o{constructor(o,t){this.defaultOptions=o,this.editor=t,this.colors=this.defaultOptions.colors,this.selectedColor="",this.fontColor$=this.editor.stateChange$.pipe((0,m.U)((()=>{var o,t;return this.editor.getOriginTiptapEditor().isFocused&&(null===(t=(o=this.editor)[`get${this.type}`])||void 0===t?void 0:t.call(o))||"transparent"})),(0,g.x)(),(0,f.B)())}onValueChange(o){this.selectedColor=o}setColor(){var o,t;null===(t=(o=this.editor)[`set${this.type}`])||void 0===t||t.call(o,this.selectedColor)}}return o.ɵfac=function(t){return new(t||o)(a.Y36(l.mJ),a.Y36(l.$3))},o.ɵcmp=a.Xpm({type:o,selectors:[["custom-color-picker"]],inputs:{colors:"colors",icon:"icon",type:"type"},decls:7,vars:8,consts:[[3,"content","tuiDropdownMaxHeight"],["color",""],["appearance","icon","automation-id","toolbar__color-button","size","s","tuiIconButton","","type","button",3,"focusable","icon"],[1,"t-plate"],["colorDropdown",""],[3,"color","colors","tuiActiveZoneParent","colorChange"],["appearance","flat","size","m","tuiButton","","type","button",1,"t-color-save",3,"click"]],template:function(o,t){if(1&o&&(a.TgZ(0,"tui-hosted-dropdown",0,1),a._UZ(2,"button",2),a.TgZ(3,"div",3),a.ALo(4,"async"),a.qZA(),a.YNc(5,_,3,3,"ng-template",null,4,a.W1O),a.qZA()),2&o){const o=a.MAs(1),e=a.MAs(6);a.Q6J("content",e)("tuiDropdownMaxHeight",999),a.xp6(2),a.Q6J("focusable",o.open)("icon",t.icon),a.xp6(1),a.Udp("background",a.lcZ(4,6,t.fontColor$))}},directives:[k.o,b.Ek,C.v,v.s,w.e],pipes:[n.Ov],styles:[".t-dropdown[_ngcontent-%COMP%]{padding:.75rem}.t-option[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-option[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.t-option_margin[_ngcontent-%COMP%]{margin:0 .25rem}.t-plate[_ngcontent-%COMP%]{position:absolute;top:1.375rem;left:.25rem;width:1.5rem;height:.25rem;pointer-events:none}.t-plate_paint[_ngcontent-%COMP%]{left:.375rem;width:1.25rem}.t-color-picker[_ngcontent-%COMP%]{box-sizing:border-box;max-width:22.6rem}[_nghost-%COMP%]{position:relative}.t-color-save[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:0;bottom:0;width:100%;box-shadow:inset 0 1px var(--tui-base-03);background:var(--tui-base-01)}"],changeDetection:0}),o})(),y=(()=>{class o{constructor(){this.builtInTools=[l._2.Undo],this.control=new i.NI("")}}return o.ɵfac=function(t){return new(t||o)},o.ɵcmp=a.Xpm({type:o,selectors:[["tui-editor-color-picker-tool-example-1"]],features:[a._Bn([{provide:l.Wf,useValue:[Promise.resolve().then(e.bind(e,66826)).then((({StarterKit:o})=>o)),Promise.resolve().then(e.bind(e,84402)).then((({default:o})=>o)),Promise.resolve().then(e.bind(e,47841)).then((({FontColor:o})=>o)),Promise.resolve().then(e.bind(e,13511)).then((({BackgroundColor:o})=>o))]}])],decls:4,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["icon","tuiIconColorLarge","type","FontColor"],["icon","tuiIconHiliteLarge","type","BackgroundColor"]],template:function(o,t){1&o&&(a.TgZ(0,"tui-editor",0),a.ynx(1,1),a._UZ(2,"custom-color-picker",2),a._UZ(3,"custom-color-picker",3),a.BQk(),a.qZA()),2&o&&a.Q6J("formControl",t.control)("tools",t.builtInTools)},directives:[h.a,i.JJ,i.oH,Z],encapsulation:2,changeDetection:0}),o})(),x=(()=>{class o{constructor(){this.example1={HTML:e.e(3575).then(e.t.bind(e,3575,17)),TypeScript:e.e(2704).then(e.t.bind(e,12704,17)),"./custom-color-picker/custom-color-picker.component.ts":e.e(5427).then(e.t.bind(e,45427,17)),"./custom-color-picker/custom-color-picker.component.less":e.e(870).then(e.t.bind(e,20870,17)),"./custom-color-picker/custom-color-picker.component.html":e.e(4361).then(e.t.bind(e,34361,17)),"./custom-color-picker/custom-color-picker.module.ts":e.e(2825).then(e.t.bind(e,42825,17))}}}return o.ɵfac=function(t){return new(t||o)},o.ɵcmp=a.Xpm({type:o,selectors:[["editor-color-picker-tool"]],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","custom-tool","heading","Custom color picker tools",3,"content"]],template:function(o,t){1&o&&(a.TgZ(0,"tui-doc-page",0),a.TgZ(1,"p"),a._uU(2," Rich Text Editor based on "),a.TgZ(3,"a",1),a._uU(4," TipTap Editor "),a.qZA(),a._uU(5," for using with Angular forms. For safety reasons use a "),a.TgZ(6,"a",2),a._uU(7," sanitizer "),a.qZA(),a._uU(8," with this component. "),a.qZA(),a.TgZ(9,"tui-doc-example",3),a._UZ(10,"tui-editor-color-picker-tool-example-1"),a.qZA(),a.qZA()),2&o&&(a.xp6(9),a.Q6J("content",t.example1))},directives:[u.q,p.V,r.yS,d.f,y],encapsulation:2,changeDetection:0}),o})();var T=e(64642);let A=(()=>{class o{}return o.ɵfac=function(t){return new(t||o)},o.ɵmod=a.oAB({type:o}),o.ɵinj=a.cJS({imports:[[n.ez,s.fNO,s.jhF,s.dpK,s.goS,l.VM,T.Ah6,T.WDk,l.H9,l.wl]]}),o})(),M=(()=>{class o{}return o.ɵfac=function(t){return new(t||o)},o.ɵmod=a.oAB({type:o}),o.ɵinj=a.cJS({imports:[[n.ez,s.jzK,s.fNO,c.fV,i.UX,l.T_,l.GK,A,r.Bz.forChild((0,c.Ve)(x))]]}),o})()}}]);