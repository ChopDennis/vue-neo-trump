(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba758"],{"36fe":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"my-3"},[e._l(e.response.device,(function(t,s){return a("b-card",{key:s,staticClass:"mb-3",attrs:{value:t,header:t.class,"header-bg-variant":"dark","header-text-variant":"white","header-class":"font-weight-bold"}},[a("b-button",{staticClass:"text-dark",attrs:{variant:"light",to:"device/"+t.port+"/"+t.address+"/"},on:{click:function(a){return e.getValueList(t.port,t.address)}}},[e._v(" "+e._s(t.model)+" ")])],1)})),a("router-view")],2)},n=[],o=a("bc3a"),r=a.n(o),i={data:function(){return{response:{device:[],value:[{name:"hz",value:50},{name:"hz",value:60}],temp:[]}}},computed:{},beforeMount:function(){var e=this,t=this.$store.state.url;r.a.get(t+"/api/device").then((function(t){console.log(t),e.response.device=t.data,console.log(e.response.device)})),r.a.get(t+"/api/config").then((function(e){console.log(e)}))},methods:{getValueList:function(e,t){this.$store.commit("getDevice",{port:e,address:t}),console.log(this.$store.state.device),this.$router.push("/value")}}},c=i,l=a("2877"),u=Object(l["a"])(c,s,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0ba758.8c85c81f.js.map