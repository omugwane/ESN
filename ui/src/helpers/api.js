const devBaseUrl = 'http://localhost:3000/'
const prodBaseUrl = 'https://esn-chat-app.herokuapp.com/'

export const getBaseUrl = () => {
    // console.log("process.env.NODE_ENV ",process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development')
        return devBaseUrl;

    return prodBaseUrl
};

export const LOGIN = 'users/login';

export const GET_ALL_CHATS = 'chats/';
export const SAVE_CHAT = 'chats/';
export const GET_CHAT_BY_ID = 'chats/';
export const GET_CHATS_BY_USERNAME = 'chats/';
export const DELETE_CHAT = 'chats/';
export const UPDATE_CHAT = 'chats/';

export const GET_ALL_USERS = 'users/';
export const DELETE_USER = 'users/';
export const UPDATE_USER = 'users/';
export const REGISTER_USER = 'users/';
export const UPDATE_USER_STATUS = 'users/status/';

export const GET_ALL_ANNOUNCEMENTS = 'announcements/';
export const SAVE_ANNOUNCEMENT = 'announcements/';
export const GET_ANNOUNCEMENT_BY_ID = 'announcements/';
export const GET_ANNOUNCEMENTS_BY_USERNAME = 'announcements/';
export const DELETE_ANNOUNCEMENT = 'announcements/';
export const UPDATE_ANNOUNCEMENT = 'announcements/';

export const SEARCH = 'search'