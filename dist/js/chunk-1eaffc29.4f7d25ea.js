(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eaffc29"],{"49dc":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",[s("b-container",[s("b-row",{staticClass:"mb-1"},[s("b-col",{attrs:{cols:"3"}},[s("p",{staticStyle:{color:"#42b983"}},[t._v(" 樓層 ")])]),s("b-col",{attrs:{cols:"3"}},[s("p",[t._v(" 1L1 ")])]),s("b-col",{attrs:{cols:"3"}},[s("p",[t._v(" 1P1&E1L ")])]),s("b-col",{attrs:{cols:"3"}},[s("p",[t._v(" 1L ")])])],1),s("b-row",{staticClass:"mb-1"},[s("b-col",{attrs:{cols:"3"}},[s("h3",{staticClass:"mt-4 text-dark"},[t._v(" DIn00 ")])]),s("b-col",{attrs:{cols:"9"}},[s("b-row",{staticClass:"rounded-lg mt-3",staticStyle:{height:"50px","background-color":"lightgray"}},[s("b-col",{attrs:{cols:"4"}},[s("span",{staticClass:"fa fa-circle mt-3",staticStyle:{color:"darkgray"}})]),s("b-col",{attrs:{cols:"4"}},[s("span",{staticClass:"fa fa-circle mt-3",staticStyle:{color:"#42b983"}})]),s("b-col",{attrs:{cols:"4"}},[s("span",{staticClass:"fa fa-circle mt-3",staticStyle:{color:"#42b983"}})])],1)],1)],1),s("p",[t._v(t._s(t.myJson))])],1)],1)},c=[],o=(s("4160"),s("b0c0"),s("159b"),s("636c")),e={name:"PageDeviceStatus",data:function(){return{myJson:o,floors:["B2F","B1F","1F","2F","3F","4F"]}},methods:{readIllumination:function(){var t=this,a={port:"/dev/ttyUSB0",address:12},s="/api/device/value/read_illumi";this.axios.post(s,a).then((function(a){console.log(a.data);var s=/^DIn/;a.data.forEach((function(a){s.test(a.name)&&t.myJson[a.address].forEach((function(t){t.status===a.name?t.status=a.status:t.control===a.name&&(t.control=a.status)}))}))})).catch((function(t){console.log(t)}))}}},l=e,r=s("2877"),i=Object(r["a"])(l,n,c,!1,null,"594a20d3",null);a["default"]=i.exports},"636c":function(t){t.exports=JSON.parse('{"2":[{"name":"1F 後門矮柱燈","status":"DIn01"},{"name":"1F 壁燈＋地理投射燈","status":"DIn02"},{"name":"1F 水底投射燈（作廢）","status":"DIn03"},{"name":"1F 噴水池馬達（常開）","status":"DIn04"},{"name":"1F 光纖機（禁止）","status":"DIn05"},{"name":"1F 水池投射燈","status":"DIn06"},{"name":"1F 景觀燈（交誼廳前）","status":"DIn07"},{"name":"1F 景觀燈（健身房前）","status":"DIn08"},{"name":"1F 水底投射燈","status":"DIn09"},{"name":"1F 投射燈＋景觀矮燈","status":"DIn10"},{"name":"1F 車道投射燈","status":"DIn11"},{"name":"1F 車道柱燈（偶數）","status":"DIn12"},{"name":"1F 車道柱燈（奇數）","status":"DIn13"},{"name":"1F 車道右側投射燈","status":"DIn14"},{"name":"1F 景觀矮燈","status":"DIn15"}]}')},b0c0:function(t,a,s){var n=s("83ab"),c=s("9bf2").f,o=Function.prototype,e=o.toString,l=/^\s*function ([^ (]*)/,r="name";n&&!(r in o)&&c(o,r,{configurable:!0,get:function(){try{return e.call(this).match(l)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-1eaffc29.4f7d25ea.js.map