import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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

axios.interceptors.request.use(function (config) {
    let token = Vue.$cookies.get('token')
    config.headers = {
        Accept: "application/json, text/plain, */*",
        'x-access-token': token
    }
    // console.log("token", token)
    console.log("Request interceptor", config)
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    /*
       When the server responds with UnAuthorized access error,
       go back the user to the login page
    */
    if (error.response.status === 403) {
        router.push({name: 'login'})
    }
    return Promise.reject(error);
});

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
    store,
    render: h => h(App)
}).$mount('#app')
