(this.webpackJsonpsemaphore=this.webpackJsonpsemaphore||[]).push([[0],[,function(e,t,a){e.exports={container:"Dude_container__3vxxu",dude:"Dude_dude__1JGdU",head:"Dude_head__vfMsQ",body:"Dude_body__3BuzY",leftArm:"Dude_leftArm__C3Fhn",rightArm:"Dude_rightArm__2Ecfd",arm:"Dude_arm__2urI0",pole:"Dude_pole__2SqFq",flag:"Dude_flag__3N6VE"}},,function(e,t,a){e.exports={header:"Header_header__3tv3i",message:"Header_message__mOYIq",char:"Header_char__34l5m",current:"Header_current__2U-_R",past:"Header_past__hrFSq"}},,,,,function(e,t,a){e.exports={controls:"Controls_controls__HI61T",speed:"Controls_speed__14xdt"}},,,function(e,t,a){e.exports={create:"Create_create__1Xnp-"}},function(e,t,a){e.exports={app:"App_app__2kOhy"}},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),l=a.n(r),u=(a(19),a(4)),c=a(2),o=a(6),i=a(5),d=a(7),m=a(8),p=a.n(m),h=function(e){var t=e.speed,a=e.setSpeed,n=e.isPaused,r=e.togglePause,l=e.replay;return s.a.createElement("div",{className:p.a.controls},s.a.createElement("div",{className:p.a.speed},s.a.createElement("small",null,"Speed"),s.a.createElement("div",null,s.a.createElement("button",{type:"button",onClick:function(){return a(-1)}},"-"),s.a.createElement("span",null,"".concat(t,"x")),s.a.createElement("button",{type:"button",onClick:function(){return a(1)}},"+"))),n?s.a.createElement("button",{type:"button",onClick:r},"Continue"):s.a.createElement("button",{type:"button",onClick:r},"Pause"),s.a.createElement("button",{type:"button",onClick:l},"Replay"))},f=a(11),v=a.n(f),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).encode=function(){var e=a.state.message;a.setState({base64:btoa(e)})},a.setMessage=function(e){var t=e.target.value;a.setState({message:t})},a.state={message:"",base64:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.isReply,t=this.state,a=t.message,n=t.base64;return s.a.createElement("form",{className:v.a.create,method:"get",onSubmit:this.encode},s.a.createElement("label",{htmlFor:"message"},e?"Write a reply":"Send a semaphore message",s.a.createElement("input",{type:"text",placeholder:"Your Message",value:a,onChange:this.setMessage,id:"message"})),s.a.createElement("button",{type:"submit"},"Signal"),s.a.createElement("input",{type:"hidden",name:"m",value:n}))}}]),t}(s.a.Component),b=a(13),_=a(1),y=a.n(_),E={a:[225,180],b:[270,180],c:[315,180],d:[0,180],e:[180,45],f:[180,90],g:[180,135],h:[270,225],i:[225,315],j:[0,90],k:[225,0],l:[225,45],m:[225,90],n:[225,135],o:[270,315],p:[270,0],q:[270,45],r:[270,90],s:[270,135],t:[315,0],u:[315,45],v:[0,135],w:[45,90],x:[45,135],y:[315,90],z:[135,90],0:[225,180],1:[270,180],2:[315,180],3:[0,180],4:[180,45],5:[180,90],7:[180,135],8:[270,225],9:[225,315]," ":[135,225],numerals:[0,45],cancel:[270,135]},x=500,k=500,N=500,O=0;var S=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).nextLetter=function(){var e=a.props,t=e.speed,n=e.nextIndex,s=a.state,r=s.queue,l=s.speedMultiplier;if(0!==t&&r.length){var u=r.shift(),c=x+k;switch(u){case"start":a.setLetter(" "),c=x;break;case"end":a.setLetter(" "),n();break;case"double":a.setLetter(" "),c=x+O;break;case"numerals":a.setLetter("numerals");break;case"alpha":a.setLetter("j");break;case" ":c=x+N,n(),a.setLetter("space");break;default:n(),a.setLetter(u.toLowerCase())}"end"!==u&&(a.setState({lastDelay:c}),a.timeout=setTimeout(a.nextLetter,c*l))}};var n=e.message,s=e.speed,r=function(e){for(var t=[],a=null,n=!1,s=0;s<e.length;s+=1){var r=e[s].toLowerCase();"undefined"!==typeof E[r]&&(r===a&&t.push("double"),a=r,/^\d$/.test(r)?(n||t.push("numerals"),n=!0,t.push(r)):(n&&t.push("alpha"),n=!1,t.push(r)))}return t.length&&(t.unshift("start"),t.push("end")),t}(n);return a.state={queue:r,leftAngle:0,rightAngle:0,speed:s,speedMultiplier:1/s,lastDelay:0},a.timeout=null,a}return Object(d.a)(t,e),Object(c.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.speed;return a!==t.speed?{speedMultiplier:1/a,speed:a}:null}}]),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.state.queue.length&&this.nextLetter()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"setPaused",value:function(e){var t=this.state,a=t.lastDelay,n=t.speedMultiplier;e?clearTimeout(this.timeout):this.timeout=setTimeout(this.nextLetter,a*n)}},{key:"setLetter",value:function(e){var t=e;"undefined"===typeof E[t]&&(t=" ");var a=Object(b.a)(E[t],2),n=a[0],s=a[1];this.setState({leftAngle:n,rightAngle:s})}},{key:"render",value:function(){var e=this.state,t=e.leftAngle,a=e.rightAngle,n=e.speedMultiplier;return s.a.createElement("div",{className:y.a.container},s.a.createElement("div",{className:y.a.dude},s.a.createElement("div",{className:y.a.head}),s.a.createElement("div",{className:y.a.body}),s.a.createElement("div",{className:y.a.leftArm,style:{transform:"rotate(".concat(t,"deg)"),transitionDuration:"".concat(x*n,"ms")}},s.a.createElement("div",{className:y.a.arm}),s.a.createElement("div",{className:y.a.pole}),s.a.createElement("div",{className:y.a.flag})),s.a.createElement("div",{className:y.a.rightArm,style:{transform:"rotate(".concat(a,"deg)"),transitionDuration:"".concat(x*n,"ms")}},s.a.createElement("div",{className:y.a.arm}),s.a.createElement("div",{className:y.a.pole}),s.a.createElement("div",{className:y.a.flag}))))}}]),t}(s.a.Component);S.defaultProps={message:""};var j=a(3),P=a.n(j);function C(e,t){for(var a=[],n=0;n<e.length;n+=1){var r=e[n],l=[P.a.char];n<t?l.push(P.a.past):n===t?l.push(P.a.current):l.push(P.a.future),a.push(s.a.createElement("div",{key:"char-".concat(n+1),className:l.join(" ")},n>t?" ":r))}return console.log(a),s.a.createElement("div",{className:P.a.message},a)}var D=function(e){var t=e.message,a=e.index;return s.a.createElement("div",{className:P.a.header},t?C(t,a):C("Semaphore",9))};D.defaultProps={message:"",index:-1};var w=D,L=a(12),A=a.n(L),M=[.25,.5,1,2,5,10],R=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).setSpeed=function(e){var t=a.state.speed,n=M.indexOf(t);n+=e,(n=Math.max(Math.min(M.length-1,n),0))!==M.indexOf(t)&&a.setState({speed:M[n]})},a.togglePause=function(){var e=a.state.isPaused;a.setState({isPaused:!e}),a.dudeRef.current&&a.dudeRef.current.setPaused(!e)},a.replay=function(){var e=a.state.playNumber;a.setState({index:-1,playNumber:e+1})},a.nextIndex=function(){var e=a.state.index;a.setState({index:e+1})};var n="",r=new URLSearchParams(window.location.search);return r.has("m")&&(n=r.get("m"),n=atob(n).substr(0,17)),a.state={speed:1,isPaused:!1,message:n,playNumber:1,index:-1},a.dudeRef=s.a.createRef(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.message,a=e.speed,n=e.isPaused,r=e.playNumber,l=e.index;return s.a.createElement("div",{className:A.a.app},s.a.createElement(w,{message:t,index:l}),s.a.createElement(S,{key:"play-".concat(r),ref:this.dudeRef,message:t,speed:n?0:a,nextIndex:this.nextIndex}),t?s.a.createElement(h,{speed:a,isPaused:n,togglePause:this.togglePause,setSpeed:this.setSpeed,replay:this.replay}):null,s.a.createElement(g,{isReply:!!t}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.3684b24d.chunk.js.map