(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7581],{87581:(t,e,o)=>{o.r(e),o.d(e,{default:()=>Z});var i=o(76733),r=o(20755),n=o(43226),a=o(24031),s=o(45599),u=o(33446),d=o(40239),l=o(10409),c=o(69286),p=o(92425),g=o(84787),h=o(36293);function m(t){return e=>{const o=new FileReader;return t.loading$.next(!0),o.readAsDataURL(e),(0,l.R)(o,"load").pipe((0,c.g)(2e3),(0,p.U)((()=>String(o.result))),(0,g.w)((e=>t.save(e))),(0,h.x)((()=>t.loading$.next(!1))))}}var T=o(8239),I=o(56424),L=o(3489);let v=(()=>{var t;class e{constructor(){this.loading$=new I.X(!1)}static createBody(t){const e=new FormData;return e.append("image",t.split(",").pop()||""),new URLSearchParams(e)}get isLoading(){return this.loading$.getValue()}save(t){return(0,L.D)(fetch("https://api.imgbb.com/1/upload?key=3c1615980dcf693b282c4b0fb608b28a&expiration=300",{method:"POST",body:e.createBody(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var t=(0,T.Z)((function*(t){return t.json()}));return function(e){return t.apply(this,arguments)}}())).pipe((0,p.U)((t=>t.data.url)))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵprov=r.Yz7({token:t,factory:t.ɵfac,providedIn:"root"}),e})();var b=o(38454),f=o(35396),y=o(304);const M=function(){return[]},Z=(()=>{var t;class e{constructor(){this.isStackblitz=(0,r.f3M)(a.SgE),this.relativePath=this.isStackblitz?"https://taiga-ui.dev/":"",this.doc=(0,r.f3M)(i.K0),this.imgbbService=(0,r.f3M)(v),this.builtInTools=[d.TuiEditorTool.Undo,d.TuiEditorTool.Img],this.control=new n.NI(""),this.validator=({value:t})=>this.editor?.focused||this.imgbbService.isLoading||!this.doc.hasFocus()||t.length?null:{empty:new a.T8v("ERROR: content must not be empty")},this.control.patchValue(`\n                <img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300">\n                <p>Try to drag right border of image!</p>\n                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>\n                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />`)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&r.Gf(d.TuiEditorComponent,7),2&t){let t;r.iGM(t=r.CRH())&&(e.editor=t.first)}},standalone:!0,features:[r._Bn([a.a31,{provide:d.TUI_EDITOR_EXTENSIONS,deps:[r.zs3],useFactory:t=>[Promise.resolve().then(o.bind(o,40239)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(o.bind(o,40239)).then((({tuiCreateImageEditorExtension:e})=>e({injector:t}))),Promise.resolve().then(o.bind(o,5664)).then((({default:t})=>t.configure({inline:!0,allowBase64:!0})))]},{provide:d.TUI_IMAGE_EDITOR_OPTIONS,useValue:{minWidth:100,maxWidth:400}},{provide:d.TUI_IMAGE_LOADER,useFactory:m,deps:[v]}]),r.jDz],decls:13,vars:16,consts:[[3,"overlay","showLoader"],[1,"editor",3,"formControl","tools","tuiValidator"],[3,"error","formControl"],[3,"content"]],template:function(t,e){1&t&&(r.TgZ(0,"tui-loader",0),r.ALo(1,"async"),r._UZ(2,"tui-editor",1),r.qZA(),r._UZ(3,"tui-error",2),r.ALo(4,"async"),r.ALo(5,"tuiFieldError"),r.TgZ(6,"h4"),r._uU(7,"HTML:"),r.qZA(),r._UZ(8,"tui-editor-socket",3),r.TgZ(9,"h4"),r._uU(10,"Text:"),r.qZA(),r.TgZ(11,"p"),r._uU(12),r.qZA()),2&t&&(r.Q6J("overlay",!0)("showLoader",!!r.lcZ(1,9,e.imgbbService.loading$)),r.xp6(2),r.Q6J("formControl",e.control)("tools",e.builtInTools)("tuiValidator",e.validator),r.xp6(1),r.Q6J("error",r.lcZ(4,11,r.lcZ(5,13,r.DdM(15,M))))("formControl",e.control),r.xp6(5),r.Q6J("content",e.control.value||""),r.xp6(4),r.Oqu(e.control.value))},dependencies:[s.Shu,b.v,s.dSp,f.k,i.Ov,a.WJ2,n.UX,n.JJ,n.oH,u.YuV,y.A,d.TuiEditorSocketComponent,d.TuiEditorComponent],encapsulation:2,changeDetection:0}),e})()}}]);