(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8b0e"],{3083:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-card",{attrs:{"bg-variant":"light"}},[s("h4",[t._v("System Log")]),s("div",{staticClass:"bg-white border-info border p-3 rounded-lg overflow-auto",staticStyle:{"max-height":"80vh"}},[s("pre",{staticClass:"text-left"},[t._v(t._s(t.response.log))])]),s("h4",{staticClass:"mt-5"},[t._v("USB Log")]),s("div",{staticClass:"bg-white border-info border p-3 rounded-lg overflow-auto ",staticStyle:{"max-height":"80vh"}},[s("pre",{staticClass:"text-left"},[t._v(t._s(t.response.usb))])])])],1)},n=[],o=s("bc3a"),r=s.n(o),i={name:"ElementLogDisplay",data:function(){return{response:{log:"",usb:""}}},beforeMount:function(){var t=this,e=this.$store.state.url,s={name:"mainframe",action:"log"};r.a.post(e+"/api/system/systemd",s).then((function(e){t.response.log=e.data.message})),r.a.get(e+"/api/system/usb").then((function(e){t.response.usb=e.data.message}))}},l=i,c=s("2877"),u=Object(c["a"])(l,a,n,!1,null,"2ead7f64",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b8b0e.04ea575c.js.map