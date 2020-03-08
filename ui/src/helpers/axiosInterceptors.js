import Vue from 'vue'
import router from "../router";
import {getBaseUrl} from './api'

export const configRequest = (config) => {

    console.log("process.env.NODE_ENV ",process.env.NODE_ENV)

    let token = Vue.$cookies.get('token')
    config.headers = {
        Accept: "application/json, text/plain, */*",
        'x-access-token': token
    }

    config.url = getBaseUrl() + config.url

    return config;
}

export const checkTokenError = (error) => {
    /*
        When the server responds with UnAuthorized access error,
        go back the user to the login page
     */
    if (error.response && error.response.status === 403) {
        router.push({name: 'login'})
    }
    return Promise.reject(error);
}