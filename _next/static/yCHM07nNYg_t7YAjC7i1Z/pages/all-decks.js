(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+lcN":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("JTPn"),i=n("ZG5O"),a=n("UShQ"),l=n("2iwK"),d=n("uX9c"),u=o.a.createElement,s=function(){var e=Object(a.a)(),t=e.status,n=e.decks,r=e.error;return"preloaded"===t||"adding"===t?u(l.b,null,u(l.c,null)):"loaded"===t?u(i.a,{decks:n}):(console.error(r),u(d.a,null,"There was an error with fetching decks. Please refresh the page."))},p=n("cpgX"),f=o.a.createElement;t.default=function(){return f(o.a.Fragment,null,f(c.a,null),f(p.a,null),f(s,null))}},E8gZ:function(e,t,n){var r=n("jmDH"),o=n("w6GO"),c=n("NsO/"),i=n("NV0k").f;e.exports=function(e){return function(t){for(var n,a=c(t),l=o(a),d=l.length,u=0,s=[];d>u;)n=l[u++],r&&!i.call(a,n)||s.push(e?[n,a[n]]:a[n]);return s}}},"LR/J":function(e,t,n){e.exports=n("tgZa")},UShQ:function(e,t,n){"use strict";var r=n("hfKm"),o=n.n(r),c=n("2Eek"),i=n.n(c),a=n("XoMD"),l=n.n(a),d=n("Jo+v"),u=n.n(d),s=n("4mXO"),p=n.n(s),f=n("pLtp"),h=n.n(f),m=n("vYYK"),x=n("q1tI"),w=n("nOHt"),g=n("iqUP"),b=n.n(g),k=n("WdAl");function y(e,t){var n=h()(e);if(p.a){var r=p()(e);t&&(r=r.filter((function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):l.a?i()(e,l()(n)):y(Object(n)).forEach((function(t){o()(e,t,u()(n,t))}))}return e}var _=function(e,t){switch(t.type){case"update":return v({},e,{status:"loaded",decks:t.decks});case"add_deck":return v({},e,{status:"adding"});case"error":return v({},e,{status:"rejected",error:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}};t.a=function(e){var t=Object(w.useRouter)(),n=Object(x.useReducer)(_,{status:"preloaded",decks:null,error:null}),r=n[0],o=n[1];Object(x.useEffect)((function(){return(e?k.a.collection("decks").where("uid","==",e):k.a.collection("decks")).onSnapshot({includeMetadataChanges:!0},(function(e){if(!e.metadata.hasPendingWrites){var t={};e.forEach((function(e){t[e.id]=e.data()})),o({type:"update",decks:t})}}),(function(e){return o({type:"error",error:e})}))}),[e]);return v({},r,{createDeck:function(){o({type:"add_deck"}),k.a.collection("decks").add({createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:e,name:"Untitled Deck",cards:[]}).then((function(e){return t.push("/edit-deck?id=".concat(e.id))})).catch((function(e){return o({type:"error",error:e})}))}})}},XyUB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-decks",function(){return n("+lcN")}])},ZG5O:function(e,t,n){"use strict";var r=n("doui"),o=n("LR/J"),c=n.n(o),i=n("vOnD"),a=n("q1tI"),l=n.n(a),d=n("YFqc"),u=n.n(d),s=n("USzo"),p=l.a.createElement,f=i.c.div.withConfig({displayName:"DeckSearch",componentId:"sc-1932j2x-0"})(["display:flex;flex-direction:column;background-color:",";justify-content:flex-start;align-items:flex-start;margin:10px;"],(function(e){return e.theme.colors.white})),h=i.c.div.withConfig({displayName:"DeckSearch__SearchBar",componentId:"sc-1932j2x-1"})(["display:flex;flex-direction:row;padding-bottom:10px;height:50px;width:100%;"]),m=i.c.input.withConfig({displayName:"DeckSearch__SearchBox",componentId:"sc-1932j2x-2"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px 0px 0px 10px;flex:1;font-size:18px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.border})),x=i.c.button.withConfig({displayName:"DeckSearch__SearchButton",componentId:"sc-1932j2x-3"})(["background:",";padding:10px;border:1px ",";border-style:solid solid solid none;border-radius:0px 10px 10px 0px;width:40px;cursor:pointer;"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border})),w=Object(i.c)(s.a).withConfig({displayName:"DeckSearch__StyledSearchIcon",componentId:"sc-1932j2x-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),g=i.c.button.withConfig({displayName:"DeckSearch__FilterOption",componentId:"sc-1932j2x-5"})(["background-color:",";border:none;color:",";font-family:",";font-size:15px;font-weight:300;margin-left:20px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text})),b=function(){return p(f,null,p(h,null,p(m,{placeholder:"Start typing to search"}),p(x,null,p(w,null))),p(g,null,"Filter"),p(g,null,"Sort"),p(g,null,"Tag"))},k=n("+IKJ"),y=n("mrSG"),v=n("OXR1"),_=a.forwardRef((function(e,t){return a.createElement(v.a,Object(y.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",key:"k0"}),a.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))}));_.displayName="Edit";var j=a.forwardRef((function(e,t){return a.createElement(v.a,Object(y.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 100 100"},e,{ref:t}),a.createElement("path",{d:"M76.982 50c0-.847-.474-1.575-1.167-1.957L26.541 19.595a2.23 2.23 0 00-1.279-.404 2.244 2.244 0 00-2.244 2.243c0 .087.016.169.026.253h-.026v57.131h.026a2.235 2.235 0 002.218 1.99 2.22 2.22 0 001.117-.308l.02.035L75.875 51.97l-.02-.035A2.233 2.233 0 0076.982 50z",key:"k0"}))}));j.displayName="Play";var O=n("2iwK"),D=l.a.createElement,C=i.c.a.withConfig({displayName:"DeckBox",componentId:"sc-1eyxbev-0"})(["position:relative;display:flex;flex:0 0 auto;flex-direction:column;width:150px;height:150px;padding:10px;padding-bottom:20px;margin:10px;border-radius:10px;justify-content:center;align-items:center;border-style:",";border-color:",";border-width:4px;background-color:",";font-family:",";font-size:20px;font-weight:600;text-align:center;color:",";text-decoration:none;cursor:pointer;:hover{background-color:",";}:disabled{cursor:not-allowed;}"],(function(e){return e.hollow?"dashed":"none"}),(function(e){return e.theme.colors.primaryMuted}),(function(e){return e.hollow?Object(k.a)(1,e.theme.colors.primaryMuted):e.theme.colors.primaryMuted}),(function(e){return e.theme.fonts.text}),(function(e){return e.hollow?e.theme.colors.primaryMuted:e.theme.colors.white}),(function(e){return e.hollow?Object(k.a)(.8,e.theme.colors.primaryMuted):e.theme.colors.primaryMuted})),E=i.c.div.withConfig({displayName:"DeckBox__ActionWrapper",componentId:"sc-1eyxbev-1"})(["position:absolute;bottom:10px;right:5px;"]),N=i.c.button.withConfig({displayName:"DeckBox__ActionButton",componentId:"sc-1eyxbev-2"})(["position:relative;margin:0;border-radius:10px;border:none;padding:5px;background-color:transparent;color:",";:hover{background-color:",";}:hover > div{visibility:visible;}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.highlighted})),B=i.c.div.withConfig({displayName:"DeckBox__ToolTip",componentId:"sc-1eyxbev-3"})(["position:absolute;top:-15px;width:20px;height:20px;visibility:hidden;"]),I=Object(i.c)(_).withConfig({displayName:"DeckBox__StyledEditIcon",componentId:"sc-1eyxbev-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),S=Object(i.c)(j).withConfig({displayName:"DeckBox__StyledPlay",componentId:"sc-1eyxbev-5"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),M=function(e){var t=e.loading,n=e.onClick;return D(C,{hollow:!0,as:"button",onClick:n,disabled:t},t?D(O.a,null):"+")},V=function(e){var t=e.id;return D(u.a,{href:"/edit-deck?id=".concat(t)},D(N,null,D(B,null,"Edit"),D(I,null)))},z=Object(a.forwardRef)((function(e,t){var n=e.children,r=e.onClick,o=e.hollow,c=e.href,i=e.id,a=e.edit;return D(C,{href:c,ref:t,onClick:r,hollow:o},D("div",null,n),D(E,null,a?D(V,{id:i}):null,D(N,null,D(B,null,"Run"),D(S,null))))})),R=n("55GN"),X=n("slLH"),A=l.a.createElement,L=i.c.div.withConfig({displayName:"BrowseDecks__DeckView",componentId:"h4ypn8-0"})(["height:100vh;display:flex;@media screen and (max-width:","){flex-direction:column;}"],R.a.smallPhone.max),P=i.c.div.withConfig({displayName:"BrowseDecks__DeckWrapper",componentId:"h4ypn8-1"})(["width:auto;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;background-color:",";"],(function(e){return e.theme.colors.white}));t.a=function(e){var t=e.decks,n=e.createDeck,o=e.addDeck,i=Object(a.useContext)(X.b).user.uid;return A(L,null,A(b,null),A(P,null,o?A(M,{onClick:n}):null,c()(t).map((function(e){var t=Object(r.a)(e,2),n=t[0],o=t[1];return A(u.a,{key:n,href:"/view-deck?id=".concat(n),passHref:!0},A(z,{id:n,edit:i===o.uid},o.name))}))))}},cpgX:function(e,t,n){"use strict";var r=n("vOnD"),o=n("nOHt"),c=n("q1tI"),i=n.n(c),a=n("YFqc"),l=n.n(a),d=n("Hcgl"),u=i.a.createElement,s=r.c.div.withConfig({displayName:"ViewBar__ViewBarBox",componentId:"itzrp2-0"})(["width:100%;height:80px;display:flex;flex-direction:row;background-color:",";justify-content:flex-end;align-items:center;"],(function(e){return e.theme.colors.focusBackground})),p=r.c.button.withConfig({displayName:"ViewBar__ViewLinks",componentId:"itzrp2-1"})(["background-color:",";border:none;width:100px;height:50px;color:",";font-family:",";font-size:15px;font-weight:300;cursor:pointer;"],(function(e){return e.theme.colors.focusBackground}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text}));t.a=Object(o.withRouter)((function(e){var t=e.router.pathname;return u(s,null,u(l.a,{href:"/repeat"},u(d.a,{active:"/repeat"===t},u(p,null,"My Decks"))),u(l.a,{href:"/all-decks"},u(d.a,{active:"/all-decks"===t},u(p,null,"Browse Decks"))))}))},nGDx:function(e,t,n){var r=n("Y7ZC"),o=n("E8gZ")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},tgZa:function(e,t,n){n("nGDx"),e.exports=n("WEpk").Object.entries}},[["XyUB",1,2,3,4,6,0,5,7,8]]]);