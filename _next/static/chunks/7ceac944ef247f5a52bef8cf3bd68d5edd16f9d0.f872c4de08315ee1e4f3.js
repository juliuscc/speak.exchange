(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2iwK":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return c}));var o=e("vOnD"),r=o.c.div.withConfig({displayName:"Spinner__SpinnerContainer",componentId:"g0l2lc-0"})(["position:relative;"]),i=Object(o.d)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),a=o.c.div.withConfig({displayName:"Spinner",componentId:"g0l2lc-1"})(["border:10px solid ",";border-radius:50%;border-top:10px solid ",";width:70px;height:70px;animation:"," 1s linear infinite;position:absolute;top:70px;left:calc(50% - 35px);filter:drop-shadow(0px 0px 10px #ddd);"],(function(t){return t.theme.colors.focusBackground}),(function(t){return t.theme.colors.primary}),i);n.c=a;var c=Object(o.c)(a).withConfig({displayName:"Spinner__RelativeSpinner",componentId:"g0l2lc-2"})(["position:relative;top:0;left:0;"])},"55GN":function(t,n,e){"use strict";n.a={smallPhone:{max:"600px"},tablet:{min:"600px",max:"992px"},laptop:{min:"992px",max:"1200px"},desktop:{min:"1200px"}}},Hcgl:function(t,n,e){"use strict";var o=e("vOnD"),r=e("55GN"),i=o.c.a.withConfig({displayName:"StyledLink",componentId:"sheh80-0"})(["text-decoration:none;margin:20px;align-items:center;display:flex;flex-direction:column;opacity:",";:hover{opacity:1;}@media screen and (max-width:","){align-items:start;margin:0px;}"],(function(t){var n=t.active,e=t.theme;return n?1:e.transparencies.inactive}),r.a.smallPhone.max);n.a=i},JTPn:function(t,n,e){"use strict";var o=e("q1tI"),r=e.n(o),i=e("YFqc"),a=e.n(i),c=e("nOHt"),l=e("vOnD"),s=e("ODXe"),u=e("slLH"),p=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(o.useState)(t),e=n[0],r=n[1],i=function(){return r((function(t){return!t}))};return[e,i]},f=r.a.createElement,d=l.c.div.withConfig({displayName:"LogInButton__LogInWrapper",componentId:"sc-1kfxgwh-0"})(["padding-right:30px;display:flex;position:absolute;top:0;right:0;height:100%;align-items:center;"]),h=l.c.div.withConfig({displayName:"LogInButton__UserProfile",componentId:"sc-1kfxgwh-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:",";z-index:1;"],(function(t){return t.theme.fonts.text})),m=l.c.img.withConfig({displayName:"LogInButton__ProfileImage",componentId:"sc-1kfxgwh-2"})(["width:40px;border-radius:50%;font-weight:600;place-self:center;cursor:pointer;"]),g=l.c.span.withConfig({displayName:"LogInButton__PopUpBox",componentId:"sc-1kfxgwh-3"})(["visibility:",";width:300px;height:300px;background-color:",";color:#fff;text-align:center;border-radius:6px;padding:10px 0;position:absolute;top:70px;right:30px;display:grid;grid-template-rows:auto auto auto auto;"],(function(t){return t.visible?"visible":"hidden"}),(function(t){return t.theme.colors.black})),v=l.c.span.withConfig({displayName:"LogInButton__ProfileName",componentId:"sc-1kfxgwh-4"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(t){return t.theme.colors.black}),(function(t){return t.theme.colors.white})),x=l.c.div.withConfig({displayName:"LogInButton__ButtonWrapper",componentId:"sc-1kfxgwh-5"})(["display:Grid;grid-template-columns:auto auto;"]),y=l.c.button.withConfig({displayName:"LogInButton__MyProfile",componentId:"sc-1kfxgwh-6"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(t){return t.theme.colors.black}),(function(t){return t.theme.colors.white})),w=l.c.button.withConfig({displayName:"LogInButton__Settings",componentId:"sc-1kfxgwh-7"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(t){return t.theme.colors.black}),(function(t){return t.theme.colors.white})),b=l.c.button.withConfig({displayName:"LogInButton__SignOut",componentId:"sc-1kfxgwh-8"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.black})),k=l.c.button.withConfig({displayName:"LogInButton__SignIn",componentId:"sc-1kfxgwh-9"})(["border:none;font-family:",";font-size:15px;font-weight:600;cursor:pointer;"],(function(t){return t.theme.fonts.text})),I=function(t){var n=t.photoUrl,e=t.displayName,o=t.signOut,i=p(!1),a=Object(s.a)(i,2),c=a[0],l=a[1];return f(r.a.Fragment,null,f(h,null,f(m,{src:n,alt:"profile picture",onClick:l}),f(g,{visible:c},f(m,{src:n}),f(v,null," ",e," "),f(x,null,f(y,null,"MyProfile"),f(w,null,"Settings")),f(b,{onClick:o},"Log Out"))))},N=function(){var t=Object(o.useContext)(u.b),n=t.user,e=t.signInWithGoogle,i=t.signOut;return f(d,null,n?f(r.a.Fragment,null,f(I,{photoUrl:n.photoURL,displayName:n.displayName,signOut:i})):f(k,{onClick:e},"Log in"))},_=e("55GN"),C=e("Hcgl"),O=r.a.createElement,L=l.c.div.withConfig({displayName:"Navbar__NavWrapper",componentId:"sc-1f0mkt0-0"})(["display:flex;flex-direction:column;position:relative;justify-content:center;align-items:center;@media screen and (max-width:","){display:block;}"],_.a.smallPhone.max),P=l.c.div.withConfig({displayName:"Navbar__TitleWrapper",componentId:"sc-1f0mkt0-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:40px;@media screen and (max-width:","){grid-template-columns:1fr;align-items:start;margin:20px;}"],_.a.smallPhone.max),j=l.c.span.withConfig({displayName:"Navbar__Title",componentId:"sc-1f0mkt0-2"})(["font-size:30px;font-family:",";color:",";"],(function(t){return t.theme.fonts.title}),(function(t){var n=t.theme;return t.muted?n.colors.primaryMuted:n.colors.primary})),S=l.c.span.withConfig({displayName:"Navbar__Subtitle",componentId:"sc-1f0mkt0-3"})(["color:",";font-family:",";font-weight:600;@media screen and (max-width:","){display:none;}"],(function(t){return t.theme.colors.black}),(function(t){return t.theme.fonts.text}),_.a.smallPhone.max);n.a=Object(c.withRouter)((function(t){var n=t.router.pathname;return O(L,null,O(P,null,O(a.a,{href:"/",passHref:!0},O(C.a,{active:"/"===n},O("div",null,O(j,null,"speak."),O(j,{muted:!0},"exchange")),O(S,null,"bilingual dictionary"))),O(a.a,{href:"/repeat",passHref:!0},O(C.a,{active:"/"!==n},O("div",null,O(j,null,"speak."),O(j,{muted:!0},"repeat")),O(S,null,"vocabulary trainer")))),O(N,null))}))},ODXe:function(t,n,e){"use strict";function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);o=!0);}catch(l){r=!0,i=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return e}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(n,"a",(function(){return o}))},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var o=e("lwsE"),r=e("W8MJ"),i=e("a1gu"),a=e("Nsbk"),c=e("7W2i");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=e("TqRt"),u=e("284h");n.__esModule=!0,n.default=void 0;var p,f=u(e("q1tI")),d=e("QmWs"),h=e("g/15"),m=s(e("nOHt"));function g(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var v=new Map,x=window.IntersectionObserver,y={};function w(){return p||(x?p=new x((function(t){t.forEach((function(t){if(v.has(t.target)){var n=v.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),v.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var b=function(t){c(s,t);var n,e=(n=s,function(){var t,e=a(n);if(l()){var o=a(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return i(this,t)});function s(t){var n;return o(this,s),(n=e.call(this,t)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var n=null,e=null,o=null;return function(r,i){if(o&&r===n&&i===e)return o;var a=t(r,i);return n=r,e=i,o=a,a}}((function(t,n){return{href:g(t),as:n?g(n):n}})),n.linkClicked=function(t){var e=t.currentTarget,o=e.nodeName,r=e.target;if("A"!==o||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,c=i.as;if(function(t){var n=(0,d.parse)(t,!1,!0),e=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(a)){var l=window.location.pathname;a=(0,d.resolve)(l,a),c=c?(0,d.resolve)(l,c):a,t.preventDefault();var s=n.props.scroll;null==s&&(s=c.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](a,c,{shallow:n.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return r(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),e=n.href,o=n.as,r=(0,d.resolve)(t,e);return[r,o?(0,d.resolve)(t,o):r]}},{key:"handleRef",value:function(t){var n=this;this.p&&x&&t&&t.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,n){var e=w();return e?(e.observe(t),v.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}v.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],t).catch((function(t){0})),y[n.join("%")]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),o=e.href,r=e.as;"string"===typeof n&&(n=f.default.createElement("a",null,n));var i=f.Children.only(n),a={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=r||o),f.default.cloneElement(i,a)}}]),s}(f.Component);n.default=b},rePB:function(t,n,e){"use strict";function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return o}))},uX9c:function(t,n,e){"use strict";var o=e("q1tI"),r=e.n(o),i=e("vOnD"),a=e("55GN"),c=r.a.createElement,l=i.c.div.withConfig({displayName:"ErrorBox",componentId:"xmkffj-0"})(["margin:0 auto;margin-top:20px;max-width:500px;padding:30px 20px;border:solid 1px ",";background:",";border-radius:10px;color:",";h1{margin-top:0;line-height:1;}p{margin-bottom:0;}@media screen and (max-width:","){h1{font-size:25px;}p{font-size:14px;}}"],(function(t){return t.theme.colors.danger}),(function(t){return t.theme.colors.dangerMuted}),(function(t){return t.theme.colors.danger}),a.a.tablet.max);n.a=function(t){var n=t.children;return c(l,null,c("h1",null,"Oops, an error occurred!"),c("p",null,n))}}}]);