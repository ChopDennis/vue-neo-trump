(function(t){function e(e){for(var a,o,c=e[0],u=e[1],f=e[2],s=0,l=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-3599b3aa":"adf00560","chunk-35ae9e03":"b10d7118","chunk-438b45e0":"5c4b1f48","chunk-8a426492":"50a04e97","chunk-a45b03fc":"81ee3824"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-35ae9e03":1,"chunk-438b45e0":1,"chunk-8a426492":1,"chunk-a45b03fc":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-3599b3aa":"31d6cfe0","chunk-35ae9e03":"30369d06","chunk-438b45e0":"967d5b3e","chunk-8a426492":"4a8d2b64","chunk-a45b03fc":"a0e54a6c"}[t]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var f=i[c],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===a||s===r))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){f=l[c],s=f.getAttribute("data-href");if(s===a||s===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var l=new Error;f=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=e,f=f.slice();for(var l=0;l<f.length;l++)e(f[l]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"mb-3",attrs:{id:"app-nav"}},[n("b-row",[n("b-col",{staticClass:"mb-sm-0 mb-3",attrs:{sm:"4"}},[n("span",{staticClass:"text-center text-light font-weight-bold"},[t._v("NEO TRUMP 新川普")])]),n("b-col",{attrs:{sm:"8"}},[n("router-link",{attrs:{to:"/"}},[t._v(" 進排風系統 ")]),t._v(" | "),n("router-link",{attrs:{to:"/system"}},[t._v(" 揚汙廢水系統 ")]),t._v(" | "),n("router-link",{attrs:{to:"/light"}},[t._v(" 燈控系統 ")])],1)],1)],1),n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,o,r,!1,null,null,null),f=u.exports,s=(n("d3b7"),n("8c4f"));a["default"].use(s["a"]);var l=[{path:"/",name:"Home",component:function(){return n.e("chunk-35ae9e03").then(n.bind(null,"004e"))}},{path:"/on-off",name:"OnOff",component:function(){return n.e("chunk-8a426492").then(n.bind(null,"0e26"))}},{path:"/status",name:"Status",component:function(){return n.e("chunk-3599b3aa").then(n.bind(null,"49dc"))}},{path:"/system",name:"System",component:function(){return n.e("chunk-a45b03fc").then(n.bind(null,"5cd1"))}},{path:"/light",name:"Light",component:function(){return n.e("chunk-438b45e0").then(n.bind(null,"522e"))}}],d=new s["a"]({mode:"history",base:"/",routes:l}),p=d,h=(n("4160"),n("b64b"),n("159b"),n("2f62")),g=n("bc3a"),b=n.n(g),m=n("a7fe"),v=n.n(m);b.a.defaults.withCredentials=!0,a["default"].use(v.a,b.a),a["default"].use(h["a"]);var k=new h["a"].Store({state:{url:"http://192.168.1.10",device:{port:"",address:""},config:{io:{data:{}},ini:{data:{}},wifi:{data:{}}},system:{mainframe:{toggled:!0}}},mutations:{getDevice:function(t,e){var n=e.port,a=e.address;t.device.port=n,t.device.address=a},getIoConfigData:function(t){b.a.get(t.url+"/api/config/io").then((function(e){t.config.io.data=e.data})).catch((function(t){console.log(t)}))},getIniConfigData:function(t,e){b.a.get(t.url+"/api/config/ini/"+e).then((function(e){t.config.ini.data=e.data})).catch((function(t){console.log(t)}))},getWifiConfigData:function(t){b.a.get(t.url+"/api/config/network").then((function(e){t.config.wifi.data=e.data})).catch((function(t){console.log(t)}))},insertWifiConfigInput:function(t){t.config.wifi.data.push({ssid:"",psk:"",key_mgmt:"WPA-PSK",priority:0})},postWifiConfig:function(t){var e=!1;t.config.wifi.data.forEach((function(t){console.log(t.ssid+t.psk),t.ssid&&t.psk?(e=!0,console.log(e)):(alert("錯誤，禁止輸入空格！"),e=!1,console.log(e))})),e&&b.a.post(t.url+"/api/config/network",t.config.wifi.data).then((function(t){200===t.status&&(console.log(t.data),alert("網路設定更新成功！"))})).catch((function(t){console.log(t)}))}},getters:{ioConfigOptions:function(t){return Object.keys(t.config.io.data)},ioConfigData:function(t){return t.config.io.data},iniConfigData:function(t){return t.config.ini.data},wifiConfigData:function(t){return t.config.wifi.data}}}),y=n("5f5b"),w=n("b1e0");n("f9e3"),n("2dd8");b.a.defaults.withCredentials=!0,a["default"].use(v.a,b.a),a["default"].use(y["a"]),a["default"].use(w["a"]),a["default"].config.productionTip=!1,new a["default"]({router:p,store:k,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.84a05670.js.map