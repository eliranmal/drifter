(this.webpackJsonpdrifter=this.webpackJsonpdrifter||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(11),i=n.n(r),s=(n(17),n(12)),o=(n(21),n(0)),l=function(e){return"".concat(e.charAt(0)).concat(String.fromCharCode("0000a0").repeat(5)).concat(e.substring(1))},u=function(e){var t=e.children,n=e.main,a=e.sideBar,c=void 0===a?function(){return null}:a;return Object(o.jsxs)("div",{className:"drifter-layout",children:[Object(o.jsx)("main",{className:"drifter-layout-main",children:n?Object(o.jsx)(n,{}):t}),Object(o.jsx)("aside",{className:"drifter-layout-sidebar","data-heading":l(c.name.toLowerCase()),children:Object(o.jsx)(c,{})})]})},d=n(5),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Object(a.useEffect)((function(){return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}))},j=n(8),m=function(e,t){Object(a.useEffect)((function(){var t=Object.entries(e),n=t.map((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return[window.matchMedia(n),function(e){return e.matches&&a()}]})),a=n.findIndex((function(e){return Object(d.a)(e,1)[0].matches}));return-1!==a&&t[a][1](),n.forEach((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return n.addEventListener("change",a)})),function(){return n.forEach((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return n.removeEventListener("change",a)}))}}),[e].concat(Object(j.a)(t)))},f=function(e){return Object(j.a)(new Array(e).keys())},v=n(2),O=n(4),h=(n(23),["type","className"]),p=function(e){var t=e.type,n=void 0===t?"text":t,a=e.className,c=Object(O.a)(e,h);return Object(o.jsx)("input",Object(v.a)(Object(v.a)({},c),{},{type:n,className:"drifter-input ".concat(null!==a&&void 0!==a?a:"")}))},x=(n(24),[[0,6,10,16,22,26],[4,12,20,28]]),g=function(e){var t=e.isRunning,n=e.channelCount,c=void 0===n?4:n,r=e.initialTickCount,i=void 0===r?20:r,s=e.className,l=Object(a.useState)(i),u=Object(d.a)(l,2),b=u[0],j=u[1];return m({"(max-width: 600px)":j.bind(null,4),"(min-width: 600px) and (max-width: 800px)":j.bind(null,8),"(min-width: 800px) and (max-width: 1200px)":j.bind(null,16),"(min-width: 1200px)":j.bind(null,32)},[j]),Object(o.jsx)("div",{className:"drifter-sequencer ".concat(t?"drifter-sequencer-running":""," ").concat(s),style:{"--sequencer-ticks":b},children:Object(o.jsxs)("div",{className:"drifter-sequencer-timeline",children:[Object(o.jsx)("div",{className:"drifter-sequencer-tape"}),Object(o.jsx)("div",{className:"drifter-sequencer-channels",children:f(c).map((function(e){return Object(o.jsx)("div",{className:"drifter-sequencer-channel",children:f(b).map((function(t){return Object(o.jsx)(p,{type:"checkbox",className:"drifter-sequencer-tick",defaultChecked:!!x[e]&&x[e].includes(t)},t)}))},e)}))})]})})},N=(n(25),["className"]),y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tintColor,a=t.shadeColor,c=t.backgroundColor;return function(t){var r=t.className,i=Object(O.a)(t,N);return Object(o.jsx)(e,Object(v.a)(Object(v.a)({},i),{},{className:"drifter-has-neumorphism ".concat(r),style:{"--neumorphism-bg-color":c,"--neumorphism-shadow-color-tint":n,"--neumorphism-shadow-color-shade":a}}))}},C=(n(26),["type","isActive","className"]),k={play:"play<br/>(space)",stop:"stop<br/>(space)",record:"record<br/>(shift+r)"},w=y((function(e){var t=e.type,n=e.isActive,a=e.className,c=Object(O.a)(e,C);return Object(o.jsx)("button",Object(v.a)(Object(v.a)({},c),{},{className:["drifter-transport-button",t?"drifter-transport-button-type-".concat(t):"",n?"drifter-transport-button-active":"",a].filter(Boolean).join(" "),"data-tip":k[t]}))})),E=(n(27),function(e){var t=e.isPlaying,n=e.isRecording,a=e.onPlay,c=e.onStop,r=e.onRecord;return Object(o.jsxs)("div",{className:"drifter-transport",children:[Object(o.jsx)(w,{type:"play",onClick:a,isActive:t}),Object(o.jsx)(w,{type:"stop",onClick:c}),Object(o.jsx)(w,{type:"record",onClick:r,isActive:n})]})}),S=(n(28),["min","max","low","high","optimum","value","className"]),q=function(e){var t=e.min,n=void 0===t?0:t,a=e.max,c=void 0===a?100:a,r=e.low,i=void 0===r?50:r,s=e.high,l=void 0===s?80:s,u=e.optimum,d=void 0===u?0:u,b=e.value,j=void 0===b?30:b,m=e.className,f=Object(O.a)(e,S);return Object(o.jsx)("meter",Object(v.a)(Object(v.a)({min:n,max:c,low:i,high:l,optimum:d,value:j},f),{},{className:"drifter-meter ".concat(null!==m&&void 0!==m?m:"")}))},F=(n(29),["className"]),L=function(e){var t=e.className,n=Object(O.a)(e,F);return Object(o.jsx)(p,Object(v.a)(Object(v.a)({},n),{},{className:"drifter-crossfader ".concat(t),type:"range"}))},A=(n(30),["className"]),P=function(e){var t=e.className,n=Object(O.a)(e,A);return Object(o.jsxs)("div",Object(v.a)(Object(v.a)({},n),{},{className:"drifter-visualizations ".concat(t),children:[Object(o.jsx)(q,{className:"drifter-visualization-loose",value:30}),Object(o.jsx)(L,{}),Object(o.jsx)(q,{className:"drifter-visualization-tight",value:80})]}))},R=(n(31),function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(d.a)(r,2),s=i[0],l=i[1],u=function(){return!n&&c(!0)},j=function(){c(!1),l(!1)},m=function(){return l(!0)};return b(Object(a.useCallback)((function(e){var t=e.keyCode,a=e.shiftKey;switch(t){case 32:e.preventDefault(),n?j():u();break;case 82:a&&(e.preventDefault(),u(),m())}}),[n])),Object(o.jsxs)("div",{className:"drifter-main-view",children:[Object(o.jsx)("h1",{className:"drifter-main-view-title",children:"d\xa0\xa0\xa0\xa0\xa0rifter"}),Object(o.jsx)(g,{className:"drifter-main-view-panel",isRunning:n}),Object(o.jsx)(E,{className:"drifter-main-view-panel-center",isPlaying:n,isRecording:s,onPlay:u,onStop:j,onRecord:m}),Object(o.jsx)(P,{className:"drifter-main-view-panel-end"})]})}),B=n(10),z=n.n(B),D=(n(32),["children","className"]),I=function(e){var t=e.children,n=e.className,a=Object(O.a)(e,D);return Object(o.jsx)("label",Object(v.a)(Object(v.a)({},a),{},{className:"drifter-label ".concat(null!==n&&void 0!==n?n:""),children:t&&t.length?t:null}))},T=(n(33),["options","className"]),J=y((function(e){var t=e.options,n=void 0===t?[]:t,a=e.className,c=Object(O.a)(e,T);return Object(o.jsx)("select",Object(v.a)(Object(v.a)({},c),{},{className:"drifter-select ".concat(null!==a&&void 0!==a?a:""),children:n.map((function(e,t){var n=e.value,a=e.label,c=e.className;return Object(o.jsx)("option",{className:"drifter-select-option ".concat(null!==c&&void 0!==c?c:""),value:n,children:a},t)}))}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),M=(n(34),["className"]),H=y((function(e){var t=e.className,n=Object(O.a)(e,M);return Object(o.jsx)(p,Object(v.a)(Object(v.a)({},n),{},{className:"drifter-number-input ".concat(null!==t&&void 0!==t?t:""),type:"number"}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),K=(n(35),function(){var e=z()("drifter-setting-bpm",99),t=Object(d.a)(e,2),n=t[0],a=t[1],c=z()("drifter-setting-reset-interval-beats",{value:4,unit:"bars"}),r=Object(d.a)(c,2),i=r[0],s=r[1];return Object(o.jsxs)("div",{className:"drifter-settings",children:[Object(o.jsxs)("div",{className:"drifter-setting-bpm","data-tip":"set the speed in beats per minutes","data-place":"left",children:[Object(o.jsx)(I,{htmlFor:"drifter-setting-input-bpm",children:"bpm:"}),Object(o.jsx)(H,{id:"drifter-setting-input-bpm",min:1,max:1e3,value:n,onChange:function(e){var t=e.target.value;return a(+t)}})]}),Object(o.jsxs)("div",{className:"drifter-setting-reset-interval","data-tip":"synchronize the original source and the drifting source using this interval (0 means never)","data-place":"left",children:[Object(o.jsx)(I,{htmlFor:"drifter-setting-input-reset-interval",children:"reset every:"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(H,{id:"drifter-setting-input-reset-interval",min:0,max:64,value:i.value,onChange:function(e){var t=e.target.value;return s(Object(v.a)(Object(v.a)({},i),{},{value:+t}))}}),Object(o.jsx)(J,{options:[{label:"bars",value:"bars"},{label:"beats",value:"beats"}],defaultValue:i.unit,onChange:function(e){var t=e.target.value;return s(Object(v.a)(Object(v.a)({},i),{},{unit:t}))}})]})]})]})}),V=(n(36),n(37),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{className:"drifter-react-tooltip",effect:"solid",delayShow:300,delayHide:300,textColor:"var(--background-color)",backgroundColor:"var(--accent-color-complement)",multiline:!0}),Object(o.jsx)(u,{main:R,sideBar:K})]})}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(V,{})}),document.getElementById("root")),G()}],[[38,1,2]]]);
//# sourceMappingURL=main.5d2322dc.chunk.js.map