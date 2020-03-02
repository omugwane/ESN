import Vue from 'vue'
import router from "../router";


export const configRequest = (config) => {

    let token = Vue.$cookies.get('token')
    config.headers = {
        Accept: "application/json, text/plain, */*",
        'x-access-token': token
    }
    // console.log("token", token)
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

// module.exports = configRequest
// module.exports = checkTokenError