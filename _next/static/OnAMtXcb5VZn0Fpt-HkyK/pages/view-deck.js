(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BAk0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view-deck",function(){return n("xds4")}])},OXR1:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("mrSG"),i=n("q1tI"),a=n("vOnD"),r=n("9uj6");function c(e){return Object.keys(e).reduce((t,n)=>(function(e){return Object(r.a)(e)}(n)&&(t[n]=e[n]),t),{})}const d=i.forwardRef((e,t)=>{const{children:n,iconAttrs:a,iconVerticalAlign:r,iconViewBox:d,size:l,title:u}=e,s=Object(o.__rest)(e,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),p=Object.assign({viewBox:d,height:void 0!==e.height?e.height:l,width:void 0!==e.width?e.width:l,"aria-hidden":null==u?"true":void 0,focusable:"false",role:null!=u?"img":void 0},a),h=c(s);return i.createElement("svg",Object.assign({},p,h,{ref:t}),u&&i.createElement("title",{key:"icon-title"},u),n)}),l=Object(a.c)(d)`
  display: inline-block;
  vertical-align: ${e=>e.iconVerticalAlign};
  overflow: hidden;
`},VVoN:function(e,t,n){"use strict";var o=n("vOnD"),i=n("55GN"),a=o.c.div.withConfig({displayName:"Container",componentId:"sc-1v56vj7-0"})(["width:80%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;position:relative;@media screen and (max-width:","){width:85%;}@media screen and (max-width:","){width:100%;}"],i.a.tablet.max,i.a.smallPhone.max);t.a=a},XsGP:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("8Kt/"),r=n.n(a),c=n("2iwK"),d=n("uX9c"),l=n("ey2R"),u=i.a.createElement;t.a=function(e,t){return function(){var n=Object(o.useContext)(l.a),a=n.state,s=a.status,p=a.deck,h=a.error,m=a.currentId,f=a.user,g=n.localActions,b=g.updateName,w=g.updateCard,x=g.addCard,y=g.removeCard,k=g.cancelEdit,v=n.actions,C=v.submitChanges,_=v.deleteDeck,I=v.copyDeck;return"empty"===s||"fetching"===s||"copying"===s||"deleting"===s?u(c.b,null,u(r.a,null,u("title",{key:"title"},t()," | Speak Repeat")),u(c.c,null)):"resolved"===s||"edited"===s?u(i.a.Fragment,null,u(r.a,null,u("title",{key:"title"},t(p.name)," | Speak Repeat")),u(e,{name:p.name,cards:p.cards,cancelEdit:k,updateName:b,updateCardWithIndex:w,addCard:x,submitChanges:C,edited:"edited"===s,id:m,removeCardWithIndex:y,deleteDeck:_,user:f,copyDeck:I})):"uploading"===s?u(c.b,null,u(r.a,null,u("title",{key:"title"},t(p.name)," | Speak Repeat")),u(e,{name:p.name,cards:p.cards,cancelEdit:k,updateName:b,updateCardWithIndex:w,addCard:x,submitChanges:C,edited:"edited"===s,loading:!0,id:m,removeCardWithIndex:y,deleteDeck:_,user:f,copyDeck:I}),u(c.c,null)):(console.error(h),u(d.a,null,u(r.a,null,u("title",{key:"title"},"Oops! | Speak Repeat")),h&&h.message||"Something went wrong. Try going back to your decks or refreshing the page after a while."))}}},wHcE:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return h}));var o=n("Ff2n"),i=n("q1tI"),a=n.n(i),r=n("vOnD"),c=a.a.createElement,d=r.c.button.withConfig({displayName:"Button",componentId:"hh7xaw-0"})(["background:",";padding:0 20px;border:1px ",";border-style:solid;border-radius:10px;color:",";cursor:pointer;height:43.5px;font-size:14px;:hover:not(:disabled){opacity:0.5;}:disabled{background:",";cursor:not-allowed;}:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primaryMutedInactive}),(function(e){return e.theme.colors.border})),l=Object(r.c)(d).withConfig({displayName:"Button__FixedSizeButton",componentId:"hh7xaw-1"})(["width:43.5px;padding:0%;"]),u=Object(r.c)(d).withConfig({displayName:"Button__DangerButton",componentId:"hh7xaw-2"})(["background-color:",";"],(function(e){return e.theme.colors.danger})),s=Object(r.c)(d).withConfig({displayName:"Button__BlackButton",componentId:"hh7xaw-3"})(["background-color:",";"],(function(e){return e.theme.colors.black})),p=r.c.svg.withConfig({displayName:"Button__StyledIcon",componentId:"hh7xaw-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),h=function(e){var t=e.icon,n=Object(o.a)(e,["icon"]);return c(l,n,c(p,{as:t}))}},xds4:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=n("JTPn"),r=n("ODXe"),c=n("vOnD"),d=n("YFqc"),l=n.n(d),u=n("VVoN"),s=i.a.createElement,p=c.c.div.withConfig({displayName:"WordCard",componentId:"sc-1jnzmp3-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100px;border-radius:10px;background-color:",";font-family:",";color:",";padding:20px;margin-top:20px;"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.blac})),h=c.c.div.withConfig({displayName:"WordCard__Word",componentId:"sc-1jnzmp3-1"})(["text-align:center;border-style:none;width:250px;font-size:16px;&:focus{outline:none;}"]),m=c.c.hr.withConfig({displayName:"WordCard__Seperator",componentId:"sc-1jnzmp3-2"})(["width:300px;height:10px;border:0.5px solid ",";"],(function(e){return e.theme.colors.border})),f=function(e){var t=e.card;return s(p,null,s(h,null,t.original?t.original:"Original Word"),s(m,null),s(h,null,t.translation?t.translation:"Translation"))},g=n("wHcE"),b=n("55GN"),w=n("mrSG"),x=n("OXR1"),y=o.forwardRef((function(e,t){return o.createElement(x.a,Object(w.__assign)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),o.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k0"}),o.createElement("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z",key:"k1"}))}));y.displayName="Close";var k=i.a.createElement,v=Object(c.d)(["from{opacity:0;}to{opacity:1;}"]),C=c.c.div.withConfig({displayName:"Modal__Shadow",componentId:"sc-17k5zh7-0"})(["margin:0;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:10;background-color:rgba(0,0,0,0.3);"]),_=c.c.div.withConfig({displayName:"Modal__ModalContainer",componentId:"sc-17k5zh7-1"})(["width:100%;max-width:500px;margin:0 auto;margin-top:10vh;padding:0 20px;"]),I=c.c.div.withConfig({displayName:"Modal",componentId:"sc-17k5zh7-2"})(["width:100%;background:",";box-shadow:0 0 18px rgba(0,0,0,0.4);border-radius:5px;position:relative;animation:"," 0.3s;"],(function(e){return e.theme.colors.white}),v),N=c.c.div.withConfig({displayName:"Modal__Header",componentId:"sc-17k5zh7-3"})(["padding:16px;border-bottom:1px solid ",";display:flex;"],(function(e){return e.theme.colors.border})),O=c.c.h2.withConfig({displayName:"Modal__HeaderTitle",componentId:"sc-17k5zh7-4"})(["font-size:16px;margin:0px;font-family:",";flex:1;"],(function(e){return e.theme.fonts.text})),D=Object(c.c)(g.d).withConfig({displayName:"Modal__Button",componentId:"sc-17k5zh7-5"})(["background:none;border:none;padding:0;width:auto;height:auto;svg{color:",";width:24px;}"],(function(e){return e.theme.colors.black})),j=c.c.div.withConfig({displayName:"Modal__Content",componentId:"sc-17k5zh7-6"})(["padding:16px;overflow-y:auto;strong{font-weight:600;}> *{margin-top:0;}"]),z=function(e){var t=e.children,n=e.title,o=e.toggleVisible;return k(C,{onClick:o},k(_,{onClick:function(e){return e.stopPropagation()}},k(I,null,k(N,null,k(O,null,n),k(D,{icon:y,onClick:o,title:"Close Modal","aria-label":"Close Modal"})),k(j,null,t))))},B=n("wd2G"),V=i.a.createElement,E=c.c.fieldset.withConfig({displayName:"ViewDeck__Background",componentId:"b4biry-0"})(["background-color:",";width:100%;border:none;padding:0;margin:0;:disabled{opacity:0.5;}"],(function(e){return e.theme.colors.focusBackground})),M=c.c.div.withConfig({displayName:"ViewDeck__TitleBar",componentId:"b4biry-1"})(["display:flex;width:100%;height:100%;padding-top:20px;align-items:center;"]),A=c.c.h1.withConfig({displayName:"ViewDeck__DeckName",componentId:"b4biry-2"})(["min-width:0;font-weight:800;@media screen and (max-width:","){flex:1;}"],b.a.tablet.max),W=c.c.div.withConfig({displayName:"ViewDeck__ButtonsWrapper",componentId:"b4biry-3"})(["margin-left:auto;display:flex;flex-direction:row;& > button{margin-left:10px;}"]),R=c.c.div.withConfig({displayName:"ViewDeck__WordsWrapper",componentId:"b4biry-4"})(["padding-bottom:50px;"]),S=c.c.div.withConfig({displayName:"ViewDeck__AlignRight",componentId:"b4biry-5"})(["display:flex;justify-content:flex-end;> button{margin-left:10px;}"]),G=n("XsGP"),T=i.a.createElement,X=Object(G.a)((function(e){var t=e.name,n=e.cards,o=e.id,a=e.deleteDeck,c=e.user,d=e.copyDeck,s=Object(B.a)(),p=Object(r.a)(s,2),h=p[0],m=p[1];return V(E,null,V(u.a,null,V(M,null,V(A,null,t),V(W,null,"same"===c?V(l.a,{key:o,href:"/edit-deck?id=".concat(o)},V(g.b,{type:"button"},"Edit deck")):V(g.b,{type:"button",onClick:d,disabled:"none"===c},"Copy deck"),V(l.a,{href:"/run-deck?id=".concat(o)},V(g.b,{type:"button"},"Run deck")),"same"===c?V(i.a.Fragment,null,V(l.a,{href:"/repeat"},V(g.a,{type:"button"},"Go back")),V(g.c,{type:"button",onClick:m},"Delete"),h&&V(z,{title:"Are you absolutely sure?",toggleVisible:m},V("p",null,"Do you really want to delete the ",V("strong",null,t)," ","deck? This action cannot be undone."),V(S,null,V(g.a,{type:"button",onClick:m},"Cancel"),V(g.c,{type:"button",onClick:a},"Delete")))):V(l.a,{href:"/all-decks"},V(g.a,{type:"button"},"Go back")))),V(R,null,n.map((function(e,t){return V(f,{key:t,card:e},"Test")})))))}),(function(e){return e||"View Deck"}));t.default=function(){return T(i.a.Fragment,null,T(a.a,null),T("main",null,T(X,null)))}}},[["BAk0",1,2,3,5,0,4,6,7]]]);