(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/h46":function(e,n,t){t("cHUd")("Map")},"9Jkg":function(e,n,t){e.exports=t("oh+g")},GTan:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("gtg/");n.onlyResolvesLast=function(e){var n=null;return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];n&&n();var i=e.apply(void 0,t),a=o.createImperativePromise(i),l=a.promise,c=a.cancel;return n=c,l}}},LX0d:function(e,n,t){e.exports=t("UDep")},RNiq:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),i=t("YFqc"),a=t.n(i),l=t("nOHt"),c=t("vOnD"),u=t("VVoD"),s=r.a.createElement,p=c.c.div.withConfig({displayName:"LogIn__LogInWrapper",componentId:"bhe8mx-0"})(["padding-right:30px;display:flex;position:absolute;top:0;right:0;height:100%;align-items:center;"]),f=c.c.div.withConfig({displayName:"LogIn__UserProfile",componentId:"bhe8mx-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:",";"],(function(e){return e.theme.fonts.text})),d=c.c.img.withConfig({displayName:"LogIn__ProfileImage",componentId:"bhe8mx-2"})(["width:40px;border-radius:50%;font-weight:600;place-self:center;cursor:pointer;"]),h=c.c.span.withConfig({displayName:"LogIn__PopUpBox",componentId:"bhe8mx-3"})(["visibility:",";width:300px;height:300px;background-color:",";color:#fff;text-align:center;border-radius:6px;padding:10px 0;position:absolute;top:70px;right:30px;display:grid;grid-template-rows:auto auto auto auto;"],(function(e){return e.visible?"visible":"hidden"}),(function(e){return e.theme.colors.black})),g=c.c.span.withConfig({displayName:"LogIn__ProfileName",componentId:"bhe8mx-4"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),m=c.c.div.withConfig({displayName:"LogIn__ButtonWrapper",componentId:"bhe8mx-5"})(["display:Grid;grid-template-columns:auto auto;"]),v=c.c.button.withConfig({displayName:"LogIn__MyProfile",componentId:"bhe8mx-6"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),w=c.c.button.withConfig({displayName:"LogIn__Settings",componentId:"bhe8mx-7"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),x=c.c.button.withConfig({displayName:"LogIn__SignOut",componentId:"bhe8mx-8"})(["border:none;background-color:",";color:",";font-size:15px;font-weight:600;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black})),y=c.c.button.withConfig({displayName:"LogIn__SignIn",componentId:"bhe8mx-9"})(["border:none;font-family:",";font-size:15px;font-weight:600;cursor:pointer;"],(function(e){return e.theme.fonts.text})),b=function(e){var n=e.photoUrl,t=e.displayName,o=e.signOut,i=e.action,a=e.visibility,l=e.children;return s(r.a.Fragment,null,s(f,null,s(d,{src:n,alt:"profile picture",onClick:i}),s(h,{visible:a},s(d,{src:n}),s(g,null," ",t," "),s(m,null,s(v,{onClick:v},"MyProfile"),s(w,{onClick:w},"Settings")),s(x,{onClick:o},"Log Out")),l))},_=function(e){var n=e.popUpVisible,t=e.togglePopUpVisible,o=e.user,i=e.signIn,a=e.signOut;return s(p,null,o?s(r.a.Fragment,null,s(b,{photoUrl:o.photoURL,displayName:o.displayName,signOut:a,visibility:n,action:t})):s(y,{onClick:i},"Log in"))},C=r.a.createElement,k=function(){var e=Object(o.useState)(!1),n=e[0],t=e[1];return C(u.b.Consumer,null,(function(e){return C(_,{popUpVisible:n,togglePopUpVisible:function(){return t((function(e){return!e}))},user:e.user,signIn:e.signInWithGoogle,signOut:e.signOut})}))},N=r.a.createElement,I=c.c.div.withConfig({displayName:"Navbar__NavWrapper",componentId:"c98oqv-0"})(["display:flex;flex-direction:column;position:relative;justify-content:center;align-items:center;"]),O=c.c.div.withConfig({displayName:"Navbar__TitleWrapper",componentId:"c98oqv-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:40px;"]),L=c.c.span.withConfig({displayName:"Navbar__Title",componentId:"c98oqv-2"})(["font-size:30px;font-family:",";color:",";"],(function(e){return e.theme.fonts.title}),(function(e){var n=e.theme;return e.muted?n.colors.primaryMuted:n.colors.primary})),S=c.c.span.withConfig({displayName:"Navbar__Subtitle",componentId:"c98oqv-3"})(["color:",";font-family:",";font-weight:600;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text})),j=c.c.a.withConfig({displayName:"Navbar__StyledLink",componentId:"c98oqv-4"})(["text-decoration:none;margin:20px;align-items:center;display:flex;flex-direction:column;opacity:",";:hover{opacity:1;}"],(function(e){var n=e.active,t=e.theme;return n?1:t.transparencies.inactive})),T=Object(l.withRouter)((function(e){var n=e.router.pathname;return N(I,null,N(O,null,N(a.a,{href:"/",passHref:!0},N(j,{active:"/"===n},N("div",null,N(L,null,"speak."),N(L,{muted:!0},"exchange")),N(S,null,"bilingual dictionary"))),N(a.a,{href:"/repeat",passHref:!0},N(j,{active:"/repeat"===n},N("div",null,N(L,null,"speak."),N(L,{muted:!0},"repeat")),N(S,null,"vocabulary trainer")))),N(k,null))})),E=t("0iUn"),U=t("sLSF"),R=t("MI3g"),B=t("a7VT"),M=t("AT/M"),P=t("Tit0"),z=t("hfKm"),V=t.n(z);function W(e,n,t){return n in e?V()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var A=t("mrSG"),q=t("9uj6");function F(e){return Object.keys(e).reduce((n,t)=>(function(e){return Object(q.a)(e)}(t)&&(n[t]=e[t]),n),{})}const H=o.forwardRef((e,n)=>{const{children:t,iconAttrs:r,iconVerticalAlign:i,iconViewBox:a,size:l,title:c}=e,u=Object(A.__rest)(e,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),s=Object.assign({viewBox:a,height:void 0!==e.height?e.height:l,width:void 0!==e.width?e.width:l,"aria-hidden":null==c?"true":void 0,focusable:"false",role:null!=c?"img":void 0},r),p=F(u);return o.createElement("svg",Object.assign({},s,p,{ref:n}),c&&o.createElement("title",{key:"icon-title"},c),t)}),J=Object(c.c)(H)`
  display: inline-block;
  vertical-align: ${e=>e.iconVerticalAlign};
  overflow: hidden;
`;var Q=o.forwardRef((function(e,n){return o.createElement(J,Object(A.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 20 20"},e,{ref:n}),o.createElement("path",{d:"M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z",key:"k0"}))}));Q.displayName="Search";var D=o.forwardRef((function(e,n){return o.createElement(J,Object(A.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:n}),o.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k0"}),o.createElement("path",{d:"M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6H20v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z",key:"k1"}))}));D.displayName="ArrowLeftRight";var X={smallPhone:{max:"600px"},tablet:{min:"600px",max:"992px"},laptop:{min:"992px",max:"1200px"},desktop:{min:"1200px"}},G=c.c.div.withConfig({displayName:"Container",componentId:"sc-1it27te-0"})(["width:",";max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;@media screen and (max-width:","){width:85%;}@media screen and (max-width:","){width:100%;}"],(function(e){return e.narrow?"40%":"80%"}),X.tablet.max,X.smallPhone.max),K=r.a.createElement,Y=c.c.div.withConfig({displayName:"SearchBar__Wrapper",componentId:"sc-5w0r84-0"})(["background:",";padding:20px;"],(function(e){return e.theme.colors.focusBackground})),Z=c.c.div.withConfig({displayName:"SearchBar",componentId:"sc-5w0r84-1"})(["display:flex;flex-direction:row;padding-bottom:10px;"]),$=c.c.input.withConfig({displayName:"SearchBar__SearchBox",componentId:"sc-5w0r84-2"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px 0px 0px 10px;flex:1;font-size:18px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.border})),ee=c.c.button.withConfig({displayName:"SearchBar__SearchButton",componentId:"sc-5w0r84-3"})(["background:",";padding:10px;border:1px ",";border-style:solid solid solid none;border-radius:0px 10px 10px 0px;width:40px;cursor:pointer;"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border})),ne=Object(c.c)(Q).withConfig({displayName:"SearchBar__StyledSearchIcon",componentId:"sc-5w0r84-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),te=c.c.div.withConfig({displayName:"SearchBar__LanguageWrapper",componentId:"sc-5w0r84-5"})(["display:flex;flex-direction:row;margin:5px 0;flex-direction:column;position:relative;justify-content:center;"]),oe=c.c.div.withConfig({displayName:"SearchBar__LanguageSelectWrapper",componentId:"sc-5w0r84-6"})(["display:flex;flex-direction:row;align-items:center;"]),re=function(e){var n=e.language,t=e.onClick;return K(r.a.Fragment,null,K(le,null,n?"French":"English"),K(ie,{onClick:t},K(ae,null)),K(le,null," ",n?"English":"French"))},ie=c.c.button.withConfig({displayName:"SearchBar__SwitchButton",componentId:"sc-5w0r84-7"})(["padding:0;border:1px solid ",";background:transparent;border-radius:5px;background-color:",";height:30px;width:40px;margin:0 10px;cursor:pointer;"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.primary})),ae=Object(c.c)(D).withConfig({displayName:"SearchBar__StyledArrowLeftRight",componentId:"sc-5w0r84-8"})(["width:20px;height:20px;color:",";background-color:",";border-radius:20px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primary})),le=c.c.div.withConfig({displayName:"SearchBar__Language",componentId:"sc-5w0r84-9"})(["width:75px;text-align:center;font-weight:600;"]),ce=c.c.div.withConfig({displayName:"SearchBar__CharacterSelect",componentId:"sc-5w0r84-10"})(["padding:10px;display:flex;position:absolute;top:0;right:0;font-family:",";font-color:",";opacity:70%;font-size:20px;height:100%;align-items:center;"],(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.black})),ue=function(e){var n=e.language,t=e.onLanguageChange,o=e.translationQuery,r=e.onTranslationQueryChange,i=e.triggerSearch;return K(Y,null,K(G,{narrow:!0},K(te,null,K(oe,null,K(re,{language:n,onClick:t})),K(ce,null,"\xe0 \xe2 \xe9 \xe8 \xea \xeb \xef \xee \xf4 \xf9 \xfb \xe7 \u0153 \xe6")),K(Z,null,K($,{placeholder:"Start typing to search",onChange:r,value:o}),K(ee,{onClick:i},K(ne,null)))))};var se=r.a.createElement,pe=function(e){function n(e){var t;Object(E.a)(this,n),t=Object(R.a)(this,Object(B.a)(n).call(this,e)),W(Object(M.a)(t),"handleChange",(function(e){t.setState({translationQuery:e.target.value},t.debouncedURLUpdate)})),W(Object(M.a)(t),"languageChange",(function(){t.setState((function(e){return{language:!e.language}}),t.debouncedURLUpdate)})),W(Object(M.a)(t),"render",(function(){var e=t.state,n=e.translationQuery,o=e.language;return se(r.a.Fragment,null,se(ue,{language:o,onLanguageChange:t.languageChange,translationQuery:n,onTranslationQueryChange:t.handleChange,triggerSearch:t.debouncedURLUpdate}))}));var o=e.router;return t.debouncedURLUpdate=function(e,n){var t;return function(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];t&&clearTimeout(t),t=setTimeout((function(){t=void 0,e.apply(void 0,r)}),n)}}((function(){var e=t.state,n=e.translationQuery,r=e.language;o.push("/?search=".concat(n,"&language=").concat(r?"fr":"en"))}),300),t.state={translationQuery:"",language:!0},t}return Object(P.a)(n,e),Object(U.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.router;this.setState({translationQuery:e.query.search})}}]),n}(r.a.Component),fe=Object(l.withRouter)(pe),de=t("9Jkg"),he=t.n(de),ge=t("vcXL"),me=t.n(ge),ve=t("GTan"),we=Object(ve.onlyResolvesLast)((function(e,n,t){var o={word:e,from:n,to:t};return me()("https://europe-west1-serious-trainer-269217.cloudfunctions.net/lookup-translation",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:he()(o)}).then((function(e){return e.json()}))})),xe=c.c.h1.withConfig({displayName:"TitleBar",componentId:"sc-15eud9l-0"})(["color:",";margin-left:90px;"],(function(e){return e.theme.colors.primaryHighlighted})),ye=r.a.createElement,be=c.c.div.withConfig({displayName:"Translation__Translations",componentId:"sc-1up8vw6-0"})(["display:grid;grid-template-columns:90px 770px;margin:0 0 20px 0;grid-row-gap:15px;"]),_e=c.c.span.withConfig({displayName:"Translation__WordClass",componentId:"sc-1up8vw6-1"})(["font-family:",";font-weight:600;font-size:22px;color:",";text-align:right;margin-right:10px;align-self:center;"],(function(e){return e.theme.fonts.title}),(function(e){return e.theme.colors.primaryMuted})),Ce=c.c.div.withConfig({displayName:"Translation__TranslationContainer",componentId:"sc-1up8vw6-2"})(["display:grid;background:",";border-radius:5px;grid-template-columns:170px 250px auto;padding:15px 15px 15px 0;"],(function(e){var n=e.colored,t=e.theme;return n?t.colors.focusBackground:t.colors.white})),ke=c.c.h2.withConfig({displayName:"Translation__OriginalWord",componentId:"sc-1up8vw6-3"})(["overflow-wrap:normal;padding:10px;align-self:center;font-size:18px;"]),Ne=c.c.span.withConfig({displayName:"Translation__TranslatedWord",componentId:"sc-1up8vw6-4"})(["font-family:",";font-weight:700;color:",";overflow-wrap:normal;align-self:center;font-size:25px;"],(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.primaryHighlighted})),Ie=c.c.div.withConfig({displayName:"Translation__ExampleContainer",componentId:"sc-1up8vw6-5"})(["overflow-wrap:normal;align-self:center;"]),Oe=c.c.p.withConfig({displayName:"Translation__Example",componentId:"sc-1up8vw6-6"})(["font-weight:600;color:",";opacity:70%;"],(function(e){return e.theme.colors.black})),Le=function(e){var n=e.from,t=e.toType,o=e.to,i=e.example,a=e.index;return ye(r.a.Fragment,null,ye(_e,null,t),ye(Ce,{colored:a%2===0},ye(ke,null,n),ye(Ne,null,o),ye(Ie,null,ye(Oe,null,i.from),ye(Oe,null,i.to))))},Se=function(e){var n=e.translationResult,t=n.word,o=n.translations;return ye(r.a.Fragment,null,0===o.length&&""!==t?ye(xe,null,"No translation found for ",t,"."):ye(r.a.Fragment,null,ye(xe,null,t),ye(be,null,o.map((function(e){return e.translations})).flat().map((function(e,n){var t=e.from,o=e.toType,r=e.to,i=e.example;return ye(Le,{from:t,toType:o,to:r,example:i,key:n,index:n})})))))},je=r.a.createElement,Te=Object(c.d)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),Ee=c.c.div.withConfig({displayName:"Exchange__Spinner",componentId:"sc-18dyd0q-0"})(["border:10px solid #f3f3f3;border-radius:50%;border-top:10px solid ",";width:70px;height:70px;animation:"," 1s linear infinite;margin:50px auto;"],(function(e){return e.theme.colors.primary}),Te),Ue=function(){var e=Object(l.useRouter)().query,n=e.search,t=e.language,r="en"===t?"fr":"en",i=Object(o.useState)(!1),a=i[0],c=i[1],u=Object(o.useState)(null),s=u[0],p=u[1];return Object(o.useEffect)((function(){if(!n)return p(null);var e=!1;return c(!0),we(n,t,r).then((function(n){e||(c(!1),p(n))})),function(){e=!0}}),[n,t]),je(G,null,!a&&!s||""===n?je(xe,null,"Welcome to speak.exchange!"):a||!s?je(Ee,null):je(Se,{translationResult:s}))},Re=r.a.createElement;n.default=function(){return Re(r.a.Fragment,null,Re(T,null),Re(fe,null),Re(Ue,null))}},UDep:function(e,n,t){t("wgeU"),t("FlQf"),t("bBy9"),t("g33z"),t("XLbu"),t("/h46"),t("dVTT"),e.exports=t("WEpk").Map},XLbu:function(e,n,t){var o=t("Y7ZC");o(o.P+o.R,"Map",{toJSON:t("8iia")("Map")})},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var o=t("8+Nu"),r=t("/HRN"),i=t("WaGi"),a=t("ZDA2"),l=t("/+P4"),c=t("N9n2"),u=t("LX0d"),s=t("KI45"),p=t("5Uuq");n.__esModule=!0,n.default=void 0;var f,d=p(t("q1tI")),h=t("CxY0"),g=t("g/15"),m=s(t("nOHt"));function v(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var w=new u,x=window.IntersectionObserver,y={};function b(){return f||(x?f=new x((function(e){e.forEach((function(e){if(w.has(e.target)){var n=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),w.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){function n(e){var t;return r(this,n),(t=a(this,l(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,o=null;return function(r,i){if(o&&r===n&&i===t)return o;var a=e(r,i);return n=r,t=i,o=a,a}}((function(e,n){return{href:v(e),as:n?v(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,o=n.nodeName,r=n.target;if("A"!==o||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,l=i.as;if(function(e){var n=(0,h.parse)(e,!1,!0),t=(0,h.parse)((0,g.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(a)){var c=window.location.pathname;a=(0,h.resolve)(c,a),l=l?(0,h.resolve)(c,l):a,e.preventDefault();var u=t.props.scroll;null==u&&(u=l.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](a,l,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return c(n,e),i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,o=n.as,r=(0,h.resolve)(e,t);return[r,o?(0,h.resolve)(e,o):r]}},{key:"handleRef",value:function(e){var n=this,t=y[this.getPaths()[0]];this.p&&x&&e&&e.tagName&&(this.cleanUpListeners(),t||(this.cleanUpListeners=function(e,n){var t=b();return t?(t.observe(e),w.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}w.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths(),t=o(n,2),r=t[0],i=t[1];m.default.prefetch(r,i,e),y[r]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),o=t.href,r=t.as;"string"===typeof n&&(n=d.default.createElement("a",null,n));var i=d.Children.only(n),a={ref:function(n){e.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=r||o),d.default.cloneElement(i,a)}}]),n}(d.Component);n.default=_},dVTT:function(e,n,t){t("aPfg")("Map")},g33z:function(e,n,t){"use strict";var o=t("Wu5q"),r=t("n3ko");e.exports=t("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var n=o.getEntry(r(this,"Map"),e);return n&&n.v},set:function(e,n){return o.def(r(this,"Map"),0===e?0:e,n)}},o,!0)},"gtg/":function(e,n,t){"use strict";function o(e){var n=null,t=null,o=new Promise((function(e,o){n=e,t=o}));return e&&e.then((function(e){n&&n(e)}),(function(e){t&&t(e)})),{promise:o,resolve:function(e){n&&n(e)},reject:function(e){t&&t(e)},cancel:function(){n=null,t=null}}}t.r(n),t.d(n,"createImperativePromise",(function(){return o}))},"oh+g":function(e,n,t){var o=t("WEpk"),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},vcXL:function(e,n,t){"use strict";var o=self.fetch.bind(self);e.exports=o,e.exports.default=e.exports},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,2,4,0,3]]]);