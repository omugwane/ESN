(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0cfb0":function(t,e,s){"use strict";var n=s("8457"),a=s.n(n);a.a},"0ff4":function(t,e,s){},1:function(t,e){},"118a":function(t,e,s){"use strict";var n=s("43a9"),a=s.n(n);a.a},1240:function(t,e,s){"use strict";var n=s("e9bd"),a=s.n(n);a.a},1276:function(t,e,s){"use strict";var n=s("e9d9"),a=s.n(n);a.a},"29c7":function(t,e,s){"use strict";var n=s("bbb0"),a=s.n(n);a.a},3124:function(t,e,s){"use strict";s.r(e),s.d(e,"configRequest",(function(){return o})),s.d(e,"checkTokenError",(function(){return r}));var n=s("2b0e"),a=s("a18c"),i=s("f9c4");const o=t=>{console.log("process.env.NODE_ENV ","production");let e=n["default"].$cookies.get("token");return t.headers={Accept:"application/json, text/plain, */*","x-access-token":e},t.url=Object(i["l"])()+t.url,t},r=t=>(t.response&&403===t.response.status&&a["a"].push({name:"login"}),Promise.reject(t))},"32dc":function(t,e,s){},"33a9":function(t,e){t.exports.STATUSES={OK:{colorCode:"green"},HELP:{colorCode:"#C2AF0A"},EMERGENCY:{colorCode:"red"},UNDEFINED:{colorCode:""}}},"356d":function(t,e,s){},"43a9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("45fc"),s("d3b7"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=(s("5c0b"),s("2877")),r={},c=Object(o["a"])(r,a,i,!1,null,null,null),l=c.exports,u=s("a18c"),d=s("bc3a"),m=s.n(d),h=s("a7fe"),p=s.n(h),f=s("2b27"),v=s.n(f),g=s("5f5b"),C=s("b1e0"),b=(s("c9c9"),s("5363"),s("5132")),w=s.n(b),y=s("d706"),_=s.n(y),S=s("f9c4"),x=s("5886"),k=s("8e5f"),$=s.n(k),z=(s("4413"),s("209f")),P=s.n(z);s.d(e,"eventBus",(function(){return E})),n["default"].use(x["a"]),n["default"].use(P.a),n["default"].use(s("2ead"));var U=s("3124");n["default"].use(new w.a({debug:!0,connection:Object(S["l"])()})),n["default"].use(_.a),n["default"].component("multiselect",$.a),n["default"].use(g["a"]),n["default"].use(C["a"]),m.a.interceptors.request.use(U.configRequest,(function(t){return Promise.reject(t)})),m.a.interceptors.response.use((function(t){return t}),U.checkTokenError),n["default"].use(p.a,m.a),n["default"].use(v.a),u["a"].beforeEach((function(t,e,s){t.matched.some((function(t){return t.meta.requiresAuth}))&&!window.$cookies.isKey("user")&&s("/login"),s()}));var E=new n["default"];n["default"].config.productionTip=!1,new n["default"]({router:u["a"],render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},7581:function(t,e,s){"use strict";var n=s("8a87"),a=s.n(n);a.a},"7af9":function(t,e,s){},8457:function(t,e,s){},8710:function(t,e,s){},"8a87":function(t,e,s){},"8e90":function(t,e,s){"use strict";var n=s("32dc"),a=s.n(n);a.a},"90c0":function(t,e,s){"use strict";var n=s("8710"),a=s.n(n);a.a},"9c0c":function(t,e,s){},a18c:function(t,e,s){"use strict";var n=s("2b0e"),a=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper"},[s("div",{staticClass:"card mt-md-5 login-card"},[s("div",{staticClass:"card-body"},[s("h1",{staticClass:"display-5 text-center page-title"},[t._v("ESN Login")]),s("form",{staticClass:"mt-sm-5"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",id:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary btn-block my-2",attrs:{type:"button"},on:{click:t.login}},[t._v("Log in")]),s("small",{staticClass:"d-block"},[t._v(" Not already registered? click "),s("router-link",{attrs:{to:{name:"register"}}},[s("a",{attrs:{href:""}},[t._v("here")])]),t._v(" to register ")],1)])])])])},o=[],r=(s("d3b7"),s("f9c4")),c={name:"Login",created:function(){console.log("API baseURL ",r["l"]())},data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;t.authenticate()},authenticate:function(){var t=this,e=this;e.$http.post(r["d"],{username:e.username,password:e.password}).then((function(t){var s=t.data,n={username:s.data.user.username};e.$cookies.config("1d"),e.$cookies.set("user",n),e.$cookies.set("token",s.data.token),e.$router.push({name:"chat"})})).catch((function(e){t.notify(e)})).finally((function(){}))},notify:function(t){console.log(t),this.$swal({title:"Error",text:"Either username or password is incorrect!",icon:"error",toast:!1,showConfirmButton:!0})}}},l=c,u=(s("e4a2"),s("2877")),d=Object(u["a"])(l,i,o,!1,null,"46ea06d2",null),m=d.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper"},[s("div",{staticClass:"header"},[t._v(" Logged in: "),s("span",[t._v(t._s(t.loggedInUsername.toUpperCase()))])]),s("div",{staticClass:"body"},[s("div",{attrs:{id:"side-bar"}},[t._m(0),s("div",{staticClass:"side-menu"},[s("div",{staticClass:"menu-item"},[s("router-link",{attrs:{to:{name:"search-information"}}},[s("span",{staticClass:"mdi mdi-magnify mdi-18px"}),s("span",{staticClass:"menu-item-text"},[t._v(" Search ")])])],1),s("div",{staticClass:"menu-item"},[s("router-link",{attrs:{to:{name:"private-chat"}}},[s("span",{staticClass:"mdi mdi-chat-outline"}),s("span",{staticClass:"mdi mdi-lock-open-outline",staticStyle:{"font-size":"10px"}}),s("span",{staticClass:"menu-item-text"},[t._v(" Private Chat ")])])],1),s("div",{staticClass:"menu-item"},[s("router-link",{attrs:{to:{name:"chat"}}},[s("span",{staticClass:"mdi mdi-chat-outline"}),t._v(" "),s("span",{staticClass:"menu-item-text"},[t._v("Public Chat")])])],1),s("div",{staticClass:"menu-item"},[s("router-link",{attrs:{to:{name:"share-status"}}},[s("span",{staticClass:"mdi mdi-share-outline"}),t._v(" "),s("span",{staticClass:"menu-item-text"},[t._v("Share Status ")])])],1),s("div",{staticClass:"menu-item"},[s("router-link",{attrs:{to:{name:"post-announcement"}}},[s("span",{staticClass:"mdi mdi-share-outline"}),t._v(" "),s("span",{staticClass:"menu-item-text"},[t._v("Announcements ")])])],1),s("div",{staticClass:"menu-item"},[s("router-link",{attrs:{to:{name:"all-citizens"}}},[s("span",{staticClass:"mdi mdi-folder-account-outline"}),t._v(" "),s("span",{staticClass:"menu-item-text"},[t._v("ESN Directory")])])],1)]),s("div",{staticClass:"side-footer"},[s("button",{attrs:{type:"button"},on:{click:t.logout}},[s("span",{staticClass:"btn-label"},[t._v("Sign out")]),t._v(" "),s("span",{staticClass:"mdi mdi-logout"})])])]),s("div",{attrs:{id:"content"}},[s("router-view")],1)])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-title"},[s("h4",{staticClass:"display-5 text-center"},[t._v("ESN")])])}],f=(s("b0c0"),s("56d7")),v={name:"MainContainer",created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username},data:function(){return{loggedInUsername:""}},sockets:{connect:function(){},disconnect:function(){},newPublicChat:function(t){this.notifyUser(t),f["eventBus"].$emit("new-chat-message",t)},newAnnouncement:function(t){f["eventBus"].$emit("newAnnouncement",t)}},methods:{logout:function(){window.$cookies.isKey("user")&&(window.$cookies.remove("user"),this.$router.push({name:"login"}))},notifyUser:function(t){var e=this,s={text:" Received a new public chat message from  "+t.sender.toUpperCase(),icon:"info",toast:!0,position:"top",showConfirmButton:!1,onOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)}};"chat"!==this.$route.name&&t.sender!==this.loggedInUsername&&null===t.receiver?this.$swal(s):"private-chat"!==this.$route.name&&t.sender!==this.loggedInUsername&&t.receiver===this.loggedInUsername&&(s.text="Received a new private chat message from  "+t.sender.toUpperCase(),this.$swal(s))}}},g=v,C=(s("f731"),Object(u["a"])(g,h,p,!1,null,"c306d67c",null)),b=C.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ChatRoom",{attrs:{"logged-in-username":t.loggedInUsername}})},y=[],_=(s("99af"),s("498a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"chat-room"}},[s("div",{ref:"chatsContainer",attrs:{id:"chats"}},[t._l(t.chats,(function(e){return s("div",{key:e._id,staticClass:"chat",class:e.sender===t.loggedInUsername?"sent-msg-box":"received-msg-box"},[s("div",{staticClass:"message",class:e.sender===t.loggedInUsername?"sent":"received"},[s("div",{staticClass:"heading"},[s("div",{staticClass:"title"},[s("h6",{staticClass:"chat-owner"},[t._v(" "+t._s(e.sender===t.loggedInUsername?"Me":""+e.sender)+" ")]),s("small",{staticClass:"citizen-status",style:{color:t.getStatusColor(e.status)}},[t._v(" status: "+t._s(t.getStatusLabel(e.status))+" ")])]),s("small",[t._v(" "+t._s(t._f("moment")(e.postedAt,"dddd, MMMM Do YYYY, h:mm a"))+" ")])]),"video"===e.type?s("div",{staticClass:"video-thumbnail"},[s("VideoPlayer",{attrs:{options:t.getVideoOptions(e.fileUrl)}}),s("button",{staticClass:"open-player",on:{click:function(s){return t.showPlayer(e.fileUrl)}}},[t._v(" Open player "),s("span",{staticClass:"mdi mdi-arrow-expand"})])],1):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.content.length,expression:"chat.content.length !== 0"}],staticClass:"msg-body",class:{caption:"video"===e.type}},["video"===e.type?s("small",{staticClass:"file-caption"},[t._v("Caption")]):t._e(),t._v(" "+t._s(e.content)+" ")])])])})),t.chats.length<1?s("p",{staticClass:"text-center mt-3"},[s("small",[t._v("No chats available yet!")])]):t._e()],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.attachmentsPopupShown,expression:"attachmentsPopupShown"}],attrs:{id:"file-attachments-popup"}},[t._m(0),s("div",{staticClass:"attach-buttons"},[s("button",{attrs:{type:"button"},on:{click:function(e){return t.selectFile("video")}}},[s("span",{staticClass:"mdi mdi-video-plus"})])]),s("form",{ref:"frmFileSelector"},[s("input",{ref:"fileSelector",attrs:{type:"file",id:"file-selector",accept:"video/mp4,video/x-m4v,video/*"},on:{change:t.onFileSelection}})])]),s("div",{attrs:{id:"chat-form"}},[s("div",{staticClass:"input-chat-box"},[s("button",{attrs:{type:"button",id:"btn-open-attachment-popup"},on:{click:function(e){t.attachmentsPopupShown=!t.attachmentsPopupShown}}},[s("span",{staticClass:"mdi mdi-attachment mdi-24px"})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newChat,expression:"newChat"}],staticClass:"input-chat",attrs:{type:"text",placeholder:"Enter message"},domProps:{value:t.newChat},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postChat(e)},input:function(e){e.target.composing||(t.newChat=e.target.value)}}})]),s("button",{staticClass:"btn-post-chat",attrs:{type:"button"},on:{click:t.postChat}},[s("span",{staticClass:"mdi mdi-send mdi-24px"})])]),t.selectedFile?s("FilePreview",{attrs:{"chat-details":t.chatDetails,file:t.selectedFile,visible:t.showPreview},on:{closed:t.disposeFile}}):t._e(),s("sweet-modal",{ref:"modal",attrs:{id:"modal-player","enable-mobile-fullscreen":"","overlay-theme":"dark","modal-theme":"dark",width:"70%",blocking:""}},[s("template",{slot:"title"},[s("h5",{staticClass:"modal-title"},[t._v("Video Player")])]),s("div",{attrs:{id:"player"}},[t.playerShown?s("video-player",{attrs:{options:t.playerDetails}}):t._e()],1)],2)],1)}),S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup-header"},[s("small",[s("i",[t._v("Attach file")])])])}],x=s("33a9"),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("sweet-modal",{ref:"modal",attrs:{"enable-mobile-fullscreen":"","overlay-theme":"dark",blocking:""}},[s("template",{slot:"title"},[s("h4",{staticClass:"modal-title"},[t._v("Video Preview")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[t.file&&t.videoOptions&&t.visible?s("video-player",{attrs:{options:t.videoOptions}}):t._e()],1),s("div",{staticClass:"col-md-4 right-side"},[s("div",{staticClass:"file-details"},[s("h3",{staticClass:"subtitle"},[t._v("Details")]),s("p",[t._v("Name: "+t._s(t.file.name))]),s("p",[t._v("Size: "+t._s((t.file.size/1024/1024).toFixed(2))+" MB")]),s("p",[t._v("Type: "+t._s(t.file.type))])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col mt-3"},[s("label",{attrs:{for:"file-caption"}},[t._v("Caption")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fileCaption,expression:"fileCaption"}],attrs:{name:"caption",id:"file-caption"},domProps:{value:t.fileCaption},on:{input:function(e){e.target.composing||(t.fileCaption=e.target.value)}}}),t._v(" "),s("div",{staticClass:"actions mb-4"},[s("button",{staticClass:"btn btn-primary mr-3",on:{click:t.submitChat}},[t._v("Send")]),s("button",{staticClass:"btn btn-secondary",on:{click:t.closeModal}},[t._v("Close")]),s("loading",{attrs:{active:t.loader.loading,"can-cancel":!1,"is-full-page":!0,"background-color":t.loader.backgroundColor,opacity:t.loader.opacity,loader:t.loader.loaderType,color:t.loader.color},on:{"update:active":function(e){return t.$set(t.loader,"loading",e)}}})],1),s("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.response.success,callback:function(e){t.$set(t.response,"success",e)},expression:"response.success"}},[t._v(" "+t._s(t.response.message)+" ")]),s("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.response.error,callback:function(e){t.$set(t.response,"error",e)},expression:"response.error"}},[t._v(" "+t._s(t.response.message)+" ")])],1)])],2)],1)},$=[],z=(s("3ca3"),s("ddb0"),s("2b3d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("video",{ref:"videoPlayer",staticClass:"video-js"})])}),P=[],U=s("f0e2"),E={name:"VideoPlayer",props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.player=Object(U["a"])(this.$refs.videoPlayer,this.options,(function(){}))},beforeDestroy:function(){this.player&&this.player.dispose()},data:function(){return{player:null}},methods:{}},O=E,N=(s("8e90"),Object(u["a"])(O,z,P,!1,null,"0ff24ef6",null)),A=N.exports,T=s("6dfe"),I=s("9062"),j=s.n(I),L=(s("e40d"),{name:"FilePreview",components:{SweetModal:T["a"],VideoPlayer:A,Loading:j.a},props:{file:{type:File,default:null},fileType:{type:String,default:"video"},visible:{type:Boolean,default:!1},chatDetails:{type:Object,default:null}},mounted:function(){var t=this;this.$refs.modal.open();var e=document.querySelector("div.sweet-action-close");e.addEventListener("click",(function(){t.closeModal()}))},data:function(){return{fileCaption:"",response:{success:!1,error:!1,message:""},loader:{loading:!1,backgroundColor:"#fff",opacity:.5,loaderType:"dots",color:"#A90C1C"}}},computed:{videoOptions:function(){return"video"===this.fileType&&this.file?{autoplay:!1,controls:!0,fluid:!0,sources:[{src:URL.createObjectURL(this.file),type:"video/mp4"}]}:null}},watch:{},methods:{resetMessage:function(){this.response.success=!1,this.response.error=!1},showMessage:function(t,e){this.loader.loading=!1,this.resetMessage(),this.response.message=e,t?this.response.success=!0:this.response.error=!0},closeModal:function(){this.$emit("closed")},submitChat:function(){if(this.chatDetails.chatSender){var t=new FormData;t.append("video",this.file,this.file.name),t.append("content",this.fileCaption),t.append("sender",this.chatDetails.chatSender),t.append("receiver",this.chatDetails.chatReceiver);var e=this;e.loader.loading=!0,e.$http.post(r["j"],t).then((function(t){e.showMessage(!0,t.data.message)})).catch((function(){e.showMessage(!1,"Uploading video failed. Note that video should not be larger than 100 MB")}))}else this.showMessage(!1,"Only a registered citizen can send chats!")}}}),R=L,M=(s("29c7"),Object(u["a"])(R,k,$,!1,null,null,null)),F=M.exports,D={name:"ChatRoom",components:{FilePreview:F,VideoPlayer:A,SweetModal:T["a"]},props:{chatWithCitizen:{type:Object,default:null},loggedInUsername:{type:String,required:!0}},created:function(){this.chatWithCitizen?this.getPrivateChats():this.getPublicChats()},mounted:function(){var t=this;f["eventBus"].$on("new-chat-message",(function(e){e&&t.chatWithCitizen&&(e.sender===t.chatWithCitizen.username||e.sender===t.loggedInUsername)?t.chats=t.chats.concat(e):e&&!e.receiver&&(t.chats=t.chats.concat(e)),t.scrollToLatestMessage()}));var e=document.querySelector("#modal-player div.sweet-action-close");e.addEventListener("click",(function(){t.closePlayer()}))},data:function(){return{loading:!1,newChat:"",chats:[],attachmentsPopupShown:!1,selectedFile:null,showPreview:!1,playerShown:!1,playerDetails:{autoplay:!0,controls:!0,fluid:!0,sources:[{src:"",type:"video/mp4"}]}}},computed:{chatDetails:function(){return{chatReceiver:this.chatWithCitizen?"".concat(this.chatWithCitizen.username):null,chatSender:this.loggedInUsername}}},watch:{chatWithCitizen:function(t){t&&this.getPrivateChats()}},methods:{showPlayer:function(t){this.playerDetails.sources[0].src=r["k"]()+t,this.playerShown=!0,this.$refs.modal.open()},closePlayer:function(){this.playerShown=!1},selectFile:function(t){this.showPreview=!1,"video"===t&&this.$refs.fileSelector.click(),this.attachmentsPopupShown=!1},onFileSelection:function(){this.selectedFile=this.$refs.fileSelector.files[0],this.showPreview=!0,this.$refs.frmFileSelector.reset()},disposeFile:function(){this.showPreview=!1,this.selectedFile=null},getStatusColor:function(t){return x["STATUSES"][t.toUpperCase()].colorCode},getStatusLabel:function(t){return"UNDEFINED"===t.toUpperCase()?"Not available":t.toUpperCase()},postChat:function(){var t=this,e=null;null!==t.chatWithCitizen&&(e=t.chatWithCitizen.username);var s={sender:t.loggedInUsername,content:t.newChat,receiver:e};0!==t.newChat.trim().length?t.$http.post(r["g"],s).then((function(){t.newChat=""})).catch((function(t){alert(t)})):this.$swal({text:"Can not post empty chat!",icon:"error",toast:!1,showConfirmButton:!0})},getPublicChats:function(){var t=this;t.$http.get(r["b"]).then((function(e){var s=e.data;t.chats=s.data,t.scrollToLatestMessage()})).catch((function(t){alert(t)}))},getPrivateChats:function(){var t=this;t.$http.get(r["b"]+this.loggedInUsername+"/"+this.chatWithCitizen.username).then((function(e){var s=e.data;t.chats=s.data,t.scrollToLatestMessage()})).catch((function(t){alert(t)}))},getVideoOptions:function(t){return{autoplay:!1,controls:!0,fluid:!0,sources:[{src:r["k"]()+t,type:"video/mp4"}]}},scrollToLatestMessage:function(){var t=this;this.$nextTick((function(){t.$refs.chatsContainer.scrollTop=t.$refs.chatsContainer.scrollHeight}))}}},W=D,q=(s("0cfb0"),s("eacb"),Object(u["a"])(W,_,S,!1,null,"0dd1523c",null)),B=q.exports,V={name:"PublicChatRoom",components:{ChatRoom:B},created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username},mounted:function(){},data:function(){return{loading:!1,loggedInUsername:"",newChat:"",chats:[]}},methods:{postChat:function(){var t=this,e={author:t.loggedInUsername,content:t.newChat};0!==t.newChat.trim().length?t.$http.post(r["g"],e).then((function(){t.chats=t.chats.concat(e),t.newChat=""})).catch((function(t){alert(t)})):alert("Can not post empty chat!")},getAllChats:function(){var t=this;t.$http.get(r["b"]).then((function(e){var s=e.data;t.chats=s.data})).catch((function(t){alert(t)}))}}},Y=V,K=(s("7581"),Object(u["a"])(Y,w,y,!1,null,"0b6b5fde",null)),H=K.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"citizens-list-wrapper"},[s("h4",{staticClass:"display-4"},[t._v("ESN citizens directory")]),s("div",{staticClass:"wrapper"},[t.citizens.length>0?s("ul",{staticClass:"list-group"},t._l(t.citizens,(function(e){return s("li",{key:e.username,staticClass:"list-group-item"},[s("div",{staticClass:"citizen-names"},[t._v(" "+t._s(e.username)+" "),""!==e.firstName.trim()?s("span",[t._v("("+t._s(e.firstName+", "+e.lastName)+")")]):t._e(),s("small",{staticClass:"citizen-status",style:{color:t.getStatusColor(e.status)}},[t._v(" (status: "+t._s("UNDEFINED"===e.status.toUpperCase()?"Not available":""+e.status.toUpperCase())+") ")])]),s("div",{staticClass:"citizen-details"},[s("small",[s("span",{staticClass:"mdi mdi-email"}),t._v(" "+t._s(e.email))]),t._v(" "),s("small",[s("span",{staticClass:"mdi mdi-phone"}),t._v(" "+t._s(e.phone))])])])})),0):s("div",{staticClass:"text-center"},[s("small",[t._v("No citizens available yet")])])])])},J=[],Q={name:"AllCitizens",created:function(){this.getAllCitizens()},data:function(){return{citizens:[]}},methods:{getStatusColor:function(t){return x["STATUSES"][t.toUpperCase()].colorCode},getAllCitizens:function(){var t=this;t.$http.get(r["c"]).then((function(e){var s=e.data;t.citizens=s.data})).catch((function(t){alert(t)}))}}},X=Q,Z=(s("90c0"),Object(u["a"])(X,G,J,!1,null,"b72ca196",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper"},[s("div",{staticClass:"card mt-md-5 login-card"},[s("div",{staticClass:"card-body"},[s("h1",{staticClass:"display-5 text-center page-title"},[t._v("ESN Registration")]),s("form",{staticClass:"mt-sm-5"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{href:""},on:{click:function(e){e.preventDefault(),t.collapseShown=!t.collapseShown}}},[s("span",{staticClass:"mdi",class:t.collapseShown?"mdi-minus":"mdi-plus"}),t._v(" Additional details (optional)")]),s("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[s("b-card",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter First name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Last name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])],1),s("button",{staticClass:"btn btn-primary btn-block my-2",attrs:{type:"button"},on:{click:t.register}},[t._v("Register")]),s("small",{staticClass:"d-block"},[t._v(" Already registered? click "),s("router-link",{attrs:{to:{name:"login"}}},[s("a",{attrs:{href:""}},[t._v("here")])]),t._v(" to login ")],1)],1)])])])},st=[],nt=s("5843"),at={name:"UserRegistration",components:{BCollapse:nt["a"]},data:function(){return{username:"",password:"",firstName:"",lastName:"",email:"",phone:"",collapseShown:!1}},methods:{register:function(){var t=this,e={username:this.username,password:this.password,firstName:this.firstName,lastName:this.lastName,email:this.email,phone:this.phone,status:"Undefined"};t.username.trim().length>0&&t.password.trim().length>0?t.$http.post(r["e"],e).then((function(){t.$router.push({name:"all-citizens"})})).catch((function(){alert("Sorry! An error occurred while trying to register")})):alert("Username and Password are required!")}}},it=at,ot=(s("c976"),Object(u["a"])(it,et,st,!1,null,"279b87fc",null)),rt=ot.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"private-chat-room"}},[s("div",{staticClass:"side-list"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.$mq.below(600),expression:"$mq.below(600)"}],attrs:{id:"btn-toggle-citizens-list",type:"button"},on:{click:t.toggleCitizensList}},[s("span",{staticClass:"mdi mdi-account-details-outline"})]),s("div",{class:t.showCitizensList?"":"hidden",attrs:{id:"citizens-list"}},[s("h6",{staticClass:"title"},[t._v("All Citizens")]),s("ul",t._l(t.filteredCitizens,(function(e){return s("li",{key:e._id,class:null!==t.chatWithCitizen&&t.chatWithCitizen.username===e.username?"active":"",on:{click:function(s){return t.selectCitizenToChatWith(e)}}},[s("div",{staticClass:"heading"},[s("span",[t._v(t._s(e.username))]),t._v(" "),s("span",{staticClass:"mdi mdi-chevron-right"})]),s("small",{style:{color:t.getStatusColor(e.status)}},[t._v("Status: "+t._s(t.getStatusLabel(e.status)))])])})),0)])]),t.chatWithCitizen?s("ChatRoom",{staticClass:"chat-room",attrs:{"chat-with-citizen":t.chatWithCitizen,"logged-in-username":t.loggedInUsername}}):s("div",{staticClass:"chat-room no-citizen-selected"},[s("span",[t._v("Select a citizen to chat with privately")])])],1)},lt=[],ut=(s("4de4"),{name:"PrivateChatRoom",components:{ChatRoom:B},created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username,this.getAllCitizens()},data:function(){return{citizens:[],loggedInUsername:"",chatWithCitizen:null,showCitizensList:!0}},computed:{filteredCitizens:function(){var t=this;return this.citizens.filter((function(e){return e.username!==t.loggedInUsername}))}},watch:{"$mq.resize":"screenResize"},methods:{toggleCitizensList:function(){this.$mq.below(600)?this.showCitizensList=!this.showCitizensList:this.screenResize()},screenResize:function(){this.$mq.below(600)?this.showCitizensList=!1:this.showCitizensList=!0},getAllCitizens:function(){var t=this;t.$http.get(r["c"]).then((function(e){var s=e.data;t.citizens=s.data})).catch((function(t){alert(t)}))},selectCitizenToChatWith:function(t){this.loggedInUsername===t.username&&alert("Can't cha with oneself"),this.chatWithCitizen=t},getStatusLabel:function(t){return"UNDEFINED"===t.toUpperCase()?"Not available":t.toUpperCase()},getStatusColor:function(t){return x["STATUSES"][t.toUpperCase()].colorCode}}}),dt=ut,mt=(s("1276"),Object(u["a"])(dt,ct,lt,!1,null,"0985f618",null)),ht=mt.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content px-md-5"},[s("h3",{staticClass:"display-4"},[t._v("Share Status")]),s("div",{staticClass:"mb-2"}),s("form",{attrs:{action:""}},[t._m(0),t._l(t.statuses,(function(e,n){return s("div",{key:n,staticClass:"row mb-1 font-weight-bold",style:{color:t.getStatusColor(e.name)}},[s("div",{staticClass:"col-md-1 offset-md-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedStatus,expression:"selectedStatus"}],attrs:{name:"status",type:"radio"},domProps:{value:e.name,checked:t._q(t.selectedStatus,e.name)},on:{change:function(s){t.selectedStatus=e.name}}})]),s("div",{staticClass:"col-md-2"},[t._v(t._s(e.name))]),s("div",{staticClass:"col-md-6"},[t._v(t._s(e.description))])])})),s("button",{staticClass:"mt-3",attrs:{id:"btn-share-status",type:"button"},on:{click:t.shareStatus}},[t._v("Share status")])],2)])},ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row title text-black-50 mb-1"},[s("div",{staticClass:"col-md-1 offset-md-1"}),s("div",{staticClass:"col-md-2"},[t._v("Name")]),s("div",{staticClass:"col-md-6"},[t._v("Description")])])}],vt={name:"ShareStatus",created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username},data:function(){return{loggedInUsername:"",statuses:[{name:"OK",description:"I am OK, I do not need help",colorCode:"Green",icon:"Icon"},{name:"Help",description:"I need help, but this is not a life threatening emergency",colorCode:"Yellow",icon:"Icon"},{name:"Emergency",description:"I need help now, as this is a life threatening emergency!",colorCode:"Red",icon:"Icon"},{name:"Undefined",description:"The user has not been providing her status yet.",colorCode:"",icon:""}],selectedStatus:"",currentStatus:"undefined"}},methods:{getStatusColor:function(t){return x["STATUSES"][t.toUpperCase()].colorCode},shareStatus:function(){var t=this;t.$http.put(r["i"]+t.loggedInUsername,{status:t.selectedStatus}).then((function(t){console.log(t),alert("Successfully shared!")})).catch((function(t){alert(t)}))}}},gt=vt,Ct=(s("1240"),Object(u["a"])(gt,pt,ft,!1,null,"411eb34d",null)),bt=Ct.exports,wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"post-announcemnt"}},[s("div",{attrs:{id:"wrapper"}},[s("div",{attrs:{id:"announcement-form"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newAnnouncement,expression:"newAnnouncement"}],staticClass:"input-announcement",attrs:{rows:"5",placeholder:"Enter announcement"},domProps:{value:t.newAnnouncement},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postAnnouncement(e)},input:function(e){e.target.composing||(t.newAnnouncement=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn-post-announcement",attrs:{type:"button"},on:{click:t.postAnnouncement}},[t._v(" Post Announcement "),s("span",{staticClass:"mdi mdi-send"})])]),s("h3",[t._v("List of announcements")]),s("div",{attrs:{id:"announcements"}},[t._l(t.announcements,(function(e,n){return s("div",{key:n,staticClass:"announcement"},[s("h4",[t._v(t._s(e.sender))]),s("div",{staticClass:"announcement-content"},[t._v(t._s(e.content))]),s("small",[t._v(t._s(e.postedAt))])])})),t.announcements.length<1?s("p",{staticClass:"text-center mt-3"},[s("small",[t._v("No announcements available yet!")])]):t._e()],2)])])},yt=[],_t={name:"PostAnnouncement",created:function(){var t=this.$cookies.get("user");this.loggedInUsername=t.username,this.getAllAnnouncements()},mounted:function(){var t=this;f["eventBus"].$on("newAnnouncement",(function(e){e.sender!==t.loggedInUsername&&(t.announcements=t.announcements.concat(e))}))},data:function(){return{loggedInUsername:"",newAnnouncement:"",announcements:[]}},methods:{postAnnouncement:function(){var t=this,e={sender:t.loggedInUsername,content:t.newAnnouncement};0!==t.newAnnouncement.trim().length?t.$http.post(r["f"],e).then((function(){t.announcements=t.announcements.concat(e),t.newAnnouncement=""})).catch((function(t){alert(t)})):alert("You cannot post empty announcement!")},getAllAnnouncements:function(){var t=this;t.$http.get(r["a"]).then((function(e){var s=e.data;t.announcements=s.data})).catch((function(t){alert(t)}))}}},St=_t,xt=(s("b6d2"),Object(u["a"])(St,wt,yt,!1,null,"62ad8ca3",null)),kt=xt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-page-wrapper"},[s("h4",{staticClass:"display-4 text-center mt-4 page-title"},[t._v("Search Information")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5"},[s("h5",{staticClass:"section-title display-4"},[t._v("Search Form")]),s("div",{staticClass:"search-form"},[s("label",{attrs:{for:"search-options"}},[t._v("Search context")]),s("multiselect",{attrs:{id:"search-options",options:t.searchOptions,label:"label","track-by":"label",searchable:!1,"close-on-select":!0,"show-labels":!1,placeholder:"Select context"},model:{value:t.selectedSearchOption,callback:function(e){t.selectedSearchOption=e},expression:"selectedSearchOption"}}),s("label",{attrs:{for:"search-field"}},[t._v("Search Field")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",name:"search-text",id:"search-field",placeholder:t.selectedSearchOption?t.selectedSearchOption.placeholder:"Select context first to search"},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),s("button",{attrs:{type:"button",id:"btn-search"},on:{click:t.search}},[s("span",{staticClass:"mdi mdi-magnify"}),t._v(" Search ")])],1)]),s("div",{staticClass:"col-md-7"},[s("h5",{staticClass:"section-title display-4"},[t._v("Search Results")]),s("div",{staticClass:"search-results"},[t._l(t.searchResults,(function(e,n){return s("div",{key:n,staticClass:"search-result"},[s("div",{staticClass:"heading"},[t._v(" "+t._s(e.sender?""+e.sender:""+e.username)+" "+t._s(e.status?"(status: "+e.status+" )":"")+" ")]),s("div",{staticClass:"body"},[e.postedAt?s("small",[t._v(t._s(e.postedAt))]):t._e(),s("div",{staticClass:"content"},[t._v(" "+t._s(e.content||"")+" ")])])])})),0===t.searchResults.length?s("div",{staticClass:"search-result no-results"},[s("span",{staticClass:"mdi mdi-alert-outline mdi-24px"}),t._v(" No search results! ")]):t._e()],2)])])])},zt=[],Pt=(s("7db0"),s("a15b"),s("ac1f"),s("466d"),["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),Ut={name:"SearchInformation",created:function(){},data:function(){return{searchOptions:[{label:"Citizens by username",placeholder:"Type username here...",context:"citizens",criteria:"username",searchText:""},{label:"Citizens by status",placeholder:"Type status here...",context:"citizens",criteria:"status",searchText:""},{label:"Announcement",placeholder:"Type words to search for here...",context:"announcements",criteria:"content",searchText:""},{label:"Public chats",placeholder:"Type words to search for here...",context:"public_chats",criteria:"content",searchText:""},{label:"Private chats",placeholder:"Type words to search for here...",context:"private_chats",criteria:"content",searchText:""}],selectedSearchOption:null,searchText:"",searchResults:[]}},methods:{search:function(){var t=this,e=this.filterOutStopWords(this.searchText);e=e.join(" "),this.selectedSearchOption&&(this.selectedSearchOption.searchText=e,this.$http.post(r["h"],this.selectedSearchOption).then((function(e){var s=e.data;t.searchResults=s.data,t.searchText=""})))},filterOutStopWords:function(t){var e=this.breakTextIntoArrayOfWords(t);return e.filter((function(t){return!Pt.find((function(e){return t===e}))}))},breakTextIntoArrayOfWords:function(t){return t.match(/\b(\w+)'?(\w+)?\b/g)}}},Et=Ut,Ot=(s("60bc"),s("118a"),Object(u["a"])(Et,$t,zt,!1,null,"a65eedf8",null)),Nt=Ot.exports;n["default"].use(a["a"]);var At=[{path:"/",name:"home",component:m},{path:"/login",name:"login",component:m},{path:"/register",name:"register",component:rt},{path:"/",component:b,children:[{path:"public-chat",name:"chat",component:H,meta:{requiresAuth:!0}},{path:"citizens",name:"all-citizens",component:tt,meta:{requiresAuth:!0}},{path:"status",name:"share-status",component:bt,meta:{requiresAuth:!0}},{path:"private-chat",name:"private-chat",component:ht,meta:{requiresAuth:!0}},{path:"post-announcement",name:"post-announcement",component:kt,meta:{requiresAuth:!0}},{path:"search",name:"search-information",component:Nt,meta:{requiresAuth:!0}}]}],Tt=new a["a"]({mode:"history",base:"/",routes:At});e["a"]=Tt},aed4:function(t,e,s){},b6d2:function(t,e,s){"use strict";var n=s("0ff4"),a=s.n(n);a.a},bbb0:function(t,e,s){},c976:function(t,e,s){"use strict";var n=s("cc45"),a=s.n(n);a.a},c9c9:function(t,e,s){},cc45:function(t,e,s){},e4a2:function(t,e,s){"use strict";var n=s("356d"),a=s.n(n);a.a},e9bd:function(t,e,s){},e9d9:function(t,e,s){},eacb:function(t,e,s){"use strict";var n=s("aed4"),a=s.n(n);a.a},f731:function(t,e,s){"use strict";var n=s("7af9"),a=s.n(n);a.a},f9c4:function(t,e,s){"use strict";s.d(e,"l",(function(){return n})),s.d(e,"k",(function(){return a})),s.d(e,"d",(function(){return i})),s.d(e,"b",(function(){return o})),s.d(e,"g",(function(){return r})),s.d(e,"j",(function(){return c})),s.d(e,"c",(function(){return l})),s.d(e,"e",(function(){return u})),s.d(e,"i",(function(){return d})),s.d(e,"a",(function(){return m})),s.d(e,"f",(function(){return h})),s.d(e,"h",(function(){return p}));const n=()=>"/",a=()=>window.location.protocol+"//"+window.location.host+"/",i="users/login",o="chats/",r="chats/",c="chats/upload/",l="users/",u="users/",d="users/status/",m="announcements/",h="announcements/",p="search"}});
//# sourceMappingURL=app.cc8a02b8.js.map