(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{27:function(e,a,t){e.exports=t(41)},32:function(e,a,t){},33:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r);t(32),t(33);var i=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"The Shoppies")))},m=t(8);var o=function(e){var a=e.nominated.map((function(e){return e.Plot}));return e.Title?a.includes(e.Plot)?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"movie"},l.a.createElement("h3",null,"Search result for ",e.searched,":"),l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:e.Poster,alt:e.Title})),l.a.createElement("div",{className:"movieText"},l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Title:")," ",e.Title),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Year:")," ",e.Year),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Plot:")," ",e.Plot)),l.a.createElement("button",{disabled:!0,className:"nominate"},"Nominate!"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"movie"},l.a.createElement("h3",null,"Search result for ",e.searched,":"),l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:e.Poster,alt:e.Title})),l.a.createElement("div",{className:"movieText"},l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Title:")," ",e.Title),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Year:")," ",e.Year),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Plot:")," ",e.Plot)),l.a.createElement("button",{onClick:function(){e.setNominated(e.nominated.concat(e))},className:"nominate"},"Nominate!"))):null},s=t(26);var u=function(e){var a=e.nominated,t=e.setNominated,n=function(e){var n=e.target.getAttribute("index");if(n>-1){var l=Object(s.a)(a);l.splice(n,1),t(l)}};return a?a.map((function(e,a){return l.a.createElement("li",{key:a,className:"movie"},l.a.createElement("h3",null,"Nomination #",a+1,":"),l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:e.Poster,alt:e.Title})),l.a.createElement("div",{className:"movieText"},l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Title:")," ",e.Title),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Year:")," ",e.Year),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Plot:")," ",e.Plot)),l.a.createElement("button",{onClick:n,index:a,className:"nominate"},"Remove nomination"))})):null},p=t(6),E=t(15),f=t.n(E);t(34);f.a.initializeApp({apiKey:"AIzaSyDht736HropBXtwFbjFpGLxigfknVO9_wQ",authDomain:"shoppies-20c2e.firebaseapp.com",databaseURL:"https://shoppies-20c2e.firebaseio.com",projectId:"shoppies-20c2e",storageBucket:"shoppies-20c2e.appspot.com",messagingSenderId:"790626284069",appId:"1:790626284069:web:04b886975bf2f4209d45cc"});var v=f.a;var d=function(e){var a=e.nominated,t=e.setNominated;return a.length?l.a.createElement("button",{onClick:function(){var e=v.database().ref();a.map((function(a){return e.push({Poster:a.Poster,Title:a.Title,Year:a.Year,Plot:a.Plot})})),t([]),alert("Nominations saved!")}},"Save nominations!"):null};var h=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),i=Object(m.a)(c,2),s=i[0],E=i[1],f=Object(n.useState)(""),v=Object(m.a)(f,2),h=v[0],N=v[1],b=Object(n.useState)([]),g=Object(m.a)(b,2),T=g[0],w=g[1];return 5===T.length?l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"centerWrapper"},l.a.createElement("h2",null,"Welcome to The Shoppies, Shopify's official movie awards! Search for and nominate up to five movies, and check out the list of nominees!")),l.a.createElement("h3",{className:"maximum"},"You've nominated five movies!"),l.a.createElement(p.b,{to:"/nominations",className:"link"},"View nominees ",l.a.createElement("span",null,l.a.createElement("i",{class:"fas fa-arrow-right"}))),l.a.createElement("ul",{className:"nominations",id:"nominations"},l.a.createElement(u,{nominated:T,setNominated:w})),l.a.createElement("div",{className:"saveContainer"},l.a.createElement(d,{nominated:T,setNominated:w})))):l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"centerWrapper"},l.a.createElement("h2",null,"Welcome to The Shoppies, Shopify's official movie awards! Search for and nominate up to five movies, and check out the list of nominees!")),l.a.createElement(p.b,{to:"/nominations",className:"link"},"View nominees ",l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-arrow-right"}))),l.a.createElement("div",{className:"centerWrapper"},l.a.createElement("form",{action:"#"},l.a.createElement("label",{htmlFor:"movieTitle",className:"sr-only"},"Movie title:"),l.a.createElement("input",{onChange:function(e){E(e.target.value),N(e.target.value),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"".concat(s);fetch("https://www.omdbapi.com/?type=movie&t=".concat(e,"&apikey=2b4018f5")).then((function(e){return e.json()})).then((function(e){return r(e)}))}(e.target.value)},type:"text",name:"movieTitle",className:"movieTitle",id:"movieTitle",placeholder:"Type a movie title"}))),l.a.createElement("ul",{className:"results",id:"results"},l.a.createElement(o,{Poster:t.Poster,Title:t.Title,Year:t.Year,Plot:t.Plot,inputValue:h,nominated:T,setNominated:w,searched:s})),l.a.createElement("ul",{className:"nominations",id:"nominations"},l.a.createElement(u,{nominated:T,setNominated:w})),l.a.createElement("div",{className:"saveContainer"},l.a.createElement(d,{nominated:T,setNominated:w}))))};var N=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=!0,a=v.database().ref();return e&&a.on("value",(function(e){var a=[],t=e.val();for(var n in t)a.push(t[n]);r(a)})),function(){return e=!1}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement(p.b,{to:"/shoppies",className:"link2"},l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-arrow-left"}))," Back"),l.a.createElement("h3",{className:"awardNominees"},"Award nominees:"),l.a.createElement("ul",null,t.map((function(e,a){return l.a.createElement("li",{key:a,className:"movie"},l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:e.Poster,alt:e.Title})),l.a.createElement("div",{className:"movieText"},l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Title:")," ",e.Title),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Year:")," ",e.Year),l.a.createElement("p",null,l.a.createElement("span",{className:"info"},"Plot:")," ",e.Plot)))}))))))};var b=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://lucassilbernagel.com/",target:"_blank",rel:"noopener noreferrer"},"Lucas Silbernagel")," ",l.a.createElement("i",{className:"far fa-copyright","aria-label":"copyright"})," 2020")))},g=t(1);var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/shoppies",component:h}),l.a.createElement(g.a,{path:"/nominations",component:N})),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p.a,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8c07b462.chunk.js.map