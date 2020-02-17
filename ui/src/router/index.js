import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Chat from "../views/Chat";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
    },
    {
        path: '/chat',
        name: 'chat',
        component: Chat
    },
    {
        path: '/users',
        name: 'users',
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router