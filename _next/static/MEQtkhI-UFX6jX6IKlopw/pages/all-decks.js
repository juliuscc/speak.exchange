(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+lcN":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),c=t("JTPn"),i=t("ZG5O"),a=t("UShQ"),l=t("2iwK"),u=t("uX9c"),d=o.a.createElement,s=function(){var e=Object(a.a)(),n=e.status,t=e.decks,r=e.error;return"preloaded"===n||"adding"===n?d(l.b,null,d(l.c,null)):"loaded"===n?d(i.a,{decks:t}):(console.error(r),d(u.a,null,"There was an error with fetching decks. Please refresh the page."))},f=t("cpgX"),p=o.a.createElement;n.default=function(){return p(o.a.Fragment,null,p(c.a,null),p(f.a,null),p(s,null))}},E8gZ:function(e,n,t){var r=t("jmDH"),o=t("w6GO"),c=t("NsO/"),i=t("NV0k").f;e.exports=function(e){return function(n){for(var t,a=c(n),l=o(a),u=l.length,d=0,s=[];u>d;)t=l[d++],r&&!i.call(a,t)||s.push(e?[t,a[t]]:a[t]);return s}}},"LR/J":function(e,n,t){e.exports=t("tgZa")},UShQ:function(e,n,t){"use strict";var r=t("hfKm"),o=t.n(r),c=t("2Eek"),i=t.n(c),a=t("XoMD"),l=t.n(a),u=t("Jo+v"),d=t.n(u),s=t("4mXO"),f=t.n(s),p=t("pLtp"),h=t.n(p),m=t("vYYK"),x=t("q1tI"),w=t("nOHt"),g=t("iqUP"),k=t.n(g),y=t("WdAl");function b(e,n){var t=h()(e);if(f.a){var r=f()(e);n&&(r=r.filter((function(n){return d()(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){Object(m.a)(e,n,t[n])})):l.a?i()(e,l()(t)):b(Object(t)).forEach((function(n){o()(e,n,d()(t,n))}))}return e}var j=function(e,n){switch(n.type){case"update":return v({},e,{status:"loaded",decks:n.decks});case"add_deck":return v({},e,{status:"adding"});case"error":return v({},e,{status:"rejected",error:n.error});default:throw new Error("Unhandled action type: ".concat(n.type))}};n.a=function(e){var n=Object(w.useRouter)(),t=Object(x.useReducer)(j,{status:"preloaded",decks:null,error:null}),r=t[0],o=t[1];Object(x.useEffect)((function(){return(e?y.a.collection("decks").where("uid","==",e):y.a.collection("decks")).onSnapshot({includeMetadataChanges:!0},(function(e){if(!e.metadata.hasPendingWrites){var n={};e.forEach((function(e){n[e.id]=e.data()})),o({type:"update",decks:n})}}),(function(e){return o({type:"error",error:e})}))}),[e]);return v({},r,{createDeck:function(){o({type:"add_deck"}),y.a.collection("decks").add({createdAt:k.a.firestore.FieldValue.serverTimestamp(),uid:e,name:"Untitled Deck",cards:[]}).then((function(e){return n.push("/edit-deck?id=".concat(e.id))})).catch((function(e){return o({type:"error",error:e})}))}})}},XyUB:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-decks",function(){return t("+lcN")}])},ZG5O:function(e,n,t){"use strict";var r=t("doui"),o=t("LR/J"),c=t.n(o),i=t("vOnD"),a=t("q1tI"),l=t.n(a),u=t("YFqc"),d=t.n(u),s=t("USzo"),f=l.a.createElement,p=i.c.div.withConfig({displayName:"DeckSearch",componentId:"sc-1932j2x-0"})(["display:flex;flex-direction:column;background-color:",";justify-content:flex-start;align-items:flex-start;margin:10px;"],(function(e){return e.theme.colors.white})),h=i.c.div.withConfig({displayName:"DeckSearch__SearchBar",componentId:"sc-1932j2x-1"})(["display:flex;flex-direction:row;padding-bottom:10px;height:50px;width:100%;"]),m=i.c.input.withConfig({displayName:"DeckSearch__SearchBox",componentId:"sc-1932j2x-2"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px 0px 0px 10px;flex:1;font-size:18px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.border})),x=i.c.button.withConfig({displayName:"DeckSearch__SearchButton",componentId:"sc-1932j2x-3"})(["background:",";padding:10px;border:1px ",";border-style:solid solid solid none;border-radius:0px 10px 10px 0px;width:40px;cursor:pointer;"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border})),w=Object(i.c)(s.a).withConfig({displayName:"DeckSearch__StyledSearchIcon",componentId:"sc-1932j2x-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),g=i.c.button.withConfig({displayName:"DeckSearch__FilterOption",componentId:"sc-1932j2x-5"})(["background-color:",";border:none;color:",";font-family:",";font-size:15px;font-weight:300;margin-left:20px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text})),k=function(){return f(p,null,f(h,null,f(m,{placeholder:"Start typing to search"}),f(x,null,f(w,null))),f(g,null,"Filter"),f(g,null,"Sort"),f(g,null,"Tag"))},y=t("+IKJ"),b=i.c.a.withConfig({displayName:"DeckBox",componentId:"sc-1eyxbev-0"})(["display:flex;flex:0 0 auto;width:150px;height:150px;padding:5px;margin:10px;border-radius:10px;justify-content:center;align-items:center;border-style:",";border-color:",";border-width:4px;background-color:",";font-family:",";font-size:30px;font-weight:600;color:",";text-decoration:none;cursor:pointer;:hover{background-color:",";}:disabled{cursor:not-allowed;}"],(function(e){return e.hollow?"dashed":"none"}),(function(e){return e.theme.colors.primaryMuted}),(function(e){return e.hollow?Object(y.a)(1,e.theme.colors.primaryMuted):e.theme.colors.primaryMuted}),(function(e){return e.theme.fonts.text}),(function(e){return e.hollow?e.theme.colors.primaryMuted:e.theme.colors.white}),(function(e){return e.hollow?Object(y.a)(.8,e.theme.colors.primaryMuted):e.theme.colors.primaryMuted})),v=t("2iwK"),j=t("55GN"),_=l.a.createElement,D=i.c.div.withConfig({displayName:"BrowseDecks__DeckView",componentId:"h4ypn8-0"})(["height:100vh;display:flex;@media screen and (max-width:","){flex-direction:column;}"],j.a.smallPhone.max),O=i.c.div.withConfig({displayName:"BrowseDecks__DeckWrapper",componentId:"h4ypn8-1"})(["width:auto;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;background-color:",";"],(function(e){return e.theme.colors.white})),N=function(e){var n=e.loading,t=e.onClick;return _(b,{hollow:!0,as:"button",onClick:t,disabled:n},n?_(v.a,null):"+")};n.a=function(e){var n=e.decks,t=e.createDeck,o=e.addDeck;return _(l.a.Fragment,null,_(D,null,_(k,null),_(O,null,o?_(N,{onClick:t}):null,c()(n).map((function(e){var n=Object(r.a)(e,2),t=n[0],o=n[1];return _(d.a,{key:t,href:"/view-deck?id=".concat(t)},_(b,{key:t},o.name))})))))}},cpgX:function(e,n,t){"use strict";var r=t("vOnD"),o=t("q1tI"),c=t.n(o),i=t("YFqc"),a=t.n(i),l=c.a.createElement,u=r.c.div.withConfig({displayName:"ViewBar",componentId:"itzrp2-0"})(["width:100%;height:80px;display:flex;flex-direction:row;background-color:",";justify-content:flex-end;align-items:center;"],(function(e){return e.theme.colors.focusBackground})),d=r.c.button.withConfig({displayName:"ViewBar__ViewLinks",componentId:"itzrp2-1"})(["background-color:",";border:none;width:100px;height:50px;color:",";font-family:",";font-size:15px;font-weight:300;cursor:pointer;"],(function(e){return e.theme.colors.focusBackground}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text}));n.a=function(){return l(u,null,l(a.a,{href:"/repeat"},l(d,null,"My Decks")),l(a.a,{href:"/all-decks"},l(d,null,"Browse Decks")))}},nGDx:function(e,n,t){var r=t("Y7ZC"),o=t("E8gZ")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},tgZa:function(e,n,t){t("nGDx"),e.exports=t("WEpk").Object.entries}},[["XyUB",1,2,4,5,6,0,3,7,8]]]);