(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[3336],{73336:(t,e,i)=>{i.r(e),i.d(e,{TextAlign:()=>n,default:()=>n});const n=i(11046).Extension.create({name:"textAlign",addOptions:()=>({types:[],alignments:["left","center","right","justify"],defaultAlignment:"left"}),addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:t=>t.style.textAlign||this.options.defaultAlignment,renderHTML:t=>t.textAlign===this.options.defaultAlignment?{}:{style:`text-align: ${t.textAlign}`}}}}]},addCommands(){return{setTextAlign:t=>({commands:e})=>!!this.options.alignments.includes(t)&&this.options.types.every((i=>e.updateAttributes(i,{textAlign:t}))),unsetTextAlign:()=>({commands:t})=>this.options.types.every((e=>t.resetAttributes(e,"textAlign")))}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign("left"),"Mod-Shift-e":()=>this.editor.commands.setTextAlign("center"),"Mod-Shift-r":()=>this.editor.commands.setTextAlign("right"),"Mod-Shift-j":()=>this.editor.commands.setTextAlign("justify")}}})}}]);