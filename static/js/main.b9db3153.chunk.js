(this["webpackJsonpmt-site"]=this["webpackJsonpmt-site"]||[]).push([[0],{323:function(t,e,a){"use strict";a.r(e);var n=a(37),i=a(0),s=a(19),d=a.n(s),r=a(96),c=(a(185),a(140)),o=a(141),l=a(170),u=a(167),L=a(326),p=a(327),O=a(324),j=a(58),I=a(325),h=a(142),x=a.n(h),b=a(143),f=a.n(b),T="sp500/INIT_DATA_LIST",m="vipmap/CHANGE_CURRENT_CITY",E=function(){return function(t){var e=window.location.href;x.a.get(e+"us/sp500_30.json").then((function(e){var a=f.a.decode(e.data.data);console.log(JSON.parse(a).reverse()),t(function(t){for(var e=[],a=[],n=[],i=0;i<t.length;i++){for(var s in t[i].data)t[i][s]=t[i].data[s].close;e.push(t[i].time),n.push(t[i].TOTAL)}for(var d in t[0])"data"!==d&&a.push(d);return{type:T,dataList:t,totalList:n,dayList:e,codeList:a}}(JSON.parse(a).reverse()))})).catch((function(){console.log("error")}))}},y=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.dataList,a=t.totalList,i=t.codeList,s=t.dayList;return Object(n.jsx)(N,{dataList:e,totalList:a,daylList:s,codeList:i})}},{key:"componentDidMount",value:function(){this.props.initData()}}]),a}(i.Component),N=function(t){var e=O.a.Header,a=O.a.Footer;return Object(n.jsxs)(O.a,{children:[Object(n.jsx)(e,{className:"header",children:Object(n.jsx)(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(n.jsx)(j.a.Item,{children:"Market Breadth"},"1")})}),Object(n.jsx)(L.a,{justify:"center",children:Object(n.jsx)(p.a,{style:{background:"#FF0000",padding:"0 0"},xs:{span:20},sm:{span:20},md:{span:20},lg:{span:17},xl:{span:17},children:Object(n.jsx)(I.a,{columns:[{title:"TIME",dataIndex:"time"},{title:"SPX",dataIndex:"SPX"},{title:"COM",dataIndex:"COM"},{title:"CND",dataIndex:"CND"},{title:"CNS",dataIndex:"CNS"},{title:"ENE",dataIndex:"ENE"},{title:"FIN",dataIndex:"FIN"},{title:"HLT",dataIndex:"HLT"},{title:"IND",dataIndex:"IND"},{title:"MAT",dataIndex:"MAT"},{title:"REI",dataIndex:"REI"},{title:"TEC",dataIndex:"TEC"},{title:"UTL",dataIndex:"UTL"},{title:"TOTAL",dataIndex:"TOTAL"}],dataSource:t.dataList,size:"middle",pagination:!1,responsive:"lg"})})}),Object(n.jsx)(a,{style:{textAlign:"center"},children:"Market Breadth \xa92020 Created by Market Breadth"})]})},g=Object(r.b)((function(t){return{dataList:t.getIn(["sp500","dataList"]),totalList:t.getIn(["sp500","totalList"]),codeList:t.getIn(["sp500","codeList"]),dayList:t.getIn(["sp500","dayList"])}}),(function(t){return{initData:function(){t(E())}}}))(y),v=a(68),_=a(163),C=a(164),S=a(85),D=Object(S.fromJS)({dataList:[],totaLList:[],dayList:[],codeList:[]}),M=function(t,e){var a={currentCity:e.currentCity,currentZoom:e.currentZoom};return t.merge(a)},k=function(t,e){return t.merge({dataList:e.dataList,totalList:e.totalList,dayList:e.dayList,codeList:e.codeList})},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return k(t,e);case m:return M(t,e);default:return t}},A=Object(C.combineReducers)({sp500:w}),R=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):v.c)(Object(v.a)(_.a)),X=Object(v.d)(A,R),F=Object(n.jsx)(r.a,{store:X,children:Object(n.jsx)(g,{})});d.a.render(F,document.getElementById("root"))}},[[323,1,2]]]);
//# sourceMappingURL=main.b9db3153.chunk.js.map