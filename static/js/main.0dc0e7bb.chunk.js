(this.webpackJsonpdrifter=this.webpackJsonpdrifter||[]).push([[0],Array(35).concat([function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),c=n(23),i=n.n(c),o=(n(35),n(27)),s=n(5),l=n(11),u=n(15),d=n(9),b=n(12),f=Object.create(null),j=function(e){return function(e,t){for(var n=[],r=0;r<e;r++){for(var a=r*(t*Math.random()),c=!0,i=2;i<=Math.sqrt(a);++i)if(a%i===0){c=!1;break}c&&n.push(a)}return n}(50*e,1e9*e)},v=function(e){return Object(b.a)(new Array(e).keys())},m=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null!==(t=n[0])&&void 0!==t?t:e}.bind(f,[]),h=JSON.stringify,p=function(e){return function(e){if(e){var t;try{t=JSON.parse(e)}catch(n){}return t}}(localStorage.getItem(e))},O=function(e,t,n){var r="drifter-".concat(e),a=function(e,t){return Object(l.g)(Object.assign(e,null!==t&&void 0!==t?t:{}))}(t,p(r));return Object(l.c)((function(e){return function(e,t,n){return localStorage.setItem(e,h(t,n))}(r,Object(l.i)(a),(t=n)?function(e,n){return t.includes(e)?void 0:n}:void 0);var t})),a},g=n(14),x=Object(l.g)({f:[],d1:[],d2:[],d3:[]}),y=(n(38),n(8)),N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.useWrapper,r=void 0===n||n,a=t.wrapperClassName,c=void 0===a?"":a;return function(t){var n;return r?Object(y.jsx)("div",{className:"drifter-box-wrapper ".concat(c),children:Object(y.jsx)(e,Object(s.a)({},t))}):Object(y.jsx)(e,Object(s.a)(Object(s.a)({},t),{},{className:"drifter-box-wrapper ".concat(null!==(n=t.className)&&void 0!==n?n:"")}))}},C=(n(40),function(e){var t=e.className,n=void 0===t?"":t,r=e.color,a=void 0===r?"var(--accent-color-complement)":r,c=e.values,i=void 0===c?[]:c;return Object(y.jsx)("div",{className:"drifter-analyser ".concat(n),style:{"--analyser-color":a},children:i.map((function(e,t,n){return Object(y.jsx)("span",{className:"drifter-analyser-bar",style:{"--analyser-bar-amplitude":e}},t)}))})}),k=(n(41),["className","layout"]),w=["var(--light-yellow)","var(--green)","var(--blue)","var(--purple)","var(--pink)"],I="flow",T="stack",S=N(Object(u.a)((function(e){var t=e.className,n=void 0===t?"":t,r=e.layout,a=void 0===r?I:r,c=Object(g.a)(e,k);return Object(y.jsx)("div",Object(s.a)(Object(s.a)({},c),{},{className:"drifter-analysers drifter-analysers-".concat(a," ").concat(n),children:Object(l.j)(x).map((function(e,t,n){return Object(y.jsx)(C,{values:e,color:w[t%n.length]},t)}))}))})),{useWrapper:!1}),L=O("layout",{isMenuOpen:!1,analysersLayout:I}),M=(n(42),["tag","className"]),E=function(e){var t,n,r=e.tag,a=e.className,c=void 0===a?"":a,i=Object(g.a)(e,M),o="form-control ".concat(c),l=(t="data-",n=i,Object.entries(n).filter((function(e){var n=Object(d.a)(e,2),r=n[0];return n[1],r.startsWith(t)})).reduce((function(e,t){var n=Object(d.a)(t,2),r=n[0],a=n[1];return e[r]=a,e}),{}));return i.disabled&&l["data-tip"]?Object(y.jsx)("span",Object(s.a)(Object(s.a)({},l),{},{children:Object(y.jsx)(r,Object(s.a)(Object(s.a)({},i),{},{className:o}))})):Object(y.jsx)(r,Object(s.a)(Object(s.a)(Object(s.a)({},i),l),{},{className:o}))},A=(n(43),["type","className"]),V=function(e){var t=e.type,n=void 0===t?"text":t,r=e.className,a=Object(g.a)(e,A);return Object(y.jsx)(E,Object(s.a)(Object(s.a)({},a),{},{tag:"input",type:n,className:"drifter-input ".concat(null!==r&&void 0!==r?r:"")}))},P=(n(44),["className","onChange"]),R=function(e){var t=e.className,n=void 0===t?"":t,r=e.onChange,a=void 0===r?function(){}:r,c=Object(g.a)(e,P);return Object(y.jsx)(V,Object(s.a)(Object(s.a)({},c),{},{type:"checkbox",className:"drifter-checkbox ".concat(n),onChange:function(e){var t=e.currentTarget.checked;return a(Boolean(t))}}))},B=(n(45),function(e){return e?"".concat(e.charAt(0)).concat(String.fromCharCode("0000a0").repeat(5)).concat(e.substring(1)):""}),D=Object(u.a)((function(e){var t=e.children,n=e.main,r=e.sideBar,a=void 0===r?function(){return null}:r,c=e.mainProps,i=void 0===c?{}:c,o=e.sideBarProps,u=void 0===o?{}:o;return Object(y.jsxs)("div",{className:"drifter-layout",children:[Object(y.jsx)("main",{className:"drifter-layout-main",children:n?Object(y.jsx)(n,Object(s.a)({},i)):t}),Object(y.jsx)(R,{className:"drifter-layout-sidebar-pin",checked:L.isMenuOpen,onChange:Object(l.b)((function(e){return L.isMenuOpen=e}))}),Object(y.jsx)("aside",{className:"drifter-layout-sidebar","data-heading":B(a.displayName),children:Object(y.jsx)(a,Object(s.a)({},u))})]})})),F=O("sampler",{balance:0,triggerMatrix:[[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],resetInterval:{value:4,unit:"bars"},chaos:0,get resetIntervalValue(){return this.resetInterval.value},set resetIntervalValue(e){this.resetInterval.value=e},get resetIntervalUnit(){return this.resetInterval.unit},set resetIntervalUnit(e){this.resetInterval.unit=e},updateTriggerMatrixValue:function(e,t,n){this.triggerMatrix=function(e,t,n,r){return e.map((function(e,a){return a===t?e.map((function(e,t){return t===n?r:e})):e}))}(this.triggerMatrix,e,t,n)}}),U=O("transport",{bpm:99,isLoopOn:!0,isPlaying:!1,isRecording:!1,loopLengthInSixteenths:20},["isLoopOn","isPlaying","isRecording","loopLengthInSixteenths"]),W=(n(46),["children","className"]),J=function(e){var t=e.children,n=e.className,r=Object(g.a)(e,W);return Object(y.jsx)("label",Object(s.a)(Object(s.a)({},r),{},{className:"drifter-label ".concat(null!==n&&void 0!==n?n:""),children:t&&t.length?t:null}))},K=(n(47),"flex-start"),q="center",H=function(e){var t=e.tooltip,n=e.label,r=void 0===n?"":n,a=e.pad,c=void 0===a?0:a,i=e.align,o=void 0===i?q:i,s=e.className,l=void 0===s?"":s,u=e.children;return Object(y.jsx)("div",{className:"drifter-setting ".concat(l),"data-tip":t,"data-place":"left",children:Object(y.jsxs)(J,{className:"drifter-setting-wrap",style:{alignItems:o,padding:"".concat(c," 0")},children:[Object(y.jsx)("span",{className:"drifter-setting-label",children:"".concat(r,":")}),u]})})},z=n(28),G=n.n(z),Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=G()(e,t),a=Object(r.useCallback)((function(e){return n(e)}),[]);return Object(r.useEffect)((function(){return function(){return n.cancel()}}),[n]),[a,n]},_=(n(48),["className","onChange","onChangeImmediate"]),X=function(e){var t=e.className,n=void 0===t?"":t,r=e.onChange,a=void 0===r?function(){}:r,c=e.onChangeImmediate,i=void 0===c?function(){}:c,o=Object(g.a)(e,_),l=Q(a),u=Object(d.a)(l,1)[0];return Object(y.jsx)(V,Object(s.a)(Object(s.a)({},o),{},{type:"range",className:"drifter-range-input ".concat(n),onChange:function(e){var t=e.currentTarget.value;i(+t),u(+t)}}))},Y=(n(49),["min","max","className","style"]),Z=Object(l.g)({value:0}),$=Object(u.a)((function(e){var t=e.min,n=void 0===t?0:t,a=e.max,c=void 0===a?127:a,i=e.className,o=void 0===i?"":i,u=e.style,d=void 0===u?{}:u,b=Object(g.a)(e,Y);Object(r.useEffect)((function(){Object(l.b)((function(){var e;return Z.value=null!==(e=b.defaultValue)&&void 0!==e?e:b.value}))()}),[]);var f=Object(l.b)(Object(r.useCallback)((function(e){Z.value=e}),[]));return Object(y.jsx)(X,Object(s.a)(Object(s.a)({},b),{},{className:"drifter-knob ".concat(o),style:Object(s.a)(Object(s.a)({},d),{},{"--knob-value":Z.value,"--knob-min":n,"--knob-max":c}),min:n,max:c,onChangeImmediate:f}))})),ee=(n(50),["className"]),te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tintColor,r=t.shadeColor,a=t.backgroundColor;return function(t){var c=t.className,i=void 0===c?"":c,o=Object(g.a)(t,ee);return Object(y.jsx)(e,Object(s.a)(Object(s.a)({},o),{},{className:"drifter-has-neumorphism ".concat(i),style:{"--neumorphism-bg-color":a,"--neumorphism-shadow-color-tint":n,"--neumorphism-shadow-color-shade":r}}))}},ne=(n(51),["options","className","onChange"]),re=te((function(e){var t=e.options,n=void 0===t?[]:t,r=e.className,a=void 0===r?"":r,c=e.onChange,i=void 0===c?function(){}:c,o=Object(g.a)(e,ne);return Object(y.jsx)(E,Object(s.a)(Object(s.a)({},o),{},{tag:"select",className:"drifter-select ".concat(a),onChange:function(e){var t=e.currentTarget.value;return i(t)},children:n.map((function(e,t){var n=e.value,r=e.label,a=e.className;return Object(y.jsx)("option",{className:"drifter-select-option ".concat(null!==a&&void 0!==a?a:""),value:n,children:null!==r&&void 0!==r?r:n},t)}))}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),ae=(n(52),["className","onChange"]),ce=te((function(e){var t=e.className,n=e.onChange,r=Object(g.a)(e,ae);return Object(y.jsx)(V,Object(s.a)(Object(s.a)({},r),{},{className:"drifter-number-input ".concat(null!==t&&void 0!==t?t:""),type:"number",onChange:function(e){var t=e.currentTarget.value;return n(+t)}}))}),{backgroundColor:"var(--background-color-complement)",tintColor:"var(--background-color-complement-tint)",shadeColor:"var(--background-color-complement-shade)"}),ie=(n(53),["className","children"]),oe=function(e){var t=e.className,n=void 0===t?"":t,r=e.children;Object(g.a)(e,ie);return Object(y.jsx)("div",{className:"drifter-form-control-group ".concat(n),children:r})},se=(n(54),function(){return Object(y.jsxs)("div",{className:"drifter-settings",children:[Object(y.jsx)(H,{label:"bpm",tooltip:"set the speed in beats per minutes",children:Object(y.jsx)(ce,{min:1,max:1e3,value:U.bpm,onChange:Object(l.b)((function(e){return U.bpm=e}))})}),Object(y.jsx)(H,{label:"reset every",tooltip:"\nsynchronize the original source and the drifting source using this interval (0 means never)<br/>\ncoming soon...\n      ",children:Object(y.jsxs)(oe,{children:[Object(y.jsx)(ce,{min:0,max:64,value:F.resetIntervalValue,onChange:Object(l.b)((function(e){return F.resetIntervalValue=e})),tooltip:"coming soon...",disabled:!0}),Object(y.jsx)(re,{options:[{value:"bars"},{value:"beats"}],defaultValue:F.resetIntervalUnit,onChange:Object(l.b)((function(e){return F.resetIntervalUnit=e})),disabled:!0})]})}),Object(y.jsx)(H,{label:"analysers layout",tooltip:"the layout mode for the analysers box (play to see the difference)",children:Object(y.jsx)(re,{options:[{value:I},{value:T}],defaultValue:L.analysersLayout,onChange:Object(l.b)((function(e){return L.analysersLayout=e}))})}),Object(y.jsx)(H,{label:"chaos",pad:".5rem",align:K,tooltip:"\nadd undeterministic time drift by making the CPU work harder.<br/>\nuse at your own risk!\n      ",className:"drifter-setting-chaos",children:Object(y.jsx)($,{min:0,max:100,defaultValue:F.chaos,onChange:Object(l.b)((function(e){return F.chaos=e}))})})]})});se.displayName="settings";var le=Object(u.a)(se),ue=n(19),de=(n(61),function(e){var t=e.text,n=void 0===t?"":t;return Object(y.jsxs)("h1",{className:"drifter-heading",children:[n.charAt(0),"\xa0\xa0\xa0\xa0\xa0",n.substring(1)]})}),be=n(29),fe=n.n(be),je=n(30),ve=n(16),me=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return Object(r.useRef)(Object(je.a)(ve[e],n).toDestination()).current},he={rolandTr808:{C4:"TR-808Kick01.wav","C#4":"TR-808Snare01.wav",D4:"TR-808Clap01.wav","D#4":"TR-808Hat_C01.wav"}},pe=function(e){var t=function(e,t){var n;return null!==(n=Object.entries(t).find((function(t){var n=Object(d.a)(t,2),r=(n[0],n[1]);return Object.is(e,r)})))&&void 0!==n?n:[]}(e,he),n=Object(d.a)(t,1)[0];return fe()(n)},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=Object(r.useState)(!1),c=Object(d.a)(a,2),i=c[0],o=c[1],l=pe(e),u=me("Sampler",e,Object(s.a)(Object(s.a)({},t),{},{baseUrl:"audio/drum-machines/".concat(l,"/"),onload:function(){o(!0),t.onload&&t.onload()}})),b=t.volume,f=void 0===b?0:b;return Object(r.useEffect)((function(){i&&(u.volume.value=f)}),[f,u,i]),[n?u.connect(n):u,i,n]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"waveform",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:64;return me("Analyser",e,t)},xe=["C4","C#4","D4","D#4"],ye=function(e){return function(e){return v(m(e).length).map((function(t){return e.map((function(e,n){return e[t]}))}))}(e).map((function(e){return e.map((function(e,t){return e&&xe[t]})).filter(Boolean)}))},Ne=function(e){return[Math.floor(e/16)%4,Math.floor(e/4)%4,e%4].join(":")},Ce=function(e,t){ye(t).map((function(t,n){return t.length&&e.triggerAttack(t,Ne(n))}))},ke=new WeakMap,we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e>=t.length-1},a=arguments.length>4?arguments[4]:void 0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;ke.has(e)&&clearTimeout(ke.get(e));var i=60/n/4*1e3,o=ye(t);"undefined"!==typeof a&&(o=o.slice(0,a));var s=0,l=function t(){if(r(s))ke.has(e)&&clearTimeout(ke.get(e));else{j(c/100);var n=o[s%o.length];s+=1,e.triggerAttack(n,ve.immediate()),ke.set(e,setTimeout(t,i))}};l()},Ie=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=Oe.apply(void 0,n),i=Object(d.a)(c,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){return o.unsync().sync()}),[o,e]),Object(r.useEffect)((function(){s&&Ce(o,e)}),[s,o,e]),[o,s]},Te=function(e,t,n,a,c){for(var i=arguments.length,o=new Array(i>5?i-5:0),s=5;s<i;s++)o[s-5]=arguments[s];var l=Oe.apply(void 0,o),u=Object(d.a)(l,2),b=u[0],f=u[1];return Object(r.useEffect)((function(){return b.unsync()}),[b,e]),Object(r.useEffect)((function(){f&&we(b,e,t,c,n,a)}),[f,b,e,t,c,n,a]),[b,f]},Se=(n(71),N(Object(u.a)((function(e){var t,n,a=e.className,c=e.style,i=e["data-tip"],o=F.balance,u=F.triggerMatrix,b=U.bpm,f=U.isPlaying,j=U.loopLengthInSixteenths,m=(t=-36,n=0,function(e){return(n-t)/100*e+t}),h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return v(t).map((function(t,r,a){var c=n/(a.length-1)*r;return n-Math.abs(c-e)}))}(o,4).map((function(e){return m(e)})),p=Object(d.a)(h,4),O=p[0],g=p[1],N=p[2],C=p[3],k=Object(r.useCallback)((function(){return!f}),[f]),w=ge(),I=ge(),T=ge(),S=ge();return Ie(u,he.rolandTr808,{volume:O},w),Te(u,b,j,F.chaos,k,he.rolandTr808,{volume:g},I),Te(u,b,j,F.chaos,k,he.rolandTr808,{volume:N},T),Te(u,b,j,F.chaos,k,he.rolandTr808,{volume:C},S),Object(ue.useAnimationFrame)((function(){return Object.entries({f:w,d1:I,d2:T,d3:S}).forEach((function(e){var t=Object(d.a)(e,2),n=t[0],r=t[1];return x[n]=Array.from(r.getValue())}))}),k,l.b),Object(y.jsx)("div",{"data-tip":i,className:"drifter-sampler ".concat(f?"drifter-sampler-running":""," ").concat(a),style:Object(s.a)(Object(s.a)({},c),{},{"--sampler-ticks":j}),children:Object(y.jsxs)("div",{className:"drifter-sampler-timeline",children:[Object(y.jsx)("div",{className:"drifter-sampler-tape"}),Object(y.jsx)("div",{className:"drifter-sampler-channels",children:u.map((function(e,t){return Object(y.jsx)("div",{className:"drifter-sampler-channel",children:e.map((function(e,n){return Object(y.jsx)(R,{className:"drifter-sampler-tick",defaultChecked:!!e,onChange:function(e){return F.updateTriggerMatrixValue(t,n,+e)}},n)}))},t)}))})]})})})),{useWrapper:!1})),Le=(n(72),["className"]),Me=function(e){var t=e.className,n=void 0===t?"":t,r=Object(g.a)(e,Le);return Object(y.jsx)(E,Object(s.a)(Object(s.a)({},r),{},{tag:"button",className:"drifter-button ".concat(n)}))},Ee=(n(73),["type","isActive","className"]),Ae={play:"play<br/>(space)",stop:"stop<br/>(space)",record:"record<br/>(shift+r)"},Ve=Object.entries(Ae).reduce((function(e,t){var n=Object(d.a)(t,2),r=n[0],a=n[1];return e[r]="".concat(a,"<br/>coming soon..."),e}),{}),Pe=te((function(e){var t=e.type,n=e.isActive,r=e.className,a=void 0===r?"":r,c=Object(g.a)(e,Ee);return Object(y.jsx)(Me,Object(s.a)(Object(s.a)({},c),{},{className:["drifter-transport-button",t?"drifter-transport-button-type-".concat(t):"",n?"drifter-transport-button-active":"",a].filter(Boolean).join(" "),"data-tip":(c.disabled?Ve:Ae)[t],"data-class":"drifter-react-tooltip drifter-transport-button-tooltip"}))})),Re=(n(74),Object(u.a)((function(e){var t=e.onPlay,n=void 0===t?function(){}:t,a=e.onStop,c=void 0===a?function(){}:a,i=e.onRecord,o=void 0===i?function(){}:i,s=U.bpm,u=U.isLoopOn,d=U.isPlaying,b=U.isRecording,f=U.loopLengthInSixteenths,j=Object(r.useCallback)((function(){return!d&&ve.start().then((function(){return ve.Transport.start()})).then(Object(l.b)((function(){return U.isPlaying=!0}))).then(n)}),[d,n]),v=Object(r.useCallback)((function(){return d&&ve.loaded().then((function(){return ve.Transport.stop()})).then(Object(l.b)((function(){U.isPlaying=!1,U.isRecording=!1}))).then(c)}),[d,c]),m=Object(l.b)(Object(r.useCallback)((function(){U.isRecording=!0,o()}),[o])),h=Object(r.useCallback)((function(){return d?v():j()}),[d,j,v]);return Object(r.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bpm,n=e.isLoopOn,r=e.loopLengthInSixteenths;ve.Transport.loop=!!n,t&&(ve.Transport.bpm.value=t),r&&ve.Transport.setLoopPoints(0,Ne(r))}({bpm:s,isLoopOn:u,loopLengthInSixteenths:f})}),[s,u,f]),Object(ue.useKeyboard)(Object(ue.mapKeyboardEvents)([[32,function(){return h()}],[82,["shiftKey"],function(){j(),m()}]])),Object(y.jsxs)("div",{className:"drifter-transport",children:[Object(y.jsx)(Pe,{type:"play",onClick:j,isActive:d}),Object(y.jsx)(Pe,{type:"stop",onClick:v}),Object(y.jsx)(Pe,{type:"record",onClick:m,isActive:b,disabled:!0})]})}))),Be=(n(75),Object(u.a)((function(){return Object(ue.useMediaQueries)({"(max-width: 600px)":function(){return U.loopLengthInSixteenths=4},"(min-width: 600px) and (max-width: 800px)":function(){return U.loopLengthInSixteenths=8},"(min-width: 800px) and (max-width: 1200px)":function(){return U.loopLengthInSixteenths=16},"(min-width: 1200px)":function(){return U.loopLengthInSixteenths=32}},l.b),Object(y.jsxs)("div",{className:"drifter-main-view",children:[Object(y.jsxs)("header",{className:"drifter-main-view-header",children:[Object(y.jsx)(de,{text:"drifter"}),Object(y.jsx)(Re,{})]}),Object(y.jsx)(Se,{className:"drifter-main-view-panel","data-tip":"\n          this is a simple step sequencer; toggle the pads to add or remove notes.<br/>\n          rows are channels, and columns represent sixteenth note intervals.\n        "}),Object(y.jsx)(X,{className:"drifter-main-view-panel-center","data-tip":"sets the balance between the fixed sampler's signal and the drifting samplers' signal",defaultValue:F.balance,onChange:Object(l.b)((function(e){return F.balance=e})),style:{flexShrink:1,flexGrow:0,margin:"-2rem 0"}}),Object(y.jsx)(S,{className:"drifter-main-view-panel-end","data-tip":"shows waveforms for all samplers. you can set the analysers layout in the settings.",layout:L.analysersLayout})]})}))),De=n(0),Fe=n(1),Ue=n(2),We=n(3),Je=(n(76),function(e){Object(Ue.a)(n,e);var t=Object(We.a)(n);function n(e){var r;return Object(De.a)(this,n),(r=t.call(this,e)).state={hasError:!1,errorMessage:null,errorStackTrace:null},r}return Object(Fe.a)(n,[{key:"render",value:function(){return this.state.hasError?this.renderErrorView():this.props.children}},{key:"renderErrorView",value:function(){var e;return Object(y.jsxs)("div",{className:"drifter-app-error-view",children:[Object(y.jsx)(de,{text:null!==(e=this.props.message)&&void 0!==e?e:"error"}),Object(y.jsxs)("div",{className:"drifter-app-error-view-details-box",children:[Object(y.jsx)("label",{children:"message"}),Object(y.jsx)("pre",{className:"drifter-app-error-view-pre",children:this.state.errorMessage}),Object(y.jsxs)("details",{className:"drifter-app-error-view-details",open:!0,children:[Object(y.jsx)("summary",{children:"stack trace"}),Object(y.jsx)("pre",{className:"drifter-app-error-view-pre drifter-app-error-view-stacktrace",children:this.state.errorStackTrace})]})]})]})}}]),n}(a.a.Component));Je.getDerivedStateFromError=function(e){return{hasError:!0,errorMessage:e.message,errorStackTrace:e.stack}};var Ke=Je,qe=(n(77),n(78),function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{className:"drifter-react-tooltip",effect:"solid",delayShow:500,delayHide:250,textColor:"var(--background-color)",backgroundColor:"var(--accent-color-complement)",multiline:!0}),Object(y.jsx)(Ke,{children:Object(y.jsx)(D,{main:Be,sideBar:le})})]})}),He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(qe,{})}),document.getElementById("root")),He()}]),[[79,1,2]]]);
//# sourceMappingURL=main.0dc0e7bb.chunk.js.map