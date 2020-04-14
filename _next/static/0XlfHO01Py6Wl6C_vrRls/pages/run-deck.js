(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"5vtm":function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),o=t.n(i),r=t("JTPn"),c=t("vOnD"),a=t("nOHt"),d=t.n(a),l=t("YFqc"),u=t.n(l),s=t("55GN"),p=t("wHcE"),m=t("VVoN"),f=o.a.createElement,h=c.c.div.withConfig({displayName:"RunDeck__EmptyDeck",componentId:"sc-1053bqn-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;color:",";text-align:center;"],(function(e){return e.theme.colors.black})),x=c.c.div.withConfig({displayName:"RunDeck__TitleWrapper",componentId:"sc-1053bqn-1"})(["display:flex;flex-direction:row;justify-content:space-between;margin:20px 0;"]),g=c.c.h1.withConfig({displayName:"RunDeck__Title",componentId:"sc-1053bqn-2"})(["color:",";margin:0px;text-align:center;"],(function(e){return e.theme.colors.primary})),b=c.c.div.withConfig({displayName:"RunDeck__FlipCardWrapper",componentId:"sc-1053bqn-3"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]),w=c.c.div.withConfig({displayName:"RunDeck__FlipCard",componentId:"sc-1053bqn-4"})(["background-color:transparent;width:500px;height:300px;border:1px solid ",";perspective:1000px;margin-bottom:20px;border-radius:10px;@media screen and (max-width:","){width:300px;height:200px;}"],(function(e){return e.theme.colors.border}),s.a.smallPhone.max),k=c.c.div.withConfig({displayName:"RunDeck__FlipCardInner",componentId:"sc-1053bqn-5"})(["position:relative;width:100%;height:100%;text-align:center;transition:transform 0.4s;transform-style:preserve-3d;transform:",";"],(function(e){return e.flip?"rotateY(180deg)":null})),y=c.c.div.withConfig({displayName:"RunDeck__FlipCardFront",componentId:"sc-1053bqn-6"})(["display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;backface-visibility:hidden;background-color:",";color:",";font-size:40px;transform:rotateY(0deg);border-radius:10px;"],(function(e){return e.theme.colors.focusBackground}),(function(e){return e.theme.colors.primaryHighlighted})),C=c.c.div.withConfig({displayName:"RunDeck__FlipCardBack",componentId:"sc-1053bqn-7"})(["display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;backface-visibility:hidden;background-color:",";color:",";font-size:40px;transform:rotateY(180deg);border-radius:10px;"],(function(e){return e.theme.colors.primaryHighlighted}),(function(e){return e.theme.colors.white})),v=c.c.div.withConfig({displayName:"RunDeck__ButtonWrapper",componentId:"sc-1053bqn-8"})(["display:flex;flex-direction:row;"]),_=Object(c.c)(p.b).withConfig({displayName:"RunDeck__EditButton",componentId:"sc-1053bqn-9"})(["width:150px;margin-top:20px;@media screen and (max-width:","){width:100px;}"],s.a.smallPhone.max),I=Object(c.c)(p.b).withConfig({displayName:"RunDeck__StyledButton",componentId:"sc-1053bqn-10"})(["background-color:",";width:",";margin:0 5px;@media screen and (max-width:","){width:",";}"],(function(e){return e.theme.colors.primary}),(function(e){return e.flipButton?"200px":"auto"}),s.a.smallPhone.max,(function(e){return e.flipButton?"100px":"auto"})),N=c.c.div.withConfig({displayName:"RunDeck__CardStatus",componentId:"sc-1053bqn-11"})(["padding:20px 0;"]),D=t("XsGP"),B=t("cpgX"),R=o.a.createElement,q=Object(D.a)((function(e){var n=e.name,t=e.cards,o=e.id,r=e.cameFrom,c=e.browseContext,a=Object(i.useState)({index:0,flip:!1}),l=a[0],s=a[1];return 0===t.length?f(m.a,null,f(x,null,f(g,null,n),f(p.a,{onClick:function(){return d.a.back()}},"Done")),f(h,null,"This deck is empty. Add cards by editing the deck.",f(u.a,{key:o,href:"/edit-deck?id=".concat(o)},f(_,{type:"Edit"},"Edit deck")))):f(m.a,null,f(x,null,f(g,null,n),f(v,null,f(I,{disabled:0===l.index,onClick:function(){return s((function(e){return{index:0,flip:e.flip}}))}},"Restart"),f(u.a,{href:"view-deck"===r?"/".concat(r,"?id=").concat(o,"&browseContext=").concat(c):"/".concat(c)},f(p.a,{type:"button"},"Done")))),f(b,null,f(w,{key:l.index},f(k,{flip:l.flip},f(y,null," ",t[l.index].original),f(C,null," ",t[l.index].translation))),f(v,null,f(p.a,{disabled:0===l.index,onClick:function(){return s((function(e){var n=e.index;return 0===n?{index:t.length-1,flip:!1}:{index:n-1,flip:!1}}))}},"Back"),f(I,{flipButton:!0,onClick:function(){return s((function(e){return{index:e.index,flip:!e.flip}}))}},"Flip"),f(p.a,{disabled:l.index+1===t.length,onClick:function(){return s((function(e){var n=e.index;return n<t.length-1?{index:n+1,flip:!1}:{index:0,flip:!1}}))}},"Next")),f(N,null,"".concat(l.index+1,"/").concat(t.length))))}),(function(e){return e?"Run Test: ".concat(e):"Run Test"}));n.default=function(){return R(o.a.Fragment,null,R(r.a,null),R(B.a,null),R("main",null,R(q,null)))}},VVoN:function(e,n,t){"use strict";var i=t("vOnD"),o=t("55GN"),r=i.c.div.withConfig({displayName:"Container",componentId:"sc-1v56vj7-0"})(["width:80%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box;position:relative;@media screen and (max-width:","){width:85%;}@media screen and (max-width:","){width:100%;}"],o.a.tablet.max,o.a.smallPhone.max);n.a=r},XsGP:function(e,n,t){"use strict";var i=t("q1tI"),o=t.n(i),r=t("8Kt/"),c=t.n(r),a=t("nOHt"),d=t("2iwK"),l=t("uX9c"),u=t("ey2R"),s=o.a.createElement;n.a=function(e,n){return function(){var t=Object(i.useContext)(u.a),r=t.state,p=r.status,m=r.deck,f=r.error,h=r.currentId,x=r.user,g=t.localActions,b=g.updateName,w=g.updateCard,k=g.addCard,y=g.removeCard,C=g.cancelEdit,v=t.actions,_=v.submitChanges,I=v.deleteDeck,N=v.copyDeck,D=function(){var e=Object(a.useRouter)().query;return{cameFrom:e.cameFrom,browseContext:e.browseContext}}(),B=D.cameFrom,R=D.browseContext;return"empty"===p||"fetching"===p||"copying"===p||"deleting"===p?s(d.b,null,s(c.a,null,s("title",{key:"title"},n()," | Speak Repeat")),s(d.c,null)):"resolved"===p||"edited"===p?s(o.a.Fragment,null,s(c.a,null,s("title",{key:"title"},n(m.name)," | Speak Repeat")),s(e,{name:m.name,cards:m.cards,cancelEdit:C,updateName:b,updateCardWithIndex:w,addCard:k,submitChanges:_,edited:"edited"===p,id:h,removeCardWithIndex:y,deleteDeck:I,user:x,copyDeck:N,cameFrom:B,browseContext:R})):"uploading"===p?s(d.b,null,s(c.a,null,s("title",{key:"title"},n(m.name)," | Speak Repeat")),s(e,{name:m.name,cards:m.cards,cancelEdit:C,updateName:b,updateCardWithIndex:w,addCard:k,submitChanges:_,edited:"edited"===p,loading:!0,id:h,removeCardWithIndex:y,deleteDeck:I,user:x,copyDeck:N,cameFrom:B,browseContext:R}),s(d.c,null)):(console.error(f),s(l.a,null,s(c.a,null,s("title",{key:"title"},"Oops! | Speak Repeat")),f&&f.message||"Something went wrong. Try going back to your decks or refreshing the page after a while."))}}},cpgX:function(e,n,t){"use strict";var i=t("vOnD"),o=t("nOHt"),r=t("q1tI"),c=t.n(r),a=t("YFqc"),d=t.n(a),l=t("Hcgl"),u=c.a.createElement,s=i.c.div.withConfig({displayName:"ViewBar__ViewBarBox",componentId:"itzrp2-0"})(["width:100%;height:80px;display:flex;flex-direction:row;background-color:",";justify-content:flex-end;align-items:center;"],(function(e){return e.theme.colors.focusBackground})),p=i.c.button.withConfig({displayName:"ViewBar__ViewLinks",componentId:"itzrp2-1"})(["background-color:",";border:none;height:80px;color:",";font-family:",";font-size:15px;font-weight:300;cursor:pointer;:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.theme.colors.focusBackground}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.border}));n.a=Object(o.withRouter)((function(e){var n=e.router.pathname;return u(s,null,u(d.a,{href:"/repeat"},u(l.a,{active:"/repeat"===n},u(p,null,"My Decks"))),u(d.a,{href:"/all-decks"},u(l.a,{active:"/all-decks"===n},u(p,null,"Browse Community Decks"))))}))},iQT6:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/run-deck",function(){return t("5vtm")}])},wHcE:function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return m}));var i=t("Ff2n"),o=t("q1tI"),r=t.n(o),c=t("vOnD"),a=r.a.createElement,d=c.c.button.withConfig({displayName:"Button",componentId:"hh7xaw-0"})(["background:",";padding:0 20px;border:1px ",";border-style:solid;border-radius:10px;color:",";cursor:pointer;height:43.5px;font-size:14px;:hover:not(:disabled){opacity:0.5;}:disabled{background:",";cursor:not-allowed;}:focus{outline:none;box-shadow:0px 0px 10px 2px ",";}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primaryMutedInactive}),(function(e){return e.theme.colors.border})),l=Object(c.c)(d).withConfig({displayName:"Button__FixedSizeButton",componentId:"hh7xaw-1"})(["width:43.5px;padding:0%;"]),u=Object(c.c)(d).withConfig({displayName:"Button__DangerButton",componentId:"hh7xaw-2"})(["background-color:",";"],(function(e){return e.theme.colors.danger})),s=Object(c.c)(d).withConfig({displayName:"Button__BlackButton",componentId:"hh7xaw-3"})(["background-color:",";"],(function(e){return e.theme.colors.black})),p=c.c.svg.withConfig({displayName:"Button__StyledIcon",componentId:"hh7xaw-4"})(["color:",";width:20px;"],(function(e){return e.theme.colors.white})),m=function(e){var n=e.icon,t=Object(i.a)(e,["icon"]);return a(l,t,a(p,{as:n}))}}},[["iQT6",1,2,3,5,0,4,6,7]]]);