(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6193],{86193:(t,o,e)=>{e.r(o),e.d(o,{default:()=>m});var n=e(37222),r=e(91920),i=e(56610),s=e(2978),c=e(22792),l=e(74182),a=e(93527),u=e(73793),p=e(37782),d=e(45291);function h(t,o){if(1&t){const t=s.RV6();s.j41(0,"tui-color-selector",3),s.bIt("colorChange",(function(o){s.eBV(t);const e=s.XpG();return s.Njj(e.onValueChange(o))})),s.k0s(),s.j41(1,"button",4),s.bIt("click",(function(){s.eBV(t);const o=s.XpG();return s.Njj(o.setColor())})),s.EFF(2," Apply "),s.k0s()}if(2&t){const t=s.XpG();s.Y8G("color",t.selectedColor)("colors",t.colors)}}let g=(()=>{var t;class o{constructor(){this.defaultOptions=(0,s.WQX)(r.TUI_EDITOR_OPTIONS),this.selectedColor="",this.editor=(0,s.WQX)(r.TuiTiptapEditorService),this.fontColor$=this.editor.stateChange$.pipe((0,a.T)((()=>this.editor.getOriginTiptapEditor()?.isFocused&&this.editor[`get${this.type}`]?.()||"transparent")),(0,u.F)(),(0,p.u)()),this.colors=this.defaultOptions.colors,this.type="FontColor"}onValueChange(t){this.selectedColor=t}setColor(){this.editor[`set${this.type}`]?.(this.selectedColor)}}return(t=o).ɵfac=function(o){return new(o||t)},t.ɵcmp=s.VBU({type:t,selectors:[["custom-color-picker"]],inputs:{colors:"colors",icon:"icon",type:"type"},standalone:!0,features:[s.aNF],decls:6,vars:7,consts:[["appearance","icon","automation-id","toolbar__color-button","size","s","tuiIconButton","","type","button",3,"iconStart","tuiDropdown","tuiDropdownOpen"],[1,"t-plate"],["colorDropdown",""],[3,"color","colors","colorChange"],["appearance","flat","size","m","tuiButton","","type","button",1,"t-color-save",3,"click"]],template:function(t,o){if(1&t&&(s.j41(0,"div"),s.nrm(1,"button",0),s.j41(2,"div",1),s.nI1(3,"async"),s.k0s()(),s.DNE(4,h,3,2,"ng-template",null,2,s.C5r)),2&t){const t=s.sdS(5);s.R7$(1),s.Y8G("iconStart",o.icon||"")("tuiDropdown",t)("tuiDropdownOpen",!1),s.R7$(1),s.xc7("background",s.bMT(3,5,o.fontColor$))}},dependencies:[i.Jj,c.paf,l.DD7,d.u,c.pUb,c.iEg],styles:[".t-dropdown[_ngcontent-%COMP%]{padding:.75rem}.t-option[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-option[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}.t-option_margin[_ngcontent-%COMP%]{margin:0 .25rem}.t-plate[_ngcontent-%COMP%]{position:absolute;top:1.9rem;left:.25rem;width:1.5rem;height:.25rem;pointer-events:none}.t-plate_paint[_ngcontent-%COMP%]{left:.375rem;width:1.25rem}.t-color-picker[_ngcontent-%COMP%]{box-sizing:border-box;max-width:22.6rem}[_nghost-%COMP%]{position:relative}.t-color-save[_ngcontent-%COMP%]{position:sticky;left:0;bottom:0;width:100%;box-shadow:inset 0 .0625rem var(--tui-background-neutral-1-hover);background:var(--tui-background-base)!important}"],changeDetection:0}),o})();const m=(()=>{var t;class o{constructor(){this.builtInTools=[r.TuiEditorTool.Undo],this.control=new n.MJ("")}}return(t=o).ɵfac=function(o){return new(o||t)},t.ɵcmp=s.VBU({type:t,selectors:[["ng-component"]],standalone:!0,features:[s.Jv_([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(e.bind(e,91920)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(e.bind(e,25377)).then((({default:t})=>t)),Promise.resolve().then(e.bind(e,91920)).then((({TuiFontColor:t})=>t)),Promise.resolve().then(e.bind(e,91920)).then((({TuiBackgroundColor:t})=>t))]}]),s.aNF],decls:4,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["icon","@tui.baseline","type","FontColor"],["icon","@tui.paint-bucket","type","BackgroundColor"]],template:function(t,o){1&t&&(s.j41(0,"tui-editor",0),s.qex(1,1),s.nrm(2,"custom-color-picker",2)(3,"custom-color-picker",3),s.bVm(),s.k0s()),2&t&&s.Y8G("formControl",o.control)("tools",o.builtInTools)},dependencies:[g,n.X1,n.BC,n.l_,r.TuiEditor],encapsulation:2,changeDetection:0}),o})()}}]);