(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/chj":function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return p}));var r=e("q1tI"),o=e.n(r),a=e("vOnD"),i=e("USzo"),c=e("wHcE"),l=o.a.createElement,u=a.c.input.withConfig({displayName:"Input",componentId:"sc-176vmps-0"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px;font-size:18px;"],(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.border})),s=a.c.div.withConfig({displayName:"Input__SearchInputWrapper",componentId:"sc-176vmps-1"})(["width:100%;display:flex;"]),d=Object(a.c)(u).withConfig({displayName:"Input__HalfInput",componentId:"sc-176vmps-2"})(["border-radius:10px 0 0 10px;flex:1;"]),f=Object(a.c)(c.c).withConfig({displayName:"Input__SearchButton",componentId:"sc-176vmps-3"})(["border-style:solid solid solid none;border-radius:0px 10px 10px 0px;width:40px;"]),p=function(n){var t=n.onChange,e=n.value,r=n.placeholder,o=n.onClick;return l(s,null,l(d,{onChange:t,value:e,placeholder:r}),l(f,{onClick:o,icon:i.a}))}},"1OyB":function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,"a",(function(){return r}))},GTan:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("gtg/");t.onlyResolvesLast=function(n){var t=null;return function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];t&&t();var a=n.apply(void 0,e),i=r.createImperativePromise(a),c=i.promise,l=i.cancel;return t=l,c}}},JX7q:function(n,t,e){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.d(t,"a",(function(){return r}))},Ji7U:function(n,t,e){"use strict";function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}e.d(t,"a",(function(){return o}))},OXR1:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("mrSG"),o=e("q1tI"),a=e("vOnD"),i=e("9uj6");function c(n){return Object.keys(n).reduce((t,e)=>(function(n){return Object(i.a)(n)}(e)&&(t[e]=n[e]),t),{})}const l=o.forwardRef((n,t)=>{const{children:e,iconAttrs:a,iconVerticalAlign:i,iconViewBox:l,size:u,title:s}=n,d=Object(r.__rest)(n,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),f=Object.assign({viewBox:l,height:void 0!==n.height?n.height:u,width:void 0!==n.width?n.width:u,"aria-hidden":null==s?"true":void 0,focusable:"false",role:null!=s?"img":void 0},a),p=c(d);return o.createElement("svg",Object.assign({},f,p,{ref:t}),s&&o.createElement("title",{key:"icon-title"},s),e)}),u=Object(a.c)(l)`
  display: inline-block;
  vertical-align: ${n=>n.iconVerticalAlign};
  overflow: hidden;
`},RNiq:function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),a=e("JTPn"),i=e("1OyB"),c=e("vuIU"),l=e("JX7q"),u=e("md7G"),s=e("foSv"),d=e("Ji7U"),f=e("rePB"),p=e("nOHt"),h=e("vOnD"),m=e("mrSG"),g=e("OXR1"),y=r.forwardRef((function(n,t){return r.createElement(g.a,Object(m.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},n,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k0"}),r.createElement("path",{d:"M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6H20v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z",key:"k1"}))}));y.displayName="ArrowLeftRight";var b=e("55GN"),w=e("VVoN"),v=e("/chj"),x=e("wHcE"),O=o.a.createElement,_=h.c.div.withConfig({displayName:"SearchBar__Wrapper",componentId:"sc-1dbrk4r-0"})(["background:",";padding:20px 0;"],(function(n){return n.theme.colors.focusBackground})),j=h.c.div.withConfig({displayName:"SearchBar",componentId:"sc-1dbrk4r-1"})(["display:flex;flex-direction:row;padding-bottom:10px;"]),C=h.c.div.withConfig({displayName:"SearchBar__LanguageWrapper",componentId:"sc-1dbrk4r-2"})(["display:flex;flex-direction:row;margin:5px 0;flex-direction:column;position:relative;justify-content:center;"]),S=h.c.div.withConfig({displayName:"SearchBar__LanguageSelectWrapper",componentId:"sc-1dbrk4r-3"})(["display:flex;flex-direction:row;align-items:center;@media screen and (max-width:","){justify-content:center;}"],b.a.smallPhone.max),k=Object(h.c)(x.c).withConfig({displayName:"SearchBar__SlimIconButton",componentId:"sc-1dbrk4r-4"})(["height:30px;padding:0;border-radius:5px;margin:0 10px;"]),I=function(n){var t=n.language,e=n.onClick;return O(o.a.Fragment,null,O(N,null,t?"French":"English"),O(k,{onClick:e,icon:y}),O(N,null," ",t?"English":"French"))},N=h.c.div.withConfig({displayName:"SearchBar__Language",componentId:"sc-1dbrk4r-5"})(["width:75px;text-align:center;font-weight:600;"]),T=h.c.div.withConfig({displayName:"SearchBar__CharacterSelect",componentId:"sc-1dbrk4r-6"})(["padding:10px 0;padding-right:-6px;display:flex;position:absolute;top:0;right:0;font-family:",";color:",";opacity:70%;font-size:20px;height:100%;align-items:center;@media screen and (max-width:","){display:none;}"],(function(n){return n.theme.fonts.text}),(function(n){return n.theme.colors.black}),b.a.smallPhone.max),P=h.c.button.withConfig({displayName:"SearchBar__CharButton",componentId:"sc-1dbrk4r-7"})(["padding:0 6px;background-color:",";border:none;font-size:16px;cursor:pointer;@media screen and (max-width:","){padding:0 5px;}"],(function(n){return n.theme.colors.focusBackground}),b.a.tablet.max),B=function(n){var t=n.char,e=n.onClick;return O(P,{onClick:e},t)},E=function(n){var t=n.language,e=n.onLanguageChange,r=n.translationQuery,o=n.onTranslationQueryChange,a=n.triggerSearch,i=n.addSpecialCharacter;return O(_,null,O(w.a,null,O(C,null,O(S,null,O(I,{language:t,onClick:e})),O(T,null,["\xe0","\xe2","\xe9","\xe8","\xea","\xeb","\xef","\xee","\xf4","\xf9","\xfb","\xe7","\u0153","\xe6"].map((function(n){return O(B,{key:n,char:n,onClick:i(n)})})))),O(j,null,O(v.b,{placeholder:"Start typing to search",onChange:o,value:r,onClick:a}))))};var R=o.a.createElement;function z(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var L=function(n){Object(d.a)(r,n);var t,e=(t=r,function(){var n,e=Object(s.a)(t);if(z()){var r=Object(s.a)(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return Object(u.a)(this,n)});function r(n){var t;Object(i.a)(this,r),t=e.call(this,n),Object(f.a)(Object(l.a)(t),"handleChange",(function(n){t.setState({translationQuery:n.target.value},t.debouncedURLUpdate)})),Object(f.a)(Object(l.a)(t),"languageChange",(function(){t.setState((function(n){return{language:!n.language}}),t.debouncedURLUpdate)})),Object(f.a)(Object(l.a)(t),"triggerSearch",(function(){var n=t.props.router,e=t.state,r=e.translationQuery,o=e.language;n.push("/?search=".concat(r)),n.push("/?search=".concat(r,"&language=").concat(o?"fr":"en"))})),Object(f.a)(Object(l.a)(t),"addSpecialCharacter",(function(n){return function(){return t.setState((function(t){return{translationQuery:t.translationQuery+n}}),t.debouncedURLUpdate)}})),Object(f.a)(Object(l.a)(t),"render",(function(){var n=t.state,e=n.translationQuery,r=n.language;return R(o.a.Fragment,null,R(E,{language:r,onLanguageChange:t.languageChange,translationQuery:e,onTranslationQueryChange:t.handleChange,triggerSearch:t.triggerSearch,addSpecialCharacter:t.addSpecialCharacter}))}));var a=n.router;return t.debouncedURLUpdate=function(n,t){var e;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];e&&clearTimeout(e),e=setTimeout((function(){e=void 0,n.apply(void 0,o)}),t)}}((function(){var n=t.state,e=n.translationQuery,r=n.language;a.push("/?search=".concat(e,"&language=").concat(r?"fr":"en"))}),300),t.state={translationQuery:"",language:!0},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var n=this.props.router;this.setState({translationQuery:n.query.search||""})}}]),r}(o.a.Component),D=Object(p.withRouter)(L),U=e("vcXL"),q=e.n(U),A=e("GTan"),V=Object(A.onlyResolvesLast)((function(n,t,e){var r={word:n,from:t,to:e};return q()("https://europe-west1-serious-trainer-269217.cloudfunctions.net/lookup-translation",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(n){return n.json()}))}));function Q(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function H(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(e),!0).forEach((function(t){Object(f.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Q(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var X=function(){var n=Object(p.useRouter)().query,t=n.search,e=void 0===t?"":t,o=n.language,a=void 0===o?"en":o,i="en"===a?"fr":"en",c=Object(r.useReducer)((function(n,t){switch(t.type){case"error":return H({},n,{status:"rejected",error:t.error});case"success":return H({},n,{status:"resolved",translation:t.translation});case"searching":return H({},n,{status:"pending"});case"no_query":return{status:"idle",translation:null,error:null};default:throw new Error("Unhandled action type: ".concat(t.type))}}),{status:"idle",translation:null,error:null}),l=c[0],u=c[1];return Object(r.useEffect)((function(){if(!e)return u({type:"no_query"});var n=!1;return u({type:"searching"}),V(e,a,i).then((function(t){return n||u({type:"success",translation:t})})).catch((function(t){return n||u({type:"error",error:t})})),function(){n=!0}}),[e,a]),l},W=e("uX9c"),F=e("2iwK"),G=o.a.createElement,J=h.c.div.withConfig({displayName:"Translation__LoadingOverlay",componentId:"f81yrl-0"})(["opacity:",";"],(function(n){var t=n.loading,e=n.theme;return t?e.transparencies.inactive:1})),M=h.c.h1.withConfig({displayName:"Translation__WelcomeText",componentId:"f81yrl-1"})(["color:",";text-align:center;"],(function(n){return n.theme.colors.primaryHighlighted})),K=h.c.div.withConfig({displayName:"Translation__Translations",componentId:"f81yrl-2"})(["display:grid;grid-template-columns:"," auto;margin-bottom:20px;grid-row-gap:15px;position:relative;width:calc(100% + ",");left:-",";@media screen and (max-width:","){width:100%;left:0;}"],"50px","50px","50px",b.a.smallPhone.max),$=h.c.h1.withConfig({displayName:"Translation__TitleBar",componentId:"f81yrl-3"})(["color:",";grid-column:2 / -1;margin-bottom:0;"],(function(n){return n.theme.colors.primaryHighlighted})),Y=h.c.span.withConfig({displayName:"Translation__WordClass",componentId:"f81yrl-4"})(["font-family:",";font-weight:600;font-size:18px;color:",";text-align:right;margin-right:10px;align-self:center;"],(function(n){return n.theme.fonts.title}),(function(n){return n.theme.colors.primaryMuted})),Z=h.c.div.withConfig({displayName:"Translation__TranslationContainer",componentId:"f81yrl-5"})(["display:grid;background:",";border-radius:5px;grid-template-columns:2fr 4fr;grid-column-gap:10px;padding:15px;@media screen and (min-width:","){grid-template-columns:2fr 3fr;}"],(function(n){var t=n.colored,e=n.theme;return t?e.colors.focusBackground:e.colors.white}),b.a.smallPhone.max),nn=h.c.div.withConfig({displayName:"Translation__WordContainer",componentId:"f81yrl-6"})(["display:grid;grid-column-gap:10px;grid-auto-flow:row;align-content:center;@media screen and (min-width:","){grid-auto-flow:column;}"],b.a.smallPhone.max),tn=h.c.h2.withConfig({displayName:"Translation__OriginalWord",componentId:"f81yrl-7"})(["align-self:center;font-size:18px;margin:0;"]),en=h.c.span.withConfig({displayName:"Translation__TranslatedWord",componentId:"f81yrl-8"})(["font-family:",";font-weight:700;color:",";align-self:center;font-size:18px;@media screen and (min-width:","){font-size:22px;}"],(function(n){return n.theme.fonts.text}),(function(n){return n.theme.colors.primaryHighlighted}),b.a.smallPhone.max),rn=h.c.div.withConfig({displayName:"Translation__ExampleContainer",componentId:"f81yrl-9"})(["align-self:center;"]),on=h.c.p.withConfig({displayName:"Translation__Example",componentId:"f81yrl-10"})(["font-weight:600;color:",";opacity:70%;"],(function(n){return n.theme.colors.black})),an=function(n){var t=n.from,e=n.toType,r=n.to,a=n.example,i=n.index;return G(o.a.Fragment,null,G(Y,null,e),G(Z,{colored:i%2===0},G(nn,null,G(tn,null,t),G(en,null,r)),G(rn,null,G(on,null,a.from),G(on,null,a.to))))},cn=function(n){var t=n.translationResult,e=t.word,r=t.translations,a=n.loading;return G(o.a.Fragment,null,G(J,{loading:a},0===r.length&&""!==e?G($,null,"No translation found for ",e,"."):G(K,null,G($,null,e),r.map((function(n){return n.translations})).flat().map((function(n,t){var e=n.from,r=n.toType,o=n.to,a=n.example;return G(an,{from:e,toType:r,to:o,example:a,key:t,index:t})})))),a&&G(F.c,null))},ln=function(){var n=X(),t=n.status,e=n.translation,r=n.error;return G(w.a,null,"idle"===t?G(M,null,"Welcome to speak.exchange!"):"pending"===t?e?G(cn,{translationResult:e,loading:!0}):G(F.c,null):"resolved"===t?G(cn,{translationResult:e}):(console.error(r),G(W.a,null,"There was an error with fetching the translation. Please refresh the page.")))},un=o.a.createElement;t.default=function(){return un(o.a.Fragment,null,un(a.a,null),un(D,null),un(ln,null))}},USzo:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("mrSG"),o=e("q1tI"),a=e("OXR1"),i=o.forwardRef((function(n,t){return o.createElement(a.a,Object(r.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 20 20"},n,{ref:t}),o.createElement("path",{d:"M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z",key:"k0"}))}));i.displayName="Search"},VVoN:function(n,t,e){"use strict";var r=e("vOnD"),o=e("55GN"),a=r.c.div.withConfig({displayName:"Container",componentId:"sc-1v56vj7-0"})(["width:80%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;position:relative;@media screen and (max-width:","){width:85%;}@media screen and (max-width:","){width:100%;}"],o.a.tablet.max,o.a.smallPhone.max);t.a=a},foSv:function(n,t,e){"use strict";function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}e.d(t,"a",(function(){return r}))},"gtg/":function(n,t,e){"use strict";function r(n){var t=null,e=null,r=new Promise((function(n,r){t=n,e=r}));return n&&n.then((function(n){t&&t(n)}),(function(n){e&&e(n)})),{promise:r,resolve:function(n){t&&t(n)},reject:function(n){e&&e(n)},cancel:function(){t=null,e=null}}}e.r(t),e.d(t,"createImperativePromise",(function(){return r}))},md7G:function(n,t,e){"use strict";function r(n){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(n){return r(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":r(n)})(n)}e.d(t,"a",(function(){return i}));var a=e("JX7q");function i(n,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(a.a)(n):t}},vcXL:function(n,t,e){"use strict";var r=self.fetch.bind(self);n.exports=r,n.exports.default=n.exports},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])},vuIU:function(n,t,e){"use strict";function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t,e){return t&&r(n.prototype,t),e&&r(n,e),n}e.d(t,"a",(function(){return o}))},wHcE:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return d}));var r=e("Ff2n"),o=e("q1tI"),a=e.n(o),i=e("vOnD"),c=a.a.createElement,l=i.c.button.withConfig({displayName:"Button",componentId:"hh7xaw-0"})(["background:",";padding:10px 20px;border:1px ",";border-style:solid;border-radius:10px;color:",";cursor:pointer;height:43.5px;font-size:14px;:hover:not(:disabled){opacity:0.5;}:disabled{background:",";cursor:not-allowed;}"],(function(n){var t=n.theme;return n.cancel?t.colors.black:t.colors.primary}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primaryMutedInactive})),u=Object(i.c)(l).withConfig({displayName:"Button__FixedSizeButton",componentId:"hh7xaw-1"})(["width:43.5px;padding:0%;"]),s=Object(i.c)(l).withConfig({displayName:"Button__DangerButton",componentId:"hh7xaw-2"})(["background-color:",";"],(function(n){return n.theme.colors.danger})),d=function(n){var t=n.icon,e=Object(r.a)(n,["icon"]),o=Object(i.c)(t).withConfig({displayName:"Button__StyledIcon",componentId:"hh7xaw-3"})(["color:",";width:20px;"],(function(n){return n.theme.colors.white}));return c(u,e,c(o,null))}}},[["vlRD",1,2,3,4,6,0,5,7]]]);