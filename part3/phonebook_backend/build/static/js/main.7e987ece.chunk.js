(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(15),c=t.n(r),u=(t(6),t(2)),i=function(e){var n=e.persons,t=Object(a.useState)([]),r=Object(u.a)(t,2),c=r[0],i=r[1];return o.a.createElement("div",null,"filter shown with ",o.a.createElement("input",{onChange:function(e){i(n.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),c.map((function(e){return o.a.createElement("p",{key:e.name},e.name," ",e.number)})))},s=t(4),l=t(3),m=t.n(l),f="http://localhost:3001/api/persons",d=function(){return m.a.get(f)},p=function(e){return m.a.post(f,e)},h=function(e){return m.a.delete("".concat(f,"/").concat(e))},b=function(e,n){return m.a.put("".concat(f,"/").concat(n),e)},v=function(e){var n=e.persons,t=e.setPersons,r=e.setNotification,c=Object(a.useState)(""),i=Object(u.a)(c,2),l=i[0],m=i[1],f=Object(a.useState)(""),d=Object(u.a)(f,2),h=d[0],v=d[1];return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:l,number:h},o=n.find((function(e){return e.name===l}));o&&window.alert("".concat(l," is already added to phonebook")),o?window.confirm("".concat(o.name," is already added to phonebook,replace the old number with a new one?"))&&(b(Object(s.a)(Object(s.a)({},o),{},{number:h}),o.id).then((function(e){t(n.map((function(n){return n.number!==h?n:e.data})))})),m(""),v(""),r({message:"updated phone number of ".concat(o.name),type:"success"}),setTimeout((function(){return r(null)}),5e3)):p(a).then((function(e){t(n.concat(e.data)),m(""),v(""),r({message:"Added ".concat(a.name),type:"success"}),setTimeout((function(){return r(null)}),5e3)}))}},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:l,onChange:function(e){m(e.target.value)}})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:h,onChange:function(e){v(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))))},E=function(e){var n=e.person,t=e.setPersons,a=e.setNotification;return o.a.createElement("div",null,o.a.createElement("p",null,n.name,n.number,o.a.createElement("button",{onClick:function(e){window.confirm("Delete ".concat(n.name,"?"))&&(h(n.id).then((function(e){a({message:"Deleted ".concat(n.name),type:"success"}),setTimeout((function(){return a(null)}),5e3)})).catch((function(e){a({message:"Information of ".concat(n.name," has already been removed from server"),type:"error"})})),d().then((function(e){t(e.data)})),setTimeout((function(){return a(null)}),5e3))}},"delete")))},w=function(e){var n=e.persons,t=e.setPersons,a=e.setNotification;return o.a.createElement("div",null,n.map((function(e){return o.a.createElement(E,{key:e.name,person:e,setPersons:t,setNotification:a})})))},g=function(e){var n=e.notification;return null===n?null:o.a.createElement("div",{className:n.type},n.message)},j=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(null),s=Object(u.a)(c,2),l=s[0],m=s[1];return Object(a.useEffect)((function(){d().then((function(e){r(e.data)}))}),[]),o.a.createElement("div",null,o.a.createElement("h2",null,"phonebook"),o.a.createElement(g,{notification:l}),o.a.createElement(i,{persons:t}),o.a.createElement("h2",null,"add a new"),o.a.createElement(v,{persons:t,setPersons:r,setNotification:m}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(w,{persons:t,setPersons:r,setNotification:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,n,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.7e987ece.chunk.js.map