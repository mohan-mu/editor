(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8532],{18532:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var o=t(20755),i=t(43226),r=t(33407),s=t(77202),d=t(26624),a=t(78748),l=t(20155),u=t(81749),h=t(67901),g=t(42351);const c=(()=>{var e;class n{constructor(){this.destroy$=(0,o.f3M)(r.a31,{self:!0}),this.markdown$=new a.x,this.builtInTools=[d.TuiEditorTool.Undo],this.control=new i.NI("# h1 Heading 😎\n\n## h2 Heading\n\n### h3 Heading\n\n#### h4 Heading\n\n##### h5 Heading\n\n###### h6 Heading\n\n----\n\n![image info](./assets/icons/logo.svg)\n")}ngOnInit(){this.markdown$.pipe((0,l.b)(500),(0,u.R)(this.destroy$)).subscribe((e=>this.editor?.commands.setContent(e)))}get editor(){return this.editorRef?.editorService.getOriginTiptapEditor()??null}get markdown(){return this.editor?.storage?.markdown?.getMarkdown()??""}}return(e=n).ɵfac=function(n){return new(n||e)},e.ɵcmp=o.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,n){if(1&e&&o.Gf(d.TuiEditorComponent,5),2&e){let e;o.iGM(e=o.CRH())&&(n.editorRef=e.first)}},standalone:!0,features:[o._Bn([{provide:d.TUI_EDITOR_EXTENSIONS,useValue:[t.e(7400).then(t.bind(t,27400)).then((({StarterKit:e})=>e)),Promise.resolve().then(t.bind(t,5664)).then((({Image:e})=>e.configure({inline:!0}))),Promise.resolve().then(t.bind(t,26624)).then((({TuiMarkdown:e})=>e.configure({html:!0,tightLists:!0,tightListClass:"tight",bulletListMarker:"-",linkify:!0,breaks:!0,transformPastedText:!0,transformCopiedText:!0})))]},r.a31]),o.jDz],decls:4,vars:5,consts:[[3,"formControl","tools"],[1,"tui-space_top-5",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(o.TgZ(0,"tui-editor",0),o._uU(1," Placeholder\n"),o.qZA(),o.TgZ(2,"tui-textarea",1),o.NdJ("ngModelChange",(function(e){return n.markdown$.next(e)})),o._uU(3," Markdown\n"),o.qZA()),2&e&&(o.Q6J("formControl",n.control)("tools",n.builtInTools),o.xp6(2),o.Udp("min-height",30,"rem"),o.Q6J("ngModel",n.markdown))},dependencies:[d.TuiEditorComponent,i.UX,i.JJ,i.oH,s.MuE,h.FC,g.B,i.u5,i.On],encapsulation:2,changeDetection:0}),n})()}}]);