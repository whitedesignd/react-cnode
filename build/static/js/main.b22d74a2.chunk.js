(this.webpackJsonpcnode=this.webpackJsonpcnode||[]).push([[0],{32:function(e,t,n){"use strict";var a=n(0),c=n.n(a).a.createContext();t.a=c},44:function(e,t,n){e.exports=n(79)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=(n(49),n(50),n(51),n(17)),i=n(30),s=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:"",personal:{}},t=arguments.length>1?arguments[1]:void 0,n=Object(i.a)({},e);switch(t.type){case"SAVE_TOKEN":return""==n.token&&(n.token=t.token,window.localStorage.setItem("accessToken",t.token)),n;case"DELETE_TOKEN":return n.token="",n;case"SAVE_PERSONAL":return n.personal=t.personal,n;default:return n}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),u=n(12),m=n(13),p=n(9),d=n(14),h=n(15),E=n(5),v=(n(53),n(7)),f=Object(v.b)((function(e){return{token:e.token}}))(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handClick=function(e){""!=a.props.token&&a.props.dispatch({type:"DELETE_TOKEN"})},a.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"pull-left"},c.a.createElement(E.b,{to:"/"},c.a.createElement("img",{src:"//static2.cnodejs.org/public/images/cnodejs_light.svg"})),c.a.createElement("input",{type:"text",className:"search-form"})),c.a.createElement("div",{className:"pull-right"},c.a.createElement("ul",null,a.state.navbarList.map((function(e,t){return e.isToken?c.a.createElement("li",{key:t,style:{display:a.props.token?"":"none"}},c.a.createElement(E.b,{to:e.path,onClick:e.isOnclick?a.handClick.bind(Object(p.a)(a)):null},e.name)):c.a.createElement("li",{key:t},c.a.createElement(E.b,{to:e.path,onClick:e.isOnclick?a.handClick.bind(Object(p.a)(a)):null},e.name))})))))))},a.state={navbarList:[{path:"/",name:" \u9996\u9875",isToken:!1},{path:"/messages",name:"\u672a\u8bfb\u6d88\u606f",isToken:!0},{path:"/getstart",name:" \u65b0\u624b\u5165\u95e8",isToken:!1},{path:"/api",name:" API",isToken:!1},{path:"/about",name:"\u5173\u4e8e",isToken:!1},{path:"/login",name:""!=e.token?"\u9000\u51fa":"\u767b\u5f55",isToken:!1,isOnclick:!0}],token:e.token},a}return Object(m.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,t){return""==e.token?(t.navbarList[t.navbarList.length-1].name="\u767b\u5f55",t):(t.navbarList[t.navbarList.length-1].name="\u9000\u51fa",null)}}]),n}(a.Component)),b=n(18),k=n.n(b),g=n(31),O=n(6),j=n.n(O),y=n(1);n(75),n(76);var w=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,263))})),N=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,257))})),T=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,258))})),x=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,259))})),_=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,260))})),S=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,264))})),L=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,261))})),D=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,262))}));function A(e){return function(t){Object(h.a)(r,t);var n=Object(d.a)(r);function r(){return Object(u.a)(this,r),n.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){return c.a.createElement(a.Suspense,{fallback:c.a.createElement("div",{className:"spinner"},c.a.createElement("div",{className:"rect1"}),c.a.createElement("div",{className:"rect2"}),c.a.createElement("div",{className:"rect3"}),c.a.createElement("div",{className:"rect4"}),c.a.createElement("div",{className:"rect5"}))},c.a.createElement(e,this.props))}}]),r}(a.Component)}var C=[{path:"/index",component:A(w),exact:!1},{path:"/getstart",component:A(x),exact:!0},{path:"/api",component:A(N),exact:!0},{path:"/about",component:A(T),exact:!0},{path:"/topic/:id",component:A(_),exact:!0},{path:"/user/:name",component:A(S),exact:!0},{path:"/user/:name/collections",component:A(L),exact:!0},{path:"/messages",component:A(D),exact:!0},{path:"/login",component:function(e){var t=window.localStorage.getItem("accessToken")||"",n=Object(v.c)(),r=Object(a.useRef)();return c.a.createElement("div",{className:"login"},c.a.createElement("input",{type:"text",maxLength:"50",placeholder:"Access Token",defaultValue:t,ref:r}),c.a.createElement("div",{className:"get-access-token"},c.a.createElement("a",{href:"https://cnodejs.org/setting",target:"_blank"},"\u5982\u4f55\u83b7\u53d6Access Token\uff1f")),c.a.createElement("div",{className:"submit user-select-none",onClick:function(t){t.preventDefault();var a=r.current.value;""!=a&&j.a.post("/v1/accesstoken",{accesstoken:a}).then((function(t){var c=t.data;n({type:"SAVE_TOKEN",token:a}),n({type:"SAVE_PERSONAL",personal:c}),r.current.value="",e.history.push("./idnex")})).catch((function(e){return r.current.value="",alert("\u9519\u8bef\u7684accesstoken")}))}},"Sign in"))},exact:!0}];function z(e){var t=function(){var e=Object(g.a)(k.a.mark((function e(t,n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.a.get("/cnode".concat(t)).then((function(e){var t=e.data,a=document.createElement("html");a.innerHTML=t;var c=a.querySelector("#main #content").outerHTML;n(c)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return c.a.createElement(y.d,null,C.map((function(e,n){return c.a.createElement(y.b,{key:n,exact:e.exact,path:e.path,render:function(n){var a=n.match,r=n.history;if(a)return c.a.createElement(c.a.Fragment,null,c.a.createElement(e.component,{match:a,getHtml:t,history:r}))}})})),c.a.createElement(y.a,{to:"/index/all"}))}var P=n(28);n(77);var F=function(){var e=Object(a.useState)(!1),t=Object(P.a)(e,2),n=t[0],r=t[1];return window.addEventListener("scroll",(function(){var e=document.scrollingElement,t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;t+a>=.9*n&&r(!0),t+a<=.65*n&&r(!1)})),c.a.createElement("div",{style:{opacity:n?1:0},className:"back-top",onClick:function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),r(!1)}},"\u8fd4\u56de\u9876\u90e8")},H=n(32),I=n(25),M=n.n(I);n(78);j.a.interceptors.request.use((function(e){return M.a.start(),e}),(function(e){return Promise.reject(e)})),j.a.interceptors.response.use((function(e){return M.a.done(),e}),(function(e){return Promise.reject(e)}));var V=new Date,R=function(e){var t=new Date(e),n=V.getMonth(),a=t.getMonth(),c=V.getDate(),r=t.getDate(),o=V.getHours(),l=t.getHours();return V.getFullYear()-t.getFullYear()>=1?"".concat(V.getFullYear()-t.getFullYear(),"\u5e74\u524d"):n-a>1?"".concat(n-a,"\u4e2a\u6708\u524d"):n-a==1&&c>=r?"1\u4e2a\u6708\u524d":n-a==1&&r>c?"".concat(31+c-r,"\u5929\u524d"):n==a&&c>r?"".concat(c-r,"\u5929\u524d"):n==a&&c==r?o-l>=1?"".concat(o-l,"\u5c0f\u65f6\u524d"):"".concat(V.getMinutes()-t.getMinutes(),"\u5206\u949f\u524d"):void 0};var K=function(){var e=""!=s.getState().token;return c.a.createElement(H.a.Provider,{value:{now:V,timeInterval:R,isToken:e}},c.a.createElement(v.a,{store:s},c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement("div",{className:"contain"},c.a.createElement(z,null)),c.a.createElement(F,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E.a,null,c.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,3]]]);
//# sourceMappingURL=main.b22d74a2.chunk.js.map