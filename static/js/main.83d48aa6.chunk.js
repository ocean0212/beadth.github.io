(this["webpackJsonpmt-site"]=this["webpackJsonpmt-site"]||[]).push([[0],{286:function(t,e,a){"use strict";a.r(e);var n=a(5),s=a(0),i=a.n(s),r=a(16),c=a.n(r),o=a(68),l=(a(181),a(43)),d=a(113),j=a.n(d),h=a(141),b=a(84),u=a(85),p=a(103),f=a(100),O=a(291),x=a(289),g=a(75),m=a.n(g),y=a(76),L=a.n(y),v="us/BREADTH_INIT_DATA_LIST",D=["SPX","COM","CND","CNS","ENE","FIN","HLT","IND","MAT","REI","TEC","UTL"],T={SPX:"\u6807\u666e500",COM:"\u901a\u8baf",CND:"\u53ef\u9009\u6d88\u8d39",ENE:"\u80fd\u6e90",CNS:"\u5fc5\u987b\u54c1",FIN:"\u91d1\u878d",HLT:"\u751f\u7269\u533b\u7597",IND:"\u5de5\u4e1a",MAT:"\u6750\u6599",REI:"\u5730\u4ea7",TEC:"\u79d1\u6280",UTL:"\u516c\u5171\u4e8b\u4e1a",TOTAL:"\u5408\u8ba1"},w="Loading..",I=" ".replace(/ /g,"\xa0"),C={position:["median","max"],top:!1,content:"breadth.app",offsetX:-50,style:{fill:"#C0C0C0",fontSize:16}},E=function(){return function(t){var e="?t="+Date.parse(new Date)/1e3;m.a.get("us/sp500_100.json"+e,{"Cache-Control":"no-cache"}).then((function(e){t(function(t){for(var e,a,n,s,i=[],r=[],c=[],o=[],l=[],d=[],j=JSON.parse(L.a.decode(t.data)),h=[j[0].time.replace(/-/g,"/")," - ",j[j.length-1].time.replace(/-/g,"/")].join(""),b=0;b<j.length;b++){for(var u in j[b].data).01===j[b].data[u].close&&(j[b].data[u].close=0),j[b].data[u].close=Math.ceil(j[b].data[u].close),j[b][u]=j[b].data[u].close;d.push({day:j[b].time,code:"TOTAL",breadth:Math.ceil(j[b].TOTAL)}),i.push(j[b].time)}for(var p in j[0])"data"!==p&&r.push(p);for(var f in j[0].data)o.push(f);for(var O=0;O<D.length;O++)for(var x=0;x<j.length;x++)l.push([O,x,j[x][D[O]]]);for(var g=0;g<["TOTAL"].length;g++)for(var m=0;m<j.length;m++)c.push([g,m,Math.ceil(j[m].TOTAL)]);s=c[c.length-1][2],a=Math.ceil(j[i.length-1].HIGH_TOTAL),n=Math.ceil(j[i.length-1].LOW_TOTAL),e=Math.ceil(j[i.length-1].OPEN_TOTAL);var y=l.map((function(t){return{name:t[0],day:t[1],breadth:t[2]}})),T=c.map((function(t){return{name:t[0],day:t[1],breadth:t[2]}}));return{type:v,dataList:j,totalList:T,dayList:i,codeList:r,mv20DataList:y,isLoading:!1,lastBreadth:s,lastTime:t.last_time,lineDataList:d,highBreadth:a,lowBreadth:n,openBreadth:e,breadthDateRange:h}}(e.data))})).catch((function(){console.log("error")}))}},S=a(116),k=a(305),_=a(306),A=a(293),F=a(302),B=a(296),H=a(297),N=a(303),M=a(301),P=a(298),R=a(295),W=a(294),X=a(290),z=a(299),J=a(300),G=a(82),U=a(304),Y=a(167),K=a(164),V=function(t){var e=x.a.Header,a=A.a.Title,i=A.a.Paragraph,r=Object(s.useState)(!1),c=Object(S.a)(r,2),o=c[0],l=c[1];return Object(n.jsx)(F.a,{xs:{span:0},sm:{span:24},md:{span:24},lg:{span:24},xl:{span:24},align:"top",children:Object(n.jsxs)(e,{className:"header",children:[Object(n.jsxs)(B.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(n.jsx)(B.a.Item,{children:"Market Breadth"},"headerItem1"),Object(n.jsx)(B.a.Item,{children:Object(n.jsx)("a",{href:"https://lonecapital.com/",target:"_blank",rel:"noreferrer",children:"LEI & LoneCapital"})},"headerItem5"),Object(n.jsx)(B.a.Item,{children:Object(n.jsx)("a",{href:"https://discord.gg/HZabmnG3PS",target:"_blank",rel:"noreferrer",children:"\u6295\u8d44\u4ea4\u6d41"})},"headerItem3"),Object(n.jsx)(B.a.Item,{onClick:function(){l(!0)},children:"\u52a0\u5165/\u5408\u4f5c"},"headerItem4")]}),Object(n.jsx)(H.a,{title:"\u52a0\u5165\u6211\u4eec/\u5408\u4f5c",placement:"left",closable:!1,onClose:function(){l(!1)},visible:o,children:Object(n.jsxs)(N.a,{justify:"center",align:"top",children:[Object(n.jsx)(a,{children:"\u52a0\u5165"}),Object(n.jsxs)(i,{children:["\u76ee\u524d\u6025\u7f3a\u524d\u7aef\u5de5\u7a0b\u5e08\uff0cvue/react \u5747\u53ef, \u8bf7\u4e0d\u8981\u72b9\u8c6b\uff0c\u76f4\u63a5\u53d1\u9001\u90ae\u4ef6\u6216\u8005",Object(n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://forms.gle/Hgm987JQGVntnNe98",children:" \u586b\u5199\u8868\u5355"})]}),Object(n.jsx)(i,{copyable:{tooltips:!1},children:"kenteb@outlook.com"}),Object(n.jsx)(a,{children:"\u5408\u4f5c"}),Object(n.jsx)(i,{children:"\u76ee\u524d\u6536\u5165\u6765\u6e90\u4ec5\u6765\u81ea\u7f51\u53cb\u4eec\u7684\u70ed\u5fc3\u6350\u52a9\uff0c\u6211\u4eec\u6df1\u77e5\u6350\u52a9\u4e0d\u662f\u957f\u4e45\u4e4b\u8ba1\uff0c\u7f51\u7ad9\u7684\u8fd0\u8425\u548c\u5f00\u9700\u8981\u4e00\u5b9a\u7684\u8d39\u7528\u6765\u7ef4\u6301\uff0c\u5982\u679c\u6709\u5408\u4f5c\u7684\u673a\u4f1a\u8bf7\u8054\u7cfb\u6211\u4eec\u3002"}),Object(n.jsx)(i,{copyable:{tooltips:!1},children:"kenteb@outlook.com"})]})})]})})},Q=function(t){var e=x.a.Footer;return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(e,{style:{textAlign:"center"},children:[Object(n.jsx)(F.a,{xs:{span:24},sm:{span:0},md:{span:0},lg:{span:0},xl:{span:0},align:"center",children:Object(n.jsx)(M.a,{padding:[0,0,0,0],width:"100%",message:"\u6a2a\u5c4f\u67e5\u770bMarket Breadth\u8272\u5757\u53d8\u5316\u56fe\u3002",type:"info"})}),"Market Breadth \xa92020 Created by ",Object(n.jsx)("a",{href:"https://breadth.app",children:"breadth.app"})]}),Object(n.jsx)(P.a,{children:Object(n.jsx)("div",{style:{height:40,width:30,lineHeight:"40px",borderRadius:6,backgroundColor:"#1088e9",color:"#fff",textAlign:"center",fontSize:15},children:"\u2191"})})]})},Z=function(t){var e="\u4ea4\u6613\u65e5\u5e02\u573a\u6570\u636e\u6bcf1-2\u5c0f\u65f6\u66f4\u65b0\u4e00\u6b21 | \u6700\u540e\u66f4\u65b0\u65f6\u95f4(\u7f8e\u4e1c): "+t.lastTime;return Object(n.jsx)(N.a,{justify:"center",align:"top",children:Object(n.jsx)(F.a,{xs:{span:24},sm:{span:19},md:{span:20},lg:{span:16},xl:{span:16},align:"top",children:Object(n.jsx)(M.a,{message:e,type:"info",banner:!0})})})},q=function(t){var e=Object(s.useState)(!1),a=Object(S.a)(e,2),i=a[0],r=a[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)(R.a,{danger:!0,onClick:function(){r(!0)},children:[Object(n.jsx)(k.a,{twoToneColor:"#eb2f96"}),"\u652f\u6301"]}),Object(n.jsx)(H.a,{title:"\u6350\u52a9/\u652f\u6301",placement:"right",closable:!1,onClose:function(){r(!1)},visible:i,children:Object(n.jsxs)(N.a,{justify:"center",align:"top",children:[Object(n.jsx)("a",{href:"https://www.paypal.me/kenteb",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{border:"0",src:"https://www.paypalobjects.com/zh_XC/i/btn/btn_donate_SM.gif",title:"PayPal - The safer, easier way to pay online!",alt:"\u4f7f\u7528PayPal\u6309\u94ae\u8fdb\u884c\u6350\u8d60"})}),Object(n.jsx)(W.a,{width:200,src:"/img/PaypalQR.png",alt:"\u70b9\u51fb\u8df3\u8f6c\u5230Paypal.me"}),Object(n.jsx)(X.a,{plain:!0,children:"\u652f\u4ed8\u5b9d"}),Object(n.jsx)(W.a,{width:200,src:"/img/AliPayQR.png"}),Object(n.jsx)(X.a,{plain:!0,children:"\u5fae\u4fe1"}),Object(n.jsx)(W.a,{width:200,src:"/img/WeChatPayQR.png"})]})})]})},$=function(t){return Object(n.jsxs)(N.a,{gutter:[8,8],justify:"center",style:{padding:"12px 0"},children:[Object(n.jsxs)(F.a,{xs:{span:11,offset:1},sm:{span:7,offset:2},md:{span:10,offset:2},lg:{span:7,offset:1},xl:{span:7,offset:1},children:[t.isLoading?Object(n.jsx)("div",{children:w}):Object(n.jsx)(z.a,{title:"Market Breadth",value:t.lastBreadth}),Object(n.jsx)(J.a,{title:" ",children:Object(n.jsx)(J.a.Item,{label:"\u5f00\u76d8",children:Object(n.jsxs)(G.a,{title:"\u5f53\u65e5\u6240\u6709\u5b50\u884c\u4e1a\u5f00\u76d8\u5bbd\u5ea6\u4e4b\u548c",color:"blue",children:[t.openBreadth," ",I,Object(n.jsx)(_.a,{})]},"blue-text")})})]}),Object(n.jsx)(F.a,{xs:{span:7,offset:0},sm:{span:7,offset:0},md:{span:10,offset:1},lg:{span:7,offset:0},xl:{span:7,offset:2},align:"middle",children:Object(n.jsxs)(U.b,{size:25,direction:"vertical",children:[Object(n.jsx)(G.a,{title:"\u6bcf10\u5206\u949f\u66f4\u65b0\u672c\u5730\u6570\u636e",color:"blue",children:Object(n.jsx)(R.a,{type:"primary",onClick:function(){t.initData(),Y.b.success("\u5df2\u66f4\u65b0")},children:"\u5237\u65b0"})},"blue-text"),Object(n.jsx)(q,{})]})})]})},tt=function(t){var e={height:"50px",color:"#fff",lineHeight:"50px",textAlign:"center",background:"#364d79",zIndex:"-1"};return Object(n.jsx)(N.a,{justify:"center",align:"top",children:Object(n.jsx)(F.a,{xs:{span:24},sm:{span:19},md:{span:20},lg:{span:16},xl:{span:16},align:"top",children:Object(n.jsx)("h2",{style:e,children:Object(n.jsx)("a",{style:e,rel:"noreferrer",href:"/",title:"",children:"\u865a\u4f4d\u4ee5\u5f85.."})})})})},et=function(){return Object(n.jsx)(K.a,{loading:!0,active:!0})},at=a(17),nt=function(t){var e={name:{type:"cat",values:["SPX","COM","CND","CNS","ENE","FIN","HLT","IND","MAT","REI","TEC","UTL"]},day:{type:"cat",values:t.days||[]},sales:{nice:!0}},a={formatter:function(t,e,a){return"".concat(t,"\n").concat(T[t])}};return Object(n.jsxs)(at.Chart,{scale:e,height:3e3,animate:!0,data:t.data,forceFit:!0,children:[Object(n.jsx)(at.Axis,{label:a,name:"name",position:"top",tickLine:null,grid:{alignTick:!1,line:{style:{lineWidth:1,lineDash:null,stroke:"#f0f0f0"}}}}),Object(n.jsx)(at.Axis,{name:"day",title:null,grid:{alignTick:!1,line:{style:{lineWidth:1,lineDash:null,stroke:"#f0f0f0"}}}}),Object(n.jsx)(at.Legend,{position:"left-top",offsetY:100,visible:!1}),Object(n.jsx)(at.Tooltip,{shared:!0,showMarkers:!1}),Object(n.jsx)(at.Polygon,{position:"name*day",color:["breadth","#FB5050-#FFFFFF-#009966"],label:["breadth",{offset:-2,style:{fill:"#2E2E2E",shadowBlur:50,shadowColor:"rgba(0, 0, 0, .45)"}}]}),Object(n.jsx)(at.Interaction,{type:"element-active"})]})},st=function(t){var e={name:{type:"cat",values:["TOTAL"]},day:{type:"cat",values:t.days||[]},sales:{nice:!0}},a={formatter:function(t,e,a){return"".concat(t,"\n").concat(T[t])}};return Object(n.jsxs)(at.Chart,{scale:e,height:3e3,data:t.data,forceFit:!0,children:[Object(n.jsx)(at.Axis,{name:"name",position:"top",label:a,tickLine:null,grid:{alignTick:!1,line:{style:{lineWidth:1,lineDash:null,stroke:"#f0f0f0"}}}}),Object(n.jsx)(at.Axis,{name:"day",title:null,visible:!1,grid:{alignTick:!1,line:{style:{lineWidth:1,lineDash:null,stroke:"#f0f0f0"}}}}),Object(n.jsx)(at.Tooltip,{shared:!0,showMarkers:!1}),Object(n.jsx)(at.Legend,{position:"right-top",offsetY:100,visible:!1}),Object(n.jsx)(at.Polygon,{position:"name*day",color:["breadth","#FB5050-#FFFFFF-#009966"],label:["breadth",{offset:-2,style:{fill:"#2E2E2E",shadowBlur:50,shadowColor:"rgba(0, 0, 0, .45)"}}]}),Object(n.jsx)(at.Interaction,{type:"element-active"})]})},it=function(t){var e={mainTitle:{fontSize:16,color:"black",textAlign:"center"},subTitle:{fontSize:14,color:"gray",textAlign:"center"}};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"main-title",style:e.mainTitle,children:"S&P 500 \u5bbd\u5ea6\u8d70\u52bf"}),Object(n.jsx)("h5",{className:"sub-title",style:e.subTitle,children:t.date}),Object(n.jsxs)(at.Chart,{scale:{breadth:{min:0,max:1e3}},padding:[10,20,38,40],autoFit:!0,height:220,data:t.data,children:[Object(n.jsx)(at.Annotation.Text,Object(l.a)({},C)),Object(n.jsx)(at.Axis,{name:"breadth",grid:{align:"center",line:null}}),Object(n.jsx)(at.Axis,{name:"day",label:null}),Object(n.jsx)(at.Line,{shape:"line",position:"day*breadth",color:""}),Object(n.jsx)(at.Legend,{visible:!1}),Object(n.jsx)(at.Slider,{start:.3,end:1,trendCfg:{smooth:!1}}),Object(n.jsx)(at.Annotation.Line,{start:["min","200"],end:["max","200"],text:{position:"end",content:"\u72e9\u730e\u533a",style:{fill:"#FF4D4F"},offsetX:-20,offsetY:20}}),Object(n.jsx)(at.Annotation.Line,{start:["min","949"],end:["max","949"],text:{position:"end",content:"\u8d70\u8d27\u533a",style:{fill:"#FF4D4F"},offsetX:-20,offsetY:-5}}),Object(n.jsx)(at.Point,{position:"day*breadth",shape:["breadth",function(t){return t<201?"triangle":t>949?"triangle-down":"0"}],color:["breadth",function(t){return t<201||t>949?"#FB5050":""}]})]})]})},rt=function(t){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(N.a,{justify:"center",align:"top",children:Object(n.jsx)(F.a,{xs:{span:24},sm:{span:20},md:{span:20},lg:{span:16},xl:{span:16},align:"top",children:t.isLoading?Object(n.jsx)(et,{}):Object(n.jsx)(it,{data:t.lineDataList,date:t.breadthDateRange})})}),Object(n.jsxs)(N.a,{justify:"center",align:"top",children:[Object(n.jsx)(F.a,{xs:{span:0},sm:{span:21},md:{span:21},lg:{span:17},xl:{span:15},children:t.isLoading?Object(n.jsx)(et,{}):Object(n.jsx)(nt,{data:t.mv20DataList,days:t.dayList})}),Object(n.jsx)(F.a,{xs:{span:0},sm:{span:2},md:{span:2},lg:{span:2},xl:{span:2},offset:1,align:"top",children:t.isLoading?Object(n.jsx)(et,{}):Object(n.jsx)(st,{data:t.totalList,days:t.dayList})})]})]})},ct=a(115),ot=a.n(ct),lt="us/economic/GET_NEWYORKFED_SOMA_HOLD",dt="us/economic/GET_NEWYORKFED_WEI",jt=function(){return function(t){m.a.get("us/newyorkfed_wei.json").then((function(e){t(function(t){var e=JSON.parse(L.a.decode(t.data)),a=[];for(var n in e){var s={};s.time=n,s.value=e[n],a.push(s)}var i=(new ot.a.DataView).source(a);return{type:dt,weiStatus:!1,weiDatalist:i}}(e.data))})).catch((function(){console.log("error")}))}},ht=function(){return function(t){m.a.get("us/newyorkfed_makert_hold.json").then((function(e){t(function(t){var e=JSON.parse(L.a.decode(t.data)),a=[];for(var n in e)a.push(e[n]);var s=(new ot.a.DataView).source(a);return{type:lt,somaHolDataStatus:!1,somaHolDataList:s}}(e.data))})).catch((function(){console.log("error")}))}},bt=a(292),ut=function(t){t.somaHolDataList.transform({type:"fold",fields:["agencies","bills","cmbs","frn","mbs","notesbonds","tips","tipsInflationCompensation","total"],key:"type",value:"value"});return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsxs)(at.Chart,{padding:"auto",scale:{value:{min:0},asOfDate:{type:"time",alias:"\u65e5\u671f"}},height:500,data:t.somaHolDataList.rows,autoFit:!0,children:[Object(n.jsx)(at.Tooltip,{shared:!0}),Object(n.jsx)(at.Line,{shape:"line",position:"asOfDate*value",color:"type"})]})})},pt=function(t){return Object(n.jsx)("div",{children:Object(n.jsxs)(at.Chart,{padding:[10,20,70,40],scale:{value:{min:-15,alias:"\u7ecf\u6d4e\u6307\u6570"},time:{tickCount:15}},autoFit:!0,height:300,data:t.weiDatalist.rows,children:[Object(n.jsx)(at.Line,{shape:"line",position:"time*value",color:"type"}),Object(n.jsx)(at.Annotation.Text,Object(l.a)({},C))]})})},ft=bt.a.Panel,Ot=function(t){Object(p.a)(a,t);var e=Object(f.a)(a);function a(){return Object(b.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsx)(N.a,{justify:"center",align:"top",children:Object(n.jsx)(F.a,{xs:{span:24},sm:{span:24},md:{span:20},lg:{span:16},xl:{span:16},align:"top",children:Object(n.jsxs)(bt.a,{defaultActiveKey:["eco2"],children:[Object(n.jsx)(ft,{header:"\u7f8e\u8054\u50a8\u62ab\u9732\u6301\u4ed3",disabled:!0,children:this.props.somaHolDataStatus?Object(n.jsx)(et,{}):Object(n.jsx)(ut,Object(l.a)({},this.props))},"eco1"),Object(n.jsx)(ft,{header:"\u6bcf\u5468\u7ecf\u6d4e\u6307\u6570\uff08WEI\uff09",children:this.props.weiStatus?Object(n.jsx)(et,{}):Object(n.jsx)(pt,Object(l.a)({},this.props))},"eco2"),Object(n.jsx)(ft,{header:"\u6cb9\u91d1\u6bd4/\u94dc\u91d1\u6bd4",disabled:!0,children:this.props.weiStatus?Object(n.jsx)(et,{}):Object(n.jsx)(pt,Object(l.a)({},this.props))},"eco3"),Object(n.jsx)(ft,{header:"\u7f8e\u56fd5/10\u5e74\u5229\u7387",disabled:!0,children:this.props.weiStatus?Object(n.jsx)(et,{}):Object(n.jsx)(pt,Object(l.a)({},this.props))},"eco4")]})})})})}},{key:"componentDidMount",value:function(){this.props.getSomaHold(),this.props.getWei()}}]),a}(s.Component),xt=Object(o.b)((function(t){return{somaHolDataList:t.getIn(["usEconomic","somaHolDataList"]),somaHolDataStatus:t.getIn(["usEconomic","somaHolDataStatus"]),weiStatus:t.getIn(["usEconomic","weiStatus"]),weiDatalist:t.getIn(["usEconomic","weiDatalist"])}}),(function(t){return{getSomaHold:function(){t(ht())},getWei:function(){t(jt())}}}))(Ot),gt=O.a.TabPane,mt=function(t){Object(p.a)(a,t);var e=Object(f.a)(a);function a(t){var n;return Object(b.a)(this,a),n=e.call(this,t),"object"===typeof window&&n.fetchData(),n}return Object(u.a)(a,[{key:"fetchData",value:function(){var t=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.initData();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=this;this.refreshData=setInterval((function(){t.props.initData()}),6e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshData)}},{key:"render",value:function(){return Object(n.jsxs)(x.a,{children:[Object(n.jsx)(V,{}),Object(n.jsx)(Z,{lastTime:this.props.lastTime}),Object(n.jsx)($,Object(l.a)({},this.props)),Object(n.jsx)(tt,{}),Object(n.jsx)(yt,Object(l.a)({},this.props)),Object(n.jsx)(Q,{})]})}}]),a}(s.PureComponent),yt=function(t){return Object(n.jsxs)(O.a,{defaultActiveKey:"content1",centered:!0,children:[Object(n.jsx)(gt,{tab:"\u5e02\u573a\u5bbd\u5ea6",children:Object(n.jsx)(rt,Object(l.a)({},t))},"content11"),Object(n.jsx)(gt,{tab:"\u7ecf\u6d4e\u6570\u636e",children:Object(n.jsx)(xt,{})},"content12"),Object(n.jsx)(gt,{tab:"\u5e02\u573a\u5168\u666f",disabled:!0},"content13")]})},Lt=Object(o.b)((function(t){return{dataList:t.getIn(["us","dataList"]),totalList:t.getIn(["us","totalList"]),codeList:t.getIn(["us","codeList"]),dayList:t.getIn(["us","dayList"]),mv20CodeList:t.getIn(["us","mv20CodeList"]),mv20DataList:t.getIn(["us","mv20DataList"]),isLoading:t.getIn(["us","isLoading"]),lastBreadth:t.getIn(["us","lastBreadth"]),highBreadth:t.getIn(["us","highBreadth"]),lowBreadth:t.getIn(["us","lowBreadth"]),openBreadth:t.getIn(["us","openBreadth"]),lastTime:t.getIn(["us","lastTime"]),lineDataList:t.getIn(["us","lineDataList"]),breadthChartHigh:t.getIn(["us","breadthChartHigh"]),breadthDateRange:t.getIn(["us","breadthDateRange"])}}),(function(t){return{initData:function(){t(E())}}}))(mt),vt=a(73),Dt=a(162),Tt=a(163),wt=a(61),It=Object(wt.fromJS)({dataList:[],totalLList:[],dayList:[],codeList:[],mv20CodeList:D,mv20DataList:[],chartList:[],breadthDays:100,isLoading:!0,isGetData:!0,lastBreadth:0,lastTime:w,BREADTH_DATE_RANGE:[]}),Ct=function(t,e){return t.merge({dataList:e.dataList,totalList:e.totalList,dayList:e.dayList,codeList:e.codeList,mv20CodeList:e.mv20CodeList,mv20DataList:e.mv20DataList,isLoading:e.isLoading,lastBreadth:e.lastBreadth,highBreadth:e.highBreadth,lowBreadth:e.lowBreadth,openBreadth:e.openBreadth,lastTime:e.lastTime,lineDataList:e.lineDataList,breadthChartHigh:e.breadthChartHigh,breadthDateRange:e.breadthDateRange})},Et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Ct(t,e);default:return t}},St=Object(wt.fromJS)({somaHolDataStatus:!0,somaHolDataList:[{}],weiStatus:!0,weiDatalist:[]}),kt=function(t,e){return t.merge({somaHolDataStatus:e.somaHolDataStatus,somaHolDataList:e.somaHolDataList})},_t=function(t,e){return t.merge({weiStatus:e.weiStatus,weiDatalist:e.weiDatalist})},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case lt:return kt(t,e);case dt:return _t(t,e);default:return t}},Ft=Object(Tt.combineReducers)({us:Et,usEconomic:At}),Bt=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):vt.c)(Object(vt.a)(Dt.a)),Ht=Object(vt.d)(Ft,Bt),Nt=Object(n.jsx)(o.a,{store:Ht,children:Object(n.jsx)(Lt,{})});c.a.render(Nt,document.getElementById("breadth"))}},[[286,1,2]]]);
//# sourceMappingURL=main.83d48aa6.chunk.js.map