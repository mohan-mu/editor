(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8189],{28189:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var o=n(97270),i=n(56610),r=n(2978),s=n(37222),l=n(76098),a=n(29253),d=n(22792),c=n(91920),u=n(10352);const p=["dropdown"];function m(t,e){if(1&t){const t=r.RV6();r.j41(0,"div",4)(1,"label",5)(2,"div",6),r.EFF(3,"Embed URL"),r.k0s(),r.j41(4,"div",7)(5,"tui-input-inline",8),r.bIt("ngModelChange",(function(e){r.eBV(t);const n=r.XpG();return r.Njj(n.url=e)}))("keydown.enter",(function(){r.eBV(t);const e=r.XpG();return r.Njj(e.embedSource(e.url))})),r.EFF(6),r.k0s()()()()}if(2&t){const t=r.XpG();r.R7$(5),r.AVh("t-input_filled",t.url),r.Y8G("ngModel",t.url),r.R7$(1),r.SpI(" ",t.placeholder," ")}}let h=(()=>{var t;class e{constructor(){this.editor=(0,r.WQX)(c.TuiTiptapEditorService),this.placeholder="https://my-embed.site.com/etc1235",this.url=""}embedSource(t){t&&(this.editor.setIframe({src:t}),this.url="",this.dropdown?.close())}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.VBU({type:t,selectors:[["embed-tool"]],viewQuery:function(t,e){if(1&t&&r.GBs(p,5),2&t){let t;r.mGM(t=r.lsd())&&(e.dropdown=t.first)}},standalone:!0,features:[r.aNF],decls:5,vars:2,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"tuiDropdown","tuiDropdownOpen"],["dropdown",""],["appearance","icon","automation-id","embed-tool__button","iconStart","@tui.code","size","s","tuiIconButton","","type","button",1,"tool-button"],["youtubeDropdown",""],[1,"embed-tool-content"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,e){if(1&t&&(r.j41(0,"div",0,1),r.nrm(2,"button",2),r.DNE(3,m,7,4,"ng-template",null,3,r.C5r),r.k0s()),2&t){const t=r.sdS(4);r.Y8G("tuiDropdown",t)("tuiDropdownOpen",!1)}},dependencies:[s.YN,s.BC,s.vS,a.s8y,d.paf,d.HYP,d.pUb,d.iEg,u.AGE],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}.embed-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-secondary)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"],changeDetection:0}),e})();var f;class b{constructor(){this.sanitizer=(0,r.WQX)(l.up),this.isE2E=(0,r.WQX)(a.Hs4),this.isNotStatic=(0,r.WQX)(a.Hs4)||(0,i.Vy)((0,r.WQX)(r.Agw)),this.builtInTools=[c.TuiEditorTool.Undo],this.control=new s.MJ(this.isNotStatic?"":`\n        <p>Here is an online IDE:</p>\n        <iframe\n         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${this.isE2E?"":"%2Cresult"}&editable=true"\n         height="375"\n         width="100%"\n         scrolling="no"\n         frameborder="no"\n         loading="lazy"\n         allowtransparency="true"\n         data-type="iframe-editor"\n         allowfullscreen="true">\n        </iframe>\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"\n            height="42"\n            width="100%"\n            data-type="iframe-editor">\n        </iframe>\n        <p></p>\n    `,s.k0.required)}safe(t){return this.sanitizer.bypassSecurityTrustHtml(t??"")}}(f=b).ɵfac=function(t){return new(t||f)},f.ɵcmp=r.VBU({type:f,selectors:[["ng-component"]],standalone:!0,features:[r.Jv_([{provide:c.TUI_EDITOR_EXTENSIONS,deps:[r.zZn],useFactory:t=>[Promise.resolve().then(n.bind(n,91920)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(n.bind(n,91920)).then((({tuiCreateIframeEditorExtension:e})=>e({injector:t})))]}]),r.aNF],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["icon","@tui.arrow-left"],[3,"innerHTML"]],template:function(t,e){1&t&&(r.j41(0,"tui-editor",0),r.qex(1,1),r.nrm(2,"embed-tool",2),r.j41(3,"span",3),r.nrm(4,"tui-icon",4),r.EFF(5," click it "),r.k0s(),r.bVm(),r.k0s(),r.j41(6,"h4"),r.EFF(7,"HTML:"),r.k0s(),r.nrm(8,"div",5),r.j41(9,"h4"),r.EFF(10,"Text:"),r.k0s(),r.j41(11,"p"),r.EFF(12),r.k0s()),2&t&&(r.Y8G("formControl",e.control)("tools",e.builtInTools),r.R7$(8),r.Y8G("innerHTML",e.safe(e.control.value),r.npT),r.R7$(4),r.JRh(e.control.value))},dependencies:[h,s.X1,s.BC,s.l_,c.TuiEditor,d.qo5,a.KV0],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-border-hover);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,o.Cg)([a.PEb],b.prototype,"safe",null);const g=b}}]);