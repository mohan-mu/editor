(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7313],{7313:(t,e,o)=>{o.r(e),o.d(e,{default:()=>a});var n=o(7222),r=o(7920),i=o(4135),l=o(9604),s=o(2978);const a=(()=>{var t;class e{constructor(){this.builtInTools=[l.TuiEditorTool.Undo],this.control=new n.MJ('\n        <p>This isn’t highlighted.</p>\n        <p>\n            <mark data-color="#e1d0fb">Grammar</mark>\n            <mark data-color="#c8eefc">can</mark> be tricky,\n            <mark style="background-color: #fae498">especially</mark>\n            for the <mark>uninitiated</mark>\n        </p>\n        ')}toggleHighlight(){this.wysiwyg?.editor?.getOriginTiptapEditor()?.commands.toggleHighlight({color:"#c8eefc"})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.VBU({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&s.GBs(l.TuiEditor,5),2&t){let t;s.mGM(t=s.lsd())&&(e.wysiwyg=t.first)}},standalone:!0,features:[s.Jv_([{provide:l.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,9604)).then((({TuiStarterKit:t})=>t)),o.e(2077).then(o.bind(o,2077)).then((({default:t})=>t.configure({types:["heading","paragraph"]}))),Promise.resolve().then(o.bind(o,5377)).then((({default:t})=>t)),o.e(5838).then(o.bind(o,5838)).then((({Highlight:t})=>t.configure({multicolor:!0,HTMLAttributes:{class:"marked"}})))]}]),s.aNF],decls:10,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["appearance","icon","iconStart","@tui.droplets","size","s","tuiIconButton","","tuiItem","","type","button",1,"t-tool","t-tool_margin",3,"click"],[3,"content"]],template:function(t,e){1&t&&(s.j41(0,"tui-editor",0),s.qex(1,1),s.j41(2,"button",2),s.bIt("click",(function(){return e.toggleHighlight()})),s.k0s(),s.bVm(),s.k0s(),s.j41(3,"h4"),s.EFF(4,"HTML:"),s.k0s(),s.nrm(5,"tui-editor-socket",3),s.j41(6,"h4"),s.EFF(7,"Text:"),s.k0s(),s.j41(8,"p"),s.EFF(9),s.k0s()),2&t&&(s.Y8G("formControl",e.control)("tools",e.builtInTools),s.R7$(5),s.Y8G("content",e.control.value||""),s.R7$(4),s.JRh(e.control.value))},dependencies:[n.X1,n.BC,n.l_,i.p,l.TuiEditor,l.TuiEditorSocket,r.K],styles:[".marked{padding:.3125rem;border-radius:.3125rem;margin:0 .3125rem;box-shadow:0 0 0 .125rem #007bff;line-height:2.6rem}"],changeDetection:0}),e})()}}]);