(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),i=t.n(c);t(10);function l(e){var a=e.number,t=function(e){return e.reduce(function(e,t){return t===a||e},!1)?"diePip":""};return r.a.createElement("div",{className:"dieBox ".concat(function(e){switch(e){case 1:return"one";case 2:return"two";case 3:return"three";case 4:return"four";case 5:return"five";case 6:return"six"}}(a))},r.a.createElement("div",{className:"dieCol left"},r.a.createElement("div",{className:"dieGrid ".concat(t([2,3,4,5,6]))}),r.a.createElement("div",{className:"dieGrid"}),r.a.createElement("div",{className:"dieGrid ".concat(t([6]))}),r.a.createElement("div",{className:"dieGrid"}),r.a.createElement("div",{className:"dieGrid ".concat(t([4,5,6]))})),r.a.createElement("div",{className:"dieCol filler"}),r.a.createElement("div",{className:"dieCol "},r.a.createElement("div",{className:"dieGrid ".concat(t([6]))}),r.a.createElement("div",{className:"dieGrid"}),r.a.createElement("div",{className:"dieGrid ".concat(t([1,3,5,6])," ")}),r.a.createElement("div",{className:"dieGrid"}),r.a.createElement("div",{className:"dieGrid ".concat(t([6]))})),r.a.createElement("div",{className:"dieCol filler"}),r.a.createElement("div",{className:"dieCol "},r.a.createElement("div",{className:"dieGrid ".concat(t([4,5,6]))}),r.a.createElement("div",{className:"dieGrid"}),r.a.createElement("div",{className:"dieGrid ".concat(t([6]))}),r.a.createElement("div",{className:"dieGrid"}),r.a.createElement("div",{className:"dieGrid ".concat(t([2,3,4,5,6]))})))}var s=t(1);function m(e){var a=Object(n.useState)(1),t=Object(s.a)(a,2),c=t[0],i=t[1],m=Object(n.useState)([]),o=Object(s.a)(m,2),d=o[0],u=o[1],v=Object(n.useState)({}),E=Object(s.a)(v,2),N=E[0],f=E[1];return r.a.createElement("div",{className:"diceTray"},r.a.createElement("div",{className:"inputRow"},"Enter Number of Dice",r.a.createElement("input",{value:c,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){return function(){for(var e=[],a={one:0,two:0,three:0,four:0,five:0,six:0},t=0;t<c;t++){var n=Math.floor(6*Math.random())+1;1===n&&a.one++,2===n&&a.two++,3===n&&a.three++,4===n&&a.four++,5===n&&a.five++,6===n&&a.six++,e.push(r.a.createElement(l,{number:n}))}f(a),u(e),console.log(a)}()}},"ROLL"),r.a.createElement("div",null,N.one>0&&r.a.createElement("div",{className:"number"},"One : ",r.a.createElement("span",{className:"numberFound"},N.one)),N.two>0&&r.a.createElement("div",{className:"number"},"Two : ",r.a.createElement("span",{className:"numberFound"},N.two)),N.three>0&&r.a.createElement("div",{className:"number"},"Three : ",r.a.createElement("span",{className:"numberFound"},N.three)),N.four>0&&r.a.createElement("div",{className:"number"},"Four : ",r.a.createElement("span",{className:"numberFound"},N.four)),N.five>0&&r.a.createElement("div",{className:"number"},"Five : ",r.a.createElement("span",{className:"numberFound"},N.five)),N.six>0&&r.a.createElement("div",{className:"number"},"Six : ",r.a.createElement("span",{className:"numberFound"},N.six)))),r.a.createElement("div",{className:"diceContainer"},d))}t(11);var o=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null," JSDice! ")),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.319f213b.chunk.js.map