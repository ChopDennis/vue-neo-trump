(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f1d53c9"],{"163b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("b-container",[a("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"light"}},[a("b-form-group",{staticClass:"mb-3",attrs:{label:"選擇中控系統：","label-cols-lg":"2","label-size":"lg","label-class":"font-weight-bold pt-1"}},[a("b-form-select",{attrs:{options:e.deviceList},on:{change:e.readCentralSystem},model:{value:e.systemSelected,callback:function(t){e.systemSelected=t},expression:"systemSelected"}})],1)],1)],1),a("b-container",[a("h3",[e._v(e._s(e.deviceName[e.systemSelected]))]),a("div",{staticClass:"border-top"},e._l(e.myJson[e.systemSelected],(function(t,s){return a("b-row",{key:s,staticClass:"mb-1"},e._l(t,(function(t,s){return a("b-col",{key:s,staticClass:"p-3",staticStyle:{height:"200px"},attrs:{lg:12/e.deviceAmount[e.systemSelected]}},[0===t.error?a("div",[0===t.status?a("b-card",{attrs:{header:t.name,"header-tag":"header"}},[a("b-card-text"),a("b-row",[a("b-col",{staticClass:"mb-2",staticStyle:{color:"darkgray"},attrs:{cols:"12"}},[a("b-icon-dash-circle-fill",{staticClass:"mx-1"}),a("span",[e._v("設備未啟動")])],1)],1)],1):e._e(),1===t.status?a("b-card",{attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"success","border-variant":"success"}},[a("b-card-text"),a("b-row",[a("b-col",{staticClass:"mb-2",staticStyle:{color:"#42b983"},attrs:{cols:"12"}},[a("b-icon-file-check-fill",{staticClass:"mx-1"}),a("span",[e._v("設備運行中")])],1)],1)],1):e._e()],1):a("div",[a("b-card",{attrs:{header:t.name,"header-tag":"header","header-text-variant":"white","header-bg-variant":"danger","border-variant":"danger"}},[a("b-card-text"),a("b-row",[a("b-col",{staticClass:"mb-2",staticStyle:{color:"lightcoral"},attrs:{cols:"12"}},[a("b-icon-exclamation-triangle-fill",{staticClass:"mx-1"}),a("span",[e._v("系統偵測到錯誤")])],1)],1)],1)],1)])})),1)})),1)])],1)},r=[],n=(a("4160"),a("b0c0"),a("159b"),a("3a06")),c={name:"PageCentralSystem",data:function(){return{pump:[],waste:n["waste_water"],myJson:n,systemSelected:"",deviceList:[{text:"揚水系統",value:"lifting_pump"},{text:"廢水系統",value:"waste_water"},{text:"污水系統",value:"sewage"},{text:"消防系統",value:"fire"}],deviceAmount:{lifting_pump:2,waste_water:3,sewage:3,fire:2},deviceName:{lifting_pump:"揚水系統",waste_water:"廢水系統",sewage:"汙水系統",fire:"消防系統"}}},created:function(){},methods:{readCentralSystem:function(){var e=this,t="/api/device/value/read_"+this.systemSelected;this.axios.get(t).then((function(t){console.log(t);var a=/^DIn/;t.data.forEach((function(t){a.test(t.name)&&e.myJson[e.systemSelected][t.address].forEach((function(e){e.status===t.name?e.status=t.status:e.error===t.name&&(e.error=t.status)}))}))})).catch((function(e){console.log(e)}))},Alert:function(){alert(this.systemSelected)}}},o=c,l=a("2877"),i=Object(l["a"])(o,s,r,!1,null,"483419ce",null);t["default"]=i.exports},"3a06":function(e){e.exports=JSON.parse('{"lifting_pump":{"15":[{"name":"#1 揚水泵50HP","status":"DIn01","error":"DIn03"},{"name":"#2 揚水泵50HP","status":"DIn02","error":"DIn04"}],"16":[{"name":"#3 揚水泵10HP","status":"DIn01","error":"DIn03"},{"name":"#4 揚水泵10HP","status":"DIn02","error":"DIn04"}]},"waste_water":{"17":[{"name":"B梯 #1 廢水泵","status":"DIn01","error":"DIn03"},{"name":"B梯 #2 廢水泵","status":"DIn02","error":"DIn03"},{"name":"B梯 廢水池","status":1,"error":"DIn04"}],"19":[{"name":"A梯 #1 廢水泵","status":"DIn01","error":"DIn03"},{"name":"A梯 #2 廢水泵","status":"DIn02","error":"DIn03"},{"name":"A梯 廢水池","status":1,"error":"DIn04"}]},"sewage":{"18":[{"name":"B梯 #1 污水泵","status":"DIn01","error":"DIn03"},{"name":"B梯 #2 汙水泵","status":"DIn02","error":"DIn03"},{"name":"B梯 污水池","status":1,"error":"DIn04"}]},"fire":{"12":[{"name":"消防泵","status":"DIn01","error":"DIn04"},{"name":"消防泵 缺水","status":0,"error":"DIn03"}],"13":[{"name":"撒水泵","status":"DIn01","error":"DIn04"},{"name":"撒水泵 缺水","status":0,"error":"DIn03"}],"14":[{"name":"泡沫泵","status":"DIn01","error":"DIn04"},{"name":"泡沫泵 缺水","status":0,"error":"DIn03"}]}}')}}]);
//# sourceMappingURL=chunk-1f1d53c9.d238a005.js.map