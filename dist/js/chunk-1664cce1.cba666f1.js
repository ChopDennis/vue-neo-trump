(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1664cce1"],{"23c6":function(t,e,a){},"346e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"fa toggle",class:{"fa-toggle-on":t.toggled,"fa-toggle-off":!t.toggled,"text-success":t.toggled,"text-muted":!t.toggled},on:{click:t.toggleButton}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"toggle-label"},[t._v(t._s(t.label))])])},o=[],l={name:"ElementSwitchToggle",props:{toggled:{type:Boolean,default:!1,required:!0},label:{type:String,default:"",required:!1}},methods:{toggleButton:function(){this.$emit("toggleButton")}}},n=l,i=(a("9fdf"),a("2877")),c=Object(i["a"])(n,s,o,!1,null,"7b31396e",null);e["a"]=c.exports},5543:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",[a("b-card",{attrs:{"bg-variant":"light"}},[a("b-row",{staticClass:"mb-3"},[a("b-col",{attrs:{cols:"8",lg:"4"}},[a("h5",{staticClass:"d-none d-lg-block font-weight-bold"},[a("span",{staticClass:"fa fa-power-off mx-3"}),t._v("主機開關 ")]),a("h5",{staticClass:"d-lg-none",staticStyle:{"line-height":"40px"}},[a("span",{staticClass:"fa fa-power-off mx-3"}),t._v("主機開關 ")])]),a("b-col",{attrs:{cols:"4"}},[a("ElementSwitchToggle",{attrs:{toggled:t.$store.state.system.mainframe.toggled},on:{"update:toggled":function(e){return t.$set(t.$store.state.system.mainframe,"toggled",e)},toggleButton:t.changeToggleValue}})],1)],1),a("b-form-group",{staticClass:"mb-3",attrs:{"label-cols-lg":"4",label:"目前主機名稱：","label-size":"lg","label-class":"font-weight-bold pt-0"}},[a("b-form-input",{attrs:{disabled:""},model:{value:t.hostnameOld,callback:function(e){t.hostnameOld=e},expression:"hostnameOld"}})],1),a("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"4",label:"更新主機名稱：","label-size":"lg","label-class":"font-weight-bold pt-0"}},[a("b-form-input",{model:{value:t.hostname,callback:function(e){t.hostname=e},expression:"hostname"}})],1),a("div",{staticClass:"m-auto w-25"},[a("b-btn",{staticClass:"my-3",attrs:{block:""},on:{click:t.postHostname}},[t._v(" 送出 ")])],1),a("div",{staticClass:"bg-white border-info border p-3 rounded-lg overflow-auto",staticStyle:{"max-height":"80vh"}},[a("pre",{staticClass:"text-left"},[t._v(t._s(t.log))])])],1)],1)],1)},o=[],l=a("bc3a"),n=a.n(l),i=a("346e"),c={name:"SystemMainframe",components:{ElementSwitchToggle:i["a"]},data:function(){return{log:"",hostname:"",hostnameOld:""}},beforeMount:function(){this.mainframeControl("log"),this.mainframeControl("status")},beforeCreate:function(){var t=this;n.a.get(this.$store.state.url+"/api/system/hostname").then((function(e){console.log(e),t.hostname=e.data.hostname,t.hostnameOld=e.data.hostname})).catch((function(t){console.log(t)}))},methods:{changeToggleValue:function(){var t=this.$store.state.system.mainframe.toggled;t=!t,this.$store.state.system.mainframe.toggled=t,t?(this.mainframeControl("start"),console.log("START")):(this.mainframeControl("stop"),console.log("STOP")),console.log(t),this.mainframeControl("log"),this.mainframeControl("status")},mainframeControl:function(t){var e=this,a={name:"mainframe",action:t};n.a.post(this.$store.state.url+"/api/system/systemd",a).then((function(a){"log"===t?e.log=a.data.message:"status"===t&&(e.status=a.data.message,e.$store.state.system.mainframe.toggled="on"===a.data.message,console.log("Status: ",a.data.message),console.log(e.$store.state.system.mainframe.toggled))})).catch((function(t){console.log(t)}))},postHostname:function(){var t={hostname:this.hostname};n.a.post(this.$store.state.url+"/api/system/hostname",t).then((function(t){console.log(t),"Success"===t.data.status&&alert("主機名稱更新成功！")})).catch((function(t){console.log(t)}))}}},r=c,g=(a("b1e4"),a("2877")),m=Object(g["a"])(r,s,o,!1,null,"a503ab38",null);e["default"]=m.exports},"62c3":function(t,e,a){},"9fdf":function(t,e,a){"use strict";var s=a("62c3"),o=a.n(s);o.a},b1e4:function(t,e,a){"use strict";var s=a("23c6"),o=a.n(s);o.a}}]);
//# sourceMappingURL=chunk-1664cce1.cba666f1.js.map