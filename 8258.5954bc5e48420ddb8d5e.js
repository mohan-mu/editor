(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[8258],{88258:(t,e,n)=>{n.r(e),n.d(e,{StackblitzStarterModule:()=>M});var i=n(34016),r=n(40719),o=n(12628),s=n(64762),a=n(44427),l=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],c={clickToLoad:function(t){return u("ctl",t)},devToolsHeight:function(t){return d("devtoolsheight",t)},forceEmbedLayout:function(t){return u("embed",t)},hideDevTools:function(t){return u("hidedevtools",t)},hideExplorer:function(t){return u("hideExplorer",t)},hideNavigation:function(t){return u("hideNavigation",t)},showSidebar:function(t){return function(t,e){return"boolean"==typeof e?"showSidebar="+(e?"1":"0"):""}(0,t)},openFile:function(t){return function(t,e){return(Array.isArray(e)?e:[e]).filter((function(t){return"string"==typeof t&&""!==t.trim()})).map((function(t){return"file="+encodeURIComponent(t.trim())}))}(0,t).join("&")},terminalHeight:function(t){return d("terminalHeight",t)},theme:function(t){return m("theme",["light","dark"],t)},view:function(t){return m("view",["preview","editor"],t)}};function p(t){void 0===t&&(t={});var e=Object.entries(t).map((function(t){var e=t[0],n=t[1];return null!=n&&c.hasOwnProperty(e)?c[e](n):""})).filter(Boolean);return e.length?"?"+e.join("&"):""}function u(t,e){return!0===e?t+"=1":""}function d(t,e){return"number"==typeof e&&e>=0&&e<=100?t+"="+Math.round(e):""}function m(t,e,n){return"string"==typeof n&&e.includes(n)?t+"="+n:""}function h(t,e){return""+function(t){return void 0===t&&(t={}),"string"==typeof t.origin?t.origin:"https://stackblitz.com"}(e)+t+p(e)}function g(t,e){var n=document.createElement("input");return n.type="hidden",n.name=t,n.value=e,n}function f(t){if(!l.includes(t.template)){var e=l.map((function(t){return"'"+t+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+e)}var n="node"===t.template,i=document.createElement("form");return i.method="POST",i.setAttribute("style","display:none!important;"),i.appendChild(g("project[title]",t.title)),i.appendChild(g("project[description]",t.description)),i.appendChild(g("project[template]",t.template)),t.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i.appendChild(g("project[dependencies]",JSON.stringify(t.dependencies)))),t.settings&&i.appendChild(g("project[settings]",JSON.stringify(t.settings))),Object.keys(t.files).forEach((function(e){var n="project[files]"+function(t){return"["+t.replace(/\[/g,"%5B").replace(/\]/g,"%5D")+"]"}(e),r=t.files[e];"string"==typeof r&&i.appendChild(g(n,r))})),i}var b=function(t,e){!function(t,e){var n=f(t);n.action=h("/run",e),n.target=function(t){return t&&!1===t.newWindow?"_self":"_blank"}(e),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(t,e)},x=n(89570),w=n(27788);class v{constructor(t){if(this.rawFileContent=t,(t.match(/export class/gi)||[]).length>1)throw new w.pb;this.replaceMetaAssets()}get className(){const[,t]=this.rawFileContent.match(/(?:export class\s)(\w*)/i)||[];return t||""}set className(t){this.rawFileContent=this.rawFileContent.replace(/(export class\s)(\w*)/i,`$1${t}`)}get hasNgModule(){return this.rawFileContent.includes("@NgModule")}get hasNgComponent(){return this.rawFileContent.includes("@Component")}addImport(t,e){const n=e.replace(".ts","");this.rawFileContent=this.rawFileContent.includes(n)?this.addIntoExistingImport(t,n):`import {${t}} from '${n}';\n${this.rawFileContent};`}toString(){return this.rawFileContent}addIntoExistingImport(t,e){const n=new RegExp(`(?:import\\s?\\{\\r?\\n?)(?:(?:.*),\\r?\\n?)*?(?:.*?)\\r?\\n?} from (?:'|")${e}(?:'|");`,"gm");return this.rawFileContent.replace(n,(e=>e.includes(t)?e:e.replace("{",`{${t}, `)))}replaceMetaAssets(){this.rawFileContent=this.rawFileContent.replace("import {assets} from '@demo/utils';\n",""),this.rawFileContent=this.rawFileContent.replace("assets`","`https://taiga-ui.dev/assets")}}class y extends v{addDeclaration(t){this.rawFileContent=this.rawFileContent.replace("declarations: [",`declarations: [${t}, `)}addModuleImport(t){this.rawFileContent=this.rawFileContent.replace("imports: [",`imports: [\n${t}, `)}hasDeclarationEntity(t){const[,e=""]=this.rawFileContent.match(/(?:declarations:\s\[)(.*)(?:\])/i)||[];return e.includes(t)}}class C extends v{set selector(t){this.rawFileContent=this.rawFileContent.replace(/(selector:\s['"`])(.*)(['"`])/gi,`$1${t}$3`)}set templateUrl(t){this.rawFileContent=this.rawFileContent.replace(/(templateUrl:\s['"`])(.*)(['"`])/gi,`$1${t}$3`)}set styleUrls(t){this.rawFileContent=this.rawFileContent.replace(/(styleUrls:\s)(\[.*\])/gi,`$1${JSON.stringify(t)}`)}}var j=n(74788);let k=(()=>{class t{constructor(){this.angular={"@angular/cdk":"12.x.x","@angular/core":"12.x.x","@angular/common":"12.x.x","@angular/compiler":"12.x.x","@angular/forms":"12.x.x","@angular/localize":"12.x.x","@angular/platform-browser":"12.x.x","@angular/platform-browser-dynamic":"12.x.x","@angular/animations":"12.x.x","@angular/router":"12.x.x"},this.taiga={"@taiga-ui/cdk":"3.x.x","@taiga-ui/i18n":"3.x.x","@taiga-ui/core":"3.x.x","@taiga-ui/kit":"3.x.x","@taiga-ui/icons":"3.x.x","@taiga-ui/styles":"3.x.x"},this.tinkoff={"@tinkoff/tui-editor":"1.x.x","@tinkoff/ng-polymorpheus":"4.x.x","@tinkoff/ng-dompurify":"4.x.x","@tinkoff/ng-event-plugins":"3.x.x"},this.webApis={"@ng-web-apis/common":"3.x.x","@ng-web-apis/intersection-observer":"3.x.x","@ng-web-apis/resize-observer":"3.x.x","@ng-web-apis/mutation-observer":"3.x.x"},this.common={"zone.js":"0.11.8",dompurify:"2.4.5",typescript:"4.3.5",rxjs:"6.6.7"}}get(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.angular),this.taiga),this.webApis),this.common),this.tinkoff)}}return t.ɵfac=function(e){return new(e||t)},t.ɵprov=j.Yz7({token:t,factory:t.ɵfac,providedIn:"root"}),t})();class F{static getProjectFiles(){return(0,s.mG)(this,void 0,void 0,(function*(){const[t,e,i,r,o,s]=yield Promise.all([n.e(298).then(n.t.bind(n,30298,17)),n.e(5699).then(n.t.bind(n,85699,17)),n.e(8680).then(n.t.bind(n,18680,17)),n.e(1360).then(n.t.bind(n,61360,17)),n.e(4052).then(n.t.bind(n,14052,17)),n.e(1392).then(n.t.bind(n,41392,17))].map(a.JQ)),[l,c]=(0,a.vi)(t),[p]=(0,a.vi)(e),[u]=(0,a.vi)(i),[d]=(0,a.vi)(r),[m]=(0,a.vi)(o),[h]=(0,a.vi)(s);return{angularJson:l,tsconfig:c,mainTs:p,indexHtml:u,polyfills:d,appModuleTs:h,styles:m}}))}}let S=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=j.Xpm({type:t,selectors:[["stackblitz-edit-button"]],decls:2,vars:0,consts:[["tuiButton","","size","s","type","button","appearance","flat","icon","assets/icons/stackblitz.svg"]],template:function(t,e){1&t&&(j.TgZ(0,"button",0),j._uU(1," Edit "),j.qZA())},directives:[o.v0],encapsulation:2,changeDetection:0}),t})();var O=n(66174);function $(t){return t===O.N.TS||t.endsWith(".ts")}function z(t){return t===O.N.LESS||`${t}`.endsWith(".less")}const E=t=>t.replace(/@import.+taiga-ui-local(.less)?';/g,"@import '@taiga-ui/core/styles/taiga-ui-local.less';"),T=(t,e="")=>`src/app/${t.join("")}${e}`,N=["./app.component.less"];let A=(()=>{class t{constructor(t){this.deps=t,this.name="Stackblitz",this.content=new x.Al(S)}edit(t,e,n){return(0,s.mG)(this,void 0,void 0,(function*(){if(!n.HTML||!n.TypeScript)return;const{appModuleTs:i}=yield F.getProjectFiles(),r=new y(i),o=new C(n.TypeScript),s=(l=n,Object.entries(l).filter((([t,e])=>e&&!function(t){return Object.values(O.N).includes(t)}(t)))),a=s.filter((([t,e])=>$(t)&&new v(e).hasNgModule)).map((([t,e])=>[t,new y(e)]));var l;const c=(t=>t.filter((([t,e])=>$(t)&&new v(e).hasNgComponent)).map((([t,e])=>[t,new C(e).className])))(s),p=(t=>{const e={};for(const[n,i]of t)e[T`${n}`]=z(n)?E(i):i;return e})(s);return c.forEach((([t,e])=>{a.some((([t,n])=>n.hasDeclarationEntity(e)))||(r.addImport(e,`./${t}`),r.addDeclaration(e))})),o.selector="my-app",o.templateUrl="./app.component.html",o.styleUrls=N,o.className="AppComponent",b(Object.assign(Object.assign({},this.getStackblitzProjectConfig()),{title:`${t}-${e}`,description:"TUI Editor example",files:Object.assign(Object.assign(Object.assign({},yield this.getBaseAngularProjectFiles()),p),{[T`app.module.ts`]:r.toString(),[T`app.component.ts`]:o.toString(),[T`app.component.html`]:`<tui-root>\n\n${n.HTML}\n</tui-root>`,[T`app.component.less`]:E(n.LESS||"")})}))}))}openStarter({title:t,description:e,files:n},i){return(0,s.mG)(this,void 0,void 0,(function*(){return b(Object.assign(Object.assign({},this.getStackblitzProjectConfig()),{title:t,description:e,files:Object.assign(Object.assign({},yield this.getBaseAngularProjectFiles()),n)}),i)}))}getBaseAngularProjectFiles(){return(0,s.mG)(this,void 0,void 0,(function*(){const{tsconfig:t,angularJson:e,mainTs:n,polyfills:i,indexHtml:r,styles:o,appModuleTs:s}=yield F.getProjectFiles();return{"tsconfig.json":t,"angular.json":e,"src/main.ts":n,"src/polyfills.ts":i,"src/index.html":r,"src/styles.less":o,[T`app.module.ts`]:s.toString()}}))}getStackblitzProjectConfig(){return{template:"angular-cli",dependencies:this.deps.get(),tags:["Angular","Taiga UI","Angular components","UI Kit"]}}}return t.ɵfac=function(e){return new(e||t)(j.LFG(k))},t.ɵprov=j.Yz7({token:t,factory:t.ɵfac}),t})(),I=(()=>{class t{constructor(t){this.stackblitz=t}ngOnInit(){return(0,s.mG)(this,void 0,void 0,(function*(){yield this.openStackblitz()}))}openStackblitz(){return(0,s.mG)(this,void 0,void 0,(function*(){const[t,e,i,r]=yield Promise.all([n.e(4008).then(n.t.bind(n,94008,17)),n.e(236).then(n.t.bind(n,50236,17)),n.e(2812).then(n.t.bind(n,52812,17)),n.e(5159).then(n.t.bind(n,5159,17))].map(a.JQ)).then((t=>t.map((t=>(0,a.vi)(t)[0]))));return this.stackblitz.openStarter({title:"TUI Editor Starter",description:"A starter for TUI Editor\nDocumentation: https://tinkoff.github.io/tui-editor",files:{"src/index.html":i,"src/styles.less":r,[T`app.component.html`]:t,[T`app.component.ts`]:e,[T`app.component.less`]:"@import '@taiga-ui/core/styles/taiga-ui-local.less';"}},{newWindow:!1,openFile:T`app.component.html`,hideExplorer:!0})}))}}return t.ɵfac=function(e){return new(e||t)(j.Y36(A))},t.ɵcmp=j.Xpm({type:t,selectors:[["demo-stackblitz-starter"]],features:[j._Bn([A])],decls:1,vars:1,consts:[["size","xxl","textContent","Stackblitz loading...",1,"loader",3,"overlay"]],template:function(t,e){1&t&&j._UZ(0,"tui-loader",0),2&t&&j.Q6J("overlay",!0)},directives:[r.kM],styles:[".loader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--tui-base-01);z-index:1}"],changeDetection:0}),t})(),M=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=j.oAB({type:t}),t.ɵinj=j.cJS({imports:[[r.dS,o.fN,i.Bz.forChild([{path:"",component:I}])]]}),t})()}}]);