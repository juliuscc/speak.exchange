(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},BAk0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view-deck",function(){return n("xds4")}])},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),i=n("sNwI"),c=n("NwJ3"),d=n("tEej"),u=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,s,p=a(e),f="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,b=0,w=l(p);if(g&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==w||f==Array&&c(w))for(n=new f(t=d(p.length));t>b;b++)u(n,b,g?m(p[b],b):p[b]);else for(s=w.call(p),n=new f;!(o=s.next()).done;b++)u(n,b,g?i(s,m,[o.value,b],!0):o.value);return n.length=b,n}})},VVoN:function(e,t,n){"use strict";var r=n("vOnD"),o=n("55GN"),a=r.c.div.withConfig({displayName:"Container",componentId:"sc-1v56vj7-0"})(["width:80%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;position:relative;@media screen and (max-width:","){width:85%;}@media screen and (max-width:","){width:100%;}"],o.a.tablet.max,o.a.smallPhone.max);t.a=a},XsGP:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("hfKm"),c=n.n(i),d=n("2Eek"),u=n.n(d),l=n("XoMD"),s=n.n(l),p=n("Jo+v"),f=n.n(p),h=n("4mXO"),m=n.n(h),g=n("pLtp"),b=n.n(g),w=n("p0XB"),y=n.n(w);var v=n("d04V"),k=n.n(v),x=n("yLu3"),C=n.n(x);function _(e){return function(e){if(y()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(C()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return k()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var N=n("vYYK"),I=n("nOHt"),j=n("slLH"),O=n("WdAl");function D(e,t){var n=b()(e);if(m.a){var r=m()(e);t&&(r=r.filter((function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(N.a)(e,t,n[t])})):s.a?u()(e,s()(n)):D(Object(n)).forEach((function(t){c()(e,t,f()(n,t))}))}return e}var V=function(){var e=Object(I.useRouter)(),t=e.query.id,n=Object(r.useContext)(j.b),o=Object(r.useReducer)((function(e,t){switch(t.type){case"error":return E({},e,{status:"rejected",error:t.error});case"fetch":return E({},e,{status:"fetching"});case"success":switch(e.status){case"fetching":return E({},e,{status:"resolved",deck:t.deck});case"uploading":return E({},e,{status:"resolved",edited:!1});default:return E({},e)}case"submit_changes":return E({},e,{status:"uploading"});case"local_update":return E({},e,{edited:!0,deck:t.updateFn(e.deck)});default:throw new Error("Unhandled action type: ".concat(t.type))}}),{status:"start",deck:null,error:null,edited:!1}),a=o[0],i=o[1];Object(r.useEffect)((function(){var e=!1;return i({type:"fetch"}),O.a.collection("decks").doc(t).get().then((function(t){if(!e){if(!t.exists)throw new Error("The deck could not be found. Try going back to your decks, and trying this action again.");i({type:"success",deck:t.data()})}})).catch((function(t){return e||i({type:"error",error:t})})),function(){e=!0}}),[t]);return{status:a.status,deck:a.deck,error:a.error,edited:a.edited,updateName:function(e){return i({type:"local_update",updateFn:function(t){return E({},t,{name:e})}})},updateCard:function(e){return function(t,n){return i({type:"local_update",updateFn:function(r){var o=r.cards.map((function(r,o){return o!==e?r:E({},r,Object(N.a)({},t,n))}));return E({},r,{cards:o})}})}},addCard:function(){return i({type:"local_update",updateFn:function(e){return E({},e,{cards:[].concat(_(e.cards),[{original:"",translation:""}])})}})},submitChanges:function(){i({type:"submit_changes"}),O.a.collection("decks").doc(t).set(a.deck).then((function(){i({type:"success"})})).catch((function(e){return i({type:"error",error:e})}))},id:t,removeCard:function(e){return function(){return i({type:"local_update",updateFn:function(t){return E({},t,{cards:t.cards.filter((function(t,n){return n!==e}))})}})}},removeDeck:function(){i({type:"submit_changes"}),O.a.collection("decks").doc(t).delete().then((function(){e.push("/repeat")})).catch((function(e){return i({type:"error",error:e})}))},uid:n.user&&n.user.uid}},B=n("2iwK"),W=n("uX9c"),T=o.a.createElement,A=a.c.div.withConfig({displayName:"withDeck__SpinnerContainer",componentId:"c9bzi-0"})(["position:relative;"]);t.a=function(e){var t=V(),n=t.status,r=t.deck,o=t.error,a=t.edited,i=t.updateName,c=t.updateCard,d=t.addCard,u=t.submitChanges,l=t.id,s=t.removeCard,p=t.removeDeck,f=t.uid;return"start"===n||"fetching"===n?T(A,null,T(B.c,null)):"resolved"===n?T(e,{name:r.name,cards:r.cards,updateName:i,updateCardWithIndex:c,addCard:d,submitChanges:u,edited:a,id:l,removeCardWithIndex:s,removeDeck:p,uid:f,deck:r}):"uploading"===n?T(A,null,T(e,{name:r.name,cards:r.cards,updateName:i,updateCardWithIndex:c,addCard:d,submitChanges:u,edited:a,loading:!0,id:l,removeCardWithIndex:s,removeDeck:p,uid:f,deck:r}),T(B.c,null)):(console.error(o),T(W.a,null,o&&o.message||"Something went wrong. Try going back to your decks or refreshing the page after a while."))}},d04V:function(e,t,n){e.exports=n("0tVQ")},wHcE:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n("qNsG"),o=n("q1tI"),a=n.n(o),i=n("vOnD"),c=a.a.createElement,d=i.c.button.withConfig({displayName:"Button",componentId:"hh7xaw-0"})(["background:",";padding:10px 20px;border:1px ",";border-style:solid;border-radius:10px;color:",";cursor:pointer;height:43.5px;font-size:14px;:hover:not(:disabled){opacity:0.5;}:disabled{background:",";cursor:not-allowed;}"],(function(e){var t=e.theme;return e.cancel?t.colors.black:t.colors.primary}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primaryMutedInactive})),u=Object(i.c)(d).withConfig({displayName:"Button__FixedSizeButton",componentId:"hh7xaw-1"})(["width:43.5px;padding:0%;"]),l=Object(i.c)(d).withConfig({displayName:"Button__DangerButton",componentId:"hh7xaw-2"})(["background-color:",";"],(function(e){return e.theme.colors.danger})),s=function(e){var t=e.icon,n=Object(r.a)(e,["icon"]),o=Object(i.c)(t).withConfig({displayName:"Button__StyledIcon",componentId:"hh7xaw-3"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white}));return c(u,n,c(o,null))}},xds4:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("JTPn"),i=n("vOnD"),c=n("YFqc"),d=n.n(c),u=n("VVoN"),l=o.a.createElement,s=i.c.div.withConfig({displayName:"WordCard",componentId:"sc-1jnzmp3-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100px;border-radius:10px;background-color:",";font-family:",";color:",";padding:20px;margin-top:20px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.blac})),p=i.c.div.withConfig({displayName:"WordCard__Word",componentId:"sc-1jnzmp3-1"})(["text-align:center;border-style:none;width:250px;font-size:16px;&:focus{outline:none;}"]),f=i.c.hr.withConfig({displayName:"WordCard__Seperator",componentId:"sc-1jnzmp3-2"})(["width:300px;height:10px;border:0.5px solid ",";"],(function(e){return e.theme.colors.border})),h=function(e){var t=e.card;return l(s,null,l(p,null,t.original?t.original:"Original Word"),l(f,null),l(p,null,t.translation?t.translation:"Translation"))},m=n("wHcE"),g=n("55GN"),b=o.a.createElement,w=i.c.fieldset.withConfig({displayName:"ViewDeck__Background",componentId:"b4biry-0"})(["background-color:",";width:100%;border:none;padding:0;margin:0;:disabled{opacity:0.5;}"],(function(e){return e.theme.colors.focusBackground})),y=i.c.div.withConfig({displayName:"ViewDeck__TitleBar",componentId:"b4biry-1"})(["display:flex;width:100%;height:100%;padding-top:20px;align-items:center;"]),v=i.c.div.withConfig({displayName:"ViewDeck__DeckName",componentId:"b4biry-2"})(["min-width:0;font-weight:800;@media screen and (max-width:","){flex:1;}"],g.a.tablet.max),k=i.c.div.withConfig({displayName:"ViewDeck__ButtonsWrapper",componentId:"b4biry-3"})(["margin-left:auto;display:flex;flex-direction:row;& > *{margin-left:10px;}"]),x=i.c.div.withConfig({displayName:"ViewDeck__WordsWrapper",componentId:"b4biry-4"})(["padding-bottom:50px;"]),C=function(e){var t=e.name,n=e.cards,r=e.id,o=e.removeDeck,a=e.uid,i=e.deck;return b(w,null,b(u.a,null,b(y,null,b(v,null,t),b(k,null,a===i.uid?b(d.a,{key:r,href:"/edit-deck?id=".concat(r)},b(m.a,{type:"button"},"Edit deck")):null,a===i.uid?b(d.a,{href:"/repeat"},b(m.a,{type:"button",cancel:!0},"Go back")):b(d.a,{href:"/all-decks"},b(m.a,{type:"button",cancel:!0},"Go back")),b(m.b,{type:"button",onClick:o,disabled:a!==i.uid},"Delete"))),b(x,null,n.map((function(e,t){return b(h,{key:t,card:e},"Test")})))))},_=n("XsGP"),N=o.a.createElement,I=function(){return Object(_.a)(C)};t.default=function(){return N(o.a.Fragment,null,N(a.a,null),N(I,null))}}},[["BAk0",1,2,3,5,6,0,4,7]]]);