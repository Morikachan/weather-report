(this["webpackJsonpweather-report"]=this["webpackJsonpweather-report"]||[]).push([[0],{10:function(e,t,a){e.exports={text:"ErrorView_text__2DYol",wrapper:"ErrorView_wrapper__21hvW"}},11:function(e,t,a){e.exports={container:"Container_container__3RIox"}},13:function(e,t,a){e.exports={overlay:"LoaderComponent_overlay__3-Jp5"}},3:function(e,t,a){e.exports={container:"DataView_container__de2_T",title:"DataView_title__101ly",icon:"DataView_icon__19HOz",wrapper:"DataView_wrapper__3e7u5",description:"DataView_description__2yOWc"}},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),i=a.n(n),r=a(6),s=a.n(r),o=a(4),m=a(8),l=a(11),d=a.n(l);var j=function(e){var t=e.children;return Object(c.jsx)("div",{className:d.a.container,children:t})},p=(a(19),a(7)),b=a.n(p);var h=function(e){var t=e.onHandleSubmit,a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],s=i[1];return Object(c.jsx)("header",{className:b.a.header,children:Object(c.jsxs)("form",{className:b.a.form,onSubmit:function(e){if(e.preventDefault(),""===r.trim())return m.b.warning("Please enter a value for search city!");t(r),s(" ")},children:[Object(c.jsx)("input",{className:b.a.input,type:"text",value:r,autoComplete:"off",autoFocus:!0,placeholder:"Input city name...",onChange:function(e){var t=e.target;return s(t.value)}}),Object(c.jsx)("button",{type:"submit",className:b.a.btn,children:Object(c.jsx)("span",{className:b.a.label,children:"Search"})})]})})},u=function(e){return fetch("".concat("https://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&lang=en&units=metric&appid=").concat("b5d50f19d48c01a3eb81e79fb9ec7ed2")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Sorry, ".concat(e," not found!")))}))},x=a.p+"static/media/sorry.388e3692.png",O=a(10),_=a.n(O);var f=function(e){var t=e.texterror;return Object(c.jsxs)("div",{className:_.a.wrapper,children:[Object(c.jsx)("p",{text:t,className:_.a.text,children:t}),Object(c.jsx)("img",{src:x,width:"500",alt:"error occurred img"})]})},g=["January","February","March","April","May","June","July","August","September","October","November","December"],w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=new Date,y=g[v.getMonth()],N=w[v.getDay()],S=v.getDate(),D=a.p+"static/media/clock.135740c4.png",T=a(5),F=a.n(T);var k=function(e){var t=e.timeInfo,a=t.name,i=t.timezone,r=Object(n.useState)((function(){return(new Date).toLocaleTimeString()})),s=Object(o.a)(r,2),m=s[0],l=s[1],d=Object(n.useState)((function(){return" "})),j=Object(o.a)(d,2),p=j[0],b=j[1];return Object(n.useEffect)((function(){var e=v.getTime(),t=6e4*v.getTimezoneOffset(),a=new Date(e+t+1e3*i);l(a.toLocaleTimeString("en-US",{timeStyle:"short"})),b("".concat(w[a.getDay()],", ").concat(g[a.getMonth()]," ").concat(a.getDate()))}),[i]),Object(c.jsxs)("div",{className:F.a.container,children:[Object(c.jsx)("img",{className:F.a.icon,src:D,width:"40",height:"40",alt:"clock icon"}),Object(c.jsxs)("div",{className:F.a.time_container,children:[Object(c.jsxs)("div",{className:F.a.wrapper,children:[Object(c.jsxs)("p",{className:F.a.time,children:["Time in your city:"," ",v.toLocaleTimeString("en-US",{timeStyle:"short"})]}),Object(c.jsxs)("p",{className:F.a.date,children:[N,", ",y," ",S]})]}),Object(c.jsxs)("div",{className:F.a.wrapper,children:[Object(c.jsxs)("p",{className:F.a.time,children:["Time in ",a,": ",m]}),Object(c.jsx)("p",{className:F.a.date,children:p})]})]})]})},W=a.p+"static/media/temp.7000e2cb.png",z=a.p+"static/media/wind.2b66d517.png",C=a.p+"static/media/drop.0493b77e.png",L=a(3),V=a.n(L);var E=function(e){var t=e.weatherData,a=t.name,n=t.country,i=t.temp,r=t.temp_min,s=t.temp_max,o=t.feels_like,m=t.humidity,l=t.description,d=t.icon,j=t.speed,p=t.timezone;return Object(c.jsxs)("main",{className:V.a.container,children:[Object(c.jsx)(k,{timeInfo:{name:a,timezone:p}}),Object(c.jsxs)("h1",{className:V.a.title,children:["Weather in ",a,", ",n]}),Object(c.jsxs)("div",{className:V.a.wrapper,children:[Object(c.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(d,".png"),width:"50",height:"50",alt:"Weather icon",className:V.a.icon}),Object(c.jsx)("p",{className:V.a.description,children:l})]}),Object(c.jsxs)("div",{className:V.a.wrapper,children:[Object(c.jsx)("img",{src:W,width:"50",height:"50",alt:"Thermometer",className:V.a.icon}),Object(c.jsxs)("ul",{className:V.a.description,children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("b",{children:"Feels like:"})," ",o," \xb0\u0421"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("b",{children:"Current:"})," ",i," \xb0\u0421"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("b",{children:"High:"})," ",s," \xb0\u0421"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("b",{children:"Low:"})," ",r," \xb0\u0421"]})]})]}),Object(c.jsxs)("div",{className:V.a.wrapper,children:[Object(c.jsx)("img",{src:z,width:"50",height:"50",alt:"Wind Speed",className:V.a.icon}),Object(c.jsxs)("p",{className:V.a.description,children:[Object(c.jsx)("b",{children:"Wind Speed:"})," ",j," m/s"]})]}),Object(c.jsxs)("div",{className:V.a.wrapper,children:[Object(c.jsx)("img",{src:C,width:"50",height:"50",alt:"Humidity",className:V.a.icon}),Object(c.jsxs)("p",{className:V.a.description,children:[Object(c.jsx)("b",{children:"Humidity:"})," ",m," %"]})]})]})},H=a(12),J=a.n(H),M=(a(41),a(13)),I=a.n(M);var P=function(){return Object(c.jsx)("div",{className:I.a.overlay,children:Object(c.jsx)(J.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:0})})},q="idle",B="pending",U="resolved",Y="rejected";var A=function(e){var t=e.name,a=Object(n.useState)(null),i=Object(o.a)(a,2),r=i[0],s=i[1],m=Object(n.useState)(null),l=Object(o.a)(m,2),d=l[0],j=l[1],p=Object(n.useState)(q),b=Object(o.a)(p,2),h=b[0],x=b[1];return Object(n.useEffect)((function(){t&&(x(B),u(t).then((function(e){var t=e.name,a=e.sys.country,c=e.main,n=c.temp,i=c.temp_min,r=c.temp_max,o=c.feels_like,m=c.humidity,l=e.weather[0],d=l.description,j=l.icon,p=e.wind,b=p.speed,h=p.deg,u=e.timezone;s({name:t,country:a,description:d,icon:j,temp:n.toFixed(1),feels_like:o.toFixed(1),temp_min:i.toFixed(1),temp_max:r.toFixed(1),speed:b,deg:h,humidity:m,timezone:u}),x(U)})).catch((function(e){j(e),x(Y)})))}),[t]),h===q?null:h===B?Object(c.jsx)(P,{}):h===Y?Object(c.jsx)(f,{texterror:d.message}):h===U?Object(c.jsx)(E,{weatherData:r}):void 0};var K=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(c.jsxs)(j,{children:[Object(c.jsx)(h,{onHandleSubmit:function(e){i(e)}}),Object(c.jsx)(A,{name:a}),Object(c.jsx)(m.a,{autoClose:2500,position:"bottom-center"})]})};a(42);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={container:"DateTime_container__3rBLT",icon:"DateTime_icon__1c868",wrapper:"DateTime_wrapper__2Y2ba",time:"DateTime_time__36N56",date:"DateTime_date__2nQKg",time_container:"DateTime_time_container__2Nmg8"}},7:function(e,t,a){e.exports={header:"SearchForm_header__jUmCY",form:"SearchForm_form__qWosj",input:"SearchForm_input__zWLnu",btn:"SearchForm_btn__2sO4K",label:"SearchForm_label__3kqP7"}}},[[43,1,2]]]);
//# sourceMappingURL=main.0c6ec527.chunk.js.map