(this.webpackJsonpdrifter=this.webpackJsonpdrifter||[]).push([[0],Array(27).concat([function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),c=n(21),i=n.n(c),o=(n(27),n(9)),s=n(19),l=n.n(s),u=n(22),d=n(5),b=n(13),j=(n(31),n(8)),f=["type","className"],m=function(e){var t=e.type,n=void 0===t?"text":t,r=e.className,a=Object(b.a)(e,f);return Object(j.jsx)("input",Object(d.a)(Object(d.a)({},a),{},{type:n,className:"drifter-input ".concat(null!==r&&void 0!==r?r:"")}))},v=(n(33),function(e){return"".concat(e.charAt(0)).concat(String.fromCharCode("0000a0").repeat(5)).concat(e.substring(1))}),p=function(e){var t=e.children,n=e.main,r=e.sideBar,a=void 0===r?function(){return null}:r,c=e.mainProps,i=void 0===c?{}:c,o=e.sideBarProps,s=void 0===o?{}:o;return Object(j.jsxs)("div",{className:"drifter-layout",children:[Object(j.jsx)("main",{className:"drifter-layout-main",children:n?Object(j.jsx)(n,Object(d.a)({},i)):t}),Object(j.jsx)(m,{className:"drifter-layout-sidebar-pin",type:"checkbox"}),Object(j.jsx)("aside",{className:"drifter-layout-sidebar","data-heading":v(a.name.toLowerCase()),children:Object(j.jsx)(a,Object(d.a)({},s))})]})},h=(n(34),["children","className"]),O=function(e){var t=e.children,n=e.className,r=Object(b.a)(e,h);return Object(j.jsx)("label",Object(d.a)(Object(d.a)({},r),{},{className:"drifter-label ".concat(null!==n&&void 0!==n?n:""),children:t&&t.length?t:null}))},g=(n(35),["className"]),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tintColor,r=t.shadeColor,a=t.backgroundColor;return function(t){var c=t.className,i=Object(b.a)(t,g);return Object(j.jsx)(e,Object(d.a)(Object(d.a)({},i),{},{className:"drifter-has-neumorphism ".concat(c),style:{"--neumorphism-bg-color":a,"--neumorphism-shadow-color-tint":n,"--neumorphism-shadow-color-shade":r}}))}},N=(n(36),["options","className"]),y=x((function(e){var t=e.options,n=void 0===t?[]:t,r=e.className,a=Object(b.a)(e,N);return Object(j.jsx)("select",Object(d.a)(Object(d.a)({},a),{},{className:"drifter-select ".concat(null!==r&&void 0!==r?r:""),children:n.map((function(e,t){var n=e.value,r=e.label,a=e.className;return Object(j.jsx)("option",{className:"drifter-select-option ".concat(null!==a&&void 0!==a?a:""),value:n,children:r},t)}))}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),k=(n(37),["className"]),C=x((function(e){var t=e.className,n=Object(b.a)(e,k);return Object(j.jsx)(m,Object(d.a)(Object(d.a)({},n),{},{className:"drifter-number-input ".concat(null!==t&&void 0!==t?t:""),type:"number"}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),w=(n(38),function(e){var t=e.bpm,n=e.setBpm,r=e.resetInterval,a=e.setResetInterval;return Object(j.jsxs)("div",{className:"drifter-settings",children:[Object(j.jsxs)("div",{className:"drifter-setting-bpm","data-tip":"set the speed in beats per minutes","data-place":"left",children:[Object(j.jsx)(O,{htmlFor:"drifter-setting-input-bpm",children:"bpm:"}),Object(j.jsx)(C,{id:"drifter-setting-input-bpm",min:1,max:1e3,value:t,onChange:function(e){var t=e.currentTarget.value;return n(+t)}})]}),Object(j.jsxs)("div",{className:"drifter-setting-reset-interval","data-tip":"synchronize the original source and the drifting source using this interval (0 means never)","data-place":"left",children:[Object(j.jsx)(O,{htmlFor:"drifter-setting-input-reset-interval",children:"reset every:"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(C,{id:"drifter-setting-input-reset-interval",min:0,max:64,value:r.value,onChange:function(e){var t=e.currentTarget.value;return a(Object(d.a)(Object(d.a)({},r),{},{value:+t}))}}),Object(j.jsx)(y,{options:[{label:"bars",value:"bars"},{label:"beats",value:"beats"}],defaultValue:r.unit,onChange:function(e){var t=e.currentTarget.value;return a(Object(d.a)(Object(d.a)({},r),{},{unit:t}))}})]})]})]})}),S=n(10),T=function(e,t){Object(r.useEffect)((function(){var t=Object.entries(e),n=t.map((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return[window.matchMedia(n),function(e){return e.matches&&r()}]})),r=n.findIndex((function(e){return Object(o.a)(e,1)[0].matches}));return-1!==r&&t[r][1](),n.forEach((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return n.addEventListener("change",r)})),function(){return n.forEach((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return n.removeEventListener("change",r)}))}}),[e].concat(Object(S.a)(t)))},E=(n(39),function(e){var t=e.text,n=void 0===t?"":t;return Object(j.jsxs)("h1",{className:"drifter-heading",children:[n.charAt(0),"\xa0\xa0\xa0\xa0\xa0",n.substring(1)]})}),I=Object.create(null),L=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==(t=n[0])&&void 0!==t?t:e}.bind(I,[]),B=function(e){return(t=L(e).length,Object(S.a)(new Array(t).keys())).map((function(t){return e.map((function(e,n){return e[t]}))}));var t},M=["C4","C#4","D4","D#4"],A=function(e){return[Math.floor(e/16)%4,Math.floor(e/4)%4,e%4].join(":")},R=function(e,t){e.unsync().sync(),B(t).map((function(e){return e.map((function(e,t){return e&&M[t]})).filter(Boolean)})).map((function(t,n){return t.length&&e.triggerAttack(t,A(n))}))},P=n(16),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return Object(r.useRef)(new P[e](t).toDestination()).current},F={urls:{C4:"TR-808Kick01.wav","C#4":"TR-808Snare01.wav",D4:"TR-808Clap01.wav","D#4":"TR-808Hat_C01.wav"},baseUrl:"./audio/drum-machines/roland-tr-808/"},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(!1),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(null),l=Object(o.a)(s,2),u=l[0],b=l[1],j=D("Analyser"),f=D("Sampler",Object(d.a)(Object(d.a)(Object(d.a)({},t),e),{},{onload:function(){i(!0),t.onload&&t.onload()},onerror:function(e){b(e),t.onerror&&t.onerror(e)}}));return[f.chain(j),j,c,u]},V=(n(49),function(e){var t=e.className,n=e.isRunning,a=e.displayedSixteenths,c=void 0===a?20:a,i=e.triggerMatrix,s=void 0===i?[]:i,l=e.onTriggerMatrixChange,u=void 0===l?function(){}:l,d=z(F),b=Object(o.a)(d,4),f=b[0],v=(b[1],b[2]);b[3];return Object(r.useEffect)((function(){v&&R(f,s)}),[v,f,s]),Object(j.jsx)("div",{className:"drifter-sampler ".concat(n?"drifter-sampler-running":""," ").concat(t),style:{"--sampler-ticks":c},children:Object(j.jsxs)("div",{className:"drifter-sampler-timeline",children:[Object(j.jsx)("div",{className:"drifter-sampler-tape"}),Object(j.jsx)("div",{className:"drifter-sampler-channels",children:s.map((function(e,t){return Object(j.jsx)("div",{className:"drifter-sampler-channel",children:e.map((function(e,n){return Object(j.jsx)(m,{type:"checkbox",className:"drifter-sampler-tick",defaultChecked:e,onChange:function(e){var r,a,c,i,o=e.currentTarget.checked,l=(r=s,a=t,c=n,i=+Boolean(o),r.map((function(e,t){return t===a?e.map((function(e,t){return t===c?i:e})):e})));u(l),v&&R(f,l)}},n)}))},t)}))})]})})}),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Object(r.useEffect)((function(){return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}))},J=(n(50),["type","isActive","className"]),K={play:"play<br/>(space)",stop:"stop<br/>(space)",record:"record<br/>(shift+r)"},U=x((function(e){var t=e.type,n=e.isActive,r=e.className,a=Object(b.a)(e,J);return Object(j.jsx)("button",Object(d.a)(Object(d.a)({},a),{},{className:["drifter-transport-button",t?"drifter-transport-button-type-".concat(t):"",n?"drifter-transport-button-active":"",r].filter(Boolean).join(" "),"data-tip":K[t]}))})),_=(n(51),function(e){var t=e.bpm,n=e.loop,a=void 0===n||n,c=e.loopLengthInSixteenths,i=e.onPlay,s=void 0===i?function(){}:i,l=e.onStop,u=void 0===l?function(){}:l,d=e.onRecord,b=void 0===d?function(){}:d,f=Object(r.useState)(!1),m=Object(o.a)(f,2),v=m[0],p=m[1],h=Object(r.useState)(!1),O=Object(o.a)(h,2),g=O[0],x=O[1],N=Object(r.useCallback)((function(){return!v&&P.start().then((function(){return P.Transport.start()})).then((function(){return p(!0)})).then(s)}),[v,s]),y=Object(r.useCallback)((function(){return v&&P.loaded().then((function(){return P.Transport.stop()})).then((function(){p(!1),x(!1)})).then(u)}),[v,u]),k=Object(r.useCallback)((function(){x(!0),b()}),[b]),C=Object(r.useCallback)((function(){return v?y():N()}),[v,N,y]);return Object(r.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bpm,n=e.loop,r=e.loopLengthInSixteenths;P.Transport.loop=n,P.Transport.bpm.value=t,P.Transport.setLoopPoints(0,A(r))}({bpm:t,loop:a,loopLengthInSixteenths:c})}),[t,a,c]),H(Object(r.useCallback)((function(e){return(t=[[32,function(){return C()}],[82,["shiftKey"],function(){N(),k()}]],function(e){var n=t.find((function(t){var n=Object(o.a)(t,2),r=n[0],a=n[1];return r===e.keyCode&&(!a||0===a.length||a.every((function(t){return e[t]})))}));n&&(e.preventDefault(),(0,n[n.length-1])())})(e);var t}),[N,k,C])),Object(j.jsxs)("div",{className:"drifter-transport",children:[Object(j.jsx)(U,{type:"play",onClick:N,isActive:v}),Object(j.jsx)(U,{type:"stop",onClick:y}),Object(j.jsx)(U,{type:"record",onClick:k,isActive:g})]})}),q=(n(52),["min","max","low","high","optimum","value","className"]),G=function(e){var t=e.min,n=void 0===t?0:t,r=e.max,a=void 0===r?100:r,c=e.low,i=void 0===c?50:c,o=e.high,s=void 0===o?80:o,l=e.optimum,u=void 0===l?0:l,f=e.value,m=void 0===f?30:f,v=e.className,p=Object(b.a)(e,q);return Object(j.jsx)("meter",Object(d.a)(Object(d.a)({min:n,max:a,low:i,high:s,optimum:u,value:m},p),{},{className:"drifter-meter ".concat(null!==v&&void 0!==v?v:"")}))},Q=(n(53),["className"]),W=function(e){var t=e.className,n=Object(b.a)(e,Q);return Object(j.jsx)(m,Object(d.a)(Object(d.a)({},n),{},{className:"drifter-crossfader ".concat(t),type:"range"}))},X=(n(54),["className"]),Y=function(e){var t=e.className,n=Object(b.a)(e,X);return Object(j.jsxs)("div",Object(d.a)(Object(d.a)({},n),{},{className:"drifter-visualizations ".concat(t),children:[Object(j.jsx)(G,{className:"drifter-visualization-loose",value:30}),Object(j.jsx)(W,{}),Object(j.jsx)(G,{className:"drifter-visualization-tight",value:80})]}))},Z=(n(55),function(e){var t=e.bpm,n=(e.resetInterval,Object(r.useState)(!1)),a=Object(o.a)(n,2),c=a[0],i=a[1],s=l()("drifter-trigger-matrix",[[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]),u=Object(o.a)(s,2),d=u[0],b=u[1],f=Object(r.useState)(20),m=Object(o.a)(f,2),v=m[0],p=m[1];return T({"(max-width: 600px)":p.bind(null,4),"(min-width: 600px) and (max-width: 800px)":p.bind(null,8),"(min-width: 800px) and (max-width: 1200px)":p.bind(null,16),"(min-width: 1200px)":p.bind(null,32)},[p]),Object(j.jsxs)("div",{className:"drifter-main-view",children:[Object(j.jsx)(E,{text:"drifter"}),Object(j.jsx)(V,{className:"drifter-main-view-panel",isRunning:c,triggerMatrix:d,onTriggerMatrixChange:function(e){b(e)},displayedSixteenths:v}),Object(j.jsx)(_,{className:"drifter-main-view-panel-center",bpm:t,loopLengthInSixteenths:v,onPlay:function(){return i(!0)},onStop:function(){return i(!1)}}),Object(j.jsx)(Y,{className:"drifter-main-view-panel-end"})]})}),$=n(0),ee=n(1),te=n(3),ne=n(2),re=(n(56),function(e){Object(te.a)(n,e);var t=Object(ne.a)(n);function n(e){var r;return Object($.a)(this,n),(r=t.call(this,e)).state={hasError:!1,errorMessage:null,errorStackTrace:null},r}return Object(ee.a)(n,[{key:"render",value:function(){return this.state.hasError?this.renderErrorView():this.props.children}},{key:"renderErrorView",value:function(){var e;return Object(j.jsxs)("div",{className:"drifter-app-error-view",children:[Object(j.jsx)(E,{text:null!==(e=this.props.message)&&void 0!==e?e:"error"}),Object(j.jsxs)("div",{className:"drifter-app-error-view-details-box",children:[Object(j.jsx)("label",{children:"message"}),Object(j.jsx)("pre",{className:"drifter-app-error-view-pre",children:this.state.errorMessage}),Object(j.jsxs)("details",{className:"drifter-app-error-view-details",open:!0,children:[Object(j.jsx)("summary",{children:"stack trace"}),Object(j.jsx)("pre",{className:"drifter-app-error-view-pre drifter-app-error-view-stacktrace",children:this.state.errorStackTrace})]})]})]})}}]),n}(a.a.Component));re.getDerivedStateFromError=function(e){return{hasError:!0,errorMessage:e.message,errorStackTrace:e.stack}};var ae=re,ce=(n(57),n(58),function(){var e=l()("drifter-setting-bpm",99),t=Object(o.a)(e,2),n=t[0],r=t[1],a=l()("drifter-setting-reset-interval-beats",{value:4,unit:"bars"}),c=Object(o.a)(a,2),i=c[0],s=c[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{className:"drifter-react-tooltip",effect:"solid",delayShow:300,delayHide:300,textColor:"var(--background-color)",backgroundColor:"var(--accent-color-complement)",multiline:!0}),Object(j.jsx)(ae,{children:Object(j.jsx)(p,{main:Z,mainProps:{bpm:n,resetInterval:i},sideBar:w,sideBarProps:{bpm:n,setBpm:r,resetInterval:i,setResetInterval:s}})})]})}),ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ce,{})}),document.getElementById("root")),ie()}]),[[59,1,2]]]);
//# sourceMappingURL=main.1ac0e7d3.chunk.js.map