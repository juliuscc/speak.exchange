(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/chj":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n("q1tI"),o=n.n(r),a=n("vOnD"),c=n("USzo"),i=n("wHcE"),d=o.a.createElement,u=a.c.input.withConfig({displayName:"Input",componentId:"sc-176vmps-0"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px;font-size:18px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.border})),l=a.c.div.withConfig({displayName:"Input__SearchInputWrapper",componentId:"sc-176vmps-1"})(["width:100%;display:flex;"]),s=Object(a.c)(u).withConfig({displayName:"Input__HalfInput",componentId:"sc-176vmps-2"})(["border-radius:10px 0 0 10px;flex:1;"]),p=Object(a.c)(i.c).withConfig({displayName:"Input__SearchButton",componentId:"sc-176vmps-3"})(["border-style:solid solid solid none;border-radius:0px 10px 10px 0px;width:40px;"]),h=function(e){var t=e.onChange,n=e.value,r=e.placeholder,o=e.onClick;return d(l,null,d(s,{onChange:t,value:n,placeholder:r}),d(p,{onClick:o,icon:c.a}))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"4ZG5":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("JTPn"),c=n("vOnD"),i=n("+IKJ"),d=n("YFqc"),u=n.n(d),l=n("VVoN"),s=n("mrSG"),p=n("OXR1"),h=r.forwardRef((function(e,t){return r.createElement(p.a,Object(s.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k0"}),r.createElement("path",{d:"M17 6h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V3a1 1 0 011-1h8a1 1 0 011 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z",key:"k1"}))}));h.displayName="DeleteBin";var f=n("wHcE"),m=o.a.createElement,g=c.c.div.withConfig({displayName:"WordCardEdit__WordCard",componentId:"sc-1a1eyhd-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100px;border-radius:10px;background-color:",";font-family:",";color:",";padding:20px;margin-top:20px;position:relative;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.primaryMuted})),v=c.c.form.withConfig({displayName:"WordCardEdit__InputWrapper",componentId:"sc-1a1eyhd-1"})([""]),w=c.c.input.withConfig({displayName:"WordCardEdit__Word",componentId:"sc-1a1eyhd-2"})(["text-align:center;border-style:none;width:250px;font-size:16px;&:focus{outline:none;}"]),y=Object(c.c)(f.c).withConfig({displayName:"WordCardEdit__Button",componentId:"sc-1a1eyhd-3"})(["position:absolute;background-color:white;border:none;padding:0;right:10px;top:10px;width:auto;height:auto;svg{color:",";}"],(function(e){return e.theme.colors.primary})),b=c.c.hr.withConfig({displayName:"WordCardEdit__Seperator",componentId:"sc-1a1eyhd-4"})(["width:300px;height:10px;border:0.5px solid ",";"],(function(e){return e.theme.colors.border})),x=function(e){var t=e.card,n=e.setCardWithField,r=e.removeCard;return m(g,null,m(y,{icon:h,onClick:r}),m(v,null,m(w,{type:"text",placeholder:"Original word",value:t.original,onChange:function(e){return n("original",e.target.value)}})),m(b,null),m(v,null,m(w,{type:"text",placeholder:"Translation",value:t.translation,onChange:function(e){return n("translation",e.target.value)}})))},C=n("/chj"),k=n("55GN"),_=o.a.createElement,I=c.c.fieldset.withConfig({displayName:"EditDeck__Background",componentId:"sc-1cohc8p-0"})(["background-color:",";width:100%;border:none;:disabled{opacity:0.5;}"],(function(e){return e.theme.colors.focusBackground})),E=c.c.div.withConfig({displayName:"EditDeck__TitleBar",componentId:"sc-1cohc8p-1"})(["display:flex;width:100%;height:100%;padding-top:20px;align-items:center;"]),N=Object(c.c)(C.a).withConfig({displayName:"EditDeck__DeckName",componentId:"sc-1cohc8p-2"})(["min-width:0;@media screen and (max-width:","){flex:1;}"],k.a.tablet.max),O=c.c.div.withConfig({displayName:"EditDeck__ButtonsWrapper",componentId:"sc-1cohc8p-3"})(["margin-left:auto;display:flex;flex-direction:row;& > *{margin-left:10px;}"]),j=c.c.div.withConfig({displayName:"EditDeck__WordsWrapper",componentId:"sc-1cohc8p-4"})(["padding-bottom:50px;"]),W=c.c.button.withConfig({displayName:"EditDeck__HollowWordCard",componentId:"sc-1cohc8p-5"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100px;border-radius:10px;border-style:dashed;border-color:",";border-width:4px;background:",";font-family:",";font-size:100px;color:",";padding:20px;margin-top:20px;cursor:pointer;:hover{background:",";}"],(function(e){return e.theme.colors.white}),(function(e){var t=e.theme;return Object(i.a)(1,t.colors.white)}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.white}),(function(e){var t=e.theme;return Object(i.a)(.8,t.colors.white)})),D=function(e){var t=e.id,n=e.name,r=e.updateName,o=e.cards,a=e.updateCardWithIndex,c=e.addCard,i=e.submitChanges,d=e.edited,s=e.loading,p=e.removeCardWithIndex;return _(I,{disabled:s},_(l.a,null,_(E,null,_(N,{type:"text",placeholder:"Enter a name for you new deck",onChange:function(e){return r(e.target.value)},value:n}),_(O,null,_(f.a,{type:"button",onClick:i,disabled:!d},d?"Save changes":"All changes are saved"),_(u.a,{href:"/view-deck?id=".concat(t)},_(f.a,{type:"button",cancel:!0},"Cancel")))),_(j,null,o.map((function(e,t){return _(x,{key:t,card:e,setCardWithField:a(t),removeCard:p(t)})})),_(W,{onClick:c},"+"))))},B=n("XsGP"),V=o.a.createElement,S=function(){return Object(B.a)(D)};t.default=function(){return V(o.a.Fragment,null,V(a.a,null),V(S,null))}},SKQo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-deck",function(){return n("4ZG5")}])},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),c=n("sNwI"),i=n("NwJ3"),d=n("tEej"),u=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,s,p=a(e),h="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,g=void 0!==m,v=0,w=l(p);if(g&&(m=r(m,f>2?arguments[2]:void 0,2)),void 0==w||h==Array&&i(w))for(n=new h(t=d(p.length));t>v;v++)u(n,v,g?m(p[v],v):p[v]);else for(s=w.call(p),n=new h;!(o=s.next()).done;v++)u(n,v,g?c(s,m,[o.value,v],!0):o.value);return n.length=v,n}})},XsGP:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),c=n("hfKm"),i=n.n(c),d=n("2Eek"),u=n.n(d),l=n("XoMD"),s=n.n(l),p=n("Jo+v"),h=n.n(p),f=n("4mXO"),m=n.n(f),g=n("pLtp"),v=n.n(g),w=n("p0XB"),y=n.n(w);var b=n("d04V"),x=n.n(b),C=n("yLu3"),k=n.n(C);function _(e){return function(e){if(y()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(k()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return x()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var I=n("vYYK"),E=n("nOHt"),N=n("WdAl");function O(e,t){var n=v()(e);if(m.a){var r=m()(e);t&&(r=r.filter((function(t){return h()(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(I.a)(e,t,n[t])})):s.a?u()(e,s()(n)):O(Object(n)).forEach((function(t){i()(e,t,h()(n,t))}))}return e}var W=function(){var e=Object(E.useRouter)(),t=e.query.id,n=Object(r.useReducer)((function(e,t){switch(t.type){case"error":return j({},e,{status:"rejected",error:t.error});case"fetch":return j({},e,{status:"fetching"});case"success":switch(e.status){case"fetching":return j({},e,{status:"resolved",deck:t.deck});case"uploading":return j({},e,{status:"resolved",edited:!1});default:return j({},e)}case"submit_changes":return j({},e,{status:"uploading"});case"local_update":return j({},e,{edited:!0,deck:t.updateFn(e.deck)});default:throw new Error("Unhandled action type: ".concat(t.type))}}),{status:"start",deck:null,error:null,edited:!1}),o=n[0],a=n[1];Object(r.useEffect)((function(){var e=!1;return a({type:"fetch"}),N.a.collection("decks").doc(t).get().then((function(t){if(!e){if(!t.exists)throw new Error("The deck could not be found. Try going back to your decks, and trying this action again.");a({type:"success",deck:t.data()})}})).catch((function(t){return e||a({type:"error",error:t})})),function(){e=!0}}),[t]);return{status:o.status,deck:o.deck,error:o.error,edited:o.edited,updateName:function(e){return a({type:"local_update",updateFn:function(t){return j({},t,{name:e})}})},updateCard:function(e){return function(t,n){return a({type:"local_update",updateFn:function(r){var o=r.cards.map((function(r,o){return o!==e?r:j({},r,Object(I.a)({},t,n))}));return j({},r,{cards:o})}})}},addCard:function(){return a({type:"local_update",updateFn:function(e){return j({},e,{cards:[].concat(_(e.cards),[{original:"",translation:""}])})}})},submitChanges:function(){a({type:"submit_changes"}),N.a.collection("decks").doc(t).set(o.deck).then((function(){a({type:"success"})})).catch((function(e){return a({type:"error",error:e})}))},id:t,removeCard:function(e){return function(){return a({type:"local_update",updateFn:function(t){return j({},t,{cards:t.cards.filter((function(t,n){return n!==e}))})}})}},removeDeck:function(){a({type:"submit_changes"}),N.a.collection("decks").doc(t).delete().then((function(){e.push("/repeat")})).catch((function(e){return a({type:"error",error:e})}))}}},D=n("2iwK"),B=n("uX9c"),V=o.a.createElement,S=a.c.div.withConfig({displayName:"withDeck__SpinnerContainer",componentId:"c9bzi-0"})(["position:relative;"]);t.a=function(e){var t=W(),n=t.status,r=t.deck,o=t.error,a=t.edited,c=t.updateName,i=t.updateCard,d=t.addCard,u=t.submitChanges,l=t.id,s=t.removeCard,p=t.removeDeck;return"start"===n||"fetching"===n?V(S,null,V(D.c,null)):"resolved"===n?V(e,{name:r.name,cards:r.cards,updateName:c,updateCardWithIndex:i,addCard:d,submitChanges:u,edited:a,id:l,removeCardWithIndex:s,removeDeck:p}):"uploading"===n?V(S,null,V(e,{name:r.name,cards:r.cards,updateName:c,updateCardWithIndex:i,addCard:d,submitChanges:u,edited:a,loading:!0,id:l,removeCardWithIndex:s,removeDeck:p}),V(D.c,null)):(console.error(o),V(B.a,null,o&&o.message||"Something went wrong. Try going back to your decks or refreshing the page after a while."))}},d04V:function(e,t,n){e.exports=n("0tVQ")},wHcE:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n("qNsG"),o=n("q1tI"),a=n.n(o),c=n("vOnD"),i=a.a.createElement,d=c.c.button.withConfig({displayName:"Button",componentId:"hh7xaw-0"})(["background:",";padding:10px 20px;border:1px ",";border-style:solid;border-radius:10px;color:",";cursor:pointer;height:43.5px;font-size:14px;:hover:not(:disabled){opacity:0.5;}:disabled{background:",";cursor:not-allowed;}"],(function(e){var t=e.theme;return e.cancel?t.colors.black:t.colors.primary}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primaryMutedInactive})),u=Object(c.c)(d).withConfig({displayName:"Button__FixedSizeButton",componentId:"hh7xaw-1"})(["width:43.5px;padding:0%;"]),l=Object(c.c)(d).withConfig({displayName:"Button__DangerButton",componentId:"hh7xaw-2"})(["background-color:",";"],(function(e){return e.theme.colors.danger})),s=function(e){var t=e.icon,n=Object(r.a)(e,["icon"]),o=Object(c.c)(t).withConfig({displayName:"Button__StyledIcon",componentId:"hh7xaw-3"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white}));return i(u,n,i(o,null))}}},[["SKQo",1,2,3,4,6,0,5,7,8]]]);