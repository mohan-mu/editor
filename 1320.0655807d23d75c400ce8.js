(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[1320],{51320:(t,e,o)=>{o.r(e),o.d(e,{ExampleTuiEditorEmbedYoutubeModule:()=>k});var n=o(12057),i=o(24751),u=o(34016),r=o(47029),s=o(42600),l=o(43232),c=o(37195),d=o(74788),a=o(15997),p=o(73460),h=o(42328),b=o(97582),g=o(91211),m=o(8820),f=o(98778),w=o(16331),y=o(18289),v=o(55788),Z=o(36866);const x=["dropdown"];function _(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"div",4),d.TgZ(1,"label",5),d.TgZ(2,"div",6),d._uU(3,"Youtube URL"),d.qZA(),d.TgZ(4,"div",7),d.TgZ(5,"tui-input-inline",8),d.NdJ("ngModelChange",(function(e){return d.CHM(t),d.oxw().url=e}))("keydown.enter",(function(){d.CHM(t);const e=d.oxw();return e.insertYoutubeVideo(e.url)})),d._uU(6),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&t){const t=e.$implicit,o=d.oxw();d.Q6J("tuiActiveZoneParent",t),d.xp6(5),d.ekj("t-input_filled",o.url),d.Q6J("ngModel",o.url),d.xp6(1),d.hij(" ",o.placeholder," ")}}let T=(()=>{class t{constructor(t){this.editor=t,this.youtubeLogo='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="24px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x33_95-youtube"><g><path d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z" style="fill:#FF0000;"/><polygon points="208.954,324.723 208.954,187.93 329.18,256.328   " style="fill:#FFFFFF;"/></g></g><g id="Layer_1"/></svg>',this.placeholder="https://www.youtube.com/embed/j2_NnV7nU6s",this.url=""}insertYoutubeVideo(t){if(t){const e=this.editor.state.selection.anchor;this.editor.enter(),this.editor.setTextSelection(e),this.editor.setYoutubeVideo({src:t,width:"100%"}),this.url="",this.dropdown?.close()}}}return t.ɵfac=function(e){return new(e||t)(d.Y36(c.$3))},t.ɵcmp=d.Xpm({type:t,selectors:[["youtube-tool"]],viewQuery:function(t,e){if(1&t&&d.Gf(x,5),2&t){let t;d.iGM(t=d.CRH())&&(e.dropdown=t.first)}},decls:5,vars:4,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","flat","automation-id","youtube-tool__button","size","s","tuiIconButton","","type","button",1,"tool-button",3,"focusable","icon","pseudoActive"],["youtubeDropdown",""],[1,"youtube-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,e){if(1&t&&(d.TgZ(0,"tui-hosted-dropdown",0,1),d._UZ(2,"button",2),d.YNc(3,_,7,5,"ng-template",null,3,d.W1O),d.qZA()),2&t){const t=d.MAs(1),o=d.MAs(4);d.Q6J("content",o),d.xp6(2),d.Q6J("focusable",t.open)("icon",e.youtubeLogo)("pseudoActive",t.open)}},directives:[f.o,w.Ek,y.v,v.e,Z.l,i.JJ,i.On],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.youtube-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),t})();var A=o(77825);class C{constructor(t){this.sanitizer=t,this.builtInTools=[c._2.Undo],this.control=new i.NI('\n        <p>Editor now supports YouTube embeds!</p>\n        <div data-youtube-video>\n            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>\n        </div>\n        <p>Try adding your own video to this editor!</p>\n    ',i.kI.required)}safe(t){return this.sanitizer.bypassSecurityTrustHtml(t??"")}}C.ɵfac=function(t){return new(t||C)(d.Y36(g.H7))},C.ɵcmp=d.Xpm({type:C,selectors:[["tui-editor-embed-youtube-example-1"]],features:[d._Bn([{provide:c.Wf,useValue:[Promise.resolve().then(o.bind(o,25923)).then((({StarterKit:t})=>t)),o.e(3851).then(o.bind(o,63851)).then((({Youtube:t})=>t))]}])],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(t,e){1&t&&(d.TgZ(0,"tui-editor",0),d.ynx(1,1),d._UZ(2,"youtube-tool",2),d.TgZ(3,"span",3),d._UZ(4,"tui-svg",4),d._uU(5," click it "),d.qZA(),d.BQk(),d.qZA(),d.TgZ(6,"h4"),d._uU(7,"HTML:"),d.qZA(),d._UZ(8,"div",5),d.TgZ(9,"h4"),d._uU(10,"Text:"),d.qZA(),d.TgZ(11,"p"),d._uU(12),d.qZA()),2&t&&(d.Q6J("formControl",e.control)("tools",e.builtInTools),d.xp6(8),d.Q6J("innerHTML",e.safe(e.control.value),d.oJD),d.xp6(4),d.Oqu(e.control.value))},directives:[m.a,i.JJ,i.oH,T,A.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,b.gn)([s.UMq],C.prototype,"safe",null);let M=(()=>{class t{constructor(){this.example1={HTML:o.e(250).then(o.t.bind(o,50250,17)),TypeScript:o.e(5501).then(o.t.bind(o,5501,17)),LESS:o.e(6847).then(o.t.bind(o,26847,17)),"youtube-tool/youtube-tool.component.ts":o.e(6014).then(o.t.bind(o,76014,17)),"youtube-tool/youtube-tool.template.html":o.e(8229).then(o.t.bind(o,28229,17)),"youtube-tool/youtube-tool.styles.less":o.e(7398).then(o.t.bind(o,87398,17)),"youtube-tool/youtube-tool.module.ts":o.e(9241).then(o.t.bind(o,59241,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=d.Xpm({type:t,selectors:[["editor-embed-youtube"]],features:[d._Bn([{provide:c.Wf,useValue:c.PD}])],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","youtube","heading","Youtube extension",3,"content"]],template:function(t,e){1&t&&(d.TgZ(0,"tui-doc-page",0),d.TgZ(1,"p"),d._uU(2," Rich Text Editor based on "),d.TgZ(3,"a",1),d._uU(4," TipTap Editor "),d.qZA(),d._uU(5," for using with Angular forms. For safety reasons use a "),d.TgZ(6,"a",2),d._uU(7," sanitizer "),d.qZA(),d._uU(8," with this component. "),d.qZA(),d.TgZ(9,"tui-doc-example",3),d._UZ(10,"tui-editor-embed-youtube-example-1"),d.qZA(),d.qZA()),2&t&&(d.xp6(9),d.Q6J("content",e.example1))},directives:[a.q,p.V,u.yS,h.f,C],encapsulation:2,changeDetection:0}),t})();var U=o(86655);let q=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=d.oAB({type:t}),t.ɵinj=d.cJS({imports:[[n.ez,l.fNO,l.jhF,s.Ah6,l.dpK,U.z$l,i.u5]]}),t})(),k=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=d.oAB({type:t}),t.ɵinj=d.cJS({imports:[[n.ez,s.Ah6,l.EIu,l.jzK,l.jhF,l.fNO,r.fV,i.u5,i.UX,c.T_,c.GK,q,u.Bz.forChild((0,r.Ve)(M))]]}),t})()}}]);