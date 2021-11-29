(this.webpackJsonpdrifter=this.webpackJsonpdrifter||[]).push([[0],{33:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),c=n(24),i=n.n(c),o=(n(33),n(9)),s=n(19),l=n.n(s),u=n(25),d=n(5),f=n(13),b=(n(36),n(8)),j=["type","className"],m=function(e){var t=e.type,n=void 0===t?"text":t,r=e.className,a=Object(f.a)(e,j);return Object(b.jsx)("input",Object(d.a)(Object(d.a)({},a),{},{type:n,className:"drifter-input ".concat(null!==r&&void 0!==r?r:"")}))},v=(n(38),function(e){return e?"".concat(e.charAt(0)).concat(String.fromCharCode("0000a0").repeat(5)).concat(e.substring(1)):""}),p=function(e){var t=e.children,n=e.main,r=e.sideBar,a=void 0===r?function(){return null}:r,c=e.mainProps,i=void 0===c?{}:c,o=e.sideBarProps,s=void 0===o?{}:o;return Object(b.jsxs)("div",{className:"drifter-layout",children:[Object(b.jsx)("main",{className:"drifter-layout-main",children:n?Object(b.jsx)(n,Object(d.a)({},i)):t}),Object(b.jsx)(m,{className:"drifter-layout-sidebar-pin",type:"checkbox"}),Object(b.jsx)("aside",{className:"drifter-layout-sidebar","data-heading":v(a.displayName),children:Object(b.jsx)(a,Object(d.a)({},s))})]})},h=(n(39),["children","className"]),O=function(e){var t=e.children,n=e.className,r=Object(f.a)(e,h);return Object(b.jsx)("label",Object(d.a)(Object(d.a)({},r),{},{className:"drifter-label ".concat(null!==n&&void 0!==n?n:""),children:t&&t.length?t:null}))},g=(n(40),["className"]),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tintColor,r=t.shadeColor,a=t.backgroundColor;return function(t){var c=t.className,i=Object(f.a)(t,g);return Object(b.jsx)(e,Object(d.a)(Object(d.a)({},i),{},{className:"drifter-has-neumorphism ".concat(c),style:{"--neumorphism-bg-color":a,"--neumorphism-shadow-color-tint":n,"--neumorphism-shadow-color-shade":r}}))}},y=(n(41),["options","className"]),N=x((function(e){var t=e.options,n=void 0===t?[]:t,r=e.className,a=Object(f.a)(e,y);return Object(b.jsx)("select",Object(d.a)(Object(d.a)({},a),{},{className:"drifter-select ".concat(null!==r&&void 0!==r?r:""),children:n.map((function(e,t){var n=e.value,r=e.label,a=e.className;return Object(b.jsx)("option",{className:"drifter-select-option ".concat(null!==a&&void 0!==a?a:""),value:n,children:r},t)}))}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),C=(n(42),["className"]),w=x((function(e){var t=e.className,n=Object(f.a)(e,C);return Object(b.jsx)(m,Object(d.a)(Object(d.a)({},n),{},{className:"drifter-number-input ".concat(null!==t&&void 0!==t?t:""),type:"number"}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),k=(n(43),function(e){var t=e.bpm,n=e.setBpm,r=e.resetInterval,a=e.setResetInterval;return Object(b.jsxs)("div",{className:"drifter-settings",children:[Object(b.jsxs)("div",{className:"drifter-setting-bpm","data-tip":"set the speed in beats per minutes","data-place":"left",children:[Object(b.jsx)(O,{htmlFor:"drifter-setting-input-bpm",children:"bpm:"}),Object(b.jsx)(w,{id:"drifter-setting-input-bpm",min:1,max:1e3,value:t,onChange:function(e){var t=e.currentTarget.value;return n(+t)}})]}),Object(b.jsxs)("div",{className:"drifter-setting-reset-interval","data-tip":"synchronize the original source and the drifting source using this interval (0 means never)","data-place":"left",children:[Object(b.jsx)(O,{htmlFor:"drifter-setting-input-reset-interval",children:"reset every:"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{id:"drifter-setting-input-reset-interval",min:0,max:64,value:r.value,onChange:function(e){var t=e.currentTarget.value;return a(Object(d.a)(Object(d.a)({},r),{},{value:+t}))}}),Object(b.jsx)(N,{options:[{label:"bars",value:"bars"},{label:"beats",value:"beats"}],defaultValue:r.unit,onChange:function(e){var t=e.currentTarget.value;return a(Object(d.a)(Object(d.a)({},r),{},{unit:t}))}})]})]})]})});k.displayName="settings";var S=k,A=n(26),T=n(14),E=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return Object(r.useRef)(Object(A.a)(T[e],n).toDestination()).current},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"waveform",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:64;return E("Analyser",e,t)},M=function(e){Object(r.useEffect)((function(){var t=Object.entries(e),n=t.map((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return[window.matchMedia(n),function(e){return e.matches&&r()}]})),r=n.findIndex((function(e){return Object(o.a)(e,1)[0].matches}));return-1!==r&&t[r][1](),n.forEach((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return n.addEventListener("change",r)})),function(){return n.forEach((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return n.removeEventListener("change",r)}))}}),[e])},L=(n(53),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.useWrapper,r=void 0===n||n,a=t.wrapperClassName,c=void 0===a?"":a;return function(t){var n;return r?Object(b.jsx)("div",{className:"drifter-box-wrapper ".concat(c),children:Object(b.jsx)(e,Object(d.a)({},t))}):Object(b.jsx)(e,Object(d.a)(Object(d.a)({},t),{},{className:"drifter-box-wrapper ".concat(null!==(n=t.className)&&void 0!==n?n:"")}))}}),B=(n(54),function(e){var t=e.text,n=void 0===t?"":t;return Object(b.jsxs)("h1",{className:"drifter-heading",children:[n.charAt(0),"\xa0\xa0\xa0\xa0\xa0",n.substring(1)]})}),F=n(11),R=Object.create(null),P=function(e){return function(e,t){for(var n=[],r=0;r<e;r++){for(var a=r*(t*Math.random()),c=!0,i=2;i<=Math.sqrt(a);++i)if(a%i===0){c=!1;break}c&&n.push(a)}return n}(50*e,1e9*e)},D=function(e){return Object(F.a)(new Array(e).keys())},V=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==(t=n[0])&&void 0!==t?t:e}.bind(R,[]),W=n(27),q=n.n(W),z={rolandTr808:{C4:"TR-808Kick01.wav","C#4":"TR-808Snare01.wav",D4:"TR-808Clap01.wav","D#4":"TR-808Hat_C01.wav"}},H=function(e){var t=function(e){return Object.entries(z).find((function(t){var n=Object(o.a)(t,2),r=(n[0],n[1]);return Object.is(e,r)}))}(e);return t&&t[0]&&q()(t[0])},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=Object(r.useState)(!1),c=Object(o.a)(a,2),i=c[0],s=c[1],l=H(e),u=E("Sampler",e,Object(d.a)(Object(d.a)({},t),{},{baseUrl:"audio/drum-machines/".concat(l,"/"),onload:function(){s(!0),t.onload&&t.onload()}}));return[n?u.connect(n):u,i,n]},K=["C4","C#4","D4","D#4"],U=function(e){return function(e){return D(V(e).length).map((function(t){return e.map((function(e,n){return e[t]}))}))}(e).map((function(e){return e.map((function(e,t){return e&&K[t]})).filter(Boolean)}))},_=function(e){return[Math.floor(e/16)%4,Math.floor(e/4)%4,e%4].join(":")},G=function(e,t){U(t).map((function(t,n){return t.length&&e.triggerAttack(t,_(n))}))},Q=new WeakMap,X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e>=t.length-1},a=arguments.length>4?arguments[4]:void 0;Q.has(e)&&clearTimeout(Q.get(e));var c=60/n/4*1e3,i=U(t);"undefined"!==typeof a&&(i=i.slice(0,a));var o=0,s=function t(){if(r(o))Q.has(e)&&clearTimeout(Q.get(e));else{P(.2);var n=i[o%i.length];o+=1,e.triggerAttack(n,T.immediate()),Q.set(e,setTimeout(t,c))}};s()},Y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=J.apply(void 0,n),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){return s.unsync().sync()}),[s,e]),Object(r.useEffect)((function(){l&&G(s,e)}),[l,s,e]),[s,l]},Z=function(e,t,n,a){for(var c=arguments.length,i=new Array(c>4?c-4:0),s=4;s<c;s++)i[s-4]=arguments[s];var l=J.apply(void 0,i),u=Object(o.a)(l,2),d=u[0],f=u[1];return Object(r.useEffect)((function(){return d.unsync()}),[d,e]),Object(r.useEffect)((function(){f&&X(d,e,t,a,n)}),[f,d,e,t,a,n]),[d,f]},$=(n(55),function(e){var t,n,a=e.className,c=e.bpm,i=e.balance,s=e.isRunning,l=e.loopLengthInSixteenths,u=e.triggerMatrix,d=void 0===u?[]:u,f=e.fixedSamplerAnalyser,j=e.driftingSampler1Analyser,v=e.driftingSampler2Analyser,p=e.driftingSampler3Analyser,h=e.onTriggerMatrixChange,O=void 0===h?function(){}:h,g=Object(r.useCallback)((function(){return!s}),[s]),x=Y(d,z.rolandTr808,{},f),y=Object(o.a)(x,2),N=y[0],C=y[1],w=Z(d,c,l,g,z.rolandTr808,{},j),k=Object(o.a)(w,2),S=k[0],A=k[1],T=Z(d,c,l,g,z.rolandTr808,{},v),E=Object(o.a)(T,2),I=E[0],M=E[1],L=Z(d,c,l,g,z.rolandTr808,{},p),B=Object(o.a)(L,2),F=B[0],R=B[1],P=(t=-36,n=0,function(e){return(n-t)/100*e+t}),V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return D(t).map((function(t,r,a){var c=n/(a.length-1)*r;return n-Math.abs(c-e)}))}(i,4).map((function(e){return P(e)})),W=Object(o.a)(V,4),q=W[0],H=W[1],J=W[2],K=W[3];return Object(r.useEffect)((function(){C&&(N.volume.value=q)}),[q,N,C]),Object(r.useEffect)((function(){A&&(S.volume.value=H)}),[H,S,A]),Object(r.useEffect)((function(){M&&(I.volume.value=J)}),[J,I,M]),Object(r.useEffect)((function(){R&&(F.volume.value=K)}),[K,F,R]),Object(b.jsx)("div",{className:"drifter-sampler ".concat(s?"drifter-sampler-running":""," ").concat(a),style:{"--sampler-ticks":l},children:Object(b.jsxs)("div",{className:"drifter-sampler-timeline",children:[Object(b.jsx)("div",{className:"drifter-sampler-tape"}),Object(b.jsx)("div",{className:"drifter-sampler-channels",children:d.map((function(e,t){return Object(b.jsx)("div",{className:"drifter-sampler-channel",children:e.map((function(e,n){return Object(b.jsx)(m,{type:"checkbox",className:"drifter-sampler-tick",defaultChecked:e,onChange:function(e){var r,a,c,i,o=e.currentTarget.checked;O((r=d,a=t,c=n,i=+Boolean(o),r.map((function(e,t){return t===a?e.map((function(e,t){return t===c?i:e})):e}))))}},n)}))},t)}))})]})})}),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Object(r.useEffect)((function(){return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}))},te=(n(56),["type","isActive","className"]),ne={play:"play<br/>(space)",stop:"stop<br/>(space)",record:"record<br/>(shift+r)"},re=x((function(e){var t=e.type,n=e.isActive,r=e.className,a=Object(f.a)(e,te);return Object(b.jsx)("button",Object(d.a)(Object(d.a)({},a),{},{className:["drifter-transport-button",t?"drifter-transport-button-type-".concat(t):"",n?"drifter-transport-button-active":"",r].filter(Boolean).join(" "),"data-tip":ne[t]}))})),ae=(n(57),function(e){var t=e.bpm,n=e.loop,a=void 0===n||n,c=e.loopLengthInSixteenths,i=e.onPlay,s=void 0===i?function(){}:i,l=e.onStop,u=void 0===l?function(){}:l,d=e.onRecord,f=void 0===d?function(){}:d,j=Object(r.useState)(!1),m=Object(o.a)(j,2),v=m[0],p=m[1],h=Object(r.useState)(!1),O=Object(o.a)(h,2),g=O[0],x=O[1],y=Object(r.useCallback)((function(){return!v&&T.start().then((function(){return T.Transport.start()})).then((function(){return p(!0)})).then(s)}),[v,s]),N=Object(r.useCallback)((function(){return v&&T.loaded().then((function(){return T.Transport.stop()})).then((function(){p(!1),x(!1)})).then(u)}),[v,u]),C=Object(r.useCallback)((function(){x(!0),f()}),[f]),w=Object(r.useCallback)((function(){return v?N():y()}),[v,y,N]);return Object(r.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bpm,n=e.loop,r=e.loopLengthInSixteenths;T.Transport.loop=n,T.Transport.bpm.value=t,T.Transport.setLoopPoints(0,_(r))}({bpm:t,loop:a,loopLengthInSixteenths:c})}),[t,a,c]),ee(Object(r.useCallback)((function(e){return(t=[[32,function(){return w()}],[82,["shiftKey"],function(){y(),C()}]],function(e){var n=t.find((function(t){var n=Object(o.a)(t,2),r=n[0],a=n[1];return r===e.keyCode&&(!a||0===a.length||a.every((function(t){return e[t]})))}));n&&(e.preventDefault(),(0,n[n.length-1])())})(e);var t}),[y,C,w])),Object(b.jsxs)("div",{className:"drifter-transport",children:[Object(b.jsx)(re,{type:"play",onClick:y,isActive:v}),Object(b.jsx)(re,{type:"stop",onClick:N}),Object(b.jsx)(re,{type:"record",onClick:C,isActive:g})]})}),ce=n(28),ie=n.n(ce),oe=(n(58),["className","onChange","immediateOnChange"]),se=function(e){var t=e.className,n=e.onChange,r=void 0===n?function(){}:n,a=e.immediateOnChange,c=void 0===a?function(){}:a,i=Object(f.a)(e,oe),o=ie()(r,33);return Object(b.jsx)(m,Object(d.a)(Object(d.a)({},i),{},{type:"range",className:"drifter-range-input ".concat(t),onChange:function(e){var t=e.currentTarget.value;c(t),o(t)}}))},le=(n(59),function(e){var t=e.className,n=void 0===t?"":t,a=e.colors,c=void 0===a?{}:a,i=e.analyser,s=Object(r.useState)(!1),l=Object(o.a)(s,2),u=l[0],d=l[1],f=Object(r.useState)([]),j=Object(o.a)(f,2),m=j[0],v=j[1],p=c.active,h=void 0===p?"var(--accent-color-complement)":p,O=c.muted,g=void 0===O?"var(--accent-color)":O;return Object(r.useEffect)((function(){if(i&&"waveform"===i.type){window.requestAnimationFrame((function e(){v(Array.from(i.getValue())),window.requestAnimationFrame(e)}))}}),[i]),Object(r.useEffect)((function(){i&&(i.input.gain.value=u?0:1)}),[i,u]),Object(b.jsx)("div",{className:"drifter-analyser ".concat(n),onClick:function(){return d(!u)},children:m.map((function(e,t,n){return Object(b.jsx)("span",{style:{width:"".concat(100/n.length,"%"),height:"calc((var(--visualization-box-height) * .5) + ".concat(50*e,"%)"),borderStyle:"solid",borderWidth:".1rem 0 0",borderColor:u?g:h}},t)}))})}),ue=(n(60),L((function(e){var t=e.className,n=void 0===t?"":t,r=e.fixedSamplerAnalyser,a=e.driftingSampler1Analyser,c=e.driftingSampler2Analyser,i=e.driftingSampler3Analyser;return Object(b.jsxs)("div",{className:"drifter-analysers ".concat(n),children:[Object(b.jsx)(le,{colors:{active:"lightblue"},analyser:a}),Object(b.jsx)(le,{colors:{active:"lightgreen"},analyser:c}),Object(b.jsx)(le,{colors:{active:"fuchsia"},analyser:i}),Object(b.jsx)(le,{analyser:r})]})}),{useWrapper:!1})),de=(n(61),L($,{wrapperClassName:"drifter-main-view-panel"})),fe=function(e){var t=e.bpm,n=(e.resetInterval,Object(r.useState)(0)),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(!1),u=Object(o.a)(s,2),d=u[0],f=u[1],j=Object(r.useState)(20),m=Object(o.a)(j,2),v=m[0],p=m[1],h=l()("drifter-trigger-matrix",[[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]),O=Object(o.a)(h,2),g=O[0],x=O[1];M({"(max-width: 600px)":p.bind(null,4),"(min-width: 600px) and (max-width: 800px)":p.bind(null,8),"(min-width: 800px) and (max-width: 1200px)":p.bind(null,16),"(min-width: 1200px)":p.bind(null,32)});var y=I(),N=I(),C=I(),w=I();return Object(b.jsxs)("div",{className:"drifter-main-view",children:[Object(b.jsx)(B,{text:"drifter"}),Object(b.jsx)(ae,{className:"drifter-main-view-panel-center",bpm:t,loopLengthInSixteenths:v,onPlay:function(){return f(!0)},onStop:function(){return f(!1)}}),Object(b.jsx)(de,{bpm:t,balance:c,isRunning:d,triggerMatrix:g,loopLengthInSixteenths:v,fixedSamplerAnalyser:y,driftingSampler1Analyser:N,driftingSampler2Analyser:C,driftingSampler3Analyser:w,onTriggerMatrixChange:function(e){x(e)}}),Object(b.jsx)(se,{className:"drifter-main-view-panel-center","data-tip":"set the balance between the fixed sampler's signal and the drifting samplers' signal",defaultValue:c,onChange:function(e){return i(e)}}),Object(b.jsx)(ue,{className:"drifter-main-view-panel-end",fixedSamplerAnalyser:y,driftingSampler1Analyser:N,driftingSampler2Analyser:C,driftingSampler3Analyser:w})]})},be=n(0),je=n(1),me=n(2),ve=n(3),pe=(n(62),function(e){Object(me.a)(n,e);var t=Object(ve.a)(n);function n(e){var r;return Object(be.a)(this,n),(r=t.call(this,e)).state={hasError:!1,errorMessage:null,errorStackTrace:null},r}return Object(je.a)(n,[{key:"render",value:function(){return this.state.hasError?this.renderErrorView():this.props.children}},{key:"renderErrorView",value:function(){var e;return Object(b.jsxs)("div",{className:"drifter-app-error-view",children:[Object(b.jsx)(B,{text:null!==(e=this.props.message)&&void 0!==e?e:"error"}),Object(b.jsxs)("div",{className:"drifter-app-error-view-details-box",children:[Object(b.jsx)("label",{children:"message"}),Object(b.jsx)("pre",{className:"drifter-app-error-view-pre",children:this.state.errorMessage}),Object(b.jsxs)("details",{className:"drifter-app-error-view-details",open:!0,children:[Object(b.jsx)("summary",{children:"stack trace"}),Object(b.jsx)("pre",{className:"drifter-app-error-view-pre drifter-app-error-view-stacktrace",children:this.state.errorStackTrace})]})]})]})}}]),n}(a.a.Component));pe.getDerivedStateFromError=function(e){return{hasError:!0,errorMessage:e.message,errorStackTrace:e.stack}};var he=pe,Oe=(n(63),n(64),function(){var e=l()("drifter-setting-bpm",99),t=Object(o.a)(e,2),n=t[0],r=t[1],a=l()("drifter-setting-reset-interval-beats",{value:4,unit:"bars"}),c=Object(o.a)(a,2),i=c[0],s=c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{className:"drifter-react-tooltip",effect:"solid",delayShow:500,delayHide:250,textColor:"var(--background-color)",backgroundColor:"var(--accent-color-complement)",multiline:!0}),Object(b.jsx)(he,{children:Object(b.jsx)(p,{main:fe,mainProps:{bpm:n,resetInterval:i},sideBar:S,sideBarProps:{bpm:n,setBpm:r,resetInterval:i,setResetInterval:s}})})]})}),ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Oe,{})}),document.getElementById("root")),ge()}},[[65,1,2]]]);
//# sourceMappingURL=main.bd085373.chunk.js.map