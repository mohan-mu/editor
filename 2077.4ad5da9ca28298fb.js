(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[2077],{2077:(t,e,i)=>{i.r(e),i.d(e,{TextAlign:()=>n,default:()=>n});const n=i(6426).Extension.create({name:"textAlign",addOptions:()=>({types:[],alignments:["left","center","right","justify"],defaultAlignment:"left"}),addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:t=>{const e=t.style.textAlign||this.options.defaultAlignment;return this.options.alignments.includes(e)?e:this.options.defaultAlignment},renderHTML:t=>t.textAlign===this.options.defaultAlignment?{}:{style:`text-align: ${t.textAlign}`}}}}]},addCommands(){return{setTextAlign:t=>({commands:e})=>!!this.options.alignments.includes(t)&&this.options.types.map((i=>e.updateAttributes(i,{textAlign:t}))).every((t=>t)),unsetTextAlign:()=>({commands:t})=>this.options.types.map((e=>t.resetAttributes(e,"textAlign"))).every((t=>t))}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign("left"),"Mod-Shift-e":()=>this.editor.commands.setTextAlign("center"),"Mod-Shift-r":()=>this.editor.commands.setTextAlign("right"),"Mod-Shift-j":()=>this.editor.commands.setTextAlign("justify")}}})}}]);