(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2iwK":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return c}));var o=e("vOnD"),r=o.c.div.withConfig({displayName:"Spinner__SpinnerContainer",componentId:"g0l2lc-0"})(["position:relative;"]),i=Object(o.d)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),a=o.c.div.withConfig({displayName:"Spinner",componentId:"g0l2lc-1"})(["border:10px solid ",";border-radius:50%;border-top:10px solid ",";width:70px;height:70px;animation:"," 1s linear infinite;position:absolute;top:70px;left:calc(50% - 35px);filter:drop-shadow(0px 0px 10px #ddd);"],(function(t){return t.theme.colors.focusBackground}),(function(t){return t.theme.colors.primary}),i);n.c=a;var c=Object(o.c)(a).withConfig({displayName:"Spinner__RelativeSpinner",componentId:"g0l2lc-2"})(["position:relative;top:0;left:0;"])},"55GN":function(t,n,e){"use strict";n.a={smallPhone:{max:"600px"},tablet:{min:"600px",max:"992px"},laptop:{min:"992px",max:"1200px"},desktop:{min:"1200px"}}},JTPn:function(t,n,e){"use strict";var o=e("q1tI"),r=e.n(o),i=e("YFqc"),a=e.n(i),c=e("nOHt"),l=e("vOnD"),s=e("slLH"),u=e("ODXe"),p=e("wd2G"),f=r.a.createElement,d=l.c.div.withConfig({displayName:"LogInButton__LogInWrapper",componentId:"sc-1kfxgwh-0"})(["padding-right:30px;display:flex;position:absolute;top:0;right:0;height:100%;align-items:center;"]),h=l.c.div.withConfig({displayName:"LogInButton__UserProfile",componentId:"sc-1kfxgwh-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:",";z-index:3;"],(function(t){return t.theme.fonts.text})),m=l.c.img.withConfig({displayName:"LogInButton__ProfileImage",componentId:"sc-1kfxgwh-2"})(["width:40px;border-radius:50%;font-weight:600;place-self:center;cursor:pointer;"]),g=l.c.span.withConfig({displayName:"LogInButton__PopUpBox",componentId:"sc-1kfxgwh-3"})(["visibility:",";width:200px;background-color:",";color:#fff;text-align:center;border-radius:6px;padding:25px 0;position:absolute;top:70px;right:30px;display:flex;align-items:center;flex-direction:column;"],(function(t){return t.visible?"visible":"hidden"}),(function(t){return t.theme.colors.black})),x=l.c.span.withConfig({displayName:"LogInButton__ProfileName",componentId:"sc-1kfxgwh-4"})(["border:none;padding-top:10px;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(t){return t.theme.colors.black}),(function(t){return t.theme.colors.white})),v=l.c.button.withConfig({displayName:"LogInButton__SignOut",componentId:"sc-1kfxgwh-5"})(["border:none;display:grid;border-radius:5px;background-color:",";color:",";font-size:15px;font-weight:600;width:50%;align-items:center;margin-top:20px;padding:5px 0;"],(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.black})),w=l.c.button.withConfig({displayName:"LogInButton__SignIn",componentId:"sc-1kfxgwh-6"})(["border:none;font-family:",";font-size:15px;font-weight:600;cursor:pointer;"],(function(t){return t.theme.fonts.text})),b=function(t){var n=t.photoUrl,e=t.displayName,o=t.signOut,i=Object(p.a)(!1),a=Object(u.a)(i,2),c=a[0],l=a[1];return f(r.a.Fragment,null,f(h,null,f(m,{src:n,alt:"profile picture",onClick:l}),f(g,{visible:c},f(m,{src:n}),f(x,null," ",e," "),f(v,{onClick:o},"Log Out"))))},y=function(){var t=Object(o.useContext)(s.b),n=t.user,e=t.signInWithGoogle,i=t.signOut;return f(d,null,n?f(r.a.Fragment,null,f(b,{photoUrl:n.photoURL,displayName:n.displayName,signOut:i})):f(w,{onClick:e},"Log in"))},k=e("55GN"),I=l.c.a.withConfig({displayName:"StyledLink",componentId:"sheh80-0"})(["text-decoration:none;margin:20px;align-items:center;display:flex;flex-direction:column;opacity:",";:hover{opacity:1;}@media screen and (max-width:","){align-items:start;margin:0px;}"],(function(t){var n=t.active,e=t.theme;return n?1:e.transparencies.inactive}),k.a.smallPhone.max),C=r.a.createElement,N=l.c.nav.withConfig({displayName:"Navbar__NavWrapper",componentId:"sc-1f0mkt0-0"})(["display:flex;flex-direction:column;position:relative;justify-content:center;align-items:center;z-index:2;background:",";@media screen and (max-width:","){display:block;}"],(function(t){return t.theme.colors.white}),k.a.smallPhone.max),_=l.c.div.withConfig({displayName:"Navbar__TitleWrapper",componentId:"sc-1f0mkt0-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:40px;@media screen and (max-width:","){grid-template-columns:1fr;align-items:start;margin:20px;}"],k.a.smallPhone.max),O=l.c.span.withConfig({displayName:"Navbar__Title",componentId:"sc-1f0mkt0-2"})(["font-size:30px;font-family:",";color:",";"],(function(t){return t.theme.fonts.title}),(function(t){var n=t.theme;return t.mutedColor?n.colors.primaryMuted:n.colors.primary})),j=l.c.span.withConfig({displayName:"Navbar__Subtitle",componentId:"sc-1f0mkt0-3"})(["color:",";font-family:",";font-weight:600;@media screen and (max-width:","){display:none;}"],(function(t){return t.theme.colors.black}),(function(t){return t.theme.fonts.text}),k.a.smallPhone.max);n.a=function(){var t=Object(c.useRouter)().pathname,n=Object(o.useContext)(s.b);return C(N,null,C(_,null,C(a.a,{href:"/",passHref:!0},C(I,{active:"/"===t},C("div",null,C(O,null,"speak."),C(O,{mutedColor:!0},"exchange")),C(j,null,"bilingual dictionary"))),C(a.a,{href:n.user?"/repeat":"/all-decks",passHref:!0},C(I,{active:"/"!==t},C("div",null,C(O,null,"speak."),C(O,{mutedColor:!0},"repeat")),C(j,null,"vocabulary trainer")))),C(y,null))}},VVoN:function(t,n,e){"use strict";var o=e("vOnD"),r=e("55GN"),i=o.c.div.withConfig({displayName:"Container",componentId:"sc-1v56vj7-0"})(["width:80%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;position:relative;@media screen and (max-width:","){width:85%;}@media screen and (max-width:","){width:100%;}"],r.a.tablet.max,r.a.smallPhone.max);n.a=i},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var o=e("lwsE"),r=e("W8MJ"),i=e("a1gu"),a=e("Nsbk"),c=e("7W2i");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=e("TqRt"),u=e("284h");n.__esModule=!0,n.default=void 0;var p,f=u(e("q1tI")),d=e("QmWs"),h=e("g/15"),m=s(e("nOHt"));function g(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var x=new Map,v=window.IntersectionObserver,w={};function b(){return p||(v?p=new v((function(t){t.forEach((function(t){if(x.has(t.target)){var n=x.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),x.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var y=function(t){c(s,t);var n,e=(n=s,function(){var t,e=a(n);if(l()){var o=a(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return i(this,t)});function s(t){var n;return o(this,s),(n=e.call(this,t)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var n=null,e=null,o=null;return function(r,i){if(o&&r===n&&i===e)return o;var a=t(r,i);return n=r,e=i,o=a,a}}((function(t,n){return{href:g(t),as:n?g(n):n}})),n.linkClicked=function(t){var e=t.currentTarget,o=e.nodeName,r=e.target;if("A"!==o||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,c=i.as;if(function(t){var n=(0,d.parse)(t,!1,!0),e=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(a)){var l=window.location.pathname;a=(0,d.resolve)(l,a),c=c?(0,d.resolve)(l,c):a,t.preventDefault();var s=n.props.scroll;null==s&&(s=c.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](a,c,{shallow:n.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return r(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),e=n.href,o=n.as,r=(0,d.resolve)(t,e);return[r,o?(0,d.resolve)(t,o):r]}},{key:"handleRef",value:function(t){var n=this;this.p&&v&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,n){var e=b();return e?(e.observe(t),x.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}x.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],t).catch((function(t){0})),w[n.join("%")]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),o=e.href,r=e.as;"string"===typeof n&&(n=f.default.createElement("a",null,n));var i=f.Children.only(n),a={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=r||o),f.default.cloneElement(i,a)}}]),s}(f.Component);n.default=y},uX9c:function(t,n,e){"use strict";var o=e("q1tI"),r=e.n(o),i=e("vOnD"),a=e("55GN"),c=r.a.createElement,l=i.c.div.withConfig({displayName:"ErrorBox",componentId:"xmkffj-0"})(["margin:0 auto;margin-top:20px;max-width:500px;padding:30px 20px;border:solid 1px ",";background:",";border-radius:10px;color:",";h1{margin-top:0;line-height:1;}p{margin-bottom:0;}@media screen and (max-width:","){h1{font-size:25px;}p{font-size:14px;}}"],(function(t){return t.theme.colors.error}),(function(t){return t.theme.colors.errorMuted}),(function(t){return t.theme.colors.primary}),a.a.tablet.max);n.a=function(t){var n=t.children;return c(l,null,c("h1",null,"Uh oh l\xe0 l\xe0..."),c("p",null,n))}},wHcE:function(t,n,e){"use strict";e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return p})),e.d(n,"d",(function(){return f})),e.d(n,"e",(function(){return h}));var o=e("Ff2n"),r=e("q1tI"),i=e.n(r),a=e("vOnD"),c=i.a.createElement,l=a.c.button.withConfig({displayName:"Button",componentId:"hh7xaw-0"})(["background:",";padding:0 20px;border:1px ",";border-style:solid;border-radius:10px;color:",";cursor:pointer;height:43.5px;font-size:14px;:hover:not(:disabled){opacity:0.5;}:disabled{background:",";cursor:not-allowed;}:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.border}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.primaryMutedInactive}),(function(t){return t.theme.colors.border})),s=Object(a.c)(l).withConfig({displayName:"Button__FixedSizeButton",componentId:"hh7xaw-1"})(["width:43.5px;padding:0%;"]),u=Object(a.c)(l).withConfig({displayName:"Button__DangerButton",componentId:"hh7xaw-2"})(["background-color:",";"],(function(t){return t.theme.colors.danger})),p=Object(a.c)(l).withConfig({displayName:"Button__BlackButton",componentId:"hh7xaw-3"})(["background-color:",";"],(function(t){return t.theme.colors.black})),f=Object(a.c)(l).withConfig({displayName:"Button__HollowButton",componentId:"hh7xaw-4"})(["border-color:",";border-width:4px;background-color:",";color:",";:hover:not(:disabled){background-color:",";color:",";opacity:1;}"],(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.white})),d=a.c.svg.withConfig({displayName:"Button__StyledIcon",componentId:"hh7xaw-5"})(["color:",";width:20px;"],(function(t){return t.theme.colors.white})),h=function(t){var n=t.icon,e=Object(o.a)(t,["icon"]);return c(s,e,c(d,{as:n}))}},wd2G:function(t,n,e){"use strict";var o=e("q1tI");n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(o.useState)(t),e=n[0],r=n[1],i=function(){return r((function(t){return!t}))};return[e,i]}}}]);