(this.webpackJsonpcnode=this.webpackJsonpcnode||[]).push([[4],{100:function(e,t,a){},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(20);var c=a(33);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=(a(153),a(1)),l=a(28),i=a(5);a(154);function o(e){var t=[{name:"\u5168\u90e8",path:"/index/all",isActive:!0},{name:"\u7cbe\u534e",path:"/index/good",isActive:!1},{name:"\u5206\u4eab",path:"/index/share",isActive:!1},{name:"\u95ee\u7b54",path:"/index/ask",isActive:!1},{name:"\u62db\u8058",path:"/index/job",isActive:!1},{name:"\u5ba2\u6237\u7aef\u6d4b\u8bd5",path:"/index/dev",isActive:!1}],a=Object(r.h)(),o=Object(n.useState)(t),s=Object(l.a)(o,2),u=s[0],m=s[1];Object(n.useEffect)((function(){t.forEach((function(e){e.isActive=!1,e.path==a.pathname&&(e.isActive=!0)})),m([].concat(t))}),[a.pathname]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"tab-link"},u.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(i.b,{to:e.path,className:e.isActive?"tab-active":"",onClick:function(){return function(e){t.forEach((function(e){e.isActive&&(e.isActive=!1)})),t[e].isActive=!t[e].isActive,m([].concat(t))}(a)}},e.name))}))))}var s=a(18),u=a.n(s),m=a(31),f=a(6),p=a.n(f);a(155);function d(e){return c.a.createElement("div",{className:"selected"},c.a.createElement("div",{className:"double-bounce1"}),c.a.createElement("div",{className:"double-bounce2"}))}var v=a(124);a(156);function b(e){var t=e.showPages,a=e.total,r=e.onChange,i=Object(n.useState)(0),o=Object(l.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)([]),f=Object(l.a)(m,2),p=f[0],d=f[1],b=Object(n.useState)(1),g=Object(l.a)(b,2),E=g[0],h=g[1],j=Object(n.useState)(),O=Object(l.a)(j,2),N=O[0],x=O[1],y=Object(n.useRef)(),k=function(e,a){for(var n=[],r=e;r<t+e;r++)r==a?n.push(c.a.createElement("li",{key:r,page:r,className:"page-active"},r)):n.push(c.a.createElement("li",{key:r,page:r},r));return n};Object(n.useEffect)((function(){d(Object(v.a)(k(E,E)))}),[]),Object(n.useEffect)((function(){r(E)}),[E]);return c.a.createElement("div",{className:"pagination"},c.a.createElement("div",{className:"next-page ".concat(1==E?"next-pagination-disabled":""),onClick:function(e){e.preventDefault(),1!=E&&((E-1)%t==0?(d(Object(v.a)(k(E-t,E-1))),y.current.children[0].classList.remove("page-active"),y.current.children[s].classList.add("page-active"),h(E-1),u(t-1)):(y.current.children[s].classList.remove("page-active"),y.current.children[s-1].classList.add("page-active"),u((function(e){return e>0?e-1:0})),h(E-1)))}},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}))),c.a.createElement("ul",{className:"page",ref:y,onClick:function(e){if(e.preventDefault(),!e.target.classList.contains("page-active")){var a=e.target;y.current.children[s].classList.remove("page-active"),a.classList.add("page-active"),u((function(e){return a.getAttribute("page")%t==0?t-1:a.getAttribute("page")%t-1})),h(Number(a.getAttribute("page")))}}},p),c.a.createElement("div",{className:"next-page ".concat(E==a?"next-pagination-disabled":""),onClick:function(e){e.preventDefault(),E!=a&&(E%t==0?(d(Object(v.a)(k(E+1,E+1))),h(E+1),u(0)):(y.current.children[s].classList.remove("page-active"),y.current.children[s+1].classList.add("page-active"),u((function(e){return e>t-1?0:e+1})),h(E+1)))}},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"right",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}))),c.a.createElement("div",{className:"quick-jumper"},"\u8df3\u8f6c\u81f3",c.a.createElement("input",{type:"text",value:N,onChange:function(e){e.preventDefault(),x(e.target.value)},onKeyUp:function(e){switch(e.preventDefault(),e.keyCode){case 8:x((function(e){var t=Number(e.toString().substr(0,e.length-1));return 0==t?"":t}));break;case 13:if(N>a||N<1)return"";var n=N%t,c=0==n?Math.floor((N-1)/t):Math.floor(N/t);d(Object(v.a)(k(c*t+1,N))),h(Number(N)),u(0==n?t-1:n-1),console.log(E,s),x("")}}})," \u9875"))}var g=a(99),E=Object(n.memo)((function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(!0),s=Object(l.a)(o,2),f=s[0],v=s[1],E=Object(n.useState)(1),h=Object(l.a)(E,2),j=h[0],O=h[1];Object(n.useEffect)((function(){Object(m.a)(u.a.mark((function t(){var a,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={page:j,limit:30,tab:e.tag,mdrender:!0},t.next=3,p.a.get("/v1/topics",{params:a});case 3:n=t.sent,c=n.data,i(c.data),c.success&&v(!1);case 7:case"end":return t.stop()}}),t)})))()}),[j]);var N=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"list"},f?c.a.createElement(d,null):c.a.createElement(c.a.Fragment,null,r.map((function(e){return c.a.createElement(c.a.Fragment,{key:e.id},c.a.createElement(g.a,{v:e}))})),c.a.createElement(b,{showPages:5,total:40,onChange:N})))})),h=a(84);t.default=function(e){var t=Object(r.g)();return Object(n.useEffect)((function(){"/index"==t.location.pathname&&t.push("/index/all")}),[t.location.pathname]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"index-container"},c.a.createElement("div",{className:"tabbar"},c.a.createElement(o,null)),c.a.createElement("div",{className:"toplist-cell"},c.a.createElement(r.d,null,c.a.createElement(r.b,{exact:!0,path:"/index/:tag",component:function(e){var t=e.match;return c.a.createElement(E,{tag:t.params.tag})}})))),c.a.createElement(h.a,null))}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(29),c=a(0),r=a.n(c),l=a(7),i=a(5);a(85);function o(e){var t=Object(l.d)((function(e){return e})),a=t.token,c=t.personal;return e.author?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"personal"},r.a.createElement("p",{style:{background:"#f6f6f6"}},"\u4f5c\u8005"),r.a.createElement("div",{className:"user-personal"},r.a.createElement("div",{className:"user-big-avatar"},r.a.createElement(i.b,{to:"/user/".concat(e.author.loginname)},r.a.createElement("img",Object(n.a)({src:e.author.avatar_url,alt:"",title:e.author.loginname},"alt",e.author.loginname))),r.a.createElement(i.b,{to:"/user/".concat(e.author.loginname)},r.a.createElement("p",null,e.author.loginname)))))):""!=a?r.a.createElement("div",{className:"personal"},r.a.createElement("p",{style:{background:"#f6f6f6"}},"\u4e2a\u4eba\u4fe1\u606f"),r.a.createElement("div",{className:"user-personal"},r.a.createElement("div",{className:"user-big-avatar"},r.a.createElement(i.b,{to:"/user/".concat(c.loginname)},r.a.createElement("img",Object(n.a)({src:c.avatar_url,alt:"",title:c.loginname},"alt",c.loginname))),r.a.createElement(i.b,{to:"/user/".concat(c.loginname)},r.a.createElement("p",null,c.loginname))))):r.a.createElement("div",{className:"personal-no"},r.a.createElement("p",null,"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),r.a.createElement("p",{className:"tourist"},"\u5f53\u524d\u662f\u6e38\u5ba2\u72b6\u6001\uff0c\u60a8\u53ef\u4ee5 ",r.a.createElement("a",{href:"#/login"},"\u767b\u5f55")))}},85:function(e,t,a){},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(30),c=a(0),r=a.n(c);function l(e){var t={backgroundColor:"#80bd01",color:"#fff"},a={color:"#fff",fontSize:"12px",padding:"2px 4px",whiteSpace:"nowrap",lineHeight:1.5,margin:"0 5px",borderRadius:5};return e.top?r.a.createElement("span",{style:Object(n.a)({},a,{},t)},"\u7f6e\u9876"):e.good&&!e.top?r.a.createElement("span",{style:Object(n.a)({},a,{},t)},"\u7cbe\u534e"):r.a.createElement("span",{style:Object(n.a)({},a,{},{color:"#999",backgroundColor:"#e5e5e5"})},"ask"==e.tab?"\u95ee\u7b54":"\u5206\u4eab")}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),r=a(92),l=a(5),i=(a(100),a(32));function o(e){var t=Object(n.useContext)(i.a),a=(t.now,t.timeInterval),o=e.v;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cell"},c.a.createElement(l.b,{to:"/user/".concat(o.author.loginname)},c.a.createElement("img",{src:o.author.avatar_url,alt:o.author.loginname,title:o.author.loginname})),o.reply_count>=0&&c.a.createElement("div",{className:"rank"},c.a.createElement("span",null,o.reply_count),c.a.createElement("span",null,"/"),c.a.createElement("span",null,o.visit_count)),void 0!=o.top&&c.a.createElement(r.a,{top:o.top,good:o.good,tab:o.tab}),c.a.createElement(l.b,{className:"title",to:"/topic/".concat(o.id)},o.title),c.a.createElement(l.b,{className:"time",to:"/topic/".concat(o.id)},c.a.createElement("div",null,o.create_at?a(o.create_at):a(o.last_reply_at)))))}}}]);
//# sourceMappingURL=4.94443212.chunk.js.map