(function(e){function t(t){for(var a,c,r=t[0],i=t[1],d=t[2],l=0,s=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&s.push(u[c][0]),u[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==u[r]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},u={app:0},o=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-060e0ad7":"bd9a0853","chunk-1664cce1":"cba666f1","chunk-1f1d53c9":"218bf974","chunk-2d0a3aca":"539a29de","chunk-2d0b8b0e":"79312fdc","chunk-2d0ba758":"3397b6e0","chunk-2d0bfecf":"3044b38a","chunk-2d0c26ba":"2fae7a3c","chunk-2d0cef52":"e87c46dc","chunk-2d0d6b92":"a1715db1","chunk-2d0ddc20":"11119070","chunk-2d0df0c1":"a27c59dc","chunk-2d207cde":"de1949cb","chunk-2d210bbc":"0f55b2f6","chunk-2d213377":"357698d2","chunk-2d217c4a":"07740243","chunk-2d21a3d2":"f0f0e169","chunk-2d2244d6":"924bbb30","chunk-2d229026":"8b900d06","chunk-2d2371fd":"4f8ccd89","chunk-536156e4":"f479bd0f","chunk-5378029e":"652a214e","chunk-682af578":"ec2bd308","chunk-97a45f4a":"5aaef613"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-060e0ad7":1,"chunk-1664cce1":1,"chunk-682af578":1,"chunk-97a45f4a":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-060e0ad7":"dedbcc11","chunk-1664cce1":"fe35231c","chunk-1f1d53c9":"31d6cfe0","chunk-2d0a3aca":"31d6cfe0","chunk-2d0b8b0e":"31d6cfe0","chunk-2d0ba758":"31d6cfe0","chunk-2d0bfecf":"31d6cfe0","chunk-2d0c26ba":"31d6cfe0","chunk-2d0cef52":"31d6cfe0","chunk-2d0d6b92":"31d6cfe0","chunk-2d0ddc20":"31d6cfe0","chunk-2d0df0c1":"31d6cfe0","chunk-2d207cde":"31d6cfe0","chunk-2d210bbc":"31d6cfe0","chunk-2d213377":"31d6cfe0","chunk-2d217c4a":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d2244d6":"31d6cfe0","chunk-2d229026":"31d6cfe0","chunk-2d2371fd":"31d6cfe0","chunk-536156e4":"31d6cfe0","chunk-5378029e":"31d6cfe0","chunk-682af578":"3fe09970","chunk-97a45f4a":"12668ac9"}[e]+".css",u=i.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var d=o[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===u))return t()}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){d=s[r],l=d.getAttribute("data-href");if(l===a||l===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=u[e]=[t,n]}));t.push(a[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,n[1](s)}u[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v(" 首頁 ")]),e._v(" | "),n("router-link",{attrs:{to:"/system"}},[e._v(" 中控系統 ")]),e._v(" | "),n("router-link",{attrs:{to:"/status"}},[e._v(" 設備運轉狀態 ")]),e._v(" | "),n("router-link",{attrs:{to:"/on-off"}},[e._v(" 設備起停 ")])],1),n("router-view")],1)},u=[],o=(n("5c0b"),n("2877")),r={},i=Object(o["a"])(r,c,u,!1,null,null,null),d=i.exports,l=(n("d3b7"),n("8c4f")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",[n("b-button",{attrs:{variant:"light",to:"/device"}},[e._v(" 回上一頁 ")]),n("b-card",{staticClass:"my-3",attrs:{"bg-variant":"light"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"設備數值寫入","label-size":"lg","label-class":"font-weight-bold pt-0"}},e._l(e.value_list_write,(function(t,a){return n("div",{key:a,staticClass:"my-3",attrs:{value:t}},["w"===t.type?n("div",[n("b-row",[n("b-col",{attrs:{lg:"8"}},[n("b-form-group",{attrs:{"label-cols-sm":"3",label:t.name+"：","label-align-sm":"right","label-for":"driver-port-value"}},[n("b-form-input",{attrs:{id:"value-write-list-input-"+a,type:"text",placeholder:"輸入功能數值"},model:{value:e.inputs[a].value,callback:function(t){e.$set(e.inputs[a],"value",t)},expression:"inputs[index_write].value"}})],1)],1),n("b-col",{attrs:{lg:"4"}},[n("b-button",{attrs:{type:"submit"},on:{click:function(t){return e.writeValue(a)}}},[e._v(" 寫入資料 ")])],1)],1)],1):e._e()])})),0)],1),n("b-card",{staticClass:"my-3",attrs:{"bg-variant":"light"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"設備數值讀取","label-size":"lg","label-class":"font-weight-bold pt-0"}},e._l(e.value_list_write,(function(t,a){return n("div",{key:a,staticClass:"my-3",attrs:{value:t}},["r"===t.type?n("div",[n("b-row",[n("b-col",{attrs:{lg:"8"}},[n("b-form-group",{attrs:{"label-cols-sm":"3",label:t.name+"：","label-align-sm":"right","label-for":"driver-port-value"}},[n("b-form-input",{attrs:{id:"value-write-list-input-"+a,type:"text",placeholder:"點擊按鈕讀取數值"},model:{value:e.inputs[a].value,callback:function(t){e.$set(e.inputs[a],"value",t)},expression:"inputs[index_write].value"}})],1)],1),n("b-col",{attrs:{lg:"4"}},[n("b-button",{attrs:{type:"submit"},on:{click:function(t){return e.readValue(a)}}},[e._v(" 讀取資料 ")])],1)],1)],1):e._e()])})),0)],1)],1)],1)},f=[],h=(n("4160"),n("b0c0"),n("159b"),n("bc3a")),p=n.n(h),b={data:function(){return{value_list_write:[],value_list_read:[],inputs:[]}},beforeMount:function(){var e=this,t=this.$store.state.url,n={port:this.$store.state.device.port,address:this.$store.state.device.address};p.a.post(t+"/api/device/value",n).then((function(t){e.response=t.data,e.value_list_write=t.data,e.value_list_read=t.data,t.data.forEach((function(t){e.inputs.push({key:t.value,value:""})}))}))},methods:{readValue:function(e){var t=this,n=this.$store.state.url,a={port:this.$store.state.device.port,address:this.$store.state.device.address,name:this.inputs[e].key};p.a.post(n+"/api/device/value/read",a).then((function(n){t.inputs[e].value=n.data.value,console.log("name:"+n.data.name+"\nstatus:"+n.data.status+"\nvalue:"+n.data.value+"\n")}))},writeValue:function(e){var t=this.$store.state.url,n={port:this.$store.state.device.port,address:this.$store.state.device.address,name:this.inputs[e].key,value:parseInt(this.inputs[e].value)};p.a.post(t+"/api/device/value/write",n).then((function(e){alert("name:"+e.data.name+"\nstatus:"+e.data.status+"\nvalue:"+e.data.value+"\n")}))}}},m=b,v=Object(o["a"])(m,s,f,!1,null,null,null),k=v.exports;a["default"].use(l["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/on-off",name:"OnOff",component:function(){return n.e("chunk-682af578").then(n.bind(null,"0e26"))}},{path:"/status",name:"Status",component:function(){return n.e("chunk-2d0c26ba").then(n.bind(null,"49dc"))}},{path:"/system",name:"System",component:function(){return n.e("chunk-1f1d53c9").then(n.bind(null,"163b"))}},{path:"/device",name:"Device",component:function(){return n.e("chunk-2d0ba758").then(n.bind(null,"36fe"))},children:[{path:":port/:address",component:function(){return n.e("chunk-2d2244d6").then(n.bind(null,"e00e"))}}]},{path:"/config",name:"config",component:function(){return n.e("chunk-2d0bfecf").then(n.bind(null,"4030"))},children:[{path:"io",component:function(){return n.e("chunk-536156e4").then(n.bind(null,"37c1"))}},{path:"ini",component:function(){return n.e("chunk-5378029e").then(n.bind(null,"e3ca"))}},{path:"wifi",component:function(){return n.e("chunk-2d229026").then(n.bind(null,"dc2c"))}},{path:"driver",component:function(){return n.e("chunk-2d213377").then(n.bind(null,"ac76"))}}]},{path:"/system",name:"system",component:function(){return n.e("chunk-060e0ad7").then(n.bind(null,"8b46"))},children:[{path:"log",component:function(){return n.e("chunk-2d0b8b0e").then(n.bind(null,"3083"))}},{path:"check",component:function(){return n.e("chunk-2d217c4a").then(n.bind(null,"c7aa"))}},{path:"mainframe",component:function(){return n.e("chunk-1664cce1").then(n.bind(null,"5543"))}},{path:"hostname",component:function(){return n.e("chunk-2d0cef52").then(n.bind(null,"6255"))}},{path:"real-time",component:function(){return n.e("chunk-2d210bbc").then(n.bind(null,"b8c3"))}}]},{path:"/value",name:"Value",component:k},{path:"/on-off",name:"OnOff",component:function(){return n.e("chunk-97a45f4a").then(n.bind(null,"70a5"))}},{path:"/demo",name:"Demo",component:function(){return n.e("chunk-2d2371fd").then(n.bind(null,"fa7c"))}},{path:"/light",name:"Light",component:function(){return n.e("chunk-2d0ddc20").then(n.bind(null,"836e"))}},{path:"/a",name:"A",component:function(){return n.e("chunk-2d0a3aca").then(n.bind(null,"02d6"))}},{path:"/b",name:"B",component:function(){return n.e("chunk-2d0d6b92").then(n.bind(null,"7487"))}},{path:"/c",name:"C",component:function(){return n.e("chunk-2d207cde").then(n.bind(null,"a1a9"))}},{path:"/d",name:"D",component:function(){return n.e("chunk-2d0df0c1").then(n.bind(null,"87f2"))}}],y=new l["a"]({mode:"history",base:"/",routes:g}),w=y,_=(n("b64b"),n("2f62")),C=n("a7fe"),O=n.n(C);p.a.defaults.withCredentials=!0,a["default"].use(O.a,p.a),a["default"].use(_["a"]);new _["a"].Store({state:{url:"",device:{port:"",address:""},config:{io:{data:{}},ini:{data:{}},wifi:{data:{}}},system:{mainframe:{toggled:!0}}},mutations:{getDevice:function(e,t){var n=t.port,a=t.address;e.device.port=n,e.device.address=a},getIoConfigData:function(e){p.a.get(e.url+"/api/config/io").then((function(t){e.config.io.data=t.data})).catch((function(e){console.log(e)}))},getIniConfigData:function(e,t){p.a.get(e.url+"/api/config/ini/"+t).then((function(t){e.config.ini.data=t.data})).catch((function(e){console.log(e)}))},getWifiConfigData:function(e){p.a.get(e.url+"/api/config/network").then((function(t){e.config.wifi.data=t.data})).catch((function(e){console.log(e)}))},insertWifiConfigInput:function(e){e.config.wifi.data.push({ssid:"",psk:"",key_mgmt:"WPA-PSK",priority:0})},postWifiConfig:function(e){var t=!1;e.config.wifi.data.forEach((function(e){console.log(e.ssid+e.psk),e.ssid&&e.psk?(t=!0,console.log(t)):(alert("錯誤，禁止輸入空格！"),t=!1,console.log(t))})),t&&p.a.post(e.url+"/api/config/network",e.config.wifi.data).then((function(e){200===e.status&&(console.log(e.data),alert("網路設定更新成功！"))})).catch((function(e){console.log(e)}))}},getters:{ioConfigOptions:function(e){return Object.keys(e.config.io.data)},ioConfigData:function(e){return e.config.io.data},iniConfigData:function(e){return e.config.ini.data},wifiConfigData:function(e){return e.config.wifi.data}}});var x=n("5f5b"),j=n("b1e0");n("f9e3"),n("2dd8");p.a.defaults.withCredentials=!0,a["default"].use(O.a,p.a),a["default"].use(x["a"]),a["default"].use(j["a"]),a["default"].config.productionTip=!1,new a["default"]({router:w,store:void 0,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),c=n.n(a);c.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a78b4e70.js.map