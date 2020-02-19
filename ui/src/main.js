import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import * as VeeValidate from 'vee-validate'
import './assets/bootstrap.scss'
import '@mdi/font/css/materialdesignicons.css'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// axios.defaults.headers.common['Authorization'] = store.state.api.bearerToken
// const constants = require('./constants')
// axios.defaults.headers.post['x-access-token'] = constants.token
// "Content-Type": "application/x-www-form-urlencoded",
Vue.use(VueAxios, axios)
Vue.use(VueCookies)

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !window.$cookies.isKey('user')) {
        next('/login');
    }
    next();
})

Vue.config.productionTip = false

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')
