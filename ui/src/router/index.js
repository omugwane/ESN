import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import MainContainer from "../views/MainContainer";
import PublicChatRoom from "../components/PublicChatRoom";
import AllCitizens from "../components/AllCitizens";
import UserRegistration from "../views/UserRegistration";
import PrivateChatRoom from "../components/PrivateChatRoom";
import ShareStatus from "../components/ShareStatus";
import PostAnnouncement from "../components/PostAnnouncement";
import SearchInformation from "../components/SearchInformation";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
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
        component: UserRegistration
    },
    {
        path: '/',
        component: MainContainer,
        children: [
            {
                path: 'public-chat',
                name: 'chat',
                component: PublicChatRoom,
                meta: {
                    requiresAuth: true,
                }
            },
            {
                path: 'citizens',
                name: 'all-citizens',
                component: AllCitizens,
                meta: {
                    requiresAuth: true,
                }
            },
            {
                path: 'status',
                name: 'share-status',
                component: ShareStatus,
                meta: {
                    requiresAuth: true,
                }
            },
            {
                path: 'private-chat',
                name: 'private-chat',
                component: PrivateChatRoom,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'post-announcement',
                name: 'post-announcement',
                component: PostAnnouncement,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'search',
                name: 'search-information',
                component: SearchInformation,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router