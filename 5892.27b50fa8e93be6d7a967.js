(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[5892],{15892:(t,e,r)=>{r.r(e),r.d(e,{ExampleTuiEditorUploadImagesModule:()=>it});var i=r(12057),o=r(24751),n=r(34016),s=r(70997),a=r(44427),u=r(74788),l=r(33770);let c=(()=>{class t{constructor(){this.onChange=l.iD,this.tuiValidator=o.kI.nullValidator}validate(t){return this.tuiValidator(t)}registerOnValidatorChange(t){this.onChange=t}ngOnChanges(){this.onChange()}ngOnDestroy(){this.tuiValidator=o.kI.nullValidator,this.onChange()}}return t.ɵfac=function(e){return new(e||t)},t.ɵdir=u.lG2({type:t,selectors:[["","tuiValidator",""]],inputs:{tuiValidator:"tuiValidator"},features:[u._Bn([{provide:o.Cf,useExisting:(0,u.Gpc)((()=>t)),multi:!0}]),u.TTD]}),t})(),d=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({}),t})();var h=r(221),p=r(11927),g=r(18939),m=r(49941),f=r(12130),v=r(79456),y=r(89570);function b(t,e){if(1&t&&(u.ynx(0),u._uU(1),u.BQk()),2&t){const t=e.polymorpheusOutlet;u.xp6(1),u.hij(" ",t," ")}}const w=function(){return{}};function T(t,e){if(1&t&&(u.TgZ(0,"div",1),u.ALo(1,"async"),u.YNc(2,b,2,1,"ng-container",2),u.ALo(3,"async"),u.qZA()),2&t){const t=u.oxw();u.ekj("t-message-text_light","onDark"===u.lcZ(1,6,t.mode$)),u.Q6J("@tuiHeightCollapse",t.animation)("@tuiFadeIn",t.animation),u.xp6(2),u.Q6J("polymorpheusOutlet",t.error.message||u.lcZ(3,8,t.defaultErrorMessage$))("polymorpheusOutletContext",t.error.context||u.DdM(10,w))}}let x=(()=>{class t{constructor(t,e,r){this.animation=t,this.mode$=e,this.defaultErrorMessage$=r,this.error=null,this.visible=!0}set errorSetter(t){this.error=(0,p.Aj)(t)?new g.T(t):t}onAnimation(t){this.visible=t}}return t.ɵfac=function(e){return new(e||t)(u.Y36(v.Pw),u.Y36(v.Au),u.Y36(v.PL))},t.ɵcmp=u.Xpm({type:t,selectors:[["tui-error"]],hostBindings:function(t,e){1&t&&u.NdJ("animationcancel.self",(function(){return e.onAnimation(!1)}))("animationstart.self",(function(){return e.onAnimation(!0)}))},inputs:{errorSetter:["error","errorSetter"]},features:[u._Bn([f.CV])],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",3,"t-message-text_light",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(t,e){1&t&&u.YNc(0,T,4,11,"div",0),2&t&&u.Q6J("ngIf",e.error&&e.visible)},directives:[i.O5,y.Li],pipes:[i.Ov],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],data:{animation:[m.eu,m.QF]},changeDetection:0}),t})(),L=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({imports:[[i.ez,y.wq]]}),t})();var I=r(54789),Z=r(82847),A=r(23917),j=r(12628),M=r(40719),_=r(64762),C=r(44358),S=r(56747),E=r(25917),D=r(95639),N=r(88002);const U={};let k=(()=>{class t{constructor(t,e,r,i){this.parent=t,this.self=e,this.container=r,this.validationErrors=i,this.order=[],this.self&&!this.self.valueAccessor&&(this.self.valueAccessor=this)}transform(t){return this.order=t,this.computedError}get computedError(){return this.invalid&&this.touched&&this.error||(0,E.of)(null)}registerOnChange(){}registerOnTouched(){}setDisabledState(){}writeValue(){}get error(){const{errorId:t}=this;if(!t)return null;const e=this.controlErrors[t],r=this.validationErrors[t];return this.getError(e,r)}get invalid(){var t;return!!(null===(t=this.control)||void 0===t?void 0:t.invalid)}get touched(){var t;return!!(null===(t=this.control)||void 0===t?void 0:t.touched)}get control(){var t,e,r;return(null===(t=this.self)||void 0===t?void 0:t.control)||(null===(e=this.parent)||void 0===e?void 0:e.control)||(null===(r=this.container)||void 0===r?void 0:r.control)}get errorId(){return this.getErrorId(this.order,this.controlErrors)}get controlErrors(){var t;return(null===(t=this.control)||void 0===t?void 0:t.errors)||U}getErrorId(t,e){const r=null==t?void 0:t.find((t=>e[t])),i=Object.keys(e)[0];return r||i||""}getError(t,e){if(t instanceof g.T)return(0,E.of)(t);if(void 0===e&&(0,p.Aj)(t))return(0,E.of)(new g.T(t));if((0,D.b)(e))return O(e,t);if(e instanceof Function){const r=e(t);return(0,D.b)(r)?O(r,t):P(r,t)}return P(e,t)}}return t.ɵfac=function(e){return new(e||t)(u.Y36(o.a5,28),u.Y36(o.a5,26),u.Y36(o.gN,24),u.Y36(S.Z4,16))},t.ɵpipe=u.Yjl({name:"tuiFieldError",type:t,pure:!1}),(0,_.gn)([C.UM],t.prototype,"getErrorId",null),(0,_.gn)([C.UM],t.prototype,"getError",null),t})();function O(t,e){return t.pipe((0,N.U)((t=>new g.T(t||"",e))))}function P(t,e){return(0,E.of)(new g.T(t||"",e))}let z=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({}),t})();var J=r(57080),Y=r(16535),V=r(99434),B=r(27103),F=r(22759),G=r(87874),Q=r(43190),R=r(68939);function q(t){return e=>{const r=new FileReader;return t.loading$.next(!0),r.readAsDataURL(e),(0,F.R)(r,"load").pipe((0,G.g)(2e3),(0,N.U)((()=>String(r.result))),(0,Q.w)((e=>t.save(e))),(0,R.x)((()=>t.loading$.next(!1))))}}var H=r(26215),$=r(97968);let W=(()=>{class t{constructor(){this.loading$=new H.X(!1)}static createBody(t){const e=new FormData;return e.append("image",t.split(",").pop()||""),new URLSearchParams(e)}get isLoading(){return this.loading$.getValue()}save(e){return(0,$.D)(fetch("https://api.imgbb.com/1/upload?key=3c1615980dcf693b282c4b0fb608b28a&expiration=300",{method:"POST",body:t.createBody(e),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>(0,_.mG)(this,void 0,void 0,(function*(){return t.json()}))))).pipe((0,N.U)((t=>t.data.url)))}}return t.ɵfac=function(e){return new(e||t)},t.ɵprov=u.Yz7({token:t,factory:t.ɵfac,providedIn:"root"}),t})();var X=r(10215),K=r(96152);const tt=function(){return[]};let et=(()=>{class t{constructor(t,e,r){this.doc=t,this.imgbbService=e,this.isStackblitz=r,this.relativePath=this.isStackblitz?"https://taiga-ui.dev/":"",this.builtInTools=[J._2.Undo,J._2.Img],this.control=new o.NI(""),this.validator=({value:t})=>{var e;return(null===(e=this.editor)||void 0===e?void 0:e.focused)||this.imgbbService.isLoading||!this.doc.hasFocus()||t.length?null:{empty:new g.T("ERROR: content must not be empty")}},this.control.patchValue(`\n                <img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300">\n                <p>Try to drag right border of image!</p>\n                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>\n                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />`)}}return t.ɵfac=function(e){return new(e||t)(u.Y36(i.K0),u.Y36(W),u.Y36(V.Sg))},t.ɵcmp=u.Xpm({type:t,selectors:[["tui-editor-upload-images-example-1"]],viewQuery:function(t,e){if(1&t&&u.Gf(J.aI,7),2&t){let t;u.iGM(t=u.CRH())&&(e.editor=t.first)}},features:[u._Bn([B.a3,{provide:J.Wf,deps:[u.zs3],useFactory:t=>[Promise.resolve().then(r.bind(r,66826)).then((({StarterKit:t})=>t)),Promise.resolve().then(r.bind(r,45267)).then((({createImageEditorExtension:e})=>e(t))),Promise.resolve().then(r.bind(r,44632)).then((({default:t})=>t.configure({inline:!0,allowBase64:!0})))]},{provide:J.kB,useValue:150},{provide:J.VE,useValue:400},{provide:J.p7,useFactory:q,deps:[W]}])],decls:13,vars:16,consts:[[3,"overlay","showLoader"],[1,"editor",3,"formControl","tools","tuiValidator"],[3,"formControl","error"],[3,"content"]],template:function(t,e){1&t&&(u.TgZ(0,"tui-loader",0),u.ALo(1,"async"),u._UZ(2,"tui-editor",1),u.qZA(),u._UZ(3,"tui-error",2),u.ALo(4,"async"),u.ALo(5,"tuiFieldError"),u.TgZ(6,"h4"),u._uU(7,"HTML:"),u.qZA(),u._UZ(8,"tui-editor-socket",3),u.TgZ(9,"h4"),u._uU(10,"Text:"),u.qZA(),u.TgZ(11,"p"),u._uU(12),u.qZA()),2&t&&(u.Q6J("overlay",!0)("showLoader",!!u.lcZ(1,9,e.imgbbService.loading$)),u.xp6(2),u.Q6J("formControl",e.control)("tools",e.builtInTools)("tuiValidator",e.validator),u.xp6(1),u.Q6J("formControl",e.control)("error",u.lcZ(4,11,u.lcZ(5,13,u.DdM(15,tt)))),u.xp6(5),u.Q6J("content",e.control.value||""),u.xp6(4),u.Oqu(e.control.value))},directives:[M.kM,X.a,o.JJ,o.oH,c,x,K.D],pipes:[i.Ov,k],encapsulation:2,changeDetection:0}),t})(),rt=(()=>{class t{constructor(){this.example1={TypeScript:r.e(4057).then(r.t.bind(r,84057,17)),HTML:r.e(4424).then(r.t.bind(r,64424,17)),"image-loader.ts":r.e(7219).then(r.t.bind(r,37219,17)),"imgbb.service.ts":r.e(8557).then(r.t.bind(r,58557,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=u.Xpm({type:t,selectors:[["editor-upload-images"]],features:[u._Bn([{provide:J.Wf,useValue:J.PD}])],decls:11,vars:1,consts:[["header","Editor","type","components"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icons/bundled","fragment","sanitizer"],["id","upload-images","heading","Upload images to a web server",3,"content"]],template:function(t,e){1&t&&(u.TgZ(0,"tui-doc-page",0),u.TgZ(1,"p"),u._uU(2," Rich Text Editor based on "),u.TgZ(3,"a",1),u._uU(4," TipTap Editor "),u.qZA(),u._uU(5," for using with Angular forms. For safety reasons use a "),u.TgZ(6,"a",2),u._uU(7," sanitizer "),u.qZA(),u._uU(8," with this component. "),u.qZA(),u.TgZ(9,"tui-doc-example",3),u._UZ(10,"tui-editor-upload-images-example-1"),u.qZA(),u.qZA()),2&t&&(u.xp6(9),u.Q6J("content",e.example1))},directives:[Y.qo,Z.V,n.yS,Y.f2,et],encapsulation:2,changeDetection:0}),t})(),it=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=u.oAB({type:t}),t.ɵinj=u.cJS({imports:[[i.ez,h.A,I.EI,Z.j,A.jh,j.fN,s.fV,o.u5,o.UX,J.T_,M.dS,J.GK,L,z,n.Bz.forChild((0,a.Ve)(rt)),d]]}),t})()}}]);