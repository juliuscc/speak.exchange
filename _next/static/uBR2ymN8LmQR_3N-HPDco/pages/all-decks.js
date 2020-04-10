(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+lcN":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),c=r("8Kt/"),i=r.n(c),a=r("JTPn"),l=r("cpgX"),d=r("ZG5O"),u=r("bIAK"),s=o.a.createElement,p=Object(u.a)(d.a,{addDeck:!1},(function(e){return e||"Community Decks"}));t.default=function(){return s(o.a.Fragment,null,s(i.a,null,s("title",{key:"title"},"Browse Community Decks | Speak Repeat")),s(a.a,null),s(l.a,null),s("main",null,s(p,null)))}},XyUB:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-decks",function(){return r("+lcN")}])},ZG5O:function(e,t,r){"use strict";var n=r("ODXe"),o=r("vOnD"),c=r("q1tI"),i=r.n(c),a=r("YFqc"),l=r.n(a),d=i.a.createElement,u=o.c.div.withConfig({displayName:"DeckSearch",componentId:"sc-1932j2x-0"})(["display:flex;flex-direction:column;background-color:",";justify-content:flex-start;align-items:flex-start;margin:10px;"],(function(e){return e.theme.colors.white})),s=o.c.div.withConfig({displayName:"DeckSearch__SearchBar",componentId:"sc-1932j2x-1"})(["display:flex;flex-direction:row;padding-bottom:10px;height:50px;width:100%;"]),p=o.c.input.withConfig({displayName:"DeckSearch__SearchBox",componentId:"sc-1932j2x-2"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px;flex:1;font-size:18px;:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.border})),f=o.c.button.withConfig({displayName:"DeckSearch__SortOption",componentId:"sc-1932j2x-3"})(["background-color:",";color:",";width:280px;border-radius:10px;padding:5px;border:none;font-family:",";font-size:15px;font-weight:300;margin:5px;:focus{outline:none;}"],(function(e){return e.active?e.theme.colors.primaryMutedInactive:e.theme.colors.primaryMuted}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fonts.text})),h=function(e){var t=e.sortType,r=e.setSortType,n=e.searchWord,o=e.setSearchWord,c=function(e){return e.type===t.type&&e.order===t.order};return d(u,null,d(s,null,d(p,{placeholder:"Search by deck name",title:"Search by deck name",value:n,onChange:function(e){return o(e.target.value)}})),d(f,{onClick:function(){r({type:"date",order:1})},active:c({type:"date",order:1})},"Sort by creation date descending"),d(f,{onClick:function(){r({type:"date",order:-1})},active:c({type:"date",order:-1})},"Sort by creation date ascending"),d(f,{onClick:function(){r({type:"alphabetical",order:1})},active:c({type:"alphabetical",order:1})},"Sort by name A-Z"),d(f,{onClick:function(){r({type:"alphabetical",order:-1})},active:c({type:"alphabetical",order:-1})},"Sort by name Z-A"))},m=r("+IKJ"),y=r("mrSG"),b=r("OXR1"),w=c.forwardRef((function(e,t){return c.createElement(b.a,Object(y.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",key:"k0"}),c.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))}));w.displayName="Edit";var x=c.forwardRef((function(e,t){return c.createElement(b.a,Object(y.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 100 100"},e,{ref:t}),c.createElement("path",{d:"M76.982 50c0-.847-.474-1.575-1.167-1.957L26.541 19.595a2.23 2.23 0 00-1.279-.404 2.244 2.244 0 00-2.244 2.243c0 .087.016.169.026.253h-.026v57.131h.026a2.235 2.235 0 002.218 1.99 2.22 2.22 0 001.117-.308l.02.035L75.875 51.97l-.02-.035A2.233 2.233 0 0076.982 50z",key:"k0"}))}));x.displayName="Play";var k=r("2iwK"),g=i.a.createElement,v=o.c.a.withConfig({displayName:"DeckBox",componentId:"sc-1eyxbev-0"})(["position:relative;display:flex;flex:0 0 auto;flex-direction:column;width:150px;height:150px;padding:10px;padding-bottom:20px;margin:10px;border-radius:10px;justify-content:center;align-items:center;border-style:",";border-color:",";border-width:4px;background-color:",";font-family:",";font-size:20px;font-weight:600;text-align:center;color:",";text-decoration:none;cursor:pointer;:hover{background-color:",";}:disabled{cursor:not-allowed;}:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.hollow?"dashed":"none"}),(function(e){return e.theme.colors.primaryMuted}),(function(e){return e.hollow?Object(m.a)(1,e.theme.colors.primaryMuted):e.theme.colors.primaryMuted}),(function(e){return e.theme.fonts.text}),(function(e){return e.hollow?e.theme.colors.primaryMuted:e.theme.colors.white}),(function(e){return e.hollow?Object(m.a)(.8,e.theme.colors.primaryMuted):Object(m.a)(.3,e.theme.colors.primaryMuted)}),(function(e){return e.theme.colors.primaryMuted})),O=o.c.div.withConfig({displayName:"DeckBox__ActionWrapper",componentId:"sc-1eyxbev-1"})(["position:absolute;bottom:10px;right:5px;"]),j=o.c.button.withConfig({displayName:"DeckBox__ActionButton",componentId:"sc-1eyxbev-2"})(["position:relative;margin:0;border-radius:10px;border:none;padding:5px;background-color:transparent;color:",";:hover{background-color:",";}:hover > div{visibility:visible;}:focus{outline:none;}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.highlighted})),D=o.c.div.withConfig({displayName:"DeckBox__ToolTip",componentId:"sc-1eyxbev-3"})(["position:absolute;top:-15px;width:20px;height:20px;visibility:hidden;"]),_=Object(o.c)(w).withConfig({displayName:"DeckBox__StyledEditIcon",componentId:"sc-1eyxbev-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),C=Object(o.c)(x).withConfig({displayName:"DeckBox__StyledPlay",componentId:"sc-1eyxbev-5"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),S=function(e){var t=e.loading,r=e.onClick;return g(v,{hollow:!0,as:"button",onClick:r,disabled:t},t?g(k.a,null):"+")},B=function(e){var t=e.id;return g(l.a,{href:"/edit-deck?id=".concat(t)},g(j,{"aria-label":"Edit"},g(D,null,"Edit"),g(_,null)))},E=Object(c.forwardRef)((function(e,t){var r=e.children,n=e.onClick,o=e.hollow,c=e.href,i=e.id,a=e.edit;return g(v,{href:c,ref:t,onClick:n,hollow:o},g("div",null,r),g(O,null,a?g(B,{id:i}):null,g(l.a,{href:"/run-deck?id=".concat(i)},g(j,{"aria-label":"Run"},g(D,null,"Run"),g(C,null)))))})),I=r("55GN"),N=r("slLH"),A=i.a.createElement,P=o.c.div.withConfig({displayName:"BrowseDecks__DeckView",componentId:"h4ypn8-0"})(["height:100vh;display:flex;@media screen and (max-width:","){flex-direction:column;}"],I.a.smallPhone.max),M=o.c.div.withConfig({displayName:"BrowseDecks__DeckWrapper",componentId:"h4ypn8-1"})(["width:auto;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;background-color:",";"],(function(e){return e.theme.colors.white}));t.a=function(e){var t,r=e.decks,o=e.createDeck,i=e.addDeck,a=(Object(c.useContext)(N.b).user||{}).uid,d=Object(c.useState)({type:"date",order:1}),u=d[0],s=d[1],p=Object(c.useState)(""),f=p[0],m=p[1];return A(P,null,A(h,{sortType:u,setSortType:s,searchWord:f,setSearchWord:m}),A(M,null,i?A(S,{onClick:o}):null,Object.entries(r).sort((t=u,"alphabetical"===t.type?function(e,r){return e[1].name>r[1].name?t.order:e[1].name<r[1].name?-t.order:0}:function(e,r){return e[1].createdAt.toDate()>r[1].createdAt.toDate()?t.order:e[1].createdAt.toDate()<r[1].createdAt.toDate()?-t.order:0})).filter((function(e){var t=new RegExp(f,"gi");return e[1].name.match(t)})).map((function(e){var t=Object(n.a)(e,2),r=t[0],o=t[1];return A(l.a,{key:r,href:"/view-deck?id=".concat(r),passHref:!0},A(E,{id:r,edit:a===o.uid},o.name))}))))}},bIAK:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),c=r("8Kt/"),i=r.n(c),a=r("rePB"),l=r("nOHt"),d=r("Wcq6"),u=r.n(d),s=r("WdAl");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e,t){switch(t.type){case"update":return f({},e,{status:"loaded",decks:t.decks});case"add_deck":return f({},e,{status:"adding"});case"error":return f({},e,{status:"rejected",error:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}},m=function(e){var t=Object(l.useRouter)(),r=Object(n.useReducer)(h,{status:"preloaded",decks:null,error:null}),o=r[0],c=r[1];Object(n.useEffect)((function(){return(e?s.a.collection("decks").where("uid","==",e):s.a.collection("decks")).onSnapshot({includeMetadataChanges:!0},(function(e){if(!e.metadata.hasPendingWrites){var t={};e.forEach((function(e){t[e.id]=e.data()})),c({type:"update",decks:t})}}),(function(e){return c({type:"error",error:e})}))}),[e]);return f({},o,{createDeck:function(){c({type:"add_deck"}),s.a.collection("decks").add({createdAt:u.a.firestore.FieldValue.serverTimestamp(),uid:e,name:"Untitled Deck",cards:[]}).then((function(e){return t.push("/edit-deck?id=".concat(e.id))})).catch((function(e){return c({type:"error",error:e})}))}})},y=r("2iwK"),b=r("uX9c"),w=o.a.createElement;t.a=function(e,t){var r=t.addDeck;return function(t){var n=t.user,o=(n=void 0===n?{}:n).uid,c=m(o),a=c.status,l=c.decks,d=c.error,u=c.createDeck;return"preloaded"===a||"adding"===a?w(y.b,null,w(y.c,null)):"loaded"===a?w(e,{decks:l,createDeck:u,addDeck:r}):(console.error(d),w(b.a,null,w(i.a,null,w("title",{key:"title"},"Oops! | Speak Repeat")),"There was an error with fetching your decks. Please refresh the page."))}}},cpgX:function(e,t,r){"use strict";var n=r("vOnD"),o=r("nOHt"),c=r("q1tI"),i=r.n(c),a=r("YFqc"),l=r.n(a),d=r("Hcgl"),u=i.a.createElement,s=n.c.div.withConfig({displayName:"ViewBar__ViewBarBox",componentId:"itzrp2-0"})(["width:100%;height:80px;display:flex;flex-direction:row;background-color:",";justify-content:flex-end;align-items:center;"],(function(e){return e.theme.colors.focusBackground})),p=n.c.button.withConfig({displayName:"ViewBar__ViewLinks",componentId:"itzrp2-1"})(["background-color:",";border:none;height:80px;color:",";font-family:",";font-size:15px;font-weight:300;cursor:pointer;:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.theme.colors.focusBackground}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.border}));t.a=Object(o.withRouter)((function(e){var t=e.router.pathname;return u(s,null,u(l.a,{href:"/repeat"},u(d.a,{active:"/repeat"===t},u(p,null,"My Decks"))),u(l.a,{href:"/all-decks"},u(d.a,{active:"/all-decks"===t},u(p,null,"Browse Community Decks"))))}))}},[["XyUB",1,2,3,5,0,4,6,7]]]);