(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b01":function(t,e,n){"use strict";var s=n("c627"),a=n.n(s);a.a},"0ff4":function(t,e,n){},1240:function(t,e,n){"use strict";var s=n("e9bd"),a=n.n(s);a.a},1276:function(t,e,n){"use strict";var s=n("e9d9"),a=n.n(s);a.a},1338:function(t,e,n){"use strict";var s=n("6090"),a=n.n(s);a.a},3124:function(t,e,n){"use strict";n.r(e),n.d(e,"configRequest",(function(){return o})),n.d(e,"checkTokenError",(function(){return r}));var s=n("2b0e"),a=n("a18c"),i=n("f9c4");const o=t=>{console.log("process.env.NODE_ENV ","production");let e=s["default"].$cookies.get("token");return t.headers={Accept:"application/json, text/plain, */*","x-access-token":e},t.url=Object(i["j"])()+t.url,t},r=t=>(t.response&&403===t.response.status&&a["a"].push({name:"login"}),Promise.reject(t))},"33a9":function(t,e){t.exports.STATUSES={OK:{colorCode:"green"},HELP:{colorCode:"#C2AF0A"},EMERGENCY:{colorCode:"red"},UNDEFINED:{colorCode:""}}},"356d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("45fc"),n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("5c0b"),n("2877")),r={},c=Object(o["a"])(r,a,i,!1,null,null,null),l=c.exports,u=n("a18c"),d=n("bc3a"),m=n.n(d),h=n("a7fe"),p=n.n(h),f=n("2b27"),v=n.n(f),g=n("5f5b"),C=n("b1e0"),b=(n("c9c9"),n("5363"),n("5132")),w=n.n(b),_=n("d706"),y=n.n(_),x=n("ee98"),S=n.n(x),k=n("f9c4"),z=n("5886"),U=n("8e5f"),E=n.n(U);n("4413");n.d(e,"eventBus",(function(){return N})),s["default"].use(z["a"]);var $=n("3124");s["default"].use(new w.a({debug:!0,connection:Object(k["j"])()})),s["default"].use(y.a),s["default"].use(S.a),s["default"].component("multiselect",E.a),s["default"].use(g["a"]),s["default"].use(C["a"]),m.a.interceptors.request.use($.configRequest,(function(t){return Promise.reject(t)})),m.a.interceptors.response.use((function(t){return t}),$.checkTokenError),s["default"].use(p.a,m.a),s["default"].use(v.a),u["a"].beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&!window.$cookies.isKey("user")&&n("/login"),n()}));var N=new s["default"];s["default"].config.productionTip=!1,new s["default"]({router:u["a"],render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},6090:function(t,e,n){},7581:function(t,e,n){"use strict";var s=n("8a87"),a=n.n(s);a.a},8710:function(t,e,n){},"8a87":function(t,e,n){},"8af1":function(t,e,n){"use strict";var s=n("bef0"),a=n.n(s);a.a},"90c0":function(t,e,n){"use strict";var s=n("8710"),a=n.n(s);a.a},"9c0c":function(t,e,n){},a18c:function(t,e,n){"use strict";var s=n("2b0e"),a=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper"},[n("div",{staticClass:"card mt-md-5 login-card"},[n("div",{staticClass:"card-body"},[n("h1",{staticClass:"display-5 text-center page-title"},[t._v("ESN Login")]),n("form",{staticClass:"mt-sm-5"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"username"}},[t._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",id:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"btn btn-primary btn-block my-2",attrs:{type:"button"},on:{click:t.login}},[t._v("Log in")]),n("small",{staticClass:"d-block"},[t._v(" Not already registered? click "),n("router-link",{attrs:{to:{name:"register"}}},[n("a",{attrs:{href:""}},[t._v("here")])]),t._v(" to register ")],1)])])])])},o=[],r=(n("d3b7"),n("f9c4")),c={name:"Login",created:function(){console.log("API baseURL ",r["j"]())},data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;t.authenticate()},authenticate:function(){var t=this,e=this;e.$http.post(r["d"],{username:e.username,password:e.password}).then((function(t){var n=t.data,s={username:n.data.user.username};e.$cookies.config("1d"),e.$cookies.set("user",s),e.$cookies.set("token",n.data.token),e.$router.push({name:"chat"})})).catch((function(e){t.notify(e)})).finally((function(){}))},notify:function(t){console.log(t),this.$swal({title:"Error",text:"Either username or password is incorrect!",icon:"error",toast:!1,showConfirmButton:!0})}}},l=c,u=(n("e4a2"),n("2877")),d=Object(u["a"])(l,i,o,!1,null,"46ea06d2",null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper"},[n("div",{staticClass:"header"},[t._v(" Logged in: "),n("span",[t._v(t._s(t.loggedInUsername.toUpperCase()))])]),n("div",{staticClass:"body"},[n("div",{attrs:{id:"side-bar"}},[t._m(0),n("div",{staticClass:"side-menu"},[n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:{name:"search-information"}}},[n("span",{staticClass:"mdi mdi-magnify mdi-18px"}),n("span",{staticClass:"menu-item-text"},[t._v(" Search ")])])],1),n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:{name:"private-chat"}}},[n("span",{staticClass:"mdi mdi-chat-outline"}),n("span",{staticClass:"mdi mdi-lock-open-outline",staticStyle:{"font-size":"10px"}}),n("span",{staticClass:"menu-item-text"},[t._v(" Private Chat ")])])],1),n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:{name:"chat"}}},[n("span",{staticClass:"mdi mdi-chat-outline"}),t._v(" "),n("span",{staticClass:"menu-item-text"},[t._v("Public Chat")])])],1),n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:{name:"share-status"}}},[n("span",{staticClass:"mdi mdi-share-outline"}),t._v(" "),n("span",{staticClass:"menu-item-text"},[t._v("Share Status ")])])],1),n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:{name:"post-announcement"}}},[n("span",{staticClass:"mdi mdi-share-outline"}),t._v(" "),n("span",{staticClass:"menu-item-text"},[t._v("Announcements ")])])],1),n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:{name:"all-citizens"}}},[n("span",{staticClass:"mdi mdi-folder-account-outline"}),t._v(" "),n("span",{staticClass:"menu-item-text"},[t._v("ESN Directory")])])],1)]),n("div",{staticClass:"side-footer"},[n("button",{attrs:{type:"button"},on:{click:t.logout}},[n("span",{staticClass:"btn-label"},[t._v("Sign out")]),t._v(" "),n("span",{staticClass:"mdi mdi-logout"})])])]),n("div",{attrs:{id:"content"}},[n("router-view")],1)])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h4",{staticClass:"display-5 text-center"},[t._v("ESN")])])}],f=(n("b0c0"),n("56d7")),v={name:"MainContainer",created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username},data:function(){return{loggedInUsername:""}},sockets:{connect:function(){},disconnect:function(){},newPublicChat:function(t){this.notifyUser(t),f["eventBus"].$emit("new-chat-message",t)},newAnnouncement:function(t){f["eventBus"].$emit("newAnnouncement",t)}},methods:{logout:function(){window.$cookies.isKey("user")&&(window.$cookies.remove("user"),this.$router.push({name:"login"}))},notifyUser:function(t){var e=this,n={text:" Received a new public chat message from  "+t.sender.toUpperCase(),icon:"info",toast:!0,position:"top",showConfirmButton:!1,onOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)}};"chat"!==this.$route.name&&t.sender!==this.loggedInUsername&&null===t.receiver?this.$swal(n):"private-chat"!==this.$route.name&&t.sender!==this.loggedInUsername&&t.receiver===this.loggedInUsername&&(n.text="Received a new private chat message from  "+t.sender.toUpperCase(),this.$swal(n))}}},g=v,C=(n("1338"),Object(u["a"])(g,h,p,!1,null,"126c3c3c",null)),b=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ChatRoom",{attrs:{"logged-in-username":t.loggedInUsername}})},_=[],y=(n("99af"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"chat-room"}},[n("div",{attrs:{id:"chats"}},[t._l(t.chats,(function(e){return n("div",{key:e._id,class:e.sender===t.loggedInUsername?"sent-msg-box":"received-msg-box"},[n("div",{staticClass:"message",class:e.sender===t.loggedInUsername?"sent":"received"},[n("div",{staticClass:"heading"},[n("div",{staticClass:"title"},[n("h6",{staticClass:"chat-owner"},[t._v(" "+t._s(e.sender===t.loggedInUsername?"Me":""+e.sender)+" ")]),n("small",{staticClass:"citizen-status",style:{color:t.getStatusColor(e.status)}},[t._v(" status: "+t._s(t.getStatusLabel(e.status))+" ")])]),n("small",[t._v(t._s(new Date))])]),n("div",{staticClass:"msg-body"},[t._v(" "+t._s(e.content))])])])})),t.chats.length<1?n("p",{staticClass:"text-center mt-3"},[n("small",[t._v("No chats available yet!")])]):t._e()],2),n("div",{attrs:{id:"chat-form"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newChat,expression:"newChat"}],staticClass:"input-chat",attrs:{type:"text",placeholder:"Enter message"},domProps:{value:t.newChat},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postChat(e)},input:function(e){e.target.composing||(t.newChat=e.target.value)}}}),n("button",{staticClass:"btn-post-chat",attrs:{type:"button"},on:{click:t.postChat}},[n("span",{staticClass:"mdi mdi-send mdi-24px"})])])])}),x=[],S=n("33a9"),k={name:"ChatRoom",props:{chatWithCitizen:{type:Object,default:null},loggedInUsername:{type:String,required:!0}},created:function(){this.chatWithCitizen?this.getPrivateChats():this.getPublicChats()},mounted:function(){var t=this;f["eventBus"].$on("new-chat-message",(function(e){e&&t.chatWithCitizen&&(e.sender===t.chatWithCitizen.username||e.sender===t.loggedInUsername)?t.chats=t.chats.concat(e):e&&!e.receiver&&(t.chats=t.chats.concat(e))}))},data:function(){return{loading:!1,newChat:"",chats:[]}},watch:{chatWithCitizen:function(t){t&&this.getPrivateChats()}},methods:{getStatusColor:function(t){return S["STATUSES"][t.toUpperCase()].colorCode},getStatusLabel:function(t){return"UNDEFINED"===t.toUpperCase()?"Not available":t.toUpperCase()},postChat:function(){var t=this,e=null;null!==t.chatWithCitizen&&(e=t.chatWithCitizen.username);var n={sender:t.loggedInUsername,content:t.newChat,receiver:e};0!==t.newChat.trim().length?t.$http.post(r["g"],n).then((function(){t.newChat=""})).catch((function(t){alert(t)})):alert("Can not post empty chat!")},getPublicChats:function(){var t=this;t.$http.get(r["b"]).then((function(e){var n=e.data;t.chats=n.data})).catch((function(t){alert(t)}))},getPrivateChats:function(){var t=this;t.$http.get(r["b"]+this.loggedInUsername+"/"+this.chatWithCitizen.username).then((function(e){var n=e.data;t.chats=n.data})).catch((function(t){alert(t)}))}}},z=k,U=(n("0b01"),Object(u["a"])(z,y,x,!1,null,"46baa6b0",null)),E=U.exports,$={name:"PublicChatRoom",components:{ChatRoom:E},created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username},mounted:function(){},data:function(){return{loading:!1,loggedInUsername:"",newChat:"",chats:[]}},methods:{postChat:function(){var t=this,e={author:t.loggedInUsername,content:t.newChat};0!==t.newChat.trim().length?t.$http.post(r["g"],e).then((function(){t.chats=t.chats.concat(e),t.newChat=""})).catch((function(t){alert(t)})):alert("Can not post empty chat!")},getAllChats:function(){var t=this;t.$http.get(r["b"]).then((function(e){var n=e.data;t.chats=n.data})).catch((function(t){alert(t)}))}}},N=$,A=(n("7581"),Object(u["a"])(N,w,_,!1,null,"0b6b5fde",null)),O=A.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"citizens-list-wrapper"},[n("h4",{staticClass:"display-4"},[t._v("ESN citizens directory")]),n("div",{staticClass:"wrapper"},[t.citizens.length>0?n("ul",{staticClass:"list-group"},t._l(t.citizens,(function(e){return n("li",{key:e.username,staticClass:"list-group-item"},[n("div",{staticClass:"citizen-names"},[t._v(" "+t._s(e.username)+" "),""!==e.firstName.trim()?n("span",[t._v("("+t._s(e.firstName+", "+e.lastName)+")")]):t._e(),n("small",{staticClass:"citizen-status",style:{color:t.getStatusColor(e.status)}},[t._v(" (status: "+t._s("UNDEFINED"===e.status.toUpperCase()?"Not available":""+e.status.toUpperCase())+") ")])]),n("div",{staticClass:"citizen-details"},[n("small",[n("span",{staticClass:"mdi mdi-email"}),t._v(" "+t._s(e.email))]),t._v(" "),n("small",[n("span",{staticClass:"mdi mdi-phone"}),t._v(" "+t._s(e.phone))])])])})),0):n("div",{staticClass:"text-center"},[n("small",[t._v("No citizens available yet")])])])])},T=[],P={name:"AllCitizens",created:function(){this.getAllCitizens()},data:function(){return{citizens:[]}},methods:{getStatusColor:function(t){return S["STATUSES"][t.toUpperCase()].colorCode},getAllCitizens:function(){var t=this;t.$http.get(r["c"]).then((function(e){var n=e.data;t.citizens=n.data})).catch((function(t){alert(t)}))}}},j=P,R=(n("90c0"),Object(u["a"])(j,I,T,!1,null,"b72ca196",null)),L=R.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper"},[n("div",{staticClass:"card mt-md-5 login-card"},[n("div",{staticClass:"card-body"},[n("h1",{staticClass:"display-5 text-center page-title"},[t._v("ESN Registration")]),n("form",{staticClass:"mt-sm-5"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"username"}},[t._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{href:""},on:{click:function(e){e.preventDefault(),t.collapseShown=!t.collapseShown}}},[n("span",{staticClass:"mdi",class:t.collapseShown?"mdi-minus":"mdi-plus"}),t._v(" Additional details (optional)")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[n("b-card",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter First name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Last name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])],1),n("button",{staticClass:"btn btn-primary btn-block my-2",attrs:{type:"button"},on:{click:t.register}},[t._v("Register")]),n("small",{staticClass:"d-block"},[t._v(" Already registered? click "),n("router-link",{attrs:{to:{name:"login"}}},[n("a",{attrs:{href:""}},[t._v("here")])]),t._v(" to login ")],1)],1)])])])},q=[],D=n("5843"),B={name:"UserRegistration",components:{BCollapse:D["a"]},data:function(){return{username:"",password:"",firstName:"",lastName:"",email:"",phone:"",collapseShown:!1}},methods:{register:function(){var t=this,e={username:this.username,password:this.password,firstName:this.firstName,lastName:this.lastName,email:this.email,phone:this.phone,status:"Undefined"};t.username.trim().length>0&&t.password.trim().length>0?t.$http.post(r["e"],e).then((function(){t.$router.push({name:"all-citizens"})})).catch((function(){alert("Sorry! An error occurred while trying to register")})):alert("Username and Password are required!")}}},F=B,M=(n("c976"),Object(u["a"])(F,W,q,!1,null,"279b87fc",null)),K=M.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"private-chat-room"}},[n("div",{staticClass:"side-list"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.$mq.below(600),expression:"$mq.below(600)"}],attrs:{id:"btn-toggle-citizens-list",type:"button"},on:{click:t.toggleCitizensList}},[n("span",{staticClass:"mdi mdi-account-details-outline"})]),n("div",{class:t.showCitizensList?"":"hidden",attrs:{id:"citizens-list"}},[n("h6",{staticClass:"title"},[t._v("All Citizens")]),n("ul",t._l(t.filteredCitizens,(function(e){return n("li",{key:e._id,class:null!==t.chatWithCitizen&&t.chatWithCitizen.username===e.username?"active":"",on:{click:function(n){return t.selectCitizenToChatWith(e)}}},[n("div",{staticClass:"heading"},[n("span",[t._v(t._s(e.username))]),t._v(" "),n("span",{staticClass:"mdi mdi-chevron-right"})]),n("small",{style:{color:t.getStatusColor(e.status)}},[t._v("Status: "+t._s(t.getStatusLabel(e.status)))])])})),0)])]),t.chatWithCitizen?n("ChatRoom",{staticClass:"chat-room",attrs:{"chat-with-citizen":t.chatWithCitizen,"logged-in-username":t.loggedInUsername}}):n("div",{staticClass:"chat-room no-citizen-selected"},[n("span",[t._v("Select a citizen to chat with privately")])])],1)},G=[],H=(n("4de4"),{name:"PrivateChatRoom",components:{ChatRoom:E},created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username,this.getAllCitizens()},data:function(){return{citizens:[],loggedInUsername:"",chatWithCitizen:null,showCitizensList:!0}},computed:{filteredCitizens:function(){var t=this;return this.citizens.filter((function(e){return e.username!==t.loggedInUsername}))}},watch:{"$mq.resize":"screenResize"},methods:{toggleCitizensList:function(){this.$mq.below(600)?this.showCitizensList=!this.showCitizensList:this.screenResize()},screenResize:function(){this.$mq.below(600)?this.showCitizensList=!1:this.showCitizensList=!0},getAllCitizens:function(){var t=this;t.$http.get(r["c"]).then((function(e){var n=e.data;t.citizens=n.data})).catch((function(t){alert(t)}))},selectCitizenToChatWith:function(t){this.loggedInUsername===t.username&&alert("Can't cha with oneself"),this.chatWithCitizen=t},getStatusLabel:function(t){return"UNDEFINED"===t.toUpperCase()?"Not available":t.toUpperCase()},getStatusColor:function(t){return S["STATUSES"][t.toUpperCase()].colorCode}}}),J=H,V=(n("1276"),Object(u["a"])(J,Y,G,!1,null,"0985f618",null)),Q=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content px-md-5"},[n("h3",{staticClass:"display-4"},[t._v("Share Status")]),n("div",{staticClass:"mb-2"}),n("form",{attrs:{action:""}},[t._m(0),t._l(t.statuses,(function(e,s){return n("div",{key:s,staticClass:"row mb-1 font-weight-bold",style:{color:t.getStatusColor(e.name)}},[n("div",{staticClass:"col-md-1 offset-md-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedStatus,expression:"selectedStatus"}],attrs:{name:"status",type:"radio"},domProps:{value:e.name,checked:t._q(t.selectedStatus,e.name)},on:{change:function(n){t.selectedStatus=e.name}}})]),n("div",{staticClass:"col-md-2"},[t._v(t._s(e.name))]),n("div",{staticClass:"col-md-6"},[t._v(t._s(e.description))])])})),n("button",{staticClass:"mt-3",attrs:{id:"btn-share-status",type:"button"},on:{click:t.shareStatus}},[t._v("Share status")])],2)])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row title text-black-50 mb-1"},[n("div",{staticClass:"col-md-1 offset-md-1"}),n("div",{staticClass:"col-md-2"},[t._v("Name")]),n("div",{staticClass:"col-md-6"},[t._v("Description")])])}],tt={name:"ShareStatus",created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username},data:function(){return{loggedInUsername:"",statuses:[{name:"OK",description:"I am OK, I do not need help",colorCode:"Green",icon:"Icon"},{name:"Help",description:"I need help, but this is not a life threatening emergency",colorCode:"Yellow",icon:"Icon"},{name:"Emergency",description:"I need help now, as this is a life threatening emergency!",colorCode:"Red",icon:"Icon"},{name:"Undefined",description:"The user has not been providing her status yet.",colorCode:"",icon:""}],selectedStatus:"",currentStatus:"undefined"}},methods:{getStatusColor:function(t){return S["STATUSES"][t.toUpperCase()].colorCode},shareStatus:function(){var t=this;t.$http.put(r["i"]+t.loggedInUsername,{status:t.selectedStatus}).then((function(t){console.log(t),alert("Successfully shared!")})).catch((function(t){alert(t)}))}}},et=tt,nt=(n("1240"),Object(u["a"])(et,X,Z,!1,null,"411eb34d",null)),st=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"post-announcemnt"}},[n("div",{attrs:{id:"wrapper"}},[n("div",{attrs:{id:"announcement-form"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newAnnouncement,expression:"newAnnouncement"}],staticClass:"input-announcement",attrs:{rows:"5",placeholder:"Enter announcement"},domProps:{value:t.newAnnouncement},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postAnnouncement(e)},input:function(e){e.target.composing||(t.newAnnouncement=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn-post-announcement",attrs:{type:"button"},on:{click:t.postAnnouncement}},[t._v(" Post Announcement "),n("span",{staticClass:"mdi mdi-send"})])]),n("h3",[t._v("List of announcements")]),n("div",{attrs:{id:"announcements"}},[t._l(t.announcements,(function(e,s){return n("div",{key:s,staticClass:"announcement"},[n("h4",[t._v(t._s(e.sender))]),n("div",{staticClass:"announcement-content"},[t._v(t._s(e.content))]),n("small",[t._v(t._s(e.postedAt))])])})),t.announcements.length<1?n("p",{staticClass:"text-center mt-3"},[n("small",[t._v("No announcements available yet!")])]):t._e()],2)])])},it=[],ot={name:"PostAnnouncement",created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username,this.getAllAnnouncements()},mounted:function(){var t=this;f["eventBus"].$on("newAnnouncement",(function(e){e.sender!==t.loggedInUsername&&(t.announcements=t.announcements.concat(e))}))},data:function(){return{loggedInUsername:"",newAnnouncement:"",announcements:[]}},methods:{postAnnouncement:function(){var t=this,e={sender:t.loggedInUsername,content:t.newAnnouncement};0!==t.newAnnouncement.trim().length?t.$http.post(r["f"],e).then((function(){t.announcements=t.announcements.concat(e),t.newAnnouncement=""})).catch((function(t){alert(t)})):alert("You cannot post empty announcement!")},getAllAnnouncements:function(){var t=this;t.$http.get(r["a"]).then((function(e){var n=e.data;t.announcements=n.data})).catch((function(t){alert(t)}))}}},rt=ot,ct=(n("b6d2"),Object(u["a"])(rt,at,it,!1,null,"62ad8ca3",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-page-wrapper"},[n("h4",{staticClass:"display-4 text-center mt-4 page-title"},[t._v("Search Information")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5"},[n("h5",{staticClass:"section-title display-4"},[t._v("Search Form")]),n("div",{staticClass:"search-form"},[n("label",{attrs:{for:"search-options"}},[t._v("Search context")]),n("multiselect",{attrs:{id:"search-options",options:t.searchOptions,label:"label","track-by":"label",searchable:!1,"close-on-select":!0,"show-labels":!1,placeholder:"Select context"},model:{value:t.selectedSearchOption,callback:function(e){t.selectedSearchOption=e},expression:"selectedSearchOption"}}),n("label",{attrs:{for:"search-field"}},[t._v("Search Field")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",name:"search-text",id:"search-field",placeholder:t.selectedSearchOption?t.selectedSearchOption.placeholder:"Select context first to search"},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),n("button",{attrs:{type:"button",id:"btn-search"},on:{click:t.search}},[n("span",{staticClass:"mdi mdi-magnify"}),t._v(" Search ")])],1)]),n("div",{staticClass:"col-md-7"},[n("h5",{staticClass:"section-title display-4"},[t._v("Search Results")]),n("div",{staticClass:"search-results"},[t._l(t.searchResults,(function(e,s){return n("div",{key:s,staticClass:"search-result"},[n("div",{staticClass:"heading"},[t._v(" "+t._s(e.sender?""+e.sender:""+e.username)+" "+t._s(e.status?"(status: "+e.status+" )":"")+" ")]),n("div",{staticClass:"body"},[e.postedAt?n("small",[t._v(t._s(e.postedAt))]):t._e(),n("div",{staticClass:"content"},[t._v(" "+t._s(e.content||"")+" ")])])])})),0===t.searchResults.length&&""===t.searchText.trim()?n("div",{staticClass:"search-result no-results"},[t._v(" Select options to begin searching. ")]):0===t.searchResults.length?n("div",{staticClass:"search-result no-results"},[n("span",{staticClass:"mdi mdi-alert-outline mdi-24px"}),t._v(" No results found! Try other search terms. ")]):t._e()],2)])])])},dt=[],mt=(n("7db0"),n("a15b"),n("ac1f"),n("466d"),["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),ht={name:"SearchInformation",created:function(){},data:function(){return{searchOptions:[{label:"Citizens by username",placeholder:"Type username here...",context:"citizens",criteria:"username",searchText:""},{label:"Citizens by status",placeholder:"Type status here...",context:"citizens",criteria:"status",searchText:""},{label:"Announcement",placeholder:"Type words to search for here...",context:"announcements",criteria:"content",searchText:""},{label:"Public chats",placeholder:"Type words to search for here...",context:"public_chats",criteria:"content",searchText:""},{label:"Private chats",placeholder:"Type words to search for here...",context:"private_chats",criteria:"content",searchText:""}],selectedSearchOption:null,searchText:"",searchResults:[]}},methods:{search:function(){var t=this,e=this.filterOutStopWords(this.searchText);e=e.join(" "),this.selectedSearchOption&&(this.selectedSearchOption.searchText=e,this.$http.post(r["h"],this.selectedSearchOption).then((function(e){var n=e.data;t.searchResults=n.data,t.searchText=""})))},filterOutStopWords:function(t){var e=this.breakTextIntoArrayOfWords(t);return e.filter((function(t){return!mt.find((function(e){return t===e}))}))},breakTextIntoArrayOfWords:function(t){return t.match(/\b(\w+)'?(\w+)?\b/g)}}},pt=ht,ft=(n("60bc"),n("8af1"),Object(u["a"])(pt,ut,dt,!1,null,"6ce6ab4a",null)),vt=ft.exports;s["default"].use(a["a"]);var gt=[{path:"/",name:"home",component:m},{path:"/login",name:"login",component:m},{path:"/register",name:"register",component:K},{path:"/",component:b,children:[{path:"public-chat",name:"chat",component:O,meta:{requiresAuth:!0}},{path:"citizens",name:"all-citizens",component:L,meta:{requiresAuth:!0}},{path:"status",name:"share-status",component:st,meta:{requiresAuth:!0}},{path:"private-chat",name:"private-chat",component:Q,meta:{requiresAuth:!0}},{path:"post-announcement",name:"post-announcement",component:lt,meta:{requiresAuth:!0}},{path:"search",name:"search-information",component:vt,meta:{requiresAuth:!0}}]}],Ct=new a["a"]({mode:"history",base:"/",routes:gt});e["a"]=Ct},b6d2:function(t,e,n){"use strict";var s=n("0ff4"),a=n.n(s);a.a},bef0:function(t,e,n){},c627:function(t,e,n){},c976:function(t,e,n){"use strict";var s=n("cc45"),a=n.n(s);a.a},c9c9:function(t,e,n){},cc45:function(t,e,n){},e4a2:function(t,e,n){"use strict";var s=n("356d"),a=n.n(s);a.a},e9bd:function(t,e,n){},e9d9:function(t,e,n){},f9c4:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"i",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"f",(function(){return m})),n.d(e,"h",(function(){return h}));const s="https://esn-chat-app.herokuapp.com/",a=()=>s,i="users/login",o="chats/",r="chats/",c="users/",l="users/",u="users/status/",d="announcements/",m="announcements/",h="search"}});
//# sourceMappingURL=app.e569ca08.js.map