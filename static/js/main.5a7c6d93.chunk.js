(this.webpackJsonpdrifter=this.webpackJsonpdrifter||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),c=n(21),i=n.n(c),s=(n(27),n(9)),o=n(19),l=n.n(o),u=n(22),d=n(5),b=(n(31),n(8)),j=function(e){return"".concat(e.charAt(0)).concat(String.fromCharCode("0000a0").repeat(5)).concat(e.substring(1))},f=function(e){var t=e.children,n=e.main,r=e.sideBar,a=void 0===r?function(){return null}:r,c=e.mainProps,i=void 0===c?{}:c,s=e.sideBarProps,o=void 0===s?{}:s;return Object(b.jsxs)("div",{className:"drifter-layout",children:[Object(b.jsx)("main",{className:"drifter-layout-main",children:n?Object(b.jsx)(n,Object(d.a)({},i)):t}),Object(b.jsx)("aside",{className:"drifter-layout-sidebar","data-heading":j(a.name.toLowerCase()),children:Object(b.jsx)(a,Object(d.a)({},o))})]})},m=n(13),v=(n(33),["children","className"]),p=function(e){var t=e.children,n=e.className,r=Object(m.a)(e,v);return Object(b.jsx)("label",Object(d.a)(Object(d.a)({},r),{},{className:"drifter-label ".concat(null!==n&&void 0!==n?n:""),children:t&&t.length?t:null}))},h=(n(34),["className"]),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tintColor,r=t.shadeColor,a=t.backgroundColor;return function(t){var c=t.className,i=Object(m.a)(t,h);return Object(b.jsx)(e,Object(d.a)(Object(d.a)({},i),{},{className:"drifter-has-neumorphism ".concat(c),style:{"--neumorphism-bg-color":a,"--neumorphism-shadow-color-tint":n,"--neumorphism-shadow-color-shade":r}}))}},g=(n(35),["options","className"]),x=O((function(e){var t=e.options,n=void 0===t?[]:t,r=e.className,a=Object(m.a)(e,g);return Object(b.jsx)("select",Object(d.a)(Object(d.a)({},a),{},{className:"drifter-select ".concat(null!==r&&void 0!==r?r:""),children:n.map((function(e,t){var n=e.value,r=e.label,a=e.className;return Object(b.jsx)("option",{className:"drifter-select-option ".concat(null!==a&&void 0!==a?a:""),value:n,children:r},t)}))}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),N=(n(36),["type","className"]),k=function(e){var t=e.type,n=void 0===t?"text":t,r=e.className,a=Object(m.a)(e,N);return Object(b.jsx)("input",Object(d.a)(Object(d.a)({},a),{},{type:n,className:"drifter-input ".concat(null!==r&&void 0!==r?r:"")}))},y=(n(37),["className"]),C=O((function(e){var t=e.className,n=Object(m.a)(e,y);return Object(b.jsx)(k,Object(d.a)(Object(d.a)({},n),{},{className:"drifter-number-input ".concat(null!==t&&void 0!==t?t:""),type:"number"}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),w=(n(38),function(e){var t=e.bpm,n=e.setBpm,r=e.resetInterval,a=e.setResetInterval;return Object(b.jsxs)("div",{className:"drifter-settings",children:[Object(b.jsxs)("div",{className:"drifter-setting-bpm","data-tip":"set the speed in beats per minutes","data-place":"left",children:[Object(b.jsx)(p,{htmlFor:"drifter-setting-input-bpm",children:"bpm:"}),Object(b.jsx)(C,{id:"drifter-setting-input-bpm",min:1,max:1e3,value:t,onChange:function(e){var t=e.target.value;return n(+t)}})]}),Object(b.jsxs)("div",{className:"drifter-setting-reset-interval","data-tip":"synchronize the original source and the drifting source using this interval (0 means never)","data-place":"left",children:[Object(b.jsx)(p,{htmlFor:"drifter-setting-input-reset-interval",children:"reset every:"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{id:"drifter-setting-input-reset-interval",min:0,max:64,value:r.value,onChange:function(e){var t=e.target.value;return a(Object(d.a)(Object(d.a)({},r),{},{value:+t}))}}),Object(b.jsx)(x,{options:[{label:"bars",value:"bars"},{label:"beats",value:"beats"}],defaultValue:r.unit,onChange:function(e){var t=e.target.value;return a(Object(d.a)(Object(d.a)({},r),{},{unit:t}))}})]})]})]})}),S=n(10),T=function(e){return(t=e[0]&&e[0].length,Object(S.a)(new Array(t).keys())).map((function(t){return e.map((function(e,n){return e[t]}))}));var t},E=["C4","C#4","D4","D#4"],I=function(e){return[Math.floor(e/16)%4,Math.floor(e/4)%4,e%4].join(":")},L=function(e,t){Object(r.useEffect)((function(){var t=Object.entries(e),n=t.map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return[window.matchMedia(n),function(e){return e.matches&&r()}]})),r=n.findIndex((function(e){return Object(s.a)(e,1)[0].matches}));return-1!==r&&t[r][1](),n.forEach((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return n.addEventListener("change",r)})),function(){return n.forEach((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return n.removeEventListener("change",r)}))}}),[e].concat(Object(S.a)(t)))},B=n(16),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return Object(r.useRef)(new B[e](t).toDestination()).current},M={urls:{C4:"TR-808Kick01.wav","C#4":"TR-808Snare01.wav",D4:"TR-808Clap01.wav","D#4":"TR-808Hat_C01.wav"},baseUrl:"/audio/drum-machines/roland-tr-808/"},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(!1),a=Object(s.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(null),l=Object(s.a)(o,2),u=l[0],b=l[1];return[R("Sampler",Object(d.a)(Object(d.a)(Object(d.a)({},t),e),{},{onload:function(){return i(!0)},onerror:function(e){return b(e)}})).sync(),c,u]},q=(n(48),function(e){var t=e.className,n=(e.sampler,e.isRunning),r=e.displayedTickCount,a=void 0===r?20:r,c=e.triggerMatrix,i=void 0===c?[]:c;return Object(b.jsx)("div",{className:"drifter-sequencer ".concat(n?"drifter-sequencer-running":""," ").concat(t),style:{"--sequencer-ticks":a},children:Object(b.jsxs)("div",{className:"drifter-sequencer-timeline",children:[Object(b.jsx)("div",{className:"drifter-sequencer-tape"}),Object(b.jsx)("div",{className:"drifter-sequencer-channels",children:i.map((function(e,t){return Object(b.jsx)("div",{className:"drifter-sequencer-channel",children:e.map((function(e,t){return Object(b.jsx)(k,{type:"checkbox",className:"drifter-sequencer-tick",defaultChecked:e},t)}))},t)}))})]})})}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Object(r.useEffect)((function(){return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}))},F=(n(49),["type","isActive","className"]),A={play:"play<br/>(space)",stop:"stop<br/>(space)",record:"record<br/>(shift+r)"},z=O((function(e){var t=e.type,n=e.isActive,r=e.className,a=Object(m.a)(e,F);return Object(b.jsx)("button",Object(d.a)(Object(d.a)({},a),{},{className:["drifter-transport-button",t?"drifter-transport-button-type-".concat(t):"",n?"drifter-transport-button-active":"",r].filter(Boolean).join(" "),"data-tip":A[t]}))})),H=(n(50),function(e){var t=e.bpm,n=e.loop,a=void 0===n||n,c=e.loopLengthInSixteenths,i=e.onPlay,o=void 0===i?function(){}:i,l=e.onStop,u=void 0===l?function(){}:l,d=e.onRecord,j=void 0===d?function(){}:d,f=Object(r.useState)(!1),m=Object(s.a)(f,2),v=m[0],p=m[1],h=Object(r.useState)(!1),O=Object(s.a)(h,2),g=O[0],x=O[1],N=Object(r.useCallback)((function(){return!v&&B.start().then((function(){return B.Transport.start()})).then((function(){return p(!0)})).then(o)}),[v,o]),k=Object(r.useCallback)((function(){return v&&B.loaded().then((function(){return B.Transport.stop()})).then((function(){p(!1),x(!1)})).then(u)}),[v,u]),y=Object(r.useCallback)((function(){x(!0),j()}),[j]),C=Object(r.useCallback)((function(){return v?k():N()}),[v,N,k]);return Object(r.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bpm,n=e.loop,r=e.loopLengthInSixteenths;B.Transport.loop=n,B.Transport.bpm.value=t,B.Transport.setLoopPoints(0,I(r))}({bpm:t,loop:a,loopLengthInSixteenths:c})}),[t,a,c]),D(Object(r.useCallback)((function(e){return(t=[[32,function(){return C()}],[82,["shiftKey"],function(){N(),y()}]],function(e){var n=t.find((function(t){var n=Object(s.a)(t,2),r=n[0],a=n[1];return r===e.keyCode&&(!a||0===a.length||a.every((function(t){return e[t]})))}));n&&(e.preventDefault(),(0,n[n.length-1])())})(e);var t}),[N,y,C])),Object(b.jsxs)("div",{className:"drifter-transport",children:[Object(b.jsx)(z,{type:"play",onClick:N,isActive:v}),Object(b.jsx)(z,{type:"stop",onClick:k}),Object(b.jsx)(z,{type:"record",onClick:y,isActive:g})]})}),J=(n(51),["min","max","low","high","optimum","value","className"]),K=function(e){var t=e.min,n=void 0===t?0:t,r=e.max,a=void 0===r?100:r,c=e.low,i=void 0===c?50:c,s=e.high,o=void 0===s?80:s,l=e.optimum,u=void 0===l?0:l,j=e.value,f=void 0===j?30:j,v=e.className,p=Object(m.a)(e,J);return Object(b.jsx)("meter",Object(d.a)(Object(d.a)({min:n,max:a,low:i,high:o,optimum:u,value:f},p),{},{className:"drifter-meter ".concat(null!==v&&void 0!==v?v:"")}))},U=(n(52),["className"]),V=function(e){var t=e.className,n=Object(m.a)(e,U);return Object(b.jsx)(k,Object(d.a)(Object(d.a)({},n),{},{className:"drifter-crossfader ".concat(t),type:"range"}))},_=(n(53),["className"]),G=function(e){var t=e.className,n=Object(m.a)(e,_);return Object(b.jsxs)("div",Object(d.a)(Object(d.a)({},n),{},{className:"drifter-visualizations ".concat(t),children:[Object(b.jsx)(K,{className:"drifter-visualization-loose",value:30}),Object(b.jsx)(V,{}),Object(b.jsx)(K,{className:"drifter-visualization-tight",value:80})]}))},Q=(n(54),function(e){var t=e.bpm,n=(e.resetInterval,Object(r.useState)(!1)),a=Object(s.a)(n,2),c=a[0],i=a[1],o=l()("drifter-trigger-matrix",[[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]]),u=Object(s.a)(o,1)[0],d=Object(r.useState)(20),j=Object(s.a)(d,2),f=j[0],m=j[1];L({"(max-width: 600px)":m.bind(null,4),"(min-width: 600px) and (max-width: 800px)":m.bind(null,8),"(min-width: 800px) and (max-width: 1200px)":m.bind(null,16),"(min-width: 1200px)":m.bind(null,32)},[m]);var v=P(M),p=Object(s.a)(v,1)[0];return Object(r.useEffect)((function(){!function(e,t){T(t).map((function(e){return e.map((function(e,t){return e&&E[t]})).filter(Boolean)})).map((function(t,n){return t.length&&e.triggerAttack(t,I(n))}))}(p,u)}),[p,u]),Object(b.jsxs)("div",{className:"drifter-main-view",children:[Object(b.jsx)("h1",{className:"drifter-main-view-title",children:"d\xa0\xa0\xa0\xa0\xa0rifter"}),Object(b.jsx)(q,{className:"drifter-main-view-panel",isRunning:c,triggerMatrix:u,displayedTickCount:f}),Object(b.jsx)(H,{className:"drifter-main-view-panel-center",bpm:t,loopLengthInSixteenths:f,onPlay:function(){return i(!0)},onStop:function(){return i(!1)}}),Object(b.jsx)(G,{className:"drifter-main-view-panel-end"})]})}),W=n(0),X=n(1),Y=n(3),Z=n(2),$=(n(55),function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(e){var r;return Object(W.a)(this,n),(r=t.call(this,e)).state={hasError:!1,errorMessage:null,errorStackTrace:null},r}return Object(X.a)(n,[{key:"render",value:function(){var e;return this.state.hasError?Object(b.jsxs)("div",{className:"drifter-app-error-view",children:[Object(b.jsx)("h1",{className:"drifter-app-error-view-title",children:null!==(e=this.props.message)&&void 0!==e?e:"something's wrong :("}),Object(b.jsxs)("div",{className:"drifter-app-error-view-details",children:[Object(b.jsx)("label",{children:"message"}),Object(b.jsx)("pre",{className:"drifter-app-error-view-pre",children:this.state.errorMessage}),Object(b.jsxs)("details",{children:[Object(b.jsx)("summary",{children:"stack trace"}),Object(b.jsx)("pre",{className:"drifter-app-error-view-pre drifter-app-error-view-stacktrace",children:this.state.errorStackTrace})]})]})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,errorMessage:e.message,errorStackTrace:e.stack}}}]),n}(a.a.Component)),ee=(n(56),n(57),function(){var e=l()("drifter-setting-bpm",99),t=Object(s.a)(e,2),n=t[0],r=t[1],a=l()("drifter-setting-reset-interval-beats",{value:4,unit:"bars"}),c=Object(s.a)(a,2),i=c[0],o=c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{className:"drifter-react-tooltip",effect:"solid",delayShow:300,delayHide:300,textColor:"var(--background-color)",backgroundColor:"var(--accent-color-complement)",multiline:!0}),Object(b.jsx)($,{children:Object(b.jsx)(f,{main:Q,mainProps:{bpm:n,resetInterval:i},sideBar:w,sideBarProps:{bpm:n,setBpm:r,resetInterval:i,setResetInterval:o}})})]})}),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ee,{})}),document.getElementById("root")),te()}},[[58,1,2]]]);
//# sourceMappingURL=main.5a7c6d93.chunk.js.map