(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/chj":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),o=n.n(r),c=n("vOnD"),a=n("mrSG"),i=n("OXR1"),d=r.forwardRef((function(e,t){return r.createElement(i.a,Object(a.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 20 20"},e,{ref:t}),r.createElement("path",{d:"M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z",key:"k0"}))}));d.displayName="Search";var u=n("wHcE"),l=o.a.createElement,s=c.c.input.withConfig({displayName:"Input",componentId:"sc-176vmps-0"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px;font-size:18px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.border})),p=c.c.div.withConfig({displayName:"Input__SearchInputWrapper",componentId:"sc-176vmps-1"})(["width:100%;display:flex;"]),h=Object(c.c)(s).withConfig({displayName:"Input__HalfInput",componentId:"sc-176vmps-2"})(["border-radius:10px 0 0 10px;flex:1;:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.theme.colors.border})),f=Object(c.c)(u.c).withConfig({displayName:"Input__SearchButton",componentId:"sc-176vmps-3"})(["border-style:solid solid solid none;border-radius:0px 10px 10px 0px;width:40px;:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.theme.colors.border})),m=function(e){var t=e.onChange,n=e.value,r=e.placeholder,o=e.onClick;return l(p,null,l(h,{onChange:t,value:n,placeholder:r}),l(f,{onClick:o,icon:d}))}},"4ZG5":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("JTPn"),a=n("vOnD"),i=n("+IKJ"),d=n("YFqc"),u=n.n(d),l=n("VVoN"),s=n("mrSG"),p=n("OXR1"),h=r.forwardRef((function(e,t){return r.createElement(p.a,Object(s.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k0"}),r.createElement("path",{d:"M17 6h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V3a1 1 0 011-1h8a1 1 0 011 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z",key:"k1"}))}));h.displayName="DeleteBin";var f=n("wHcE"),m=o.a.createElement,g=a.c.div.withConfig({displayName:"WordCardEdit__WordCard",componentId:"sc-1a1eyhd-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100px;border-radius:10px;background-color:",";font-family:",";color:",";padding:20px;margin-top:20px;position:relative;:hover > form > input{background-color:",";}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.primaryMuted}),(function(e){return e.theme.colors.focusBackground})),b=a.c.form.withConfig({displayName:"WordCardEdit__InputWrapper",componentId:"sc-1a1eyhd-1"})([""]),w=a.c.input.withConfig({displayName:"WordCardEdit__Word",componentId:"sc-1a1eyhd-2"})(["text-align:center;border-style:none;width:250px;font-size:16px;&:focus{outline:none;}"]),y=Object(a.c)(f.c).withConfig({displayName:"WordCardEdit__Button",componentId:"sc-1a1eyhd-3"})(["position:absolute;background-color:white;border:none;padding:0;right:10px;top:10px;width:auto;height:auto;svg{color:",";}"],(function(e){return e.theme.colors.primary})),x=a.c.hr.withConfig({displayName:"WordCardEdit__Seperator",componentId:"sc-1a1eyhd-4"})(["width:300px;height:10px;border:0.5px solid ",";"],(function(e){return e.theme.colors.border})),v=function(e){var t=e.card,n=e.setCardWithField,r=e.removeCard;return m(g,null,m(y,{icon:h,onClick:r}),m(b,null,m(w,{type:"text",placeholder:"Original word",value:t.original,onChange:function(e){return n("original",e.target.value)}})),m(x,null),m(b,null,m(w,{type:"text",placeholder:"Translation",value:t.translation,onChange:function(e){return n("translation",e.target.value)}})))},k=n("/chj"),C=n("55GN"),_=o.a.createElement,O=a.c.fieldset.withConfig({displayName:"EditDeck__Background",componentId:"sc-1cohc8p-0"})(["background-color:",";width:100%;border:none;padding:0;margin:0;:disabled{opacity:0.5;}"],(function(e){return e.theme.colors.focusBackground})),I=a.c.div.withConfig({displayName:"EditDeck__TitleBar",componentId:"sc-1cohc8p-1"})(["display:flex;width:100%;height:100%;padding-top:20px;align-items:center;"]),j=Object(a.c)(k.a).withConfig({displayName:"EditDeck__DeckName",componentId:"sc-1cohc8p-2"})(["min-width:0;@media screen and (max-width:","){flex:1;}"],C.a.tablet.max),N=a.c.div.withConfig({displayName:"EditDeck__ButtonsWrapper",componentId:"sc-1cohc8p-3"})(["margin-left:auto;display:flex;flex-direction:row;& > *{margin-left:10px;}"]),E=a.c.div.withConfig({displayName:"EditDeck__WordsWrapper",componentId:"sc-1cohc8p-4"})(["padding-bottom:50px;"]),D=a.c.button.withConfig({displayName:"EditDeck__HollowWordCard",componentId:"sc-1cohc8p-5"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100px;border-radius:10px;border-style:dashed;border-color:",";border-width:4px;background:",";font-family:",";font-size:100px;color:",";padding:20px;margin-top:20px;cursor:pointer;:hover{background:",";}"],(function(e){return e.theme.colors.white}),(function(e){var t=e.theme;return Object(i.a)(1,t.colors.white)}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.white}),(function(e){var t=e.theme;return Object(i.a)(.8,t.colors.white)})),W=function(e){var t=e.id,n=e.name,r=e.updateName,o=e.cards,c=e.updateCardWithIndex,a=e.addCard,i=e.submitChanges,d=e.edited,s=e.loading,p=e.removeCardWithIndex;return _(O,{disabled:s},_(l.a,null,_(I,null,_(j,{type:"text",placeholder:"Enter a name for you new deck",onChange:function(e){return r(e.target.value)},value:n}),_(N,null,_(f.a,{type:"button",onClick:i,disabled:!d},d?"Save changes":"All changes are saved"),_(u.a,{href:"/view-deck?id=".concat(t)},_(f.a,{type:"button",cancel:!0},"Cancel")))),_(E,null,o.map((function(e,t){return _(v,{key:t,card:e,setCardWithField:c(t),removeCard:p(t)})})),_(D,{onClick:a},"+"))))},B=n("XsGP"),S=o.a.createElement,P=function(){return Object(B.a)(W)};t.default=function(){return S(o.a.Fragment,null,S(c.a,null),S(P,null))}},SKQo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-deck",function(){return n("4ZG5")}])},VVoN:function(e,t,n){"use strict";var r=n("vOnD"),o=n("55GN"),c=r.c.div.withConfig({displayName:"Container",componentId:"sc-1v56vj7-0"})(["width:80%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;position:relative;@media screen and (max-width:","){width:85%;}@media screen and (max-width:","){width:100%;}"],o.a.tablet.max,o.a.smallPhone.max);t.a=c},XsGP:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("vOnD");function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=n("rePB"),d=n("nOHt"),u=n("iqUP"),l=n.n(u),s=n("slLH"),p=n("WdAl");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){var e=Object(d.useRouter)(),t=e.query.id,n=Object(r.useContext)(s.b),o=Object(r.useReducer)((function(e,t){switch(t.type){case"error":return f({},e,{status:"rejected",error:t.error});case"fetch":return f({},e,{status:"fetching"});case"success":switch(e.status){case"fetching":return f({},e,{status:"resolved",deck:t.deck});case"uploading":return f({},e,{status:"resolved",edited:!1});default:return f({},e)}case"submit_changes":return f({},e,{status:"uploading"});case"local_update":return f({},e,{edited:!0,deck:t.updateFn(e.deck)});default:throw new Error("Unhandled action type: ".concat(t.type))}}),{status:"start",deck:null,error:null,edited:!1}),c=o[0],u=o[1];Object(r.useEffect)((function(){var e=!1;return u({type:"fetch"}),p.a.collection("decks").doc(t).get().then((function(t){if(!e){if(!t.exists)throw new Error("The deck could not be found. Try going back to your decks, and trying this action again.");u({type:"success",deck:t.data()})}})).catch((function(t){return e||u({type:"error",error:t})})),function(){e=!0}}),[t]);return{status:c.status,deck:c.deck,error:c.error,edited:c.edited,updateName:function(e){return u({type:"local_update",updateFn:function(t){return f({},t,{name:e})}})},updateCard:function(e){return function(t,n){return u({type:"local_update",updateFn:function(r){var o=r.cards.map((function(r,o){return o!==e?r:f({},r,Object(i.a)({},t,n))}));return f({},r,{cards:o})}})}},addCard:function(){return u({type:"local_update",updateFn:function(e){return f({},e,{cards:[].concat(a(e.cards),[{original:"",translation:""}])})}})},submitChanges:function(){u({type:"submit_changes"}),p.a.collection("decks").doc(t).set(c.deck).then((function(){u({type:"success"}),e.push("/repeat")})).catch((function(e){return u({type:"error",error:e})}))},id:t,removeCard:function(e){return function(){return u({type:"local_update",updateFn:function(t){return f({},t,{cards:t.cards.filter((function(t,n){return n!==e}))})}})}},removeDeck:function(){u({type:"submit_changes"}),p.a.collection("decks").doc(t).delete().then((function(){e.push("/repeat")})).catch((function(e){return u({type:"error",error:e})}))},uid:n.user&&n.user.uid,copyDeck:function(){u({type:"submit_changes"});var t=f({},c.deck,{uid:n.user.uid,createdAt:l.a.firestore.FieldValue.serverTimestamp(),name:"Copy of ".concat(c.deck.name)});return p.a.collection("decks").add(t).then((function(){e.push("/repeat")})).catch((function(e){return u({type:"error",error:e})}))}}},g=n("2iwK"),b=n("uX9c"),w=o.a.createElement,y=c.c.div.withConfig({displayName:"withDeck__SpinnerContainer",componentId:"c9bzi-0"})(["position:relative;"]);t.a=function(e){var t=m(),n=t.status,r=t.deck,o=t.error,c=t.edited,a=t.updateName,i=t.updateCard,d=t.addCard,u=t.submitChanges,l=t.id,s=t.removeCard,p=t.removeDeck,h=t.uid,f=t.copyDeck;return"start"===n||"fetching"===n?w(y,null,w(g.c,null)):"resolved"===n?w(e,{name:r.name,cards:r.cards,updateName:a,updateCardWithIndex:i,addCard:d,submitChanges:u,edited:c,id:l,removeCardWithIndex:s,removeDeck:p,uid:h,deck:r,copyDeck:f}):"uploading"===n?w(y,null,w(e,{name:r.name,cards:r.cards,updateName:a,updateCardWithIndex:i,addCard:d,submitChanges:u,edited:c,loading:!0,id:l,removeCardWithIndex:s,removeDeck:p,uid:h,deck:r,copyDeck:f}),w(g.c,null)):(console.error(o),w(b.a,null,o&&o.message||"Something went wrong. Try going back to your decks or refreshing the page after a while."))}},wHcE:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n("Ff2n"),o=n("q1tI"),c=n.n(o),a=n("vOnD"),i=c.a.createElement,d=a.c.button.withConfig({displayName:"Button",componentId:"hh7xaw-0"})(["background:",";padding:10px 20px;border:1px ",";border-style:solid;border-radius:10px;color:",";cursor:pointer;height:43.5px;font-size:14px;:hover:not(:disabled){opacity:0.5;}:disabled{background:",";cursor:not-allowed;}"],(function(e){var t=e.theme;return e.cancel?t.colors.black:t.colors.primary}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primaryMutedInactive})),u=Object(a.c)(d).withConfig({displayName:"Button__FixedSizeButton",componentId:"hh7xaw-1"})(["width:43.5px;padding:0%;"]),l=Object(a.c)(d).withConfig({displayName:"Button__DangerButton",componentId:"hh7xaw-2"})(["background-color:",";"],(function(e){return e.theme.colors.danger})),s=function(e){var t=e.icon,n=Object(r.a)(e,["icon"]),o=Object(a.c)(t).withConfig({displayName:"Button__StyledIcon",componentId:"hh7xaw-3"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white}));return i(u,n,i(o,null))}}},[["SKQo",1,2,4,5,6,0,3,7,8]]]);