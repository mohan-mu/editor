"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[5034],{25034:(n,e,r)=>{r.r(e),r.d(e,{Superscript:()=>u,default:()=>u});var s=r(11046);const u=s.Mark.create({name:"superscript",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"sup"},{style:"vertical-align",getAttrs:t=>"super"===t&&null}],renderHTML({HTMLAttributes:t}){return["sup",(0,s.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setSuperscript:()=>({commands:t})=>t.setMark(this.name),toggleSuperscript:()=>({commands:t})=>t.toggleMark(this.name),unsetSuperscript:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-.":()=>this.editor.commands.toggleSuperscript()}}})}}]);