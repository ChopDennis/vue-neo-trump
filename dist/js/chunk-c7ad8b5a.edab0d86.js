(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7ad8b5a"],{"1d6c":function(t,e,l){"use strict";var o=l("bc6c"),n=l.n(o);n.a},"346e":function(t,e,l){"use strict";var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("span",{staticClass:"fa toggle",class:{"fa-toggle-on":t.toggled,"fa-toggle-off":!t.toggled,"text-success":t.toggled,"text-muted":!t.toggled},on:{click:t.toggleButton}}),l("span",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"toggle-label"},[t._v(t._s(t.label))])])},n=[],s={name:"ElementSwitchToggle",props:{toggled:{type:Boolean,default:!1,required:!0},label:{type:String,default:"",required:!1}},methods:{toggleButton:function(){this.$emit("toggleButton")}}},g=s,a=(l("9fdf"),l("2877")),i=Object(a["a"])(g,o,n,!1,null,"7b31396e",null);e["a"]=i.exports},"62c3":function(t,e,l){},"70a5":function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("b-container",[l("b-card",{staticClass:"mb-5",attrs:{"bg-variant":"light"}},[l("b-form-group",{staticClass:"mb-3",attrs:{"label-cols-lg":"4",label:"Input the power name:","label-size":"md","label-class":"font-weight-bold pt-0"}},[l("b-input",{model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),l("b-form-group",{staticClass:"mb-3",attrs:{"label-cols-lg":"4",label:"Select the power type:","label-size":"md","label-class":"font-weight-bold pt-0"}},[l("b-form-select",{attrs:{options:t.powerOption,required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),l("b-btn",{on:{click:t.insertLightList}},[t._v(" Submit ")])],1),l("h3",[t._v("B4F 燈光設備")]),t._l(t.lightList,(function(e,o){return l("b-card",{key:o,staticClass:"mb-3",attrs:{"bg-variant":"light"}},[l("b-row",[l("b-col",{attrs:{cols:"8"}},[l("transition",{attrs:{name:"fade",mode:"out-in"}},[e.toggled?l("p",{key:"on",staticClass:"p-2 m-0 power-on font-weight-bold"},[t._v(" "+t._s(e.name)+" ")]):l("p",{key:"off",staticClass:"p-2 m-0 power-off font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])])],1),l("b-col",{attrs:{cols:"4"}},[l("ElementSwitchToggle",{attrs:{toggled:e.toggled},on:{"update:toggled":function(l){return t.$set(e,"toggled",l)},toggleButton:function(e){return t.changeLightToggleValue(o)}}})],1)],1)],1)})),l("h3",[t._v("冷氣機")]),t._l(t.powerList,(function(e,o){return l("b-card",{key:o,staticClass:"mb-3",attrs:{"bg-variant":"light"}},[l("b-row",[l("b-col",{attrs:{cols:"8"}},[l("transition",{attrs:{name:"fade",mode:"out-in"}},[e.toggled?l("p",{key:"on",staticClass:"p-2 m-0 power-on font-weight-bold"},[t._v(" "+t._s(e.name)+" ")]):l("p",{key:"off",staticClass:"p-2 m-0 power-off font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])])],1),l("b-col",{attrs:{cols:"4"}},[l("ElementSwitchToggle",{attrs:{toggled:e.toggled},on:{"update:toggled":function(l){return t.$set(e,"toggled",l)},toggleButton:function(e){return t.changeToggleValue(o)}}})],1)],1)],1)}))],2)],1)},n=[],s=l("346e"),g={name:"SystemOnOffControl",components:{ElementSwitchToggle:s["a"]},data:function(){return{lightList:[{name:"B4F 走道燈",type:"light",toggled:!1},{name:"B4F 車道燈",type:"light",toggled:!1},{name:"B4F 大廳燈",type:"light",toggled:!1},{name:"B4F 投射燈",type:"light",toggled:!0}],powerList:[{name:"B3F 冷氣機",type:"light",toggled:!1},{name:"B4F 冷氣機",type:"light",toggled:!0},{name:"1F 冷氣機",type:"light",toggled:!0},{name:"2F 冷氣機",type:"light",toggled:!1}],show:!0,powerOption:[{text:"電力設備",value:"electric"},{text:"燈光設備",value:"light"}],select:"",input:""}},methods:{changeLightToggleValue:function(t){this.lightList[t].toggled=!this.lightList[t].toggled,this.lightList[t].toggled?console.log("START"):console.log("STOP")},changePowerToggleValue:function(t){this.powerList[t].toggled=!this.powerList[t].toggled,this.powerList[t].toggled?console.log("START"):console.log("STOP")},insertLightList:function(){this.lightList.push({name:this.input,type:this.select,toggled:!1})}}},a=g,i=(l("1d6c"),l("2877")),c=Object(i["a"])(a,o,n,!1,null,"31b255d8",null);e["default"]=c.exports},"9fdf":function(t,e,l){"use strict";var o=l("62c3"),n=l.n(o);n.a},bc6c:function(t,e,l){}}]);
//# sourceMappingURL=chunk-c7ad8b5a.edab0d86.js.map