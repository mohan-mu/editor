"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[4661],{34661:(a,o,r)=>{r.r(o),r.d(o,{Highlight:()=>s,default:()=>s,inputRegex:()=>n,pasteRegex:()=>u});var e=r(11046);const n=/(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/,u=/(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g,s=e.Mark.create({name:"highlight",addOptions:()=>({multicolor:!1,HTMLAttributes:{}}),addAttributes(){return this.options.multicolor?{color:{default:null,parseHTML:t=>t.getAttribute("data-color")||t.style.backgroundColor,renderHTML:t=>t.color?{"data-color":t.color,style:`background-color: ${t.color}; color: inherit`}:{}}}:{}},parseHTML:()=>[{tag:"mark"}],renderHTML({HTMLAttributes:t}){return["mark",(0,e.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setHighlight:t=>({commands:i})=>i.setMark(this.name,t),toggleHighlight:t=>({commands:i})=>i.toggleMark(this.name,t),unsetHighlight:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-h":()=>this.editor.commands.toggleHighlight()}},addInputRules(){return[(0,e.markInputRule)({find:n,type:this.type})]},addPasteRules(){return[(0,e.markPasteRule)({find:u,type:this.type})]}})}}]);