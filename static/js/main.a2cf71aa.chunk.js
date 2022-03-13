(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(60)},31:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),c=n.n(r),i=(n(31),n(7)),s=n.n(i),l=n(8),u=n(1),m=n(6),d=n(3),h=n(2),f=n(4),p=(n(35),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!0},n.onDetailsClick=function(){n.setState({collapsed:!n.state.collapsed})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.event;return o.a.createElement("div",{className:"event"},o.a.createElement("h2",{className:"summary"},e.summary),o.a.createElement("h3",{className:"event-location"},e.location),o.a.createElement("b",null,"Date and Time: "),o.a.createElement("p",{className:"date-time"},e.start.dateTime),!this.state.collapsed&&o.a.createElement("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show")},o.a.createElement("h4",null,"About the event:"),o.a.createElement("a",{href:e.htmlLink,rel:"noreferrer",target:"_blank"},"View on google Calendar"),o.a.createElement("p",{className:"event-description"},e.description)),o.a.createElement("button",{id:"details-button",className:"details-button ".concat(this.state.collapsed?"display":"hide","-details"),onClick:this.onDetailsClick},this.state.collapsed?"Show Details":"Hide-Details"))}}]),t}(a.Component)),v=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.events;return o.a.createElement("ul",{className:"EventList"},e.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(p,{event:e}))}))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Alert"},o.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).color="blue",n}return Object(f.a)(t,e),t}(g),w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).color="red",n}return Object(f.a)(t,e),t}(g),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).color="orange",n}return Object(f.a)(t,e),t}(g),k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},n.handleInputChanged=function(e){var t=e.target.value,a=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==a.length)return n.setState({query:t,suggestions:a,infoText:""});n.setState({query:t,infoText:"We cannot find the city you are looking for."})},n.handleItemClicked=function(e){n.setState({query:e,showSuggestions:!1}),n.props.updateEvents(e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"CitySearch"},o.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),"Filter by City",o.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return o.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),o.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},o.a.createElement("b",null,"See all cities"),o.a.createElement(b,{text:this.state.infoText}))))}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={numberOfEvents:32,infoText:""},n.onInputChange=function(e){var t=e.target.value;if(!(t<1||t>32))return n.setState({numberOfEvents:t,infoText:""});n.setState({numberOfEvents:"",infoText:"Please enter a value from 1 to 32"}),n.props.updateNumberOfEvents(t)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"event-number"},o.a.createElement("input",{type:"number",className:"number",value:this.state.numberOfEvents,onChange:function(t){return e.onInputChange(t)}}),o.a.createElement("br",null),"Number of events on page",o.a.createElement(w,{text:this.state.infoText}))}}]),t}(a.Component),O=n(25),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],j=n(12),x=n.n(j),T=n(9),C=n.n(T),N=function(e){var t=e.map(function(e){return e.location});return Object(O.a)(new Set(t))},W=function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,o,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),C.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,A();case 11:if(!(n=e.sent)){e.next=21;break}return I(),a="https://8bnoct4d5h.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+n,e.next=17,x.a.get(a);case 17:return(o=e.sent).data&&(r=N(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),C.a.done(),e.abrupt("return",o.data.events);case 21:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,o,r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,x.a.get("https://8bnoct4d5h.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,c=r.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",o&&L(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://8bnoct4d5h.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();n(55),n(57);var M=function(e){return e.showWelcomeScreen?o.a.createElement("div",{className:"WelcomeScreen"},o.a.createElement("h1",null,"Welcome to the Meet app"),o.a.createElement("h4",null,"Log in to see upcoming events around the world for full-stack developers"),o.a.createElement("div",{className:"button_cont",align:"center"},o.a.createElement("div",{class:"google-btn"},o.a.createElement("div",{class:"google-icon-wrapper"},o.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})),o.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},o.a.createElement("b",null,"Sign in with google")))),o.a.createElement("a",{href:"https:/aemullin.github.io/meet/privacy.html",rel:"nofollow noopener"}," Privacy policy ")):null},q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={events:[],locations:[],numberOfEvents:32,location:"all",offlineText:"",showWelcomeScreen:void 0},n.updateEvents=function(e){Z().then(function(t){var a=("all"===e?t:t.filter(function(t){return t.location===e})).slice(0,n.state.numberOfEvents);n.mounted&&n.setState({events:a,location:e})})},n.updateNumberOfEvents=function(e){n.setState({numberOfEvents:e},n.updateEvents(n.state.location))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,o,r=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,W(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&Z().then(function(e){r.mounted&&r.setState({events:e.slice(0,r.state.numberOfEvents),locations:N(e)})}),navigator.onLine?this.setState({offlineText:""}):this.setState({offlineText:"You are not connected to the internet, events may not be up to date"});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?o.a.createElement("div",{className:"App"}):o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"title"},o.a.createElement("a",{className:"title-link",href:"https://aemullin.github.io/meet/"},o.a.createElement("h1",null,"Meet"))),o.a.createElement("br",null),o.a.createElement(k,{locations:this.state.locations,updateEvents:this.updateEvents}),o.a.createElement(E,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),o.a.createElement(v,{events:this.state.events}),o.a.createElement(y,{text:this.state.offlineText}),o.a.createElement(M,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){A()}}))}}]),t}(a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var U=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,61)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)})};n(24).config("d9d7c7db39e14b589adbdc94f3be6d2c").install(),c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meet","/service-worker.js");D?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):J(t,e)})}}(),U()}},[[26,3,2]]]);
//# sourceMappingURL=main.a2cf71aa.chunk.js.map