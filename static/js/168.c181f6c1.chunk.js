"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{83:function(e,t,n){n.d(t,{Df:function(){return s},Ku:function(){return p},Pg:function(){return o},k:function(){return f},zi:function(){return i}});var r=n(861),a=n(757),u=n.n(a),c=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"aee404d75c4c2c296f37b55a19cb21fa"}}),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},168:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(689),o=n(83),p={},f=n(184),d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,s.useState)(!1),v=(0,a.Z)(d,2),h=v[0],l=v[1],m=(0,s.useState)(null),x=(0,a.Z)(m,2),w=x[0],g=x[1],k=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,(0,o.k)(k);case 4:t=e.sent,u(t.results),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.data.message),g(e.t0.data.message);case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[l,k]),(0,f.jsxs)("div",{className:p.cast,children:[h&&(0,f.jsx)("p",{children:"Loading..."}),w&&(0,f.jsx)("p",{children:"\ud83d\ude25 Something went wrong... Please, reload and try again!"}),Boolean(n.length)&&(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=168.c181f6c1.chunk.js.map