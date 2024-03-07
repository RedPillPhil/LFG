"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1021],{4003:function(a,b,c){c.d(b,{BY:function(){return g},Bq:function(){return k},MV:function(){return e},OZ:function(){return d},Rr:function(){return j},Tb:function(){return l},hT:function(){return h},om:function(){return f},si:function(){return m},tE:function(){return n},xy:function(){return i}});var d=2,e=52.1429,f=.0025,g=.0017,h=225e-6,i=575e-6,j=1619136e3,k=86400,l=3600,m=10,n=["0x495c7f3a713870f68f8b418b355c085dfdc412c3","0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea","0xe31debd7abff90b06bca21010dd860d8701fd901","0xfc989fbb6b3024de5ca0144dc23c18a063942ac1","0xe40fc6ff5f2895b44268fd2e1a421e07f567e007","0xfd158609228b43aa380140b46fff3cdf9ad315de","0xc00af6212fcf0e6fd3143e692ccd4191dc308bea","0x205969b3ad459f7eba0dee07231a6357183d3fb6","0x0bd67d358636fd7b0597724aa4f20beedbf3073a","0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075","0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30","0x041929a760d7049edaef0db246fa76ec975e90cc","0xba098df8c6409669f5e6ec971ac02cd5982ac108","0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94","0xe99512305bf42745fae78003428dcaf662afb35d","0xbE609EAcbFca10F6E5504D39E3B113F808389056","0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e","0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b","0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653","0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b",]},71021:function(a,b,c){c.d(b,{jf:function(){return v},l4:function(){return w}});var d=c(47568),e=c(26042),f=c(69396),g=c(10253),h=c(7297),i=c(34051),j=c.n(i),k=c(28687),l=c(67294),m=c(75509),n=c(19683),o=c(2385),p=c(79900),q=c(79566),r=c(40393);function s(){var a=(0,h.Z)(["\n      query pools {\n        now: ","\n        oneDayAgo: ","\n        twoDaysAgo: ","\n        oneWeekAgo: ","\n        twoWeeksAgo: ","\n      }\n    "]);return s=function(){return a},a}var t,u=function(a,b){var c=a?"block: {number: ".concat(a,"}"):"",d='["'.concat(b.join('","'),'"]');return"pairs(\n    where: { id_in: ".concat(d," }\n    ").concat(c,"\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }")},v=(t=(0,d.Z)(j().mark(function a(b,c,d,e,f){var g,h;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,g=(0,k.gql)(s(),u(null,f),u(b,f),u(c,f),u(d,f),u(e,f)),a.next=4,m.dQ.request(g);case 4:return h=a.sent,a.abrupt("return",{data:h,error:!1});case 8:return a.prev=8,a.t0=a.catch(0),console.error("Failed to fetch pool data",a.t0),a.abrupt("return",{error:!0});case 12:case"end":return a.stop()}},a,null,[[0,8]])})),function(a,b,c,d,e){return t.apply(this,arguments)}),w=function(a){return a?a.reduce(function(a,b){var c=b.volumeUSD,d=b.reserveUSD,g=b.reserve0,h=b.reserve1,i=b.token0Price,j=b.token1Price;return a[b.id]=(0,f.Z)((0,e.Z)({},b),{volumeUSD:parseFloat(c),reserveUSD:parseFloat(d),reserve0:parseFloat(g),reserve1:parseFloat(h),token0Price:parseFloat(i),token1Price:parseFloat(j)}),a},{}):{}},x=function(a){var b=(0,l.useState)({error:!1}),c=b[0],e=b[1],f=(0,g.Z)((0,p.z)(),4),h=f[0],i=f[1],k=f[2],m=f[3],s=(0,q.Z)([h,i,k,m]),t=s.blocks,u=s.error,x=(0,g.Z)(null!=t?t:[],4),y=x[0],z=x[1],A=x[2],B=x[3];return(0,l.useEffect)(function(){var b,c=(b=(0,d.Z)(j().mark(function b(){var c,d,f,h,i,k,l,m,p;return j().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,v(y.number,z.number,A.number,B.number,a);case 2:d=(c=b.sent).error,f=c.data,d?e({error:!0}):(h=w(null==f?void 0:f.now),i=w(null==f?void 0:f.oneDayAgo),k=w(null==f?void 0:f.twoDaysAgo),l=w(null==f?void 0:f.oneWeekAgo),m=w(null==f?void 0:f.twoWeeksAgo),p=a.reduce(function(a,b){var c=h[b],d=i[b],e=k[b],f=l[b],j=m[b],p=(0,g.Z)((0,n.T)(null==c?void 0:c.volumeUSD,null==d?void 0:d.volumeUSD,null==e?void 0:e.volumeUSD),2),q=p[0],s=p[1],t=(0,g.Z)((0,n.T)(null==c?void 0:c.volumeUSD,null==f?void 0:f.volumeUSD,null==j?void 0:j.volumeUSD),2),u=t[0],v=t[1],w=c?c.reserveUSD:0,x=(0,r.Y)(null==c?void 0:c.reserveUSD,null==d?void 0:d.reserveUSD),y=c?c.reserve0:0,z=c?c.reserve1:0,A=(0,o.z)(q,u,w),B=A.totalFees24h,C=A.totalFees7d,D=A.lpFees24h,E=A.lpFees7d,F=A.lpApr7d;return c&&(a[b]={address:b,token0:{address:c.token0.id,name:c.token0.name,symbol:c.token0.symbol},token1:{address:c.token1.id,name:c.token1.name,symbol:c.token1.symbol},token0Price:c.token0Price,token1Price:c.token1Price,volumeUSD:q,volumeUSDChange:s,volumeUSDWeek:u,volumeUSDChangeWeek:v,totalFees24h:B,totalFees7d:C,lpFees24h:D,lpFees7d:E,lpApr7d:F,liquidityUSD:w,liquidityUSDChange:x,liquidityToken0:y,liquidityToken1:z}),a},{}),e({data:p,error:!1}));case 6:case"end":return b.stop()}},b)})),function(){return b.apply(this,arguments)}),f=(null==y?void 0:y.number)&&(null==z?void 0:z.number)&&(null==A?void 0:A.number)&&(null==B?void 0:B.number);a.length>0&&f&&!u&&c()},[a,y,z,A,B,u]),c};b.ZP=x},12937:function(a,b,c){c.d(b,{z:function(){return p}});var d=c(47568),e=c(7297),f=c(34051),g=c.n(f),h=c(75472),i=c.n(h),j=c(28687),k=c(75126),l=c(85906);function m(){var a=(0,e.Z)(["query blocks {\n    ","\n  }"]);return m=function(){return a},a}var n,o=function(a){return(0,j.gql)(m(),a)},p=(n=(0,d.Z)(g().mark(function a(b){var c,d,e,f,h,j,m,n,p,q,r=arguments;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=r.length>1&& void 0!==r[1]?r[1]:"desc",d=r.length>2&& void 0!==r[2]?r[2]:500,(null==b?void 0:b.length)!==0){a.next=3;break}return a.abrupt("return",[]);case 3:var g;return a.next=5,(0,k.L)(o,(g=b).map(function(a){return"t".concat(a,":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(a,", timestamp_lt: ").concat(a+600," }) {\n      number\n    }")}),l.I0,d);case 5:if(e=a.sent,f=[],!e){a.next=26;break}for(h=!0,j=!1,m=void 0,a.prev=9,n=Object.keys(e)[Symbol.iterator]();!(h=(p=n.next()).done);h=!0)e[q=p.value].length>0&&f.push({timestamp:q.split("t")[1],number:parseInt(e[q][0].number,10)});a.next=17;break;case 13:a.prev=13,a.t0=a.catch(9),j=!0,m=a.t0;case 17:a.prev=17,a.prev=18,h||null==n.return||n.return();case 20:if(a.prev=20,!j){a.next=23;break}throw m;case 23:return a.finish(20);case 24:return a.finish(17);case 25:return a.abrupt("return",i()(f,function(a){return a.number},c));case 26:return a.abrupt("return",f);case 27:case"end":return a.stop()}},a,null,[[9,13,17,25],[18,,20,24]])})),function(a){return n.apply(this,arguments)})},19683:function(a,b,c){c.d(b,{T:function(){return e}});var d=c(40393),e=function(a,b,c){var e=(0,d.D)(a,b),f=(0,d.D)(b,c),g=(0,d.Y)(e,f);return[e,g]}},79900:function(a,b,c){c.d(b,{z:function(){return h}});var d=c(99982),e=c(18717),f=c(7069),g=c(77982),h=function(){var a=1e3*(0,d.Z)(new Date),b=(0,d.Z)((0,e.Z)((0,f.default)(a,1))),c=(0,d.Z)((0,e.Z)((0,f.default)(a,2))),h=(0,d.Z)((0,e.Z)((0,g.default)(a,1))),i=(0,d.Z)((0,e.Z)((0,g.default)(a,2)));return[b,c,h,i]}},2385:function(a,b,c){c.d(b,{z:function(){return e}});var d=c(4003),e=function(a,b,c){var e=a*d.om,f=b*d.om,g=a*d.BY,h=b*d.BY,i=c>0?b*d.BY*d.MV*100/c:0;return{totalFees24h:e,totalFees7d:f,lpFees24h:g,lpFees7d:h,lpApr7d:i!==1/0?i:0}}},75509:function(a,b,c){c.d(b,{dQ:function(){return h},vA:function(){return g}});var d=c(85906),e=c(28687),f=c(34155),g=function(a){if(a===d.JY)return{"X-Sf":f.env.NEXT_PUBLIC_SF_HEADER||window.sfHeader}},h=new e.GraphQLClient(d.JY,{headers:g(d.JY)});new e.GraphQLClient(d.JY,{headers:{"X-Sf":f.env.SF_HEADER},timeout:5e3}),new e.GraphQLClient("https://graphql.bitquery.io",{headers:{"X-API-KEY":f.env.BIT_QUERY_HEADER},timeout:5e3})},261:function(a,b){var c=function(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([c?a.request(b,c):a.request(b),new Promise(function(a,b){setTimeout(function(){b(Error("Request timed out after ".concat(d," milliseconds")))},d)}),])};b.Z=c},79566:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(47568),e=c(34051),f=c.n(e),g=c(67294),h=c(12937),i=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"desc",c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:1e3,e=(0,g.useState)(),i=e[0],j=e[1],k=(0,g.useState)(!1),l=k[0],m=k[1],n=JSON.stringify(a),o=i?JSON.stringify(i):void 0;return(0,g.useEffect)(function(){var a,e=(a=(0,d.Z)(f().mark(function a(){var d,e;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=JSON.parse(n),a.next=3,(0,h.z)(d,b,c);case 3:0===(e=a.sent).length?m(!0):j(e);case 5:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});(o?JSON.parse(o):void 0)||l||e()},[o,l,c,b,n]),{blocks:i,error:l}}},40393:function(a,b,c){c.d(b,{D:function(){return d},Y:function(){return e}});var d=function(a,b){return a&&b?a-b:a||0},e=function(a,b){return a&&b?(a-b)/b*100:0}},75126:function(a,b,c){c.d(b,{L:function(){return l}});var d,e=c(47568),f=c(26042),g=c(34051),h=c.n(g),i=c(28687),j=c(75509),k=c(261),l=(d=(0,e.Z)(h().mark(function a(b,c,d){var e,g,l,m,n,o,p,q,r=arguments;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=r.length>3&& void 0!==r[3]?r[3]:1e3,g={},l=!1,m=0,n=new i.GraphQLClient(d,{headers:(0,j.vA)(d)}),a.prev=5;case 6:if(l){a.next=18;break}return o=c.length,m+e<c.length&&(o=m+e),p=c.slice(m,o),a.next=12,(0,k.Z)(n,b(p));case 12:q=a.sent,g=(0,f.Z)({},g,q),l=Object.keys(q).length<e||m+e>c.length,m+=e,a.next=6;break;case 18:return a.abrupt("return",g);case 21:return a.prev=21,a.t0=a.catch(5),console.error("Failed to fetch info data",a.t0),a.abrupt("return",null);case 25:case"end":return a.stop()}},a,null,[[5,21]])})),function(a,b,c){return d.apply(this,arguments)})}}])
//# sourceMappingURL=1021-1f117c0033b7ace5.js.map