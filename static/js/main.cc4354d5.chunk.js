(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),l=(a(15),a(9)),c=a(8),i=a(1),u=a(2),m=a(4),d=a(3),f=a(5),v=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{class:"fa-stack fa-lg"},r.a.createElement("i",{class:"fa fa-circle fa-stack-2x"}),r.a.createElement("i",{class:"fa fa-flag fa-stack-1x fa-inverse"})),r.a.createElement("span",{className:"badge badge-pill badge-info m-2",style:{width:50}},t),"Sumas"))},h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getBadgeClasses1=function(){var e="badge m-2 badge-";return e+=0===a.props.counter1.value1?"warning":"primary",e+="warning"},a.getBadgeClasses2=function(){var e="badge m-2 badge-";return e+=0===a.props.counter1.value2?"warning":"primary",e+="warning"},a.formatCount1=function(){for(var e=a.props.counter1.value1,t=String(e);t.length<5;)t="0"+t;return t},a.formatCount2=function(){for(var e=a.props.counter2.value2,t=String(e);t.length<5;)t="0"+t;return t},a.formatResultado=function(){for(var e=a.props.resultado.resultado,t=String(e);t.length<5;)t="0"+t;return t},a.changeCounter1=function(e){e.target.value},a.changeCounter2=function(e){e.target.value},a.setResultado=function(e){a.resultado=e.target.value},a.handleSubmit=function(){alert("prueba")},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("span",{style:{align:"right",fontSize:24},className:this.getBadgeClasses1()},this.formatCount1())),r.a.createElement("div",{className:"row"},r.a.createElement("span",{style:{fontSize:24},className:this.getBadgeClasses2()},this.formatCount2()))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.onIncrement(e.props.counter1)}},r.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{size:"3",style:{fontSize:24},className:"warning",type:"text",value:this.props.intento.value,onkeydown:this.onkeydown(),onkeypress:this.myKeyPress,onChange:this.moveCaretAtEnd})),r.a.createElement("i",{class:"fa fa-camera-retro fa-5x"})))}},{key:"myKeyPress",value:function(e){var t;alert("key"),window.event?t=e.keyCode:e.which&&(t=e.which),alert(String.fromCharCode(t))}},{key:"onkeydown",value:function(e){e=e||window.event;var t=String.fromCharCode(e.keyCode);return alert(t),isNaN(t)&&8!=e.which&&e.preventDefault(),!0}},{key:"onkeypress",value:function(e){var t=(e=e||window.event).keyCode||e.which,a=String.fromCharCode(t);alert(a)}},{key:"moveCaretAtEnd",value:function(e){var t=e.target.value;e.target.value="",e.target.value=t;var a=t.replace(/(.*)(.)$/,"$2$1");e.target.value=a}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,a=e.onIncrement,n=e.onDelete,o=e.onDecrement,s=e.counters,l=e.onRestart;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success m-2",onClick:t,disabled:0===s.length?"disabled":""},r.a.createElement("i",{className:"fa fa-refresh","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-primary m-2",onClick:l,disabled:0!==s.length?"disabled":"",style:0!==s.length?{visibility:"hidden"}:{visibility:"visible"}},r.a.createElement("i",{className:"fa fa-recycle","aria-hidden":"true"})),s.map(function(e){return r.a.createElement(h,{key:e.id,counter:e,counter1:e,counter2:e,resultado:e,intento:e,onIncrement:a,onDecrement:o,onDelete:n})}))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).RandomNumber=function(){return Math.floor(100*Math.random())+1},a.state={counters:[]},a.AddItemsToArray=function(){var e=[],t=a.RandomNumber(),n=a.RandomNumber();return e.push({id:1,value1:t,value2:n,resultado:t+n}),console.log(e[0]),e},a.handleIncrement=function(e){var t=Object(c.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(l.a)({},t[n]),t[n].resultado=t[n].value1+t[n].value2,alert(t[n].intento),console.log(t[n].resultado),a.setState({counters:t})},a.handleReset=function(){var e=a.AddItemsToArray();a.setState({counters:e})},a.handleDelete=function(e){var t=a.state.counters.filter(function(t){return t.id!==e});a.setState({counters:t})},a.handleRestart=function(){var e=a.AddItemsToArray();a.setState({counters:e})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{totalCounters:this.state.counters.filter(function(e){return e.value1>0||e.value2>0}).length}),r.a.createElement("main",{className:"container"},r.a.createElement(g,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onRestart:this.handleRestart})))}}]),t}(n.Component);a(16),a(17);s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cc4354d5.chunk.js.map