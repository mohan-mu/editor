(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[4326],{24326:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var o,i=n(43226),s=n(49119),r=n(58128),c=n(84911),u=n(76733),l=n(20755),a=n(42772),p=n(68704),d=n(92425),f=n(18004);function h(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"button",7),l.NdJ("click",(function(){const e=l.CHM(t).$implicit,n=l.oxw(2);return l.KtG(n.setFontSize(e))})),l._uU(1),l.qZA()}if(2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t," ")}}function g(t,e){if(1&t&&(l.TgZ(0,"tui-data-list"),l.YNc(1,h,2,1,"button",6),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngForOf",t.sizes)}}class z{constructor(){this.editor=(0,l.f3M)(r.TuiTiptapEditorService),this.win=(0,l.f3M)(a.m9),this.sizes=[8,9,10,11,12,14,16,18,24,30],this.size$=this.editor.stateChange$.pipe((0,d.U)((()=>this.fontSize)),(0,f.x)())}get fontSize(){return this.editor.getFontSize()||this.getDefaultFontSize(this.editor.getOriginTiptapEditor()?.view?.dom)||16}setFontSize(t){this.editor.setFontSize(t)}increase(){const t=this.currentIndex+1;if(t<=this.sizes.length-1){const e=this.sizes[t];this.setFontSize(e)}}decrease(){const t=this.currentIndex-1;if(t>0){const e=this.sizes[t];this.setFontSize(e)}}get currentIndex(){return this.sizes.indexOf(this.fontSize)}getDefaultFontSize(t){return t?Number(this.win.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)?.[0]):16}}(o=z).ɵfac=function(t){return new(t||o)},o.ɵcmp=l.Xpm({type:o,selectors:[["font-size-tool"]],standalone:!0,features:[l.jDz],decls:9,vars:5,consts:[["appearance","flat","iconStart","@tui.minus","size","s","tuiIconButton","","type","button",3,"click"],[3,"tuiDropdown","tuiDropdownOpen"],["fonts",""],["appearance","flat","size","s","tuiButton",""],["fontsDropdown",""],["appearance","flat","iconStart","@tui.plus","size","s","tuiIconButton","","type","button",3,"click"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"]],template:function(t,e){if(1&t&&(l.TgZ(0,"button",0),l.NdJ("click",(function(){return e.decrease()})),l.qZA(),l.TgZ(1,"div",1,2)(3,"button",3),l._uU(4),l.ALo(5,"async"),l.qZA(),l.YNc(6,g,2,1,"ng-template",null,4,l.W1O),l.qZA(),l.TgZ(8,"button",5),l.NdJ("click",(function(){return e.increase()})),l.qZA()),2&t){const t=l.MAs(7);l.xp6(1),l.Q6J("tuiDropdown",t)("tuiDropdownOpen",!1),l.xp6(3),l.hij(" ",l.lcZ(5,3,e.size$)," ")}},dependencies:[u.Ov,u.sg,p.xGO,p.qiE,p.bHd,p.tdC,p.Bb2],styles:["[_nghost-%COMP%]{display:flex}"],changeDetection:0}),(0,c.gn)([s.UMq],z.prototype,"getDefaultFontSize",null);const m=(()=>{var t;class e{constructor(){this.builtInTools=[r.TuiEditorTool.Undo],this.control=new i.NI('\n        <p>Hello</p>\n        <p><span style="font-size: 24px">Hello world</span></p>\n    ')}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[l._Bn([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(n.bind(n,58128)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(n.bind(n,23740)).then((({default:t})=>t)),Promise.resolve().then(n.bind(n,58128)).then((({TuiFontSizeExtension:t})=>t))]}]),l.jDz],decls:10,vars:4,consts:[[1,"heading",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[3,"content"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-editor",0),l.ynx(1,1),l._UZ(2,"font-size-tool",2),l.BQk(),l.qZA(),l.TgZ(3,"h4"),l._uU(4,"HTML:"),l.qZA(),l._UZ(5,"tui-editor-socket",3),l.TgZ(6,"h4"),l._uU(7,"Text:"),l.qZA(),l.TgZ(8,"p"),l._uU(9),l.qZA()),2&t&&(l.Q6J("formControl",e.control)("tools",e.builtInTools),l.xp6(5),l.Q6J("content",e.control.value||""),l.xp6(4),l.Oqu(e.control.value))},dependencies:[z,i.UX,i.JJ,i.oH,r.TuiEditor,r.TuiEditorSocket,s.WmR],encapsulation:2,changeDetection:0}),e})()}}]);