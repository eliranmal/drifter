(this.webpackJsonpdrifter=this.webpackJsonpdrifter||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){var r=n(23),a=Object(r.a)(e,{bpm:99,isLoopOn:!0,isPlaying:!1,isRecording:!1,loopLengthInSixteenths:20},["isLoopOn","isPlaying","isRecording","loopLengthInSixteenths"]);t.a=a}).call(this,n(30)(e))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"j",(function(){return v})),n.d(t,"i",(function(){return p})),n.d(t,"c",(function(){return h}));var r=n(9),a=n(11),c=Object.create(null),i=function(e){return function(e,t){for(var n=[],r=0;r<e;r++){for(var a=r*(t*Math.random()),c=!0,i=2;i<=Math.sqrt(a);++i)if(a%i===0){c=!1;break}c&&n.push(a)}return n}(50*e,1e9*e)},o=function(e){return Object(a.a)(new Array(e).keys())},s=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==(t=n[0])&&void 0!==t?t:e}.bind(c,[]),u=function(e){return o(s(e).length).map((function(t){return e.map((function(e,n){return e[t]}))}))},l=function(e,t,n,r){return e.map((function(e,a){return a===t?e.map((function(e,t){return t===n?r:e})):e}))},d=function(e,t){return function(n){return(t-e)/100*n+e}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return o(t).map((function(t,r,a){var c=n/(a.length-1)*r;return n-Math.abs(c-e)}))},b=function(e){return e?function(t,n){return e.includes(t)?void 0:n}:void 0},j=JSON.stringify,v=function(e){if(e){var t;try{t=JSON.parse(e)}catch(n){}return t}},m=/[^/\\]*(?=[.][a-zA-Z]+$)/,p=function(e){var t=m.exec(e.id);if(t&&t.length)return t[0]},h=function(e,t){var n;return null!==(n=Object.entries(t).find((function(t){var n=Object(r.a)(t,2),a=(n[0],n[1]);return Object.is(e,a)})))&&void 0!==n?n:[]}},function(e,t,n){"use strict";(function(e){var r=n(23),a=n(16),c=Object(r.a)(e,{balance:0,triggerMatrix:[[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],resetInterval:{value:4,unit:"bars"},get resetIntervalValue(){return this.resetInterval.value},set resetIntervalValue(e){this.resetInterval.value=e},get resetIntervalUnit(){return this.resetInterval.unit},set resetIntervalUnit(e){this.resetInterval.unit=e},updateTriggerMatrixValue:function(e,t,n){this.triggerMatrix=Object(a.e)(this.triggerMatrix,e,t,n)}});t.a=c}).call(this,n(30)(e))},,,,,,function(e,t,n){"use strict";var r=n(13),a=n(16);t.a=function(e,t,n){var c="drifter-".concat(Object(a.i)(e)),i=function(e,t){return Object(r.g)(Object.assign(e,null!==t&&void 0!==t?t:{}))}(t,function(e){return Object(a.j)(localStorage.getItem(e))}(c));return Object(r.c)((function(e){return function(e,t,n){return localStorage.setItem(e,Object(a.d)(t,n))}(c,Object(r.i)(i),Object(a.b)(n))})),i}},,,,,,,,function(e,t,n){"use strict";(function(e){var r=n(23),a=Object(r.a)(e,{isMenuOpen:!1});t.a=a}).call(this,n(30)(e))},,,,,,,,,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),c=n(26),i=n.n(c),o=(n(40),n(32)),s=n(6),u=n(13),l=n(19),d=n(31),f=n(14),b=(n(43),n(8)),j=["type","className"],v=function(e){var t=e.type,n=void 0===t?"text":t,r=e.className,a=Object(f.a)(e,j);return Object(b.jsx)("input",Object(s.a)(Object(s.a)({},a),{},{type:n,className:"drifter-input ".concat(null!==r&&void 0!==r?r:"")}))},m=(n(45),["className","onChange"]),p=function(e){var t=e.className,n=void 0===t?"":t,r=e.onChange,a=void 0===r?function(){}:r,c=Object(f.a)(e,m);return Object(b.jsx)(v,Object(s.a)(Object(s.a)({},c),{},{type:"checkbox",className:"drifter-checkbox ".concat(n),onChange:function(e){var t=e.currentTarget.checked;return a(Boolean(t))}}))},h=(n(46),function(e){return e?"".concat(e.charAt(0)).concat(String.fromCharCode("0000a0").repeat(5)).concat(e.substring(1)):""}),O=Object(l.a)((function(e){var t=e.children,n=e.main,r=e.sideBar,a=void 0===r?function(){return null}:r,c=e.mainProps,i=void 0===c?{}:c,o=e.sideBarProps,l=void 0===o?{}:o;return Object(b.jsxs)("div",{className:"drifter-layout",children:[Object(b.jsx)("main",{className:"drifter-layout-main",children:n?Object(b.jsx)(n,Object(s.a)({},i)):t}),Object(b.jsx)(p,{className:"drifter-layout-sidebar-pin",value:d.a.isMenuOpen,onChange:Object(u.b)((function(e){return d.a.isMenuOpen=!0}))}),Object(b.jsx)("aside",{className:"drifter-layout-sidebar","data-heading":h(a.displayName),children:Object(b.jsx)(a,Object(s.a)({},l))})]})})),g=n(17),x=n(15),y=(n(47),["children","className"]),N=function(e){var t=e.children,n=e.className,r=Object(f.a)(e,y);return Object(b.jsx)("label",Object(s.a)(Object(s.a)({},r),{},{className:"drifter-label ".concat(null!==n&&void 0!==n?n:""),children:t&&t.length?t:null}))},C=(n(48),["className"]),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tintColor,r=t.shadeColor,a=t.backgroundColor;return function(t){var c=t.className,i=Object(f.a)(t,C);return Object(b.jsx)(e,Object(s.a)(Object(s.a)({},i),{},{className:"drifter-has-neumorphism ".concat(c),style:{"--neumorphism-bg-color":a,"--neumorphism-shadow-color-tint":n,"--neumorphism-shadow-color-shade":r}}))}},k=(n(49),["options","className","onChange"]),S=w((function(e){var t=e.options,n=void 0===t?[]:t,r=e.className,a=void 0===r?"":r,c=e.onChange,i=void 0===c?function(){}:c,o=Object(f.a)(e,k);return Object(b.jsx)("select",Object(s.a)(Object(s.a)({},o),{},{className:"drifter-select ".concat(a),onChange:function(e){var t=e.currentTarget.value;return i(t)},children:n.map((function(e,t){var n=e.value,r=e.label,a=e.className;return Object(b.jsx)("option",{className:"drifter-select-option ".concat(null!==a&&void 0!==a?a:""),value:n,children:null!==r&&void 0!==r?r:n},t)}))}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),A=(n(50),["className","onChange"]),I=w((function(e){var t=e.className,n=e.onChange,r=Object(f.a)(e,A);return Object(b.jsx)(v,Object(s.a)(Object(s.a)({},r),{},{className:"drifter-number-input ".concat(null!==t&&void 0!==t?t:""),type:"number",onChange:function(e){var t=e.currentTarget.value;return n(+t)}}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),T=(n(51),function(){return Object(b.jsxs)("div",{className:"drifter-settings",children:[Object(b.jsxs)("div",{className:"drifter-setting-bpm","data-tip":"set the speed in beats per minutes","data-place":"left",children:[Object(b.jsx)(N,{htmlFor:"drifter-setting-input-bpm",children:"bpm:"}),Object(b.jsx)(I,{id:"drifter-setting-input-bpm",min:1,max:1e3,value:x.a.bpm,onChange:Object(u.b)((function(e){return x.a.bpm=e}))})]}),Object(b.jsxs)("div",{className:"drifter-setting-reset-interval","data-tip":"synchronize the original source and the drifting source using this interval (0 means never)","data-place":"left",children:[Object(b.jsx)(N,{htmlFor:"drifter-setting-input-reset-interval",children:"reset every:"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(I,{id:"drifter-setting-input-reset-interval",min:0,max:64,value:g.a.resetIntervalValue,onChange:Object(u.b)((function(e){return g.a.resetIntervalValue=e}))}),Object(b.jsx)(S,{options:[{value:"bars"},{value:"beats"}],defaultValue:g.a.resetIntervalUnit,onChange:Object(u.b)((function(e){return g.a.resetIntervalUnit=e}))})]})]})]})});T.displayName="settings";var E=Object(l.a)(T),L=n(33),M=n(18),P=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return Object(r.useRef)(Object(L.a)(M[e],n).toDestination()).current},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"waveform",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:64;return P("Analyser",e,t)},V=n(9),F=function(e){Object(r.useEffect)((function(){var t=Object.entries(e),n=t.map((function(e){var t=Object(V.a)(e,2),n=t[0],r=t[1];return[window.matchMedia(n),function(e){return e.matches&&r()}]})),r=n.findIndex((function(e){return Object(V.a)(e,1)[0].matches}));return-1!==r&&t[r][1](),n.forEach((function(e){var t=Object(V.a)(e,2),n=t[0],r=t[1];return n.addEventListener("change",r)})),function(){return n.forEach((function(e){var t=Object(V.a)(e,2),n=t[0],r=t[1];return n.removeEventListener("change",r)}))}}),[e])},B=(n(61),function(e){var t=e.text,n=void 0===t?"":t;return Object(b.jsxs)("h1",{className:"drifter-heading",children:[n.charAt(0),"\xa0\xa0\xa0\xa0\xa0",n.substring(1)]})}),D=n(16),U=n(34),W=n.n(U),J={rolandTr808:{C4:"TR-808Kick01.wav","C#4":"TR-808Snare01.wav",D4:"TR-808Clap01.wav","D#4":"TR-808Hat_C01.wav"}},q=function(e){var t=Object(D.c)(e,J),n=Object(V.a)(t,1)[0];return W()(n)},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=Object(r.useState)(!1),c=Object(V.a)(a,2),i=c[0],o=c[1],u=q(e),l=P("Sampler",e,Object(s.a)(Object(s.a)({},t),{},{baseUrl:"audio/drum-machines/".concat(u,"/"),onload:function(){o(!0),t.onload&&t.onload()}})),d=t.volume,f=void 0===d?0:d;return Object(r.useEffect)((function(){i&&(l.volume.value=f)}),[f,l,i]),[n?l.connect(n):l,i,n]},H=["C4","C#4","D4","D#4"],K=function(e){return Object(D.f)(e).map((function(e){return e.map((function(e,t){return e&&H[t]})).filter(Boolean)}))},Z=function(e){return[Math.floor(e/16)%4,Math.floor(e/4)%4,e%4].join(":")},$=function(e,t){K(t).map((function(t,n){return t.length&&e.triggerAttack(t,Z(n))}))},_=new WeakMap,G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e>=t.length-1},a=arguments.length>4?arguments[4]:void 0;_.has(e)&&clearTimeout(_.get(e));var c=60/n/4*1e3,i=K(t);"undefined"!==typeof a&&(i=i.slice(0,a));var o=0,s=function t(){if(r(o))_.has(e)&&clearTimeout(_.get(e));else{Object(D.a)(.2);var n=i[o%i.length];o+=1,e.triggerAttack(n,M.immediate()),_.set(e,setTimeout(t,c))}};s()},Q=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=z.apply(void 0,n),i=Object(V.a)(c,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){return o.unsync().sync()}),[o,e]),Object(r.useEffect)((function(){s&&$(o,e)}),[s,o,e]),[o,s]},X=function(e,t,n,a){for(var c=arguments.length,i=new Array(c>4?c-4:0),o=4;o<c;o++)i[o-4]=arguments[o];var s=z.apply(void 0,i),u=Object(V.a)(s,2),l=u[0],d=u[1];return Object(r.useEffect)((function(){return l.unsync()}),[l,e]),Object(r.useEffect)((function(){d&&G(l,e,t,a,n)}),[d,l,e,t,a,n]),[l,d]},Y=(n(62),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.useWrapper,r=void 0===n||n,a=t.wrapperClassName,c=void 0===a?"":a;return function(t){var n;return r?Object(b.jsx)("div",{className:"drifter-box-wrapper ".concat(c),children:Object(b.jsx)(e,Object(s.a)({},t))}):Object(b.jsx)(e,Object(s.a)(Object(s.a)({},t),{},{className:"drifter-box-wrapper ".concat(null!==(n=t.className)&&void 0!==n?n:"")}))}}),ee=(n(63),Y(Object(l.a)((function(e){var t=e.className,n=e.fixedSamplerAnalyser,a=e.driftingSampler1Analyser,c=e.driftingSampler2Analyser,i=e.driftingSampler3Analyser,o=g.a.balance,s=g.a.triggerMatrix,u=x.a.bpm,l=x.a.isPlaying,d=x.a.loopLengthInSixteenths,f=Object(D.g)(-36,0),j=Object(D.h)(o,4).map((function(e){return f(e)})),v=Object(V.a)(j,4),m=v[0],h=v[1],O=v[2],y=v[3],N=Object(r.useCallback)((function(){return!l}),[l]);return Q(s,J.rolandTr808,{volume:m},n),X(s,u,d,N,J.rolandTr808,{volume:h},a),X(s,u,d,N,J.rolandTr808,{volume:O},c),X(s,u,d,N,J.rolandTr808,{volume:y},i),Object(b.jsx)("div",{className:"drifter-sampler ".concat(l?"drifter-sampler-running":""," ").concat(t),style:{"--sampler-ticks":d},children:Object(b.jsxs)("div",{className:"drifter-sampler-timeline",children:[Object(b.jsx)("div",{className:"drifter-sampler-tape"}),Object(b.jsx)("div",{className:"drifter-sampler-channels",children:s.map((function(e,t){return Object(b.jsx)("div",{className:"drifter-sampler-channel",children:e.map((function(e,n){return Object(b.jsx)(p,{className:"drifter-sampler-tick",defaultChecked:e,onChange:function(e){return g.a.updateTriggerMatrixValue(t,n,+e)}},n)}))},t)}))})]})})})),{useWrapper:!1})),te=(n(64),function(e){var t=e.className,n=void 0===t?"":t,a=e.colors,c=void 0===a?{}:a,i=e.analyser,o=Object(r.useState)(!1),s=Object(V.a)(o,2),u=s[0],l=s[1],d=Object(r.useState)([]),f=Object(V.a)(d,2),j=f[0],v=f[1],m=c.active,p=void 0===m?"var(--accent-color-complement)":m,h=c.muted,O=void 0===h?"var(--accent-color)":h;return Object(r.useEffect)((function(){if(i&&"waveform"===i.type){window.requestAnimationFrame((function e(){v(Array.from(i.getValue())),window.requestAnimationFrame(e)}))}}),[i]),Object(r.useEffect)((function(){i&&(i.input.gain.value=u?0:1)}),[i,u]),Object(b.jsx)("div",{className:"drifter-analyser ".concat(n),onClick:function(){return l(!u)},children:j.map((function(e,t,n){return Object(b.jsx)("span",{style:{width:"".concat(100/n.length,"%"),height:"calc((var(--visualization-box-height) * .5) + ".concat(50*e,"%)"),borderStyle:"solid",borderWidth:".1rem 0 0",borderColor:u?O:p}},t)}))})}),ne=(n(65),Y((function(e){var t=e.className,n=void 0===t?"":t,r=e.fixedSamplerAnalyser,a=e.driftingSampler1Analyser,c=e.driftingSampler2Analyser,i=e.driftingSampler3Analyser;return Object(b.jsxs)("div",{className:"drifter-analysers ".concat(n),children:[Object(b.jsx)(te,{colors:{active:"lightblue"},analyser:a}),Object(b.jsx)(te,{colors:{active:"lightgreen"},analyser:c}),Object(b.jsx)(te,{colors:{active:"fuchsia"},analyser:i}),Object(b.jsx)(te,{analyser:r})]})}),{useWrapper:!1})),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Object(r.useEffect)((function(){return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}))},ae=(n(66),["type","isActive","className"]),ce={play:"play<br/>(space)",stop:"stop<br/>(space)",record:"record<br/>(shift+r)"},ie=w((function(e){var t=e.type,n=e.isActive,r=e.className,a=Object(f.a)(e,ae);return Object(b.jsx)("button",Object(s.a)(Object(s.a)({},a),{},{className:["drifter-transport-button",t?"drifter-transport-button-type-".concat(t):"",n?"drifter-transport-button-active":"",r].filter(Boolean).join(" "),"data-tip":ce[t]}))})),oe=(n(67),Object(l.a)((function(e){var t=e.onPlay,n=void 0===t?function(){}:t,a=e.onStop,c=void 0===a?function(){}:a,i=e.onRecord,o=void 0===i?function(){}:i,s=x.a.bpm,l=x.a.isLoopOn,d=x.a.isPlaying,f=x.a.isRecording,j=x.a.loopLengthInSixteenths,v=Object(r.useCallback)((function(){return!d&&M.start().then((function(){return M.Transport.start()})).then(Object(u.b)((function(){return x.a.isPlaying=!0}))).then(n)}),[d,n]),m=Object(r.useCallback)((function(){return d&&M.loaded().then((function(){return M.Transport.stop()})).then(Object(u.b)((function(){x.a.isPlaying=!1,x.a.isRecording=!1}))).then(c)}),[d,c]),p=Object(u.b)(Object(r.useCallback)((function(){x.a.isRecording=!0,o()}),[o])),h=Object(r.useCallback)((function(){return d?m():v()}),[d,v,m]);return Object(r.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bpm,n=e.isLoopOn,r=e.loopLengthInSixteenths;M.Transport.loop=!!n,t&&(M.Transport.bpm.value=t),r&&M.Transport.setLoopPoints(0,Z(r))}({bpm:s,isLoopOn:l,loopLengthInSixteenths:j})}),[s,l,j]),re(Object(r.useCallback)((function(e){return(t=[[32,function(){return h()}],[82,["shiftKey"],function(){v(),p()}]],function(e){var n=t.find((function(t){var n=Object(V.a)(t,2),r=n[0],a=n[1];return r===e.keyCode&&(!a||0===a.length||a.every((function(t){return e[t]})))}));n&&(e.preventDefault(),(0,n[n.length-1])())})(e);var t}),[v,p,h])),Object(b.jsxs)("div",{className:"drifter-transport",children:[Object(b.jsx)(ie,{type:"play",onClick:v,isActive:d}),Object(b.jsx)(ie,{type:"stop",onClick:m}),Object(b.jsx)(ie,{type:"record",onClick:p,isActive:f})]})}))),se=n(35),ue=n.n(se),le=(n(68),["className","onChange","immediateOnChange"]),de=function(e){var t=e.className,n=e.onChange,r=void 0===n?function(){}:n,a=e.immediateOnChange,c=void 0===a?function(){}:a,i=Object(f.a)(e,le),o=ue()(r,33);return Object(b.jsx)(v,Object(s.a)(Object(s.a)({},i),{},{type:"range",className:"drifter-range-input ".concat(t),onChange:function(e){var t=e.currentTarget.value;c(+t),o(+t)}}))},fe=(n(69),Object(l.a)((function(){var e=g.a.balance;F({"(max-width: 600px)":Object(u.b)((function(){return x.a.loopLengthInSixteenths=4})),"(min-width: 600px) and (max-width: 800px)":Object(u.b)((function(){return x.a.loopLengthInSixteenths=8})),"(min-width: 800px) and (max-width: 1200px)":Object(u.b)((function(){return x.a.loopLengthInSixteenths=16})),"(min-width: 1200px)":Object(u.b)((function(){return x.a.loopLengthInSixteenths=32}))});var t=R(),n=R(),r=R(),a=R();return Object(b.jsxs)("div",{className:"drifter-main-view",children:[Object(b.jsx)(B,{text:"drifter"}),Object(b.jsx)(oe,{className:"drifter-main-view-panel-center"}),Object(b.jsx)(ee,{className:"drifter-main-view-panel",fixedSamplerAnalyser:t,driftingSampler1Analyser:n,driftingSampler2Analyser:r,driftingSampler3Analyser:a}),Object(b.jsx)(de,{className:"drifter-main-view-panel-center","data-tip":"set the balance between the fixed sampler's signal and the drifting samplers' signal",defaultValue:e,onChange:Object(u.b)((function(e){return g.a.balance=e}))}),Object(b.jsx)(ne,{className:"drifter-main-view-panel-end",fixedSamplerAnalyser:t,driftingSampler1Analyser:n,driftingSampler2Analyser:r,driftingSampler3Analyser:a})]})}))),be=n(0),je=n(1),ve=n(2),me=n(3),pe=(n(70),function(e){Object(ve.a)(n,e);var t=Object(me.a)(n);function n(e){var r;return Object(be.a)(this,n),(r=t.call(this,e)).state={hasError:!1,errorMessage:null,errorStackTrace:null},r}return Object(je.a)(n,[{key:"render",value:function(){return this.state.hasError?this.renderErrorView():this.props.children}},{key:"renderErrorView",value:function(){var e;return Object(b.jsxs)("div",{className:"drifter-app-error-view",children:[Object(b.jsx)(B,{text:null!==(e=this.props.message)&&void 0!==e?e:"error"}),Object(b.jsxs)("div",{className:"drifter-app-error-view-details-box",children:[Object(b.jsx)("label",{children:"message"}),Object(b.jsx)("pre",{className:"drifter-app-error-view-pre",children:this.state.errorMessage}),Object(b.jsxs)("details",{className:"drifter-app-error-view-details",open:!0,children:[Object(b.jsx)("summary",{children:"stack trace"}),Object(b.jsx)("pre",{className:"drifter-app-error-view-pre drifter-app-error-view-stacktrace",children:this.state.errorStackTrace})]})]})]})}}]),n}(a.a.Component));pe.getDerivedStateFromError=function(e){return{hasError:!0,errorMessage:e.message,errorStackTrace:e.stack}};var he=pe,Oe=(n(71),n(72),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{className:"drifter-react-tooltip",effect:"solid",delayShow:500,delayHide:250,textColor:"var(--background-color)",backgroundColor:"var(--accent-color-complement)",multiline:!0}),Object(b.jsx)(he,{children:Object(b.jsx)(O,{main:fe,sideBar:E})})]})}),ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Oe,{})}),document.getElementById("root")),ge()}],[[73,1,2]]]);
//# sourceMappingURL=main.276b6ba6.chunk.js.map