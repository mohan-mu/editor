(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[5681],{5681:(e,t,a)=>{a.r(t),a.d(t,{TuiDetails:()=>n,TuiDetailsContent:()=>d,TuiSummary:()=>i});var r=a(48178),s=a(46309);const n=s.Node.create({name:"details",addOptions:()=>({HTMLAttributes:{}}),addAttributes:()=>({opened:{default:!0,keepOnSplit:!1,parseHTML:e=>"true"===e.getAttribute("data-opened"),renderHTML:e=>({"data-opened":e.opened})}}),content:"summary detailsContent",group:"block",draggable:!0,allowGapCursor:!0,isolating:!0,parseHTML:()=>[{tag:"details"}],renderHTML({HTMLAttributes:e}){return["div",{class:"t-details-wrapper t-details-wrapper_rendered"},["details",(0,s.mergeAttributes)(this.options.HTMLAttributes,e),0],["button",{class:"t-details-arrow"}]]},addNodeView(){return({node:e,editor:t})=>{if(globalThis.document){const a=document.createElement("div"),s=document.createElement("details"),n=document.createElement("button"),d=document.createElement("button");return a.className="t-details-wrapper",n.className="t-details-arrow",d.className="t-details-delete",s.open=e.attrs.opened,n.addEventListener("click",(()=>{s.open=!s.open,e.attrs.opened=s.open})),d.addEventListener("click",(()=>{(0,r.yU)(t.state,t.view.dispatch,this.name),t.commands.focus("end")})),a.append(s,n,d),{dom:a,contentDOM:s}}}},addCommands(){return{setDetails:()=>({commands:e,state:t})=>{const a=(0,r.Ap)(t);return e.insertContent(`<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${a}</p></div></details><p></p>`)},removeDetails:()=>({editor:e,state:t,dispatch:a})=>((0,r.yU)(t,a,this.name),e.commands.focus("end"))}}}),d=s.Node.create({name:"detailsContent",content:"block+",group:"block",allowGapCursor:!0,parseHTML:()=>[{tag:'div[data-type="details-content"]'}],renderHTML({HTMLAttributes:e}){return["div",(0,s.mergeAttributes)(this.options.HTMLAttributes,e,{"data-type":"details-content"}),0]}}),i=s.Node.create({name:"summary",addOptions:()=>({HTMLAttributes:{}}),content:"paragraph",group:"block",parseHTML:()=>[{tag:"summary"}],renderHTML({HTMLAttributes:e}){return["summary",(0,s.mergeAttributes)(this.options.HTMLAttributes,e),0]}})}}]);