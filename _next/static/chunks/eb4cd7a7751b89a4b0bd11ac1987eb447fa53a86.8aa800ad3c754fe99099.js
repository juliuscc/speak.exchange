(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/h46":function(e,t,n){n("cHUd")("Map")},"0HyY":function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("YFqc"),a=n.n(r),c=n("nOHt"),l=n("vOnD"),s=n("VVoD"),u=i.a.createElement,p=l.c.div.withConfig({displayName:"LogIn__LogInWrapper",componentId:"bhe8mx-0"})(["padding-right:30px;display:flex;position:absolute;top:0;right:0;height:100%;align-items:center;"]),f=l.c.div.withConfig({displayName:"LogIn__UserProfile",componentId:"bhe8mx-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:",";z-index:1;"],(function(e){return e.theme.fonts.text})),h=l.c.img.withConfig({displayName:"LogIn__ProfileImage",componentId:"bhe8mx-2"})(["width:40px;border-radius:50%;font-weight:600;place-self:center;cursor:pointer;"]),d=l.c.span.withConfig({displayName:"LogIn__PopUpBox",componentId:"bhe8mx-3"})(["visibility:",";width:300px;height:300px;background-color:",";color:#fff;text-align:center;border-radius:6px;padding:10px 0;position:absolute;top:70px;right:30px;display:grid;grid-template-rows:auto auto auto auto;"],(function(e){return e.visible?"visible":"hidden"}),(function(e){return e.theme.colors.black})),g=l.c.span.withConfig({displayName:"LogIn__ProfileName",componentId:"bhe8mx-4"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),m=l.c.div.withConfig({displayName:"LogIn__ButtonWrapper",componentId:"bhe8mx-5"})(["display:Grid;grid-template-columns:auto auto;"]),v=l.c.button.withConfig({displayName:"LogIn__MyProfile",componentId:"bhe8mx-6"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),b=l.c.button.withConfig({displayName:"LogIn__Settings",componentId:"bhe8mx-7"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),y=l.c.button.withConfig({displayName:"LogIn__SignOut",componentId:"bhe8mx-8"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black})),w=l.c.button.withConfig({displayName:"LogIn__SignIn",componentId:"bhe8mx-9"})(["border:none;font-family:",";font-size:15px;font-weight:600;cursor:pointer;"],(function(e){return e.theme.fonts.text})),x=function(e){var t=e.photoUrl,n=e.displayName,o=e.signOut,r=e.action,a=e.visibility,c=e.children;return u(i.a.Fragment,null,u(f,null,u(h,{src:t,alt:"profile picture",onClick:r}),u(d,{visible:a},u(h,{src:t}),u(g,null," ",n," "),u(m,null,u(v,null,"MyProfile"),u(b,null,"Settings")),u(y,{onClick:o},"Log Out")),c))},k=function(e){var t=e.popUpVisible,n=e.togglePopUpVisible,o=e.user,r=e.signIn,a=e.signOut;return u(p,null,o?u(i.a.Fragment,null,u(x,{photoUrl:o.photoURL,displayName:o.displayName,signOut:a,visibility:t,action:n})):u(w,{onClick:r},"Log in"))},I=i.a.createElement,_=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return I(s.b.Consumer,null,(function(e){return I(k,{popUpVisible:t,togglePopUpVisible:function(){return n((function(e){return!e}))},user:e.user,signIn:e.signInWithGoogle,signOut:e.signOut})}))},N=i.a.createElement,C=l.c.div.withConfig({displayName:"Navbar__NavWrapper",componentId:"c98oqv-0"})(["display:flex;flex-direction:column;position:relative;justify-content:center;align-items:center;"]),O=l.c.div.withConfig({displayName:"Navbar__TitleWrapper",componentId:"c98oqv-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:40px;"]),L=l.c.span.withConfig({displayName:"Navbar__Title",componentId:"c98oqv-2"})(["font-size:30px;font-family:",";color:",";"],(function(e){return e.theme.fonts.title}),(function(e){var t=e.theme;return e.muted?t.colors.primaryMuted:t.colors.primary})),U=l.c.span.withConfig({displayName:"Navbar__Subtitle",componentId:"c98oqv-3"})(["color:",";font-family:",";font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text})),M=l.c.a.withConfig({displayName:"Navbar__StyledLink",componentId:"c98oqv-4"})(["text-decoration:none;margin:20px;align-items:center;display:flex;flex-direction:column;opacity:",";:hover{opacity:1;}"],(function(e){var t=e.active,n=e.theme;return t?1:n.transparencies.inactive}));t.a=Object(c.withRouter)((function(e){var t=e.router.pathname;return N(C,null,N(O,null,N(a.a,{href:"/",passHref:!0},N(M,{active:"/"===t},N("div",null,N(L,null,"speak."),N(L,{muted:!0},"exchange")),N(U,null,"bilingual dictionary"))),N(a.a,{href:"/repeat",passHref:!0},N(M,{active:"/repeat"===t},N("div",null,N(L,null,"speak."),N(L,{muted:!0},"repeat")),N(U,null,"vocabulary trainer")))),N(_,null))}))},LX0d:function(e,t,n){e.exports=n("UDep")},OXR1:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("mrSG"),i=n("q1tI"),r=n("vOnD"),a=n("9uj6");function c(e){return Object.keys(e).reduce((t,n)=>(function(e){return Object(a.a)(e)}(n)&&(t[n]=e[n]),t),{})}const l=i.forwardRef((e,t)=>{const{children:n,iconAttrs:r,iconVerticalAlign:a,iconViewBox:l,size:s,title:u}=e,p=Object(o.__rest)(e,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),f=Object.assign({viewBox:l,height:void 0!==e.height?e.height:s,width:void 0!==e.width?e.width:s,"aria-hidden":null==u?"true":void 0,focusable:"false",role:null!=u?"img":void 0},r),h=c(p);return i.createElement("svg",Object.assign({},f,h,{ref:t}),u&&i.createElement("title",{key:"icon-title"},u),n)}),s=Object(r.c)(l)`
  display: inline-block;
  vertical-align: ${e=>e.iconVerticalAlign};
  overflow: hidden;
`},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},USzo:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("mrSG"),i=n("q1tI"),r=n("OXR1"),a=i.forwardRef((function(e,t){return i.createElement(r.a,Object(o.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 20 20"},e,{ref:t}),i.createElement("path",{d:"M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z",key:"k0"}))}));a.displayName="Search"},XLbu:function(e,t,n){var o=n("Y7ZC");o(o.P+o.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("8+Nu"),i=n("/HRN"),r=n("WaGi"),a=n("ZDA2"),c=n("/+P4"),l=n("N9n2"),s=n("LX0d"),u=n("KI45"),p=n("5Uuq");t.__esModule=!0,t.default=void 0;var f,h=p(n("q1tI")),d=n("CxY0"),g=n("g/15"),m=u(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var b=new s,y=window.IntersectionObserver,w={};function x(){return f||(y?f=new y((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){function t(e){var n;return i(this,t),(n=a(this,c(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,o=null;return function(i,r){if(o&&i===t&&r===n)return o;var a=e(i,r);return t=i,n=r,o=a,a}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,o=t.nodeName,i=t.target;if("A"!==o||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=n.formatUrls(n.props.href,n.props.as),a=r.href,c=r.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var l=window.location.pathname;a=(0,d.resolve)(l,a),c=c?(0,d.resolve)(l,c):a,e.preventDefault();var s=n.props.scroll;null==s&&(s=c.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](a,c,{shallow:n.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return l(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,o=t.as,i=(0,d.resolve)(e,n);return[i,o?(0,d.resolve)(e,o):i]}},{key:"handleRef",value:function(e){var t=this,n=w[this.getPaths()[0]];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths(),n=o(t,2),i=n[0],r=n[1];m.default.prefetch(i,r,e),w[i]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,i=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var r=h.Children.only(t),a={ref:function(t){e.handleRef(t),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(t):"object"===typeof r.ref&&(r.ref.current=t))},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(a.href=i||o),h.default.cloneElement(r,a)}}]),t}(h.Component);t.default=k},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var o=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=o.getEntry(i(this,"Map"),e);return t&&t.v},set:function(e,t){return o.def(i(this,"Map"),0===e?0:e,t)}},o,!0)}}]);