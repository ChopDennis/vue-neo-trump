(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6964c3f3"],{2507:function(t,e,a){},"346e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"fa toggle",class:{"fa-toggle-on":t.toggled,"fa-toggle-off":!t.toggled,"text-success":t.toggled,"text-muted":!t.toggled},on:{click:t.toggleButton}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"toggle-label"},[t._v(t._s(t.label))])])},n=[],o={name:"ElementSwitchToggle",props:{toggled:{type:Boolean,default:!1,required:!0},label:{type:String,default:"",required:!1}},methods:{toggleButton:function(){this.$emit("toggleButton")}}},l=o,r=(a("52b7"),a("2877")),i=Object(r["a"])(l,s,n,!1,null,"47c59f1e",null);e["a"]=i.exports},"52b7":function(t,e,a){"use strict";var s=a("2507"),n=a.n(s);n.a},"566f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"py-3"},[a("b-btn",{staticClass:"font-weight-bold mb-3",attrs:{variant:"info"},on:{click:t.reloadPage}},[t._v(" 手動重整系統 ")]),a("b-overlay",{attrs:{fixed:"",show:t.show,"no-wrap":"",variant:"dark","spinner-variant":"light"}}),a("b-modal",{ref:"device-error",attrs:{"hide-footer":"","header-bg-variant":"dark","header-text-variant":"white",centered:"",title:"系統訊息"}},[a("p",{staticClass:"my-4 text-center"},[t._v(" 燈光設備正在關閉，請稍等網頁重整...。 ")])]),a("b-container",[a("b-row",[a("b-col",{attrs:{lg:"6"}},t._l(t.defaultTable["15"],(function(e,s){return a("b-row",{key:"15-"+s,staticClass:"rounded-lg border-0 text-white font-weight-bold mb-3 mx-1",staticStyle:{"background-color":"#343a40"}},[a("b-col",{staticClass:"text-lg-center text-left py-2",staticStyle:{"line-height":"2.5rem"},attrs:{cols:"8"}},[t._v(" "+t._s(e.name)+" ")]),a("b-col",{attrs:{cols:"4"}},[a("ElementSwitchToggle",{staticClass:"mt-2",attrs:{toggled:e.status},on:{"update:toggled":function(a){return t.$set(e,"status",a)},toggleButton:function(a){return t.toggleLightSystem(s+1,e.status,15)}}})],1)],1)})),1),a("b-col",{attrs:{lg:"6"}},[t._l(t.defaultTable["16"],(function(e,s){return a("b-row",{key:"16-"+s,staticClass:"rounded-lg border-0 text-white font-weight-bold mb-3 mx-1",staticStyle:{"background-color":"#343a40"}},[a("b-col",{staticClass:"text-lg-center text-left py-2",staticStyle:{"line-height":"2.5rem"},attrs:{cols:"8"}},[t._v(" "+t._s(e.name)+" ")]),a("b-col",{attrs:{cols:"4"}},[a("ElementSwitchToggle",{staticClass:"mt-2",attrs:{toggled:e.status},on:{"update:toggled":function(a){return t.$set(e,"status",a)},toggleButton:function(a){return t.toggleLightSystem(s+1,e.status,16)}}})],1)],1)})),t._l(t.defaultTable["17"],(function(e,s){return a("b-row",{key:"17-"+s,staticClass:"rounded-lg border-0 text-white font-weight-bold mb-3 mx-1",staticStyle:{"background-color":"#343a40"}},[a("b-col",{staticClass:"text-lg-center text-left py-2",staticStyle:{"line-height":"2.5rem"},attrs:{cols:"8"}},[t._v(" "+t._s(e.name)+" ")]),a("b-col",{attrs:{cols:"4"}},[a("ElementSwitchToggle",{staticClass:"mt-2",attrs:{toggled:e.status},on:{"update:toggled":function(a){return t.$set(e,"status",a)},toggleButton:function(a){return t.toggleLightSystem(s+1,e.status,17)}}})],1)],1)}))],2)],1)],1)],1)},n=[],o=(a("4160"),a("b0c0"),a("159b"),a("e848")),l=a("955c"),r=a("346e"),i={name:"PageLightList",components:{ElementSwitchToggle:r["a"]},data:function(){return{light1l1:o,defaultTable:l,toggled:!0,errorFlag:!1,show:!0}},watch:{errorFlag:"showErrorModel"},mounted:function(){var t=this;this.readLight1l1(),setTimeout((function(){t.showOverlay()}),1500)},methods:{readLight1l1:function(){var t=this,e="http://192.168.1.10/proxy/api/device/value/read_ac_100";this.axios.get(e).then((function(e){var a=/^DIn/;e.data.forEach((function(e){a.test(e.name)&&(15!==e.address&&16!==e.address&&17!==e.address||t.light1l1[e.address].forEach((function(t){t.status===e.name&&(t.status=1===e.status)})))}))})).catch((function(t){console.log(t)}))},toggleLightSystem:function(t,e,a){var s=this,n=!0===e?0:1,o=t<10?"0"+t:t,l={port:"/dev/ttyUSB0",address:a,name:"DOut"+o,value:n},r="http://192.168.1.10/proxy/api/device/value/write";this.errorFlag=!0,this.axios.post(r,l).then((function(t){0===t.data.status?setTimeout((function(){s.reloadPage()}),1500):alert("System error!")}))},showErrorModel:function(){this.$refs["device-error"].show()},showOverlay:function(){this.defaultTable=this.light1l1,this.show=!1},reloadPage:function(){location.reload()}}},u=i,c=(a("c725"),a("2877")),g=Object(c["a"])(u,s,n,!1,null,"b666e636",null);e["default"]=g.exports},"66b1":function(t,e,a){},"955c":function(t){t.exports=JSON.parse('{"15":[{"name":"2F 梯廳冷氣","status":false},{"name":"3F 梯廳冷氣","status":false},{"name":"4F 梯廳冷氣","status":false},{"name":"5F 梯廳冷氣","status":false},{"name":"6F 梯廳冷氣","status":false},{"name":"7F 梯廳冷氣","status":false},{"name":"8F 梯廳冷氣","status":false},{"name":"9F 梯廳冷氣","status":false}],"16":[{"name":"10F 梯廳冷氣","status":false},{"name":"11F 梯廳冷氣","status":false},{"name":"12F 梯廳冷氣","status":false},{"name":"13F 梯廳冷氣","status":false},{"name":"14F 梯廳冷氣","status":false},{"name":"15F 梯廳冷氣","status":false},{"name":"16F 梯廳冷氣","status":false},{"name":"17F 梯廳冷氣","status":false}],"17":[{"name":"18F 梯廳冷氣","status":false},{"name":"19F 梯廳冷氣","status":false}]}')},b0c0:function(t,e,a){var s=a("83ab"),n=a("9bf2").f,o=Function.prototype,l=o.toString,r=/^\s*function ([^ (]*)/,i="name";s&&!(i in o)&&n(o,i,{configurable:!0,get:function(){try{return l.call(this).match(r)[1]}catch(t){return""}}})},c725:function(t,e,a){"use strict";var s=a("66b1"),n=a.n(s);n.a},e848:function(t){t.exports=JSON.parse('{"15":[{"name":"2F 梯廳冷氣","status":"DIn01"},{"name":"3F 梯廳冷氣","status":"DIn02"},{"name":"4F 梯廳冷氣","status":"DIn03"},{"name":"5F 梯廳冷氣","status":"DIn04"},{"name":"6F 梯廳冷氣","status":"DIn05"},{"name":"7F 梯廳冷氣","status":"DIn06"},{"name":"8F 梯廳冷氣","status":"DIn07"},{"name":"9F 梯廳冷氣","status":"DIn08"}],"16":[{"name":"10F 梯廳冷氣","status":"DIn01"},{"name":"11F 梯廳冷氣","status":"DIn02"},{"name":"12F 梯廳冷氣","status":"DIn03"},{"name":"13F 梯廳冷氣","status":"DIn04"},{"name":"14F 梯廳冷氣","status":"DIn05"},{"name":"15F 梯廳冷氣","status":"DIn06"},{"name":"16F 梯廳冷氣","status":"DIn07"},{"name":"17F 梯廳冷氣","status":"DIn08"}],"17":[{"name":"18F 梯廳冷氣","status":"DIn01"},{"name":"19F 梯廳冷氣","status":"DIn02"}]}')}}]);
//# sourceMappingURL=chunk-6964c3f3.717922fe.js.map