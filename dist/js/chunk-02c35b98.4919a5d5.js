(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02c35b98"],{"25f0":function(t,a,r){"use strict";var e=r("6eeb"),s=r("825a"),n=r("d039"),o=r("ad6d"),i="toString",c=RegExp.prototype,l=c[i],u=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=i;(u||d)&&e(RegExp.prototype,i,(function(){var t=s(this),a=String(t.source),r=t.flags,e=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?o.call(t):r);return"/"+a+"/"+e}),{unsafe:!0})},"5c5b":function(t){t.exports=JSON.parse('{"7":[{"name":"B2F - 加壓泵","status":"-1","error":"DIn04"}],"13":[{"name":"自來水水箱-高水位","status":"-1","error":"DIn01"},{"name":"自來水水箱-低水位","status":"-1","error":"DIn02"},{"name":"自來水水箱蓋","status":"DIn03","error":"0"}],"14":[{"name":"自來水水箱-高水位","status":"-1","error":"DIn01"},{"name":"自來水水箱-低水位","status":"-1","error":"DIn02"},{"name":"自來水水箱蓋","status":"DIn03","error":"0"}],"15":[{"name":"#1 揚水泵50HP","status":"DIn01","error":"DIn03"},{"name":"#2 揚水泵50HP","status":"DIn02","error":"DIn04"}],"16":[{"name":"#3 揚水泵10HP","status":"DIn01","error":"DIn03"},{"name":"#4 揚水泵10HP","status":"DIn02","error":"DIn04"}],"17":[{"name":"B梯 #1 廢水泵","status":"DIn01","error":"DIn03"},{"name":"B梯 #2 廢水泵","status":"DIn02","error":"DIn03"},{"name":"B梯 廢水池","status":"-1","error":"DIn04"}],"18":[{"name":"B梯 #1 污水泵","status":"DIn01","error":"DIn03"},{"name":"B梯 #2 汙水泵","status":"DIn02","error":"DIn03"},{"name":"B梯 污水池","status":"-1","error":"DIn04"}],"19":[{"name":"A梯 #1 廢水泵","status":"DIn01","error":"DIn03"},{"name":"A梯 #2 廢水泵","status":"DIn02","error":"DIn03"},{"name":"A梯 廢水池","status":"-1","error":"DIn04"}]}')},"5cd1":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("main",{staticClass:"py-3"},[r("b-overlay",{attrs:{show:t.show,"no-wrap":"",variant:"dark","spinner-variant":"light"}}),r("b-container",[r("b-modal",{ref:"device-error",attrs:{"hide-footer":"","header-bg-variant":"danger","header-text-variant":"white",centered:"",title:"設備異常警告"}},[r("p",{staticClass:"my-4 text-center"},[t._v(" 有設備異常，請儘速至現場檢查，並聯絡技術人員。 ")])]),r("b-card",{staticClass:"mb-3 border-0",attrs:{header:"B4F 揚水系統","header-text-variant":"white","header-class":"font-weight-bold dark-blue"}},[r("b-row",[r("b-col",{attrs:{lg:"8"}},[r("b-row",[t._l(t.defaultTable["15"],(function(t,a){return r("b-col",{key:"lifting-pump-2-"+a,staticClass:"py-3",attrs:{lg:"3"}},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),t._l(t.defaultTable["16"],(function(t,a){return r("b-col",{key:"lifting-pump-3-"+a,staticClass:"py-3",attrs:{lg:"3"}},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)}))],2)],1),r("b-col",{staticClass:"py-3",attrs:{lg:"4"}},t._l(t.defaultTable["7"],(function(t,a){return r("div",{key:"lifting-pump-1-"+a},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),0)],1)],1),r("b-card",{staticClass:"mb-3 border-0",attrs:{header:"B4F 廢水系統","header-text-variant":"white","header-class":"font-weight-bold dark-blue"}},[r("b-row",[t._l(t.defaultTable["19"],(function(t,a){return r("b-col",{key:"waste-water-1-"+a,staticClass:"py-3",attrs:{lg:"4"}},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),t._l(t.defaultTable["17"],(function(t,a){return r("b-col",{key:"waste-water-2-"+a,staticClass:"py-3",attrs:{lg:"4"}},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)}))],2)],1),r("b-card",{staticClass:"mb-3 border-0",attrs:{header:"B4F 汙水系統","header-text-variant":"white","header-class":"font-weight-bold dark-blue"}},[r("b-row",t._l(t.defaultTable["18"],(function(t,a){return r("b-col",{key:"sewage`-"+a,staticClass:"py-3",attrs:{lg:"4"}},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),1)],1),r("b-card",{staticClass:"mb-3 border-0",attrs:{header:"9F 自來水水箱","header-text-variant":"white","header-class":"font-weight-bold dark-blue"}},[r("b-row",t._l(t.defaultTable["14"],(function(t,a){return r("b-col",{key:"natural`-"+a,staticClass:"py-3",attrs:{lg:"4"}},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),1)],1),r("b-card",{staticClass:"mb-3 border-0",attrs:{header:"R3F 自來水水箱","header-text-variant":"white","header-class":"font-weight-bold dark-blue"}},[r("b-row",t._l(t.defaultTable["13"],(function(t,a){return r("b-col",{key:"natural`-"+a,staticClass:"py-3",attrs:{lg:"4"}},[r("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),1)],1)],1)],1)},s=[],n=(r("4160"),r("b0c0"),r("d3b7"),r("25f0"),r("159b"),r("5c5b")),o=r("6836"),i=r("d068"),c={name:"PageCentralSystem",components:{SystemInfoCard:i["a"]},data:function(){return{defaultTable:o,pointTable:n,errorFlag:!1,show:!0}},watch:{errorFlag:"showErrorModel"},beforeMount:function(){this.readWaterSystem(),this.readNaturalWater9F(),this.readNaturalWaterR3F(),this.updateSystemData()},mounted:function(){var t=this;setTimeout((function(){t.showOverlay()}),3e3),setInterval((function(){location.reload()}),6e4)},methods:{readWaterSystem:function(){var t=this,a="http://192.168.1.10/proxy/api/device/value/read_water_000";this.axios.get(a).then((function(a){var r=/^DIn/;a.data.forEach((function(a){r.test(a.name)&&t.pointTable[a.address].forEach((function(r){r.status===a.name?r.status=a.status.toString():r.error===a.name&&(r.error=a.status.toString(),0===r.error&&(t.errorFlag=!0))}))}))})).catch((function(t){console.log(t)}))},readNaturalWater9F:function(){var t=this,a="http://192.168.1.10/proxy/api/device/value/read_water_300";this.axios.get(a).then((function(a){var r=/^DIn/;a.data.forEach((function(a){r.test(a.name)&&t.pointTable[a.address].forEach((function(r){r.status===a.name?r.status=a.status.toString():r.error===a.name&&(r.error=a.status.toString(),1===r.error&&(t.errorFlag=!0))}))}))})).catch((function(t){console.log(t)}))},readNaturalWaterR3F:function(){var t=this,a="http://192.168.1.10/proxy/api/device/value/read_water_500";this.axios.get(a).then((function(a){var r=/^DIn/;a.data.forEach((function(a){r.test(a.name)&&t.pointTable[a.address].forEach((function(r){r.status===a.name?r.status=a.status.toString():r.error===a.name&&(r.error=a.status.toString(),1===r.error&&(t.errorFlag=!0))}))}))})).catch((function(t){console.log(t)}))},showErrorModel:function(){this.$refs["device-error"].show()},updateSystemData:function(){this.defaultTable=this.pointTable},showOverlay:function(){this.show=!1}}},l=c,u=(r("e07a"),r("2877")),d=Object(u["a"])(l,e,s,!1,null,"f40833c2",null);a["default"]=d.exports},6836:function(t){t.exports=JSON.parse('{"7":[{"name":"B2F - 加壓泵","status":"99","error":"0"}],"13":[{"name":"自來水水箱-高水位","status":"99","error":"0"},{"name":"自來水水箱-低水位","status":"99","error":"0"},{"name":"自來水水箱蓋","status":"99","error":"0"}],"14":[{"name":"自來水水箱-高水位","status":"99","error":"0"},{"name":"自來水水箱-低水位","status":"99","error":"0"},{"name":"自來水水箱蓋","status":"99","error":"0"}],"15":[{"name":"#1 揚水泵50HP","status":"99","error":"0"},{"name":"#2 揚水泵50HP","status":"99","error":"0"}],"16":[{"name":"#3 揚水泵10HP","status":"99","error":"0"},{"name":"#4 揚水泵10HP","status":"99","error":"0"}],"17":[{"name":"B梯 #1 廢水泵","status":"99","error":"0"},{"name":"B梯 #2 廢水泵","status":"99","error":"0"},{"name":"B梯 廢水池","status":"99","error":"0"}],"18":[{"name":"B梯 #1 污水泵","status":"99","error":"0"},{"name":"B梯 #2 汙水泵","status":"99","error":"0"},{"name":"B梯 污水池","status":"99","error":"0"}],"19":[{"name":"A梯 #1 廢水泵","status":"99","error":"0"},{"name":"A梯 #2 廢水泵","status":"99","error":"0"},{"name":"A梯 廢水池","status":"99","error":"0"}]}')},ad6d:function(t,a,r){"use strict";var e=r("825a");t.exports=function(){var t=e(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},b0c0:function(t,a,r){var e=r("83ab"),s=r("9bf2").f,n=Function.prototype,o=n.toString,i=/^\s*function ([^ (]*)/,c="name";e&&!(c in n)&&s(n,c,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},c472:function(t,a,r){},d068:function(t,a,r){"use strict";var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",["0"===t.error?r("div",["0"===t.status?r("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[r("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[r("b-icon-emoji-smile",{staticClass:"mx-1"}),r("span",[t._v("正常待機")])],1)]):t._e(),"1"===t.status?r("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"success"}},[r("div",{staticClass:"py-1",staticStyle:{color:"#42b983"}},[r("b-icon-check-square-fill",{staticClass:"mx-1"}),r("span",[t._v("設備運行")])],1)]):t._e(),"-1"===t.status?r("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"primary"}},[r("div",{staticClass:"py-1",staticStyle:{color:"deepskyblue"}},[r("b-icon-droplet-fill",{staticClass:"mx-1"}),r("span",[t._v("水位正常")])],1)]):t._e(),"99"===t.status?r("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[r("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[r("b-icon-clock-history",{staticClass:"mx-1"}),r("span",[t._v("等待回應...")])],1)]):t._e()],1):r("div",["1"===t.error?r("div",["-1"===t.status?r("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"danger"}},[r("div",{staticClass:"py-1",staticStyle:{color:"lightcoral"}},[r("b-icon-exclamation-circle-fill",{staticClass:"mx-1"}),r("span",[t._v("水位異常")])],1)]):r("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"danger"}},[r("div",{staticClass:"py-1",staticStyle:{color:"lightcoral"}},[r("b-icon-exclamation-triangle-fill",{staticClass:"mx-1"}),r("span",[t._v("泵補異常")])],1)])],1):t._e(),"-1"===t.error?r("div",[r("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[r("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[r("b-icon-clock-history",{staticClass:"mx-1"}),r("span",[t._v("等待回應...")])],1)])],1):t._e()])])},s=[],n={name:"SystemInfoCard",props:{name:{type:String,default:"",required:!0},error:{type:String,default:"",required:!0},status:{type:String,default:"",required:!0}}},o=n,i=r("2877"),c=Object(i["a"])(o,e,s,!1,null,"0d8015fa",null);a["a"]=c.exports},e07a:function(t,a,r){"use strict";var e=r("c472"),s=r.n(e);s.a}}]);
//# sourceMappingURL=chunk-02c35b98.4919a5d5.js.map