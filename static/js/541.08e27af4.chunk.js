"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{467:function(t,n,e){e.d(n,{Hg:function(){return s},TP:function(){return o},tx:function(){return p},zv:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="http://api.themoviedb.org/3";var i="3ea4d57f6ff7a488e31a85369041c84d",s=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/trending/all/week?api_key=".concat(i),t.next=3,(0,u.Z)(n);case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"?api_key=").concat(i),t.next=3,(0,u.Z)(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits?api_key=").concat(i),t.next=3,(0,u.Z)(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews?api_key=").concat(i),t.next=3,(0,u.Z)(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},541:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(439),a=e(467),c=e(791),u=e(87),i=e(184),s=function(t){var n=t.credits;return(0,i.jsx)(i.Fragment,{children:n.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"/movies/".concat(t.id,"/credits"),className:"nav-link","aria-current":"page",children:t.title?t.title:t.name})},t.id)}))})},o=e(616),f=function(){var t=(0,o.UO)().movieId,n=(0,c.useState)([]),e=(0,r.Z)(n,2),u=e[0],f=e[1];return(0,c.useEffect)((function(){(0,a.zv)(t).then((function(t){return f(t.cast)}))}),[t]),(0,i.jsx)(c.Suspense,{children:(0,i.jsx)(s,{credits:u})})}}}]);
//# sourceMappingURL=541.08e27af4.chunk.js.map