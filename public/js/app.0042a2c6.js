(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1786:function(t,e,a){"use strict";var s=a("96b7"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("45fc"),a("d3b7"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o=(a("5c0b"),a("2877")),i={},l=Object(o["a"])(i,n,r,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("div",{staticClass:"card mt-md-5 login-card"},[a("div",{staticClass:"card-body"},[a("h1",{staticClass:"display-5 text-center page-title"},[t._v("ESN Login")]),a("form",{staticClass:"mt-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",id:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary btn-block my-2",attrs:{type:"button"},on:{click:t.login}},[t._v("Log in")]),a("small",{staticClass:"d-block"},[t._v(" Not already registered? click "),a("router-link",{attrs:{to:{name:"register"}}},[a("a",{attrs:{href:""}},[t._v("here")])]),t._v(" to register ")],1)])])])])},p=[],m="http://localhost:3000/",h=m+"users/login",f=m+"chats/",v=m+"chats/",g=m+"users/",b=m+"users/",C={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;t.authenticate()},authenticate:function(){var t=this;t.$http.post(h,{username:t.username,password:t.password}).then((function(e){var a=e.data,s={username:a.data.user.username};t.$cookies.config("1d"),t.$cookies.set("user",s),t.$cookies.set("token",a.data.token),t.$router.push({name:"chat"})})).catch((function(t){alert("Either username or password is incorrect!"),console.log(t)})).finally((function(){}))}}},y=C,w=(a("1786"),Object(o["a"])(y,d,p,!1,null,"4653b514",null)),_=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("div",{staticClass:"header"},[t._v(" Logged in: "),a("span",[t._v(t._s(t.loggedInUsername.toUpperCase()))])]),a("div",{staticClass:"body"},[a("div",{attrs:{id:"side-bar"}},[t._m(0),a("div",{staticClass:"side-menu"},[a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:{name:"chat"}}},[a("a",[t._v("Public Chat")])])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:{name:"all-citizens"}}},[a("a",[t._v("All Citizens")])])],1)]),a("div",{staticClass:"side-footer"},[a("button",{attrs:{type:"button"},on:{click:t.logout}},[t._v("Sign out")])])]),a("div",{attrs:{id:"content"}},[a("router-view")],1)])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title"},[a("h4",{staticClass:"display-5 text-center"},[t._v("ESN")])])}],N={name:"Chat",created:function(){this.getAllChats()},data:function(){return{loggedInUsername:"bapt",loading:!1,chats:[{username:"username",body:"This one adds a right triangle on the left, flush at the top by using .tri-right and\n.left-top to specify the location."},{username:"bapt",body:"This one adds a right triangle on the left, flush at the top by using .tri-right and\n.left-top to specify the location."},{username:"username",body:"This one adds a right triangle on the left, flush at the top by using .tri-right and\n.left-top to specify the location."},{username:"bapt",body:"This one adds a right triangle on the left, flush at the top by using .tri-right and\n.left-top to specify the location."}]}},methods:{postChat:function(){},getAllChats:function(){},logout:function(){window.$cookies.isKey("user")&&(window.$cookies.remove("user"),this.$router.push({name:"login"}))}}},E=N,$=(a("dbe3"),Object(o["a"])(E,k,x,!1,null,"86b6311a",null)),P=$.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chat-room"}},[a("div",{attrs:{id:"chats"}},[t._l(t.chats,(function(e,s){return a("div",{key:s,class:e.author===t.loggedInUsername?"sent-msg-box":"received-msg-box"},[a("div",{staticClass:"message",class:e.author===t.loggedInUsername?"sent":"received"},[a("h6",{staticClass:"chat-owner"},[t._v(t._s(e.author===t.loggedInUsername?"Me":""+e.author))]),a("div",{staticClass:"msg-body"},[t._v(" "+t._s(e.content))])])])})),t.chats.length<1?a("p",{staticClass:"text-center mt-3"},[a("small",[t._v("No chats available yet!")])]):t._e()],2),a("div",{attrs:{id:"chat-form"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newChat,expression:"newChat"}],staticClass:"input-chat",attrs:{type:"text",placeholder:"Enter message"},domProps:{value:t.newChat},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postChat(e)},input:function(e){e.target.composing||(t.newChat=e.target.value)}}}),a("button",{staticClass:"btn-post-chat",attrs:{type:"button"},on:{click:t.postChat}},[a("span",{staticClass:"mdi mdi-send mdi-24px"})])])])},j=[],z=(a("99af"),a("498a"),{name:"ChatRoom",created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username,this.getAllChats()},data:function(){return{loading:!1,loggedInUsername:"",newChat:"",chats:[]}},methods:{postChat:function(){var t=this,e={author:t.loggedInUsername,target:"",content:t.newChat};0!==t.newChat.trim().length?t.$http.post(v,e).then((function(a){var s=a.data;console.log(s),t.chats=t.chats.concat(e),t.newChat=""})).catch((function(t){alert(t)})):alert("Can not post empty chat!")},getAllChats:function(){var t=this;t.$http.get(f).then((function(e){var a=e.data;t.chats=a.data})).catch((function(t){alert(t)}))},logout:function(){}}}),A=z,S=(a("fa58"),Object(o["a"])(A,O,j,!1,null,"cc9d4298",null)),U=S.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"citizens-list-wrapper"},[a("h4",{staticClass:"display-4"},[t._v("ESN citizens directory")]),a("div",{staticClass:"wrapper"},[t.citizens.length>0?a("ul",{staticClass:"list-group"},t._l(t.citizens,(function(e){return a("li",{key:e.username,staticClass:"list-group-item"},[a("div",{staticClass:"citizen-names"},[t._v(" "+t._s(e.username)+" "),""!==e.firstName.trim()?a("span",[t._v("("+t._s(e.firstName+", "+e.lastName)+")")]):t._e()]),a("div",{staticClass:"citizen-details"},[a("small",[a("span",{staticClass:"mdi mdi-email"}),t._v(" "+t._s(e.email))]),t._v(" "),a("small",[a("span",{staticClass:"mdi mdi-phone"}),t._v(" "+t._s(e.phone))])])])})),0):a("div",{staticClass:"text-center"},[a("small",[t._v("No citizens available yet")])])])])},T=[],q={name:"AllCitizens",created:function(){this.getAllCitizens()},data:function(){return{citizens:[]}},methods:{getAllCitizens:function(){var t=this;t.$http.get(g).then((function(e){var a=e.data;t.citizens=a.data})).catch((function(t){alert(t)}))}}},R=q,L=(a("dc6e"),Object(o["a"])(R,I,T,!1,null,"4878d631",null)),M=L.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("div",{staticClass:"card mt-md-5 login-card"},[a("div",{staticClass:"card-body"},[a("h1",{staticClass:"display-5 text-center page-title"},[t._v("ESN Registration")]),a("form",{staticClass:"mt-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{href:""},on:{click:function(e){e.preventDefault(),t.collapseShown=!t.collapseShown}}},[a("span",{staticClass:"mdi",class:t.collapseShown?"mdi-minus":"mdi-plus"}),t._v(" Additional details (optional)")]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[a("b-card",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter First name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Last name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])],1),a("button",{staticClass:"btn btn-primary btn-block my-2",attrs:{type:"button"},on:{click:t.register}},[t._v("Register")]),a("small",{staticClass:"d-block"},[t._v(" Already registered? click "),a("router-link",{attrs:{to:{name:"login"}}},[a("a",{attrs:{href:""}},[t._v("here")])]),t._v(" to login ")],1)],1)])])])},K=[],B=a("5843"),D={name:"UserRegistration",components:{BCollapse:B["a"]},data:function(){return{username:"",password:"",firstName:"",lastName:"",email:"",phone:"",collapseShown:!1}},methods:{register:function(){var t=this,e={username:this.username,password:this.password,firstName:this.firstName,lastName:this.lastName,email:this.email,phone:this.phone};t.username.trim().length>0&&t.password.trim().length>0?t.$http.post(b,e).then((function(e){console.log(e),t.$router.push({name:"all-citizens"})})).catch((function(t){console.log("Register",t),alert("Sorry! An error occurred while trying to register")})):alert("Username and Password are required!")}}},F=D,G=(a("b0b0"),Object(o["a"])(F,J,K,!1,null,"2a1a3da5",null)),H=G.exports;s["default"].use(u["a"]);var Q=[{path:"/",name:"home",component:_},{path:"/login",name:"login",component:_},{path:"/register",name:"register",component:H},{path:"/",component:P,children:[{path:"chat",name:"chat",component:U,meta:{requiresAuth:!0}},{path:"citizens",name:"all-citizens",component:M,meta:{requiresAuth:!0}}]}],V=new u["a"]({mode:"history",base:"/",routes:Q}),W=V,X=a("bc3a"),Y=a.n(X),Z=a("a7fe"),tt=a.n(Z),et=a("2b27"),at=a.n(et),st=a("5f5b"),nt=a("b1e0");a("c9c9"),a("5363");s["default"].use(st["a"]),s["default"].use(nt["a"]),Y.a.interceptors.request.use((function(t){var e=s["default"].$cookies.get("token");return t.headers={Accept:"application/json, text/plain, */*","x-access-token":e},console.log("Request interceptor",t),t}),(function(t){return Promise.reject(t)})),Y.a.interceptors.response.use((function(t){return t}),(function(t){return 403===t.response.status&&W.push({name:"login"}),Promise.reject(t)})),s["default"].use(tt.a,Y.a),s["default"].use(at.a),W.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))&&!window.$cookies.isKey("user")&&a("/login"),a()})),s["default"].config.productionTip=!1,new s["default"]({router:W,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"82cd":function(t,e,a){},"96b7":function(t,e,a){},"9c0c":function(t,e,a){},a1d0:function(t,e,a){},b0b0:function(t,e,a){"use strict";var s=a("dd64"),n=a.n(s);n.a},b2eb:function(t,e,a){},c9c9:function(t,e,a){},dbe3:function(t,e,a){"use strict";var s=a("b2eb"),n=a.n(s);n.a},dc6e:function(t,e,a){"use strict";var s=a("82cd"),n=a.n(s);n.a},dd64:function(t,e,a){},fa58:function(t,e,a){"use strict";var s=a("a1d0"),n=a.n(s);n.a}});
//# sourceMappingURL=app.0042a2c6.js.map