(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9bf736f2"],{"49dc":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",[s("b-container",[s("b-row",{staticClass:"mb-1"},[s("b-col",{attrs:{cols:"3"}},[s("p",{staticStyle:{color:"#42b983"}},[t._v(" 樓層 ")])]),s("b-col",{attrs:{cols:"3"}},[s("p",[t._v(" 1L1 ")])]),s("b-col",{attrs:{cols:"3"}},[s("p",[t._v(" 1P1&E1L ")])]),s("b-col",{attrs:{cols:"3"}},[s("p",[t._v(" 1L ")])])],1),s("b-row",{staticClass:"mb-1"},[s("b-col",{attrs:{cols:"3"}},[s("h3",{staticClass:"mt-4 text-dark"},[t._v(" DIn00 ")])]),s("b-col",{attrs:{cols:"9"}},[s("b-row",{staticClass:"rounded-lg mt-3",staticStyle:{height:"50px","background-color":"lightgray"}},[s("b-col",{attrs:{cols:"4"}},[s("span",{staticClass:"fa fa-circle mt-3",staticStyle:{color:"darkgray"}})]),s("b-col",{attrs:{cols:"4"}},[s("span",{staticClass:"fa fa-circle mt-3",staticStyle:{color:"#42b983"}})]),s("b-col",{attrs:{cols:"4"}},[s("span",{staticClass:"fa fa-circle mt-3",staticStyle:{color:"#42b983"}})])],1)],1)],1),s("p",[t._v(t._s(t.myJson))])],1)],1)},o=[],c=(s("4160"),s("b0c0"),s("159b"),s("5a68")),l={name:"PageDeviceStatus",data:function(){return{myJson:c,floors:["B2F","B1F","1F","2F","3F","4F"]}},methods:{readIllumination:function(){var t=this,a={port:"/dev/ttyUSB0",address:12},s="/api/device/value/read_illumi";this.axios.post(s,a).then((function(a){console.log(a.data);var s=/^DIn/;a.data.forEach((function(a){s.test(a.name)&&t.myJson[a.address].forEach((function(t){t.status===a.name?t.status=a.status:t.control===a.name&&(t.control=a.status)}))}))})).catch((function(t){console.log(t)}))}}},r=l,e=s("2877"),u=Object(e["a"])(r,n,o,!1,null,"6ea86886",null);a["default"]=u.exports},"5a68":function(t){t.exports=JSON.parse('{"12":[{"name":"照明-01","status":"DIn00","control":"DOut01"},{"name":"照明-02","status":"DIn01","control":"DOut02"},{"name":"照明-03","status":"DIn02","control":"DOut03"},{"name":"照明-04","status":"DIn03","control":"DOut04"},{"name":"照明-05","status":"DIn04","control":"DOut05"},{"name":"照明-06","status":"DIn05","control":"DOut06"},{"name":"照明-07","status":"DIn06","control":"DOut07"},{"name":"照明-08","status":"DIn07","control":"DOut08"},{"name":"照明-09","status":"DIn08","control":"DOut09"},{"name":"照明-10","status":"DIn09","control":"DOut10"},{"name":"照明-11","status":"DIn10","control":"DOut11"},{"name":"照明-12","status":"DIn11","control":"DOut12"},{"name":"照明-13","status":"DIn12","control":"DOut13"},{"name":"照明-14","status":"DIn13","control":"DOut14"},{"name":"照明-15","status":"DIn14","control":"DOut15"}]}')},b0c0:function(t,a,s){var n=s("83ab"),o=s("9bf2").f,c=Function.prototype,l=c.toString,r=/^\s*function ([^ (]*)/,e="name";n&&!(e in c)&&o(c,e,{configurable:!0,get:function(){try{return l.call(this).match(r)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-9bf736f2.cbb87ba7.js.map