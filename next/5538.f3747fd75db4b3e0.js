(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5538],{85538:(o,t,e)=>{e.r(t),e.d(t,{default:()=>f});var n=e(43226),i=e(20382),r=e(76733),c=e(20755),s=e(95854),l=e(77934),a=e(52483),u=e(92425),p=e(18004),d=e(88557),h=e(12432),g=e(60598);function m(o,t){if(1&o){const o=c.EpF();c.TgZ(0,"tui-color-selector",5),c.NdJ("colorChange",(function(t){c.CHM(o);const e=c.oxw();return c.KtG(e.onValueChange(t))})),c.qZA(),c.TgZ(1,"button",6),c.NdJ("click",(function(){c.CHM(o);const t=c.oxw();return c.KtG(t.setColor())})),c._uU(2," Use color "),c.qZA()}if(2&o){const o=t.$implicit,e=c.oxw();c.Q6J("color",e.selectedColor)("colors",e.colors)("tuiActiveZoneParent",o)}}let C=(()=>{var o;class t{constructor(){this.defaultOptions=(0,c.f3M)(i.TUI_EDITOR_OPTIONS),this.selectedColor="",this.editor=(0,c.f3M)(i.TuiTiptapEditorService),this.fontColor$=this.editor.stateChange$.pipe((0,u.U)((()=>this.editor.getOriginTiptapEditor().isFocused&&this.editor[`get${this.type}`]?.()||"transparent")),(0,p.x)(),(0,d.B)()),this.colors=this.defaultOptions.colors,this.type="FontColor"}onValueChange(o){this.selectedColor=o}setColor(){this.editor[`set${this.type}`]?.(this.selectedColor)}}return(o=t).ɵfac=function(t){return new(t||o)},o.ɵcmp=c.Xpm({type:o,selectors:[["custom-color-picker"]],inputs:{colors:"colors",icon:"icon",type:"type"},standalone:!0,features:[c.jDz],decls:7,vars:7,consts:[[3,"content","tuiDropdownMaxHeight"],["color",""],["appearance","icon","automation-id","toolbar__color-button","size","s","tuiIconButton","","type","button",3,"iconLeft"],[1,"t-plate"],["colorDropdown",""],[3,"color","colors","tuiActiveZoneParent","colorChange"],["appearance","flat","size","m","tuiButton","","type","button",1,"t-color-save",3,"click"]],template:function(o,t){if(1&o&&(c.TgZ(0,"tui-hosted-dropdown",0,1),c._UZ(2,"button",2),c.TgZ(3,"div",3),c.ALo(4,"async"),c.qZA(),c.YNc(5,m,3,3,"ng-template",null,4,c.W1O),c.qZA()),2&o){const o=c.MAs(6);c.Q6J("content",o)("tuiDropdownMaxHeight",999),c.xp6(2),c.Q6J("iconLeft",t.icon||""),c.xp6(1),c.Udp("background",c.lcZ(4,5,t.fontColor$))}},dependencies:[s.eJF,a.jhF,h.o,g.Ek,l.m$g,r.Ov,i.TuiColorSelector],styles:[".t-dropdown[_ngcontent-%COMP%]{padding:.75rem}.t-option[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-option[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.t-option_margin[_ngcontent-%COMP%]{margin:0 .25rem}.t-plate[_ngcontent-%COMP%]{position:absolute;top:1.375rem;left:.25rem;width:1.5rem;height:.25rem;pointer-events:none}.t-plate_paint[_ngcontent-%COMP%]{left:.375rem;width:1.25rem}.t-color-picker[_ngcontent-%COMP%]{box-sizing:border-box;max-width:22.6rem}[_nghost-%COMP%]{position:relative}.t-color-save[_ngcontent-%COMP%]{position:sticky;left:0;bottom:0;width:100%;box-shadow:inset 0 1px var(--tui-base-03);background:var(--tui-base-01)}"],changeDetection:0}),t})();const f=(()=>{var o;class t{constructor(){this.builtInTools=[i.TuiEditorTool.Undo],this.control=new n.NI("")}}return(o=t).ɵfac=function(t){return new(t||o)},o.ɵcmp=c.Xpm({type:o,selectors:[["ng-component"]],standalone:!0,features:[c._Bn([{provide:i.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(e.bind(e,20382)).then((({TuiStarterKit:o})=>o)),Promise.resolve().then(e.bind(e,23740)).then((({default:o})=>o)),Promise.resolve().then(e.bind(e,20382)).then((({TuiFontColor:o})=>o)),Promise.resolve().then(e.bind(e,20382)).then((({TuiBackgroundColor:o})=>o))]}]),c.jDz],decls:4,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["icon","tuiIconColor","type","FontColor"],["icon","tuiIconHilite","type","BackgroundColor"]],template:function(o,t){1&o&&(c.TgZ(0,"tui-editor",0),c.ynx(1,1),c._UZ(2,"custom-color-picker",2)(3,"custom-color-picker",3),c.BQk(),c.qZA()),2&o&&c.Q6J("formControl",t.control)("tools",t.builtInTools)},dependencies:[C,n.UX,n.JJ,n.oH,i.TuiEditor],encapsulation:2,changeDetection:0}),t})()}}]);