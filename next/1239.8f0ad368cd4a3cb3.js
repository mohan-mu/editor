(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1239],{31239:(e,o,t)=>{t.r(o),t.d(o,{Placeholder:()=>d,default:()=>d});var n=t(59911),s=t(27825),i=t(97387);const d=n.Extension.create({name:"placeholder",addOptions:()=>({emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",placeholder:"Write something …",showOnlyWhenEditable:!0,considerAnyAsEmpty:!1,showOnlyCurrent:!0,includeChildren:!1}),addProseMirrorPlugins(){return[new s.Sy({key:new s.H$("placeholder"),props:{decorations:({doc:e,selection:o})=>{var t;const n=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:s}=o,d=[];if(!n)return null;const{firstChild:r}=e.content,l=r&&r.type.isLeaf,h=r&&r.isAtom,p=!!this.options.considerAnyAsEmpty||r&&r.type.name===(null===(t=e.type.contentMatch.defaultType)||void 0===t?void 0:t.name),a=e.content.childCount<=1&&r&&p&&r.nodeSize<=2&&(!l||!h);return e.descendants(((e,o)=>{const t=s>=o&&s<=o+e.nodeSize,n=!e.isLeaf&&!e.childCount;if((t||!this.options.showOnlyCurrent)&&n){const n=[this.options.emptyNodeClass];a&&n.push(this.options.emptyEditorClass);const s=i.p.node(o,o+e.nodeSize,{class:n.join(" "),"data-placeholder":"function"==typeof this.options.placeholder?this.options.placeholder({editor:this.editor,node:e,pos:o,hasAnchor:t}):this.options.placeholder});d.push(s)}return this.options.includeChildren})),i.EH.create(e,d)}}})]}})}}]);