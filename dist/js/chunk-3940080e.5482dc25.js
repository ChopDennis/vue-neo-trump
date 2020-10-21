(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3940080e"],{"004e":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"py-3"},[e("b-container",[e("b-modal",{ref:"device-error",attrs:{"hide-footer":"","header-bg-variant":"danger","header-text-variant":"white",centered:"",title:"設備異常警告"}},[e("p",{staticClass:"my-4 text-center"},[t._v(" 有設備異常，請儘速至現場檢查，並聯絡技術人員。 ")])]),e("b-card",{staticClass:"mb-3 border-0",attrs:{header:"進排風系統","header-text-variant":"white","header-class":"font-weight-bold dark-blue"}},[e("b-row",t._l(t.defaultTable,(function(t,a){return e("b-col",{key:"fan-"+a,staticClass:"py-3",attrs:{lg:"3"}},[e("div",[e("SystemInfoCard",{attrs:{name:t[0].name,error:t[0].error,status:t[0].status}})],1)])})),1)],1)],1)],1)},s=[],n=(e("4160"),e("b0c0"),e("d3b7"),e("25f0"),e("159b"),e("d3ed")),i=e("8a15"),o=e("d068"),c={name:"PageCentralSystem",components:{SystemInfoCard:o["a"]},data:function(){return{defaultTable:i,pointTable:n,errorFlag:!1}},watch:{errorFlag:"showErrorModel"},mounted:function(){this.readFanSystem(),setInterval((function(){location.reload()}),6e4)},methods:{readFanSystem:function(){var t=this,a="http://192.168.1.10/proxy/api/device/value/read_fan_000";this.axios.get(a).then((function(a){var e=/^DIn/;a.data.forEach((function(a){e.test(a.name)&&t.pointTable[a.address].forEach((function(e){e.status===a.name?e.status=a.status.toString():e.error===a.name&&(e.error=a.status.toString(),1===e.error&&(t.errorFlag=!0))})),t.defaultTable=t.pointTable}))})).catch((function(t){console.log(t)}))},error:function(){this.errorFlag=!0},showErrorModel:function(){this.$refs["device-error"].show()}}},d=c,l=(e("449c"),e("2877")),u=Object(l["a"])(d,r,s,!1,null,"bce3c972",null);a["default"]=u.exports},"04a8":function(t,a,e){},"25f0":function(t,a,e){"use strict";var r=e("6eeb"),s=e("825a"),n=e("d039"),i=e("ad6d"),o="toString",c=RegExp.prototype,d=c[o],l=n((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),u=d.name!=o;(l||u)&&r(RegExp.prototype,o,(function(){var t=s(this),a=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in c)?i.call(t):e);return"/"+a+"/"+r}),{unsafe:!0})},"449c":function(t,a,e){"use strict";var r=e("04a8"),s=e.n(r);s.a},"8a15":function(t){t.exports=JSON.parse('{"3":[{"name":"B1F 20HP排風機","status":"99","error":"0"}],"4":[{"name":"B1F 10HP進風機","status":"99","error":"0"}],"5":[{"name":"B2F 15HP進風機","status":"99","error":"0"}],"6":[{"name":"B2F 20HP排風機","status":"99","error":"0"}],"8":[{"name":"B3F 15HP進風機","status":"99","error":"0"}],"9":[{"name":"B3F 25HP排風機","status":"99","error":"0"}],"10":[{"name":"B4F 25HP排風機","status":"99","error":"0"}],"11":[{"name":"B4F 15HP進風機","status":"99","error":"0"}]}')},ad6d:function(t,a,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},b0c0:function(t,a,e){var r=e("83ab"),s=e("9bf2").f,n=Function.prototype,i=n.toString,o=/^\s*function ([^ (]*)/,c="name";r&&!(c in n)&&s(n,c,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})},d068:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",["0"===t.error?e("div",["0"===t.status?e("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[e("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[e("b-icon-emoji-smile",{staticClass:"mx-1"}),e("span",[t._v("正常待機")])],1)]):t._e(),"1"===t.status?e("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"success"}},[e("div",{staticClass:"py-1",staticStyle:{color:"#42b983"}},[e("b-icon-check-square-fill",{staticClass:"mx-1"}),e("span",[t._v("設備運行")])],1)]):t._e(),"-1"===t.status?e("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"primary"}},[e("div",{staticClass:"py-1",staticStyle:{color:"deepskyblue"}},[e("b-icon-droplet-fill",{staticClass:"mx-1"}),e("span",[t._v("水位正常")])],1)]):t._e(),"99"===t.status?e("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[e("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[e("b-icon-clock-history",{staticClass:"mx-1"}),e("span",[t._v("等待回應...")])],1)]):t._e()],1):e("div",["1"===t.error?e("div",["-1"===t.status?e("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"danger"}},[e("div",{staticClass:"py-1",staticStyle:{color:"lightcoral"}},[e("b-icon-exclamation-circle-fill",{staticClass:"mx-1"}),e("span",[t._v("水位異常")])],1)]):e("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"danger"}},[e("div",{staticClass:"py-1",staticStyle:{color:"lightcoral"}},[e("b-icon-exclamation-triangle-fill",{staticClass:"mx-1"}),e("span",[t._v("泵補異常")])],1)])],1):t._e(),"-1"===t.error?e("div",[e("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[e("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[e("b-icon-clock-history",{staticClass:"mx-1"}),e("span",[t._v("等待回應...")])],1)])],1):t._e()])])},s=[],n={name:"SystemInfoCard",props:{name:{type:String,default:"",required:!0},error:{type:String,default:"",required:!0},status:{type:String,default:"",required:!0}}},i=n,o=e("2877"),c=Object(o["a"])(i,r,s,!1,null,"0d8015fa",null);a["a"]=c.exports},d3ed:function(t){t.exports=JSON.parse('{"3":[{"name":"B1F 20HP排風機","status":"DIn01","error":"DIn04"}],"4":[{"name":"B1F 10HP進風機","status":"DIn01","error":"DIn04"}],"5":[{"name":"B2F 15HP進風機","status":"DIn01","error":"DIn04"}],"6":[{"name":"B2F 20HP排風機","status":"DIn01","error":"DIn04"}],"8":[{"name":"B3F 15HP進風機","status":"DIn01","error":"DIn04"}],"9":[{"name":"B3F 25HP排風機","status":"DIn01","error":"DIn04"}],"10":[{"name":"B4F 25HP排風機","status":"DIn01","error":"DIn04"}],"11":[{"name":"B4F 15HP進風機","status":"DIn01","error":"DIn04"}]}')}}]);
//# sourceMappingURL=chunk-3940080e.5482dc25.js.map