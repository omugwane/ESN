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
import VueSocketIO from 'vue-socket.io';
import vMediaQuery from 'v-media-query'

const interceptors = require('./helpers/axiosInterceptors')

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000',
}))
Vue.use(vMediaQuery)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

axios.interceptors.request.use(interceptors.configRequest, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    return response;
}, interceptors.checkTokenError);

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
