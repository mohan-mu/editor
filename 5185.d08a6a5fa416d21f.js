(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5185],{55185:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var n=i(28941),o=i(41556),a=i(3003),s=i(33893),r=i(64537),c=i(20092),l=i(13687),p=i(91390),u=i(88692),m=i(3017),d=i(26922),g=i(18289);const h=["previewImages"];function w(e,t){if(1&e&&r._UZ(0,"img",4),2&e){const e=r.oxw(2);r.Q6J("src",e.image.src,r.LSH)}}function v(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"tui-preview",1),r.YNc(1,w,1,1,"img",2),r.TgZ(2,"button",3),r.NdJ("click",(function(){const t=r.CHM(e).$implicit;return r.KtG(t.complete())})),r.qZA()()}if(2&e){const e=r.oxw();r.Q6J("rotatable",!0),r.xp6(1),r.Q6J("ngIf",e.image)}}let f=(()=>{class e{constructor(e){this.dialogs=e}showImage(e){this.image=e,this.dialogs.open(this.template||"").subscribe()}}return e.ɵfac=function(t){return new(t||e)(r.Y36(l.iK))},e.ɵcmp=r.Xpm({type:e,selectors:[["image-preview-example"]],viewQuery:function(e,t){if(1&e&&r.Gf(h,5),2&e){let e;r.iGM(e=r.CRH())&&(t.template=e.first)}},standalone:!0,features:[r.jDz],decls:2,vars:0,consts:[["previewImages",""],[3,"rotatable"],["alt","","loading","lazy","class","t-image-preview",3,"src",4,"ngIf"],["icon","tuiIconCloseLarge","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","","loading","lazy",1,"t-image-preview",3,"src"]],template:function(e,t){1&e&&r.YNc(0,v,3,2,"ng-template",null,0,r.W1O)},dependencies:[l.E6,m.m,d.v,a.fNO,g.v,u.O5],styles:[".t-image-preview[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),e})(),T=(()=>{class e{constructor(e){this.isStackblitz=e,this.relativePath=this.isStackblitz?"https://taiga-ui.dev/":"",this.builtInTools=[s.TuiEditorTool.Undo,s.TuiEditorTool.Img],this.control=new c.NI(""),this.control.patchValue(`<p>Small image</p><img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300"><p>Big image</p><img data-type="image-editor" src="${this.relativePath}assets/images/big-wallpaper.jpg" width="500">`)}}return e.ɵfac=function(t){return new(t||e)(r.Y36(p.SgE))},e.ɵcmp=r.Xpm({type:e,selectors:[["tui-editor-preview-images-example-1"]],standalone:!0,features:[r._Bn([p.a31,{provide:s.TUI_EDITOR_EXTENSIONS,deps:[r.zs3],useFactory:e=>[Promise.resolve().then(i.bind(i,33893)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(i.bind(i,33893)).then((({tuiCreateImageEditorExtension:t})=>t({injector:e})))]}]),r.jDz],decls:6,vars:3,consts:[[1,"editor",3,"formControl","tools"],[3,"content","imagePreview"],["preview",""]],template:function(e,t){if(1&e){const e=r.EpF();r._UZ(0,"tui-editor",0),r.TgZ(1,"h4"),r._uU(2,"HTML:"),r.qZA(),r.TgZ(3,"tui-editor-socket",1),r.NdJ("imagePreview",(function(t){r.CHM(e);const i=r.MAs(5);return r.KtG(i.showImage(t))})),r._UZ(4,"image-preview-example",null,2),r.qZA()}2&e&&(r.Q6J("formControl",t.control)("tools",t.builtInTools),r.xp6(3),r.Q6J("content",t.control.value||""))},dependencies:[f,c.UX,c.JJ,c.oH,l.E6,s.TuiEditorSocketComponent,s.TuiEditorImagePreviewDirective,s.TuiEditorComponent],encapsulation:2,changeDetection:0}),e})();var b=i(65490),E=i(52442),I=i(73460);let Z=(()=>{class e{constructor(){this.example1={TypeScript:i.e(7013).then(i.t.bind(i,7013,17)),HTML:i.e(8712).then(i.t.bind(i,48712,17)),"image-preview/image-preview.template.html":i.e(9095).then(i.t.bind(i,99095,17)),"image-preview/image-preview.style.less":i.e(8537).then(i.t.bind(i,68537,17)),"image-preview/image-preview.component.ts":i.e(1023).then(i.t.bind(i,91023,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["editor-preview-images"]],standalone:!0,features:[r._Bn([{provide:s.TUI_EDITOR_EXTENSIONS,useValue:s.defaultEditorExtensions}]),r.jDz],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","preview-image","heading","Preview for images",3,"content"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-doc-page",0)(1,"p"),r._uU(2," Rich Text Editor based on "),r.TgZ(3,"a",1),r._uU(4," TipTap Editor "),r.qZA(),r._uU(5," for using with Angular forms. For safety reasons use a "),r.TgZ(6,"a",2),r._uU(7," sanitizer "),r.qZA(),r._uU(8," with this component. "),r.qZA(),r.TgZ(9,"tui-doc-example",3),r._UZ(10,"tui-editor-preview-images-example-1"),r.qZA()()),2&e&&(r.xp6(9),r.Q6J("content",t.example1))},dependencies:[T,o.u4,b.f,o.Lq,E.q,a.jzK,I.V,n.rH],encapsulation:2,changeDetection:0}),e})()}}]);