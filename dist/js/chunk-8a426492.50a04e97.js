(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a426492"],{"0e26":function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("b-container",[o("h3",[t._v("燈光設備")]),t._l(t.lightList,(function(e,l){return o("b-card",{key:l,staticClass:"mb-3",attrs:{"bg-variant":"light"}},[o("b-row",[o("b-col",{attrs:{cols:"8"}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[e.toggled?o("p",{key:"on",staticClass:"p-2 m-0 power-on font-weight-bold"},[t._v(" "+t._s(e.name)+" ")]):o("p",{key:"off",staticClass:"p-2 m-0 power-off font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])])],1),o("b-col",{attrs:{cols:"4"}},[o("ElementSwitchToggle",{attrs:{toggled:e.toggled},on:{"update:toggled":function(o){return t.$set(e,"toggled",o)},toggleButton:function(e){return t.changeLightToggleValue(l)}}})],1)],1)],1)})),o("h3",[t._v("冷氣機")]),t._l(t.powerList,(function(e,l){return o("b-card",{key:l,staticClass:"mb-3",attrs:{"bg-variant":"light"}},[o("b-row",[o("b-col",{attrs:{cols:"8"}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[e.toggled?o("p",{key:"on",staticClass:"p-2 m-0 power-on font-weight-bold"},[t._v(" "+t._s(e.name)+" ")]):o("p",{key:"off",staticClass:"p-2 m-0 power-off font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])])],1),o("b-col",{attrs:{cols:"4"}},[o("ElementSwitchToggle",{attrs:{toggled:e.toggled},on:{"update:toggled":function(o){return t.$set(e,"toggled",o)},toggleButton:function(e){return t.changeToggleValue(l)}}})],1)],1)],1)}))],2)],1)},n=[],g=o("346e"),s={name:"PageOnOffController",components:{ElementSwitchToggle:g["a"]},data:function(){return{lightList:[{name:"B1F 走道燈",type:"light",toggled:!1},{name:"B1F 車道燈",type:"light",toggled:!1},{name:"1F 大廳燈",type:"light",toggled:!1},{name:"1F 投射燈",type:"light",toggled:!0}],powerList:[{name:"B1F 冷氣機",type:"light",toggled:!1},{name:"B1F 冷氣機",type:"light",toggled:!0},{name:"1F 冷氣機",type:"light",toggled:!0},{name:"2F 冷氣機",type:"light",toggled:!1}],show:!0,powerOption:[{text:"電力設備",value:"electric"},{text:"燈光設備",value:"light"}],select:"",input:""}},methods:{changeLightToggleValue:function(t){this.lightList[t].toggled=!this.lightList[t].toggled,this.lightList[t].toggled?console.log("START"):console.log("STOP")},changePowerToggleValue:function(t){this.powerList[t].toggled=!this.powerList[t].toggled,this.powerList[t].toggled?console.log("START"):console.log("STOP")},insertLightList:function(){this.lightList.push({name:this.input,type:this.select,toggled:!1})}}},i=s,a=(o("98cf"),o("2877")),c=Object(a["a"])(i,l,n,!1,null,"a9f48172",null);e["default"]=c.exports},2507:function(t,e,o){},"346e":function(t,e,o){"use strict";var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("span",{staticClass:"fa toggle",class:{"fa-toggle-on":t.toggled,"fa-toggle-off":!t.toggled,"text-success":t.toggled,"text-muted":!t.toggled},on:{click:t.toggleButton}}),o("span",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"toggle-label"},[t._v(t._s(t.label))])])},n=[],g={name:"ElementSwitchToggle",props:{toggled:{type:Boolean,default:!1,required:!0},label:{type:String,default:"",required:!1}},methods:{toggleButton:function(){this.$emit("toggleButton")}}},s=g,i=(o("52b7"),o("2877")),a=Object(i["a"])(s,l,n,!1,null,"47c59f1e",null);e["a"]=a.exports},"52b7":function(t,e,o){"use strict";var l=o("2507"),n=o.n(l);n.a},7619:function(t,e,o){},"98cf":function(t,e,o){"use strict";var l=o("7619"),n=o.n(l);n.a}}]);
//# sourceMappingURL=chunk-8a426492.50a04e97.js.map