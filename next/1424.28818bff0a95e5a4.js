(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1424],{51424:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(76733),i=o(20755),r=o(43226),s=o(68704),u=o(9982),l=o(30319),a=o(36293);function c(e){return t=>(e.loading$.next(!0),(0,l.D)(t.map((t=>e.upload(t)))).pipe((0,a.x)((()=>e.loading$.next(!1)))))}var d=o(8239),h=o(56424),p=o(3489),f=o(92425);let T=(()=>{var e;class t{constructor(){this.loading$=new h.X(!1)}upload(e){const t=new FormData;return t.append("file",e,e.name),t.append("expires","1d"),t.append("autoDelete","true"),(0,p.D)(fetch("https://file.io/",{method:"POST",body:t}).then(function(){var e=(0,d.Z)((function*(e){return e.json()}));return function(t){return e.apply(this,arguments)}}())).pipe((0,f.U)((e=>({name:e.name,link:e.link}))))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵprov=i.Yz7({token:e,factory:e.ɵfac,providedIn:"root"}),t})();const m=(()=>{var e;class t{constructor(){this.fileIoService=(0,i.f3M)(T),this.builtInTools=[u.TuiEditorTool.Undo,u.TuiEditorTool.Link,u.TuiEditorTool.Attach],this.control=new r.NI("")}attach(e){e.forEach((e=>this.wysiwyg?.editor?.setFileLink(e)))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=i.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&i.Gf(u.TuiEditor,5),2&e){let e;i.iGM(e=i.CRH())&&(t.wysiwyg=e.first)}},standalone:!0,features:[i._Bn([{provide:u.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,9982)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(o.bind(o,23740)).then((({TextStyle:e})=>e)),Promise.resolve().then(o.bind(o,9982)).then((({TuiLink:e})=>e)),Promise.resolve().then(o.bind(o,9982)).then((({TuiJumpAnchor:e})=>e)),Promise.resolve().then(o.bind(o,9982)).then((({TuiFileLink:e})=>e))]},{provide:u.TUI_ATTACH_FILES_LOADER,deps:[T],useFactory:c}]),i.jDz],decls:10,vars:7,consts:[[3,"showLoader"],[1,"editor",3,"formControl","tools","fileAttached"],[3,"content"]],template:function(e,t){1&e&&(i.TgZ(0,"tui-loader",0),i.ALo(1,"async"),i.TgZ(2,"tui-editor",1),i.NdJ("fileAttached",(function(e){return t.attach(e)})),i.qZA()(),i.TgZ(3,"h4"),i._uU(4,"HTML:"),i.qZA(),i._UZ(5,"tui-editor-socket",2),i.TgZ(6,"h4"),i._uU(7,"Text:"),i.qZA(),i.TgZ(8,"p"),i._uU(9),i.qZA()),2&e&&(i.Q6J("showLoader",!!i.lcZ(1,5,t.fileIoService.loading$)),i.xp6(2),i.Q6J("formControl",t.control)("tools",t.builtInTools),i.xp6(3),i.Q6J("content",t.control.value||""),i.xp6(4),i.Oqu(t.control.value))},dependencies:[n.Ov,r.UX,r.JJ,r.oH,u.TuiEditor,u.TuiEditorSocket,s.A61],styles:[".editor[_ngcontent-%COMP%]     .tui-editor-socket .ProseMirror{min-height:10rem}"],changeDetection:0}),t})()}}]);