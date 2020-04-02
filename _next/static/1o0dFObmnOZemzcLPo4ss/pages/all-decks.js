(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+lcN":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("JTPn"),i=n("ZG5O"),a=n("UShQ"),l=n("2iwK"),d=n("uX9c"),u=o.a.createElement,s=function(){var e=Object(a.a)(),t=e.status,n=e.decks,r=e.error;return"preloaded"===t||"adding"===t?u(l.b,null,u(l.c,null)):"loaded"===t?u(i.a,{decks:n}):(console.error(r),u(d.a,null,"There was an error with fetching decks. Please refresh the page."))},p=n("cpgX"),h=o.a.createElement;t.default=function(){return h(o.a.Fragment,null,h(c.a,null),h(p.a,null),h(s,null))}},UShQ:function(e,t,n){"use strict";var r=n("rePB"),o=n("q1tI"),c=n("nOHt"),i=n("iqUP"),a=n.n(i),l=n("WdAl");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e,t){switch(t.type){case"update":return u({},e,{status:"loaded",decks:t.decks});case"add_deck":return u({},e,{status:"adding"});case"error":return u({},e,{status:"rejected",error:t.error});default:throw new Error("Unhandled action type: ".concat(t.type))}};t.a=function(e){var t=Object(c.useRouter)(),n=Object(o.useReducer)(s,{status:"preloaded",decks:null,error:null}),r=n[0],i=n[1];Object(o.useEffect)((function(){return(e?l.a.collection("decks").where("uid","==",e):l.a.collection("decks")).onSnapshot({includeMetadataChanges:!0},(function(e){if(!e.metadata.hasPendingWrites){var t={};e.forEach((function(e){t[e.id]=e.data()})),i({type:"update",decks:t})}}),(function(e){return i({type:"error",error:e})}))}),[e]);return u({},r,{createDeck:function(){i({type:"add_deck"}),l.a.collection("decks").add({createdAt:a.a.firestore.FieldValue.serverTimestamp(),uid:e,name:"Untitled Deck",cards:[]}).then((function(e){return t.push("/edit-deck?id=".concat(e.id))})).catch((function(e){return i({type:"error",error:e})}))}})}},XyUB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-decks",function(){return n("+lcN")}])},ZG5O:function(e,t,n){"use strict";var r=n("ODXe"),o=n("vOnD"),c=n("q1tI"),i=n.n(c),a=n("YFqc"),l=n.n(a),d=n("USzo"),u=i.a.createElement,s=o.c.div.withConfig({displayName:"DeckSearch",componentId:"sc-1932j2x-0"})(["display:flex;flex-direction:column;background-color:",";justify-content:flex-start;align-items:flex-start;margin:10px;"],(function(e){return e.theme.colors.white})),p=o.c.div.withConfig({displayName:"DeckSearch__SearchBar",componentId:"sc-1932j2x-1"})(["display:flex;flex-direction:row;padding-bottom:10px;height:50px;width:100%;"]),h=o.c.input.withConfig({displayName:"DeckSearch__SearchBox",componentId:"sc-1932j2x-2"})(["background:",";padding:10px 20px;border:1px solid ",";border-radius:10px 0px 0px 10px;flex:1;font-size:18px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.border})),f=o.c.button.withConfig({displayName:"DeckSearch__SearchButton",componentId:"sc-1932j2x-3"})(["background:",";padding:10px;border:1px ",";border-style:solid solid solid none;border-radius:0px 10px 10px 0px;width:40px;cursor:pointer;"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border})),m=Object(o.c)(d.a).withConfig({displayName:"DeckSearch__StyledSearchIcon",componentId:"sc-1932j2x-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),w=o.c.button.withConfig({displayName:"DeckSearch__FilterOption",componentId:"sc-1932j2x-5"})(["background-color:",";border:none;color:",";font-family:",";font-size:15px;font-weight:300;margin-left:20px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text})),x=function(){return u(s,null,u(p,null,u(h,{placeholder:"Start typing to search"}),u(f,null,u(m,null))),u(w,null,"Filter"),u(w,null,"Sort"),u(w,null,"Tag"))},b=n("+IKJ"),g=n("mrSG"),y=n("OXR1"),k=c.forwardRef((function(e,t){return c.createElement(y.a,Object(g.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",key:"k0"}),c.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))}));k.displayName="Edit";var v=c.forwardRef((function(e,t){return c.createElement(y.a,Object(g.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 100 100"},e,{ref:t}),c.createElement("path",{d:"M76.982 50c0-.847-.474-1.575-1.167-1.957L26.541 19.595a2.23 2.23 0 00-1.279-.404 2.244 2.244 0 00-2.244 2.243c0 .087.016.169.026.253h-.026v57.131h.026a2.235 2.235 0 002.218 1.99 2.22 2.22 0 001.117-.308l.02.035L75.875 51.97l-.02-.035A2.233 2.233 0 0076.982 50z",key:"k0"}))}));v.displayName="Play";var O=n("2iwK"),_=i.a.createElement,j=o.c.a.withConfig({displayName:"DeckBox",componentId:"sc-1eyxbev-0"})(["position:relative;display:flex;flex:0 0 auto;flex-direction:column;width:150px;height:150px;padding:10px;padding-bottom:20px;margin:10px;border-radius:10px;justify-content:center;align-items:center;border-style:",";border-color:",";border-width:4px;background-color:",";font-family:",";font-size:20px;font-weight:600;text-align:center;color:",";text-decoration:none;cursor:pointer;:hover{background-color:",";}:disabled{cursor:not-allowed;}"],(function(e){return e.hollow?"dashed":"none"}),(function(e){return e.theme.colors.primaryMuted}),(function(e){return e.hollow?Object(b.a)(1,e.theme.colors.primaryMuted):e.theme.colors.primaryMuted}),(function(e){return e.theme.fonts.text}),(function(e){return e.hollow?e.theme.colors.primaryMuted:e.theme.colors.white}),(function(e){return e.hollow?Object(b.a)(.8,e.theme.colors.primaryMuted):e.theme.colors.primaryMuted})),D=o.c.div.withConfig({displayName:"DeckBox__ActionWrapper",componentId:"sc-1eyxbev-1"})(["position:absolute;bottom:10px;right:5px;"]),C=o.c.button.withConfig({displayName:"DeckBox__ActionButton",componentId:"sc-1eyxbev-2"})(["position:relative;margin:0;border-radius:10px;border:none;padding:5px;background-color:transparent;color:",";:hover{background-color:",";}:hover > div{visibility:visible;}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.highlighted})),B=o.c.div.withConfig({displayName:"DeckBox__ToolTip",componentId:"sc-1eyxbev-3"})(["position:absolute;top:-15px;width:20px;height:20px;visibility:hidden;"]),I=Object(o.c)(k).withConfig({displayName:"DeckBox__StyledEditIcon",componentId:"sc-1eyxbev-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),N=Object(o.c)(v).withConfig({displayName:"DeckBox__StyledPlay",componentId:"sc-1eyxbev-5"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),S=function(e){var t=e.loading,n=e.onClick;return _(j,{hollow:!0,as:"button",onClick:n,disabled:t},t?_(O.a,null):"+")},E=function(e){var t=e.id;return _(l.a,{href:"/edit-deck?id=".concat(t)},_(C,null,_(B,null,"Edit"),_(I,null)))},P=Object(c.forwardRef)((function(e,t){var n=e.children,r=e.onClick,o=e.hollow,c=e.href,i=e.id,a=e.edit;return _(j,{href:c,ref:t,onClick:r,hollow:o},_("div",null,n),_(D,null,a?_(E,{id:i}):null,_(C,null,_(B,null,"Run"),_(N,null))))})),M=n("55GN"),z=n("slLH"),V=i.a.createElement,A=o.c.div.withConfig({displayName:"BrowseDecks__DeckView",componentId:"h4ypn8-0"})(["height:100vh;display:flex;@media screen and (max-width:","){flex-direction:column;}"],M.a.smallPhone.max),X=o.c.div.withConfig({displayName:"BrowseDecks__DeckWrapper",componentId:"h4ypn8-1"})(["width:auto;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;background-color:",";"],(function(e){return e.theme.colors.white}));t.a=function(e){var t=e.decks,n=e.createDeck,o=e.addDeck,i=Object(c.useContext)(z.b).user.uid;return V(A,null,V(x,null),V(X,null,o?V(S,{onClick:n}):null,Object.entries(t).map((function(e){var t=Object(r.a)(e,2),n=t[0],o=t[1];return V(l.a,{key:n,href:"/view-deck?id=".concat(n),passHref:!0},V(P,{id:n,edit:i===o.uid},o.name))}))))}},cpgX:function(e,t,n){"use strict";var r=n("vOnD"),o=n("nOHt"),c=n("q1tI"),i=n.n(c),a=n("YFqc"),l=n.n(a),d=n("Hcgl"),u=i.a.createElement,s=r.c.div.withConfig({displayName:"ViewBar__ViewBarBox",componentId:"itzrp2-0"})(["width:100%;height:80px;display:flex;flex-direction:row;background-color:",";justify-content:flex-end;align-items:center;"],(function(e){return e.theme.colors.focusBackground})),p=r.c.button.withConfig({displayName:"ViewBar__ViewLinks",componentId:"itzrp2-1"})(["background-color:",";border:none;width:100px;height:50px;color:",";font-family:",";font-size:15px;font-weight:300;cursor:pointer;"],(function(e){return e.theme.colors.focusBackground}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text}));t.a=Object(o.withRouter)((function(e){var t=e.router.pathname;return u(s,null,u(l.a,{href:"/repeat"},u(d.a,{active:"/repeat"===t},u(p,null,"My Decks"))),u(l.a,{href:"/all-decks"},u(d.a,{active:"/all-decks"===t},u(p,null,"Browse Decks"))))}))}},[["XyUB",1,2,3,4,6,0,5,7,8]]]);