(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a51cddc"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),s=a("5899"),n="["+s+"]",o=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5cd1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("b-container",[a("b-modal",{ref:"device-error",attrs:{"hide-footer":"","header-bg-variant":"danger","header-text-variant":"white",centered:"",title:"設備異常警告"}},[a("p",{staticClass:"my-4 text-center"},[t._v(" 有設備異常，請儘速至現場檢查，並聯絡技術人員。 ")])]),a("h4",{staticClass:"mt-5"},[t._v("B4F 揚水系統")]),a("b-row",[a("b-col",{staticClass:"py-3",attrs:{lg:"4"}},t._l(t.defaultTable["7"],(function(t,e){return a("div",{key:"lifting-pump-1-"+e},[a("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),0),a("b-col",{staticClass:"py-3",attrs:{lg:"8"}},[a("b-row",[t._l(t.defaultTable["15"],(function(t,e){return a("b-col",{key:"lifting-pump-2-"+e,attrs:{lg:"3"}},[a("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),t._l(t.defaultTable["16"],(function(t,e){return a("b-col",{key:"lifting-pump-3-"+e,attrs:{lg:"3"}},[a("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)}))],2)],1)],1),a("h4",{staticClass:"mt-5"},[t._v("B4F 廢水系統")]),a("b-row",[t._l(t.defaultTable["19"],(function(t,e){return a("b-col",{key:"waste-water-1-"+e,staticClass:"py-3",attrs:{lg:"4"}},[a("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),t._l(t.defaultTable["17"],(function(t,e){return a("b-col",{key:"waste-water-2-"+e,staticClass:"py-3",attrs:{lg:"4"}},[a("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)}))],2),a("h4",{staticClass:"mt-5"},[t._v("B4F 汙水系統")]),a("b-row",t._l(t.defaultTable["18"],(function(t,e){return a("b-col",{key:"sewage`-"+e,staticClass:"py-3",attrs:{lg:"4"}},[a("SystemInfoCard",{attrs:{name:t.name,error:t.error,status:t.status}})],1)})),1)],1)],1)},s=[],n=(a("4160"),a("b0c0"),a("159b"),a("9d5c")),o=a("d229"),i=a("d068"),c={name:"PageCentralSystem",components:{SystemInfoCard:i["a"]},data:function(){return{defaultTable:o,pointTable:n,axiosResponse:[],errorFlag:!1,systemSelected:"",deviceList:[{text:"揚水系統",value:"lifting_pump"},{text:"廢水系統",value:"waste_water"},{text:"污水系統",value:"sewage"},{text:"進出風系統",value:"fan"}],deviceAmount:{lifting_pump:2,waste_water:3,sewage:3,fan:1},deviceName:{lifting_pump:"B4F 揚水系統",waste_water:"B4F 廢水系統",sewage:"B4F 汙水系統",fan:"進出風系統"}}},beforeMount:function(){this.readWaterSystem()},methods:{readWaterSystem:function(){var t=this,e="http://192.168.1.10/api/device/value/read_water";this.axios.get(e).then((function(e){var a=/^DIn/;e.data.forEach((function(e){a.test(e.name)&&t.pointTable[e.address].forEach((function(a){a.status===e.name?a.status=e.status:a.error===e.name&&(a.error=e.status,0===a.error&&(t.errorFlag=!0))})),t.defaultTable=t.pointTable}))})).catch((function(t){console.log(t)}))},showErrorModel:function(){this.$refs["device-error"].show()}},watch:{errorFlag:"showErrorModel"}},u=c,l=a("2877"),d=Object(l["a"])(u,r,s,!1,null,"62d928e6",null);e["default"]=d.exports},7156:function(t,e,a){var r=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var n,o;return s&&"function"==typeof(n=e.constructor)&&n!==a&&r(o=n.prototype)&&o!==a.prototype&&s(t,o),t}},"9d5c":function(t){t.exports=JSON.parse('{"7":[{"name":"加壓泵","status":-1,"error":"DIn04"}],"15":[{"name":"#1 揚水泵50HP","status":"DIn01","error":"DIn03"},{"name":"#2 揚水泵50HP","status":"DIn02","error":"DIn04"}],"16":[{"name":"#3 揚水泵10HP","status":"DIn01","error":"DIn03"},{"name":"#4 揚水泵10HP","status":"DIn02","error":"DIn04"}],"17":[{"name":"B梯 #1 廢水泵","status":"DIn01","error":"DIn03"},{"name":"B梯 #2 廢水泵","status":"DIn02","error":"DIn03"},{"name":"B梯 廢水池","status":-1,"error":"DIn04"}],"18":[{"name":"B梯 #1 污水泵","status":"DIn01","error":"DIn03"},{"name":"B梯 #2 汙水泵","status":"DIn02","error":"DIn03"},{"name":"B梯 污水池","status":-1,"error":"DIn04"}],"19":[{"name":"A梯 #1 廢水泵","status":"DIn01","error":"DIn03"},{"name":"A梯 #2 廢水泵","status":"DIn02","error":"DIn03"},{"name":"A梯 廢水池","status":-1,"error":"DIn04"}]}')},a9e3:function(t,e,a){"use strict";var r=a("83ab"),s=a("da84"),n=a("94ca"),o=a("6eeb"),i=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),d=a("d039"),f=a("7c73"),m=a("241c").f,p=a("06cf").f,h=a("9bf2").f,b=a("58a8").trim,v="Number",g=s[v],y=g.prototype,I=c(f(y))==v,w=function(t){var e,a,r,s,n,o,i,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+u}for(n=u.slice(2),o=n.length,i=0;i<o;i++)if(c=n.charCodeAt(i),c<48||c>s)return NaN;return parseInt(n,r)}return+u};if(n(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(I?d((function(){y.valueOf.call(a)})):c(a)!=v)?u(new g(w(e)),a,_):w(e)},x=r?m(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)i(g,C=x[S])&&!i(_,C)&&h(_,C,p(g,C));_.prototype=y,y.constructor=_,o(s,v,_)}},b0c0:function(t,e,a){var r=a("83ab"),s=a("9bf2").f,n=Function.prototype,o=n.toString,i=/^\s*function ([^ (]*)/,c="name";r&&!(c in n)&&s(n,c,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},d068:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[0===t.error?a("div",[0===t.status?a("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[a("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[a("b-icon-emoji-smile",{staticClass:"mx-1"}),a("span",[t._v("正常待機")])],1)]):t._e(),1===t.status?a("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"success"}},[a("div",{staticClass:"py-1",staticStyle:{color:"#42b983"}},[a("b-icon-check-square-fill",{staticClass:"mx-1"}),a("span",[t._v("設備運行")])],1)]):t._e(),-1===t.status?a("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"primary"}},[a("div",{staticClass:"py-1",staticStyle:{color:"deepskyblue"}},[a("b-icon-droplet-fill",{staticClass:"mx-1"}),a("span",[t._v("水位正常")])],1)]):t._e(),99===t.status?a("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header"}},[a("div",{staticClass:"py-1",staticStyle:{color:"darkgray"}},[a("b-icon-clock-history",{staticClass:"mx-1"}),a("span",[t._v("等待回應...")])],1)]):t._e()],1):a("div",[1===t.error?a("div",[-1===t.status?a("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"danger"}},[a("div",{staticClass:"py-1",staticStyle:{color:"lightcoral"}},[a("b-icon-exclamation-circle-fill",{staticClass:"mx-1"}),a("span",[t._v("水位異常")])],1)]):a("b-card",{staticClass:"shadow",attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"danger"}},[a("div",{staticClass:"py-1",staticStyle:{color:"lightcoral"}},[a("b-icon-exclamation-triangle-fill",{staticClass:"mx-1"}),a("span",[t._v("泵補異常")])],1)])],1):t._e()])])},s=[],n=(a("a9e3"),{name:"SystemInfoCard",props:{name:{type:String,default:"",required:!0},error:{type:Number,default:0,required:!0},status:{type:Number,default:0,required:!0}}}),o=n,i=a("2877"),c=Object(i["a"])(o,r,s,!1,null,"370d381f",null);e["a"]=c.exports},d229:function(t){t.exports=JSON.parse('{"7":[{"name":"加壓泵","status":99,"error":0}],"15":[{"name":"#1 揚水泵50HP","status":99,"error":0},{"name":"#2 揚水泵50HP","status":99,"error":0}],"16":[{"name":"#3 揚水泵10HP","status":99,"error":0},{"name":"#4 揚水泵10HP","status":99,"error":0}],"17":[{"name":"B梯 #1 廢水泵","status":99,"error":0},{"name":"B梯 #2 廢水泵","status":99,"error":0},{"name":"B梯 廢水池","status":99,"error":0}],"18":[{"name":"B梯 #1 污水泵","status":99,"error":0},{"name":"B梯 #2 汙水泵","status":99,"error":0},{"name":"B梯 污水池","status":99,"error":0}],"19":[{"name":"A梯 #1 廢水泵","status":99,"error":0},{"name":"A梯 #2 廢水泵","status":99,"error":0},{"name":"A梯 廢水池","status":99,"error":0}]}')}}]);
//# sourceMappingURL=chunk-5a51cddc.ef75c51a.js.map