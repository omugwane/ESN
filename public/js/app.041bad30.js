(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s();}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1);}a&&(i.splice(e--,1),t=r(r.s=s[0]));}return t;}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports;}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s});},r.r=function(t){'undefined'!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0});},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&'object'===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,'default',{enumerable:!0,value:t}),2&e&&'string'!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e];}.bind(null,a));return s;},r.n=function(t){var e=t&&t.__esModule?function(){return t['default'];}:function(){return t;};return r.d(e,'a',e),e;},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},r.p='/';var o=window['webpackJsonp']=window['webpackJsonp']||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,'chunk-vendors']),s();})({0:function(t,e,s){t.exports=s('56d7');},'0b01':function(t,e,s){'use strict';var a=s('c627'),n=s.n(a);n.a;},1240:function(t,e,s){'use strict';var a=s('e9bd'),n=s.n(a);n.a;},1276:function(t,e,s){'use strict';var a=s('e9d9'),n=s.n(a);n.a;},'25eb':function(t,e,s){'use strict';var a=s('701b'),n=s.n(a);n.a;},3124:function(t,e,s){'use strict';s.r(e),s.d(e,'configRequest',(function(){return r;})),s.d(e,'checkTokenError',(function(){return o;}));var a=s('2b0e'),n=s('a18c'),i=s('f9c4');const r=t=>{console.log('process.env.NODE_ENV ','production');let e=a['default'].$cookies.get('token');return t.headers={Accept:'application/json, text/plain, */*','x-access-token':e},t.url=Object(i['g'])()+t.url,t;},o=t=>(t.response&&403===t.response.status&&n['a'].push({name:'login'}),Promise.reject(t));},'33a9':function(t,e){t.exports.STATUSES={OK:{colorCode:'green'},HELP:{colorCode:'#C2AF0A'},EMERGENCY:{colorCode:'red'},UNDEFINED:{colorCode:''}};},'56d7':function(t,e,s){'use strict';s.r(e);s('45fc'),s('d3b7'),s('e260'),s('e6cf'),s('cca6'),s('a79d');var a=s('2b0e'),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{attrs:{id:'app'}},[s('router-view')],1);},i=[],r=(s('5c0b'),s('2877')),o={},c=Object(r['a'])(o,n,i,!1,null,null,null),l=c.exports,u=s('a18c'),d=s('bc3a'),m=s.n(d),p=s('a7fe'),h=s.n(p),f=s('2b27'),v=s.n(f),g=s('5f5b'),C=s('b1e0'),b=(s('c9c9'),s('5363'),s('5132')),w=s.n(b),_=s('d706'),y=s.n(_),S=s('ee98'),k=s.n(S),z=s('f9c4'),U=s('5886');s('4413');s.d(e,'eventBus',(function(){return E;})),a['default'].use(U['a']);var x=s('3124');a['default'].use(new w.a({debug:!0,connection:Object(z['g'])()})),a['default'].use(y.a),a['default'].use(k.a),a['default'].use(g['a']),a['default'].use(C['a']),m.a.interceptors.request.use(x.configRequest,(function(t){return Promise.reject(t);})),m.a.interceptors.response.use((function(t){return t;}),x.checkTokenError),a['default'].use(h.a,m.a),a['default'].use(v.a),u['a'].beforeEach((function(t,e,s){t.matched.some((function(t){return t.meta.requiresAuth;}))&&!window.$cookies.isKey('user')&&s('/login'),s();}));var E=new a['default'];a['default'].config.productionTip=!1,new a['default']({router:u['a'],render:function(t){return t(l);}}).$mount('#app');},'5c0b':function(t,e,s){'use strict';var a=s('9c0c'),n=s.n(a);n.a;},'701b':function(t,e,s){},7581:function(t,e,s){'use strict';var a=s('8a87'),n=s.n(a);n.a;},8710:function(t,e,s){},'8a87':function(t,e,s){},'90c0':function(t,e,s){'use strict';var a=s('8710'),n=s.n(a);n.a;},'9c0c':function(t,e,s){},'9ecb':function(t,e,s){},a18c:function(t,e,s){'use strict';var a=s('2b0e'),n=s('8c4f'),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{staticClass:'page-wrapper'},[s('div',{staticClass:'card mt-md-5 login-card'},[s('div',{staticClass:'card-body'},[s('h1',{staticClass:'display-5 text-center page-title'},[t._v('ESN Login')]),s('form',{staticClass:'mt-sm-5'},[s('div',{staticClass:'form-group'},[s('label',{attrs:{for:'username'}},[t._v('Username')]),s('input',{directives:[{name:'model',rawName:'v-model',value:t.username,expression:'username'}],staticClass:'form-control',attrs:{type:'text',placeholder:'Enter username',id:'username'},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value);}}})]),s('div',{staticClass:'form-group'},[s('label',{attrs:{for:'password'}},[t._v('Password')]),s('input',{directives:[{name:'model',rawName:'v-model',value:t.password,expression:'password'}],staticClass:'form-control',attrs:{type:'password',placeholder:'Enter password',id:'password'},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf('key')&&t._k(e.keyCode,'enter',13,e.key,'Enter')?null:t.login(e);},input:function(e){e.target.composing||(t.password=e.target.value);}}})]),s('button',{staticClass:'btn btn-primary btn-block my-2',attrs:{type:'button'},on:{click:t.login}},[t._v('Log in')]),s('small',{staticClass:'d-block'},[t._v(' Not already registered? click '),s('router-link',{attrs:{to:{name:'register'}}},[s('a',{attrs:{href:''}},[t._v('here')])]),t._v(' to register ')],1)])])])]);},r=[],o=(s('d3b7'),s('f9c4')),c={name:'Login',created:function(){console.log('API baseURL ',o['g']());},data:function(){return{username:'',password:''};},methods:{login:function(){var t=this;t.authenticate();},authenticate:function(){var t=this;t.$http.post(o['c'],{username:t.username,password:t.password}).then((function(e){var s=e.data,a={username:s.data.user.username};t.$cookies.config('1d'),t.$cookies.set('user',a),t.$cookies.set('token',s.data.token),t.$router.push({name:'chat'});})).catch((function(t){alert('Either username or password is incorrect!'),console.log(t);})).finally((function(){}));}}},l=c,u=(s('25eb'),s('2877')),d=Object(u['a'])(l,i,r,!1,null,'36853b0e',null),m=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{staticClass:'page-wrapper'},[s('div',{staticClass:'header'},[t._v(' Logged in: '),s('span',[t._v(t._s(t.loggedInUsername.toUpperCase()))])]),s('div',{staticClass:'body'},[s('div',{attrs:{id:'side-bar'}},[t._m(0),s('div',{staticClass:'side-menu'},[s('div',{staticClass:'menu-item'},[s('router-link',{attrs:{to:{name:'private-chat'}}},[s('span',{staticClass:'mdi mdi-chat-outline'}),s('span',{staticClass:'mdi mdi-lock-open-outline',staticStyle:{'font-size':'10px'}}),s('span',{staticClass:'menu-item-text'},[t._v('Private Chat')])])],1),s('div',{staticClass:'menu-item'},[s('router-link',{attrs:{to:{name:'chat'}}},[s('span',{staticClass:'mdi mdi-chat-outline'}),t._v(' '),s('span',{staticClass:'menu-item-text'},[t._v('Public Chat')])])],1),s('div',{staticClass:'menu-item'},[s('router-link',{attrs:{to:{name:'share-status'}}},[s('span',{staticClass:'mdi mdi-share-outline'}),t._v(' '),s('span',{staticClass:'menu-item-text'},[t._v('Share Status ')])])],1),s('div',{staticClass:'menu-item'},[s('router-link',{attrs:{to:{name:'all-citizens'}}},[s('span',{staticClass:'mdi mdi-folder-account-outline'}),t._v(' '),s('span',{staticClass:'menu-item-text'},[t._v('ESN Directory')])])],1)]),s('div',{staticClass:'side-footer'},[s('button',{attrs:{type:'button'},on:{click:t.logout}},[s('span',{staticClass:'btn-label'},[t._v('Sign out')]),t._v(' '),s('span',{staticClass:'mdi mdi-logout'})])])]),s('div',{attrs:{id:'content'}},[s('router-view')],1)])]);},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{staticClass:'page-title'},[s('h4',{staticClass:'display-5 text-center'},[t._v('ESN')])]);}],f=(s('b0c0'),s('56d7')),v={name:'MainContainer',created:function(){var t=this.$cookies.get('user');this.loggedInUsername=t.username;},data:function(){return{loggedInUsername:''};},sockets:{connect:function(){},disconnect:function(){},newPublicChat:function(t){this.notifyUser(t),f['eventBus'].$emit('new-chat-message',t);}},methods:{logout:function(){window.$cookies.isKey('user')&&(window.$cookies.remove('user'),this.$router.push({name:'login'}));},notifyUser:function(t){var e=this;if('chat'!==this.$route.name&&t.sender!==this.loggedInUsername&&null===t.receiver){var s={text:' Received a new public chat message from  '+t.sender.toUpperCase(),icon:'info',toast:!0,position:'top',showConfirmButton:!1,timer:1e4,timerProgressBar:!0,onOpen:function(t){t.addEventListener('mouseenter',e.$swal.stopTimer),t.addEventListener('mouseleave',e.$swal.resumeTimer);}};this.$swal(s);}else'private-chat'!==this.$route.name&&t.sender!==this.loggedInUsername&&t.receiver===this.loggedInUsername&&alert('Received a new private chat message from  '+t.sender.toUpperCase());}}},g=v,C=(s('ddfc'),Object(u['a'])(g,p,h,!1,null,'5c9326b3',null)),b=C.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('ChatRoom',{attrs:{'logged-in-username':t.loggedInUsername}});},_=[],y=(s('99af'),s('498a'),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{attrs:{id:'chat-room'}},[s('div',{attrs:{id:'chats'}},[t._l(t.chats,(function(e){return s('div',{key:e._id,class:e.sender===t.loggedInUsername?'sent-msg-box':'received-msg-box'},[s('div',{staticClass:'message',class:e.sender===t.loggedInUsername?'sent':'received'},[s('div',{staticClass:'heading'},[s('div',{staticClass:'title'},[s('h6',{staticClass:'chat-owner'},[t._v(' '+t._s(e.sender===t.loggedInUsername?'Me':''+e.sender)+' ')]),s('small',{staticClass:'citizen-status',style:{color:t.getStatusColor(e.status)}},[t._v(' status: '+t._s(t.getStatusLabel(e.status))+' ')])]),s('small',[t._v(t._s(new Date))])]),s('div',{staticClass:'msg-body'},[t._v(' '+t._s(e.content))])])]);})),t.chats.length<1?s('p',{staticClass:'text-center mt-3'},[s('small',[t._v('No chats available yet!')])]):t._e()],2),s('div',{attrs:{id:'chat-form'}},[s('input',{directives:[{name:'model',rawName:'v-model',value:t.newChat,expression:'newChat'}],staticClass:'input-chat',attrs:{type:'text',placeholder:'Enter message'},domProps:{value:t.newChat},on:{keyup:function(e){return!e.type.indexOf('key')&&t._k(e.keyCode,'enter',13,e.key,'Enter')?null:t.postChat(e);},input:function(e){e.target.composing||(t.newChat=e.target.value);}}}),s('button',{staticClass:'btn-post-chat',attrs:{type:'button'},on:{click:t.postChat}},[s('span',{staticClass:'mdi mdi-send mdi-24px'})])])]);}),S=[],k=s('33a9'),z={name:'ChatRoom',props:{chatWithCitizen:{type:Object,default:null},loggedInUsername:{type:String,required:!0}},created:function(){this.chatWithCitizen?this.getPrivateChats():this.getPublicChats();},mounted:function(){var t=this;f['eventBus'].$on('new-chat-message',(function(e){e&&t.chatWithCitizen&&(e.sender===t.chatWithCitizen.username||e.sender===t.loggedInUsername)?t.chats=t.chats.concat(e):e&&!e.receiver&&(t.chats=t.chats.concat(e));}));},data:function(){return{loading:!1,newChat:'',chats:[]};},watch:{chatWithCitizen:function(t){t&&this.getPrivateChats();}},methods:{getStatusColor:function(t){return k['STATUSES'][t.toUpperCase()].colorCode;},getStatusLabel:function(t){return'UNDEFINED'===t.toUpperCase()?'Not available':t.toUpperCase();},postChat:function(){var t=this,e=null;null!==t.chatWithCitizen&&(e=t.chatWithCitizen.username);var s={sender:t.loggedInUsername,content:t.newChat,receiver:e};0!==t.newChat.trim().length?t.$http.post(o['e'],s).then((function(){t.newChat='';})).catch((function(t){alert(t);})):alert('Can not post empty chat!');},getPublicChats:function(){var t=this;t.$http.get(o['a']).then((function(e){var s=e.data;t.chats=s.data;})).catch((function(t){alert(t);}));},getPrivateChats:function(){var t=this;t.$http.get(o['a']+this.loggedInUsername+'/'+this.chatWithCitizen.username).then((function(e){var s=e.data;t.chats=s.data;})).catch((function(t){alert(t);}));}}},U=z,x=(s('0b01'),Object(u['a'])(U,y,S,!1,null,'46baa6b0',null)),E=x.exports,N={name:'PublicChatRoom',components:{ChatRoom:E},created:function(){var t=this.$cookies.get('user');this.loggedInUsername=t.username;},mounted:function(){},data:function(){return{loading:!1,loggedInUsername:'',newChat:'',chats:[]};},methods:{postChat:function(){var t=this,e={author:t.loggedInUsername,content:t.newChat};0!==t.newChat.trim().length?t.$http.post(o['e'],e).then((function(){t.chats=t.chats.concat(e),t.newChat='';})).catch((function(t){alert(t);})):alert('Can not post empty chat!');},getAllChats:function(){var t=this;t.$http.get(o['a']).then((function(e){var s=e.data;t.chats=s.data;})).catch((function(t){alert(t);}));}}},$=N,I=(s('7581'),Object(u['a'])($,w,_,!1,null,'0b6b5fde',null)),P=I.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{staticClass:'citizens-list-wrapper'},[s('h4',{staticClass:'display-4'},[t._v('ESN citizens directory')]),s('div',{staticClass:'wrapper'},[t.citizens.length>0?s('ul',{staticClass:'list-group'},t._l(t.citizens,(function(e){return s('li',{key:e.username,staticClass:'list-group-item'},[s('div',{staticClass:'citizen-names'},[t._v(' '+t._s(e.username)+' '),''!==e.firstName.trim()?s('span',[t._v('('+t._s(e.firstName+', '+e.lastName)+')')]):t._e(),s('small',{staticClass:'citizen-status',style:{color:t.getStatusColor(e.status)}},[t._v(' (status: '+t._s('UNDEFINED'===e.status.toUpperCase()?'Not available':''+e.status.toUpperCase())+') ')])]),s('div',{staticClass:'citizen-details'},[s('small',[s('span',{staticClass:'mdi mdi-email'}),t._v(' '+t._s(e.email))]),t._v(' '),s('small',[s('span',{staticClass:'mdi mdi-phone'}),t._v(' '+t._s(e.phone))])])]);})),0):s('div',{staticClass:'text-center'},[s('small',[t._v('No citizens available yet')])])])]);},j=[],A={name:'AllCitizens',created:function(){this.getAllCitizens();},data:function(){return{citizens:[]};},methods:{getStatusColor:function(t){return k['STATUSES'][t.toUpperCase()].colorCode;},getAllCitizens:function(){var t=this;t.$http.get(o['b']).then((function(e){var s=e.data;t.citizens=s.data;})).catch((function(t){alert(t);}));}}},L=A,R=(s('90c0'),Object(u['a'])(L,O,j,!1,null,'b72ca196',null)),T=R.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{staticClass:'page-wrapper'},[s('div',{staticClass:'card mt-md-5 login-card'},[s('div',{staticClass:'card-body'},[s('h1',{staticClass:'display-5 text-center page-title'},[t._v('ESN Registration')]),s('form',{staticClass:'mt-sm-5'},[s('div',{staticClass:'form-group'},[s('label',{attrs:{for:'username'}},[t._v('Username')]),s('input',{directives:[{name:'model',rawName:'v-model',value:t.username,expression:'username'}],staticClass:'form-control',attrs:{type:'text',placeholder:'Enter username',id:'username'},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value);}}})]),s('div',{staticClass:'form-group'},[s('label',{attrs:{for:'password'}},[t._v('Password')]),s('input',{directives:[{name:'model',rawName:'v-model',value:t.password,expression:'password'}],staticClass:'form-control',attrs:{type:'password',placeholder:'Enter password',id:'password'},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value);}}})]),s('a',{directives:[{name:'b-toggle',rawName:'v-b-toggle.collapse-1',modifiers:{'collapse-1':!0}}],attrs:{href:''},on:{click:function(e){e.preventDefault(),t.collapseShown=!t.collapseShown;}}},[s('span',{staticClass:'mdi',class:t.collapseShown?'mdi-minus':'mdi-plus'}),t._v(' Additional details (optional)')]),s('b-collapse',{staticClass:'mt-2',attrs:{id:'collapse-1'}},[s('b-card',[s('div',{staticClass:'form-group'},[s('input',{directives:[{name:'model',rawName:'v-model',value:t.firstName,expression:'firstName'}],staticClass:'form-control',attrs:{type:'text',placeholder:'Enter First name'},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value);}}})]),s('div',{staticClass:'form-group'},[s('input',{directives:[{name:'model',rawName:'v-model',value:t.lastName,expression:'lastName'}],staticClass:'form-control',attrs:{type:'text',placeholder:'Enter Last name'},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value);}}})]),s('div',{staticClass:'form-group'},[s('input',{directives:[{name:'model',rawName:'v-model',value:t.email,expression:'email'}],staticClass:'form-control',attrs:{type:'email',placeholder:'Enter Email'},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value);}}})]),s('div',{staticClass:'form-group'},[s('input',{directives:[{name:'model',rawName:'v-model',value:t.phone,expression:'phone'}],staticClass:'form-control',attrs:{type:'text',placeholder:'Phone'},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value);}}})])])],1),s('button',{staticClass:'btn btn-primary btn-block my-2',attrs:{type:'button'},on:{click:t.register}},[t._v('Register')]),s('small',{staticClass:'d-block'},[t._v(' Already registered? click '),s('router-link',{attrs:{to:{name:'login'}}},[s('a',{attrs:{href:''}},[t._v('here')])]),t._v(' to login ')],1)],1)])])]);},W=[],D=s('5843'),M={name:'UserRegistration',components:{BCollapse:D['a']},data:function(){return{username:'',password:'',firstName:'',lastName:'',email:'',phone:'',collapseShown:!1};},methods:{register:function(){var t=this,e={username:this.username,password:this.password,firstName:this.firstName,lastName:this.lastName,email:this.email,phone:this.phone,status:'Undefined'};t.username.trim().length>0&&t.password.trim().length>0?t.$http.post(o['d'],e).then((function(){t.$router.push({name:'all-citizens'});})).catch((function(){alert('Sorry! An error occurred while trying to register');})):alert('Username and Password are required!');}}},B=M,F=(s('c976'),Object(u['a'])(B,q,W,!1,null,'279b87fc',null)),K=F.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{attrs:{id:'private-chat-room'}},[s('div',{staticClass:'side-list'},[s('button',{directives:[{name:'show',rawName:'v-show',value:t.$mq.below(600),expression:'$mq.below(600)'}],attrs:{id:'btn-toggle-citizens-list',type:'button'},on:{click:t.toggleCitizensList}},[s('span',{staticClass:'mdi mdi-account-details-outline'})]),s('div',{class:t.showCitizensList?'':'hidden',attrs:{id:'citizens-list'}},[s('h6',{staticClass:'title'},[t._v('All Citizens')]),s('ul',t._l(t.filteredCitizens,(function(e){return s('li',{key:e._id,class:null!==t.chatWithCitizen&&t.chatWithCitizen.username===e.username?'active':'',on:{click:function(s){return t.selectCitizenToChatWith(e);}}},[s('div',{staticClass:'heading'},[s('span',[t._v(t._s(e.username))]),t._v(' '),s('span',{staticClass:'mdi mdi-chevron-right'})]),s('small',{style:{color:t.getStatusColor(e.status)}},[t._v('Status: '+t._s(t.getStatusLabel(e.status)))])]);})),0)])]),t.chatWithCitizen?s('ChatRoom',{staticClass:'chat-room',attrs:{'chat-with-citizen':t.chatWithCitizen,'logged-in-username':t.loggedInUsername}}):s('div',{staticClass:'chat-room no-citizen-selected'},[s('span',[t._v('Select a citizen to chat with privately')])])],1);},H=[],J=(s('4de4'),{name:'PrivateChatRoom',components:{ChatRoom:E},created:function(){var t=this.$cookies.get('user');this.loggedInUsername=t.username,this.getAllCitizens();},data:function(){return{citizens:[],loggedInUsername:'',chatWithCitizen:null,showCitizensList:!0};},computed:{filteredCitizens:function(){var t=this;return this.citizens.filter((function(e){return e.username!==t.loggedInUsername;}));}},watch:{'$mq.resize':'screenResize'},methods:{toggleCitizensList:function(){this.$mq.below(600)?this.showCitizensList=!this.showCitizensList:this.screenResize();},screenResize:function(){this.$mq.below(600)?this.showCitizensList=!1:this.showCitizensList=!0;},getAllCitizens:function(){var t=this;t.$http.get(o['b']).then((function(e){var s=e.data;t.citizens=s.data;})).catch((function(t){alert(t);}));},selectCitizenToChatWith:function(t){this.loggedInUsername===t.username&&alert('Can\'t cha with oneself'),this.chatWithCitizen=t;},getStatusLabel:function(t){return'UNDEFINED'===t.toUpperCase()?'Not available':t.toUpperCase();},getStatusColor:function(t){return k['STATUSES'][t.toUpperCase()].colorCode;}}}),Y=J,V=(s('1276'),Object(u['a'])(Y,G,H,!1,null,'0985f618',null)),Q=V.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{staticClass:'content px-md-5'},[s('h3',{staticClass:'display-4'},[t._v('Share Status')]),s('div',{staticClass:'mb-2'}),s('form',{attrs:{action:''}},[t._m(0),t._l(t.statuses,(function(e,a){return s('div',{key:a,staticClass:'row mb-1 font-weight-bold',style:{color:t.getStatusColor(e.name)}},[s('div',{staticClass:'col-md-1 offset-md-1'},[s('input',{directives:[{name:'model',rawName:'v-model',value:t.selectedStatus,expression:'selectedStatus'}],attrs:{name:'status',type:'radio'},domProps:{value:e.name,checked:t._q(t.selectedStatus,e.name)},on:{change:function(s){t.selectedStatus=e.name;}}})]),s('div',{staticClass:'col-md-2'},[t._v(t._s(e.name))]),s('div',{staticClass:'col-md-6'},[t._v(t._s(e.description))])]);})),s('button',{staticClass:'mt-3',attrs:{id:'btn-share-status',type:'button'},on:{click:t.shareStatus}},[t._v('Share status')])],2)]);},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s('div',{staticClass:'row title text-black-50 mb-1'},[s('div',{staticClass:'col-md-1 offset-md-1'}),s('div',{staticClass:'col-md-2'},[t._v('Name')]),s('div',{staticClass:'col-md-6'},[t._v('Description')])]);}],tt={name:'ShareStatus',created:function(){var t=this.$cookies.get('user');this.loggedInUsername=t.username;},data:function(){return{loggedInUsername:'',statuses:[{name:'OK',description:'I am OK, I do not need help',colorCode:'Green',icon:'Icon'},{name:'Help',description:'I need help, but this is not a life threatening emergency',colorCode:'Yellow',icon:'Icon'},{name:'Emergency',description:'I need help now, as this is a life threatening emergency!',colorCode:'Red',icon:'Icon'},{name:'Undefined',description:'The user has not been providing her status yet.',colorCode:'',icon:''}],selectedStatus:'',currentStatus:'undefined'};},methods:{getStatusColor:function(t){return k['STATUSES'][t.toUpperCase()].colorCode;},shareStatus:function(){var t=this;t.$http.put(o['f']+t.loggedInUsername,{status:t.selectedStatus}).then((function(t){console.log(t),alert('Successfully shared!');})).catch((function(t){alert(t);}));}}},et=tt,st=(s('1240'),Object(u['a'])(et,X,Z,!1,null,'411eb34d',null)),at=st.exports;a['default'].use(n['a']);var nt=[{path:'/',name:'home',component:m},{path:'/login',name:'login',component:m},{path:'/register',name:'register',component:K},{path:'/',component:b,children:[{path:'public-chat',name:'chat',component:P,meta:{requiresAuth:!0}},{path:'citizens',name:'all-citizens',component:T,meta:{requiresAuth:!0}},{path:'status',name:'share-status',component:at,meta:{requiresAuth:!0}},{path:'private-chat',name:'private-chat',component:Q,meta:{requiresAuth:!0}}]}],it=new n['a']({mode:'history',base:'/',routes:nt});e['a']=it;},c627:function(t,e,s){},c976:function(t,e,s){'use strict';var a=s('cc45'),n=s.n(a);n.a;},c9c9:function(t,e,s){},cc45:function(t,e,s){},ddfc:function(t,e,s){'use strict';var a=s('9ecb'),n=s.n(a);n.a;},e9bd:function(t,e,s){},e9d9:function(t,e,s){},f9c4:function(t,e,s){'use strict';s.d(e,'g',(function(){return n;})),s.d(e,'c',(function(){return i;})),s.d(e,'a',(function(){return r;})),s.d(e,'e',(function(){return o;})),s.d(e,'b',(function(){return c;})),s.d(e,'d',(function(){return l;})),s.d(e,'f',(function(){return u;}));const a='https://esn-chat-app.herokuapp.com/',n=()=>a,i='users/login',r='chats/',o='chats/',c='users/',l='users/',u='users/status/';}});
//# sourceMappingURL=app.041bad30.js.map