import axios from "axios";

import { Message } from "element-ui";

const service = axios.create({
    // baseURL: 'http://192.168.107.203:8080',
    // baseURL: 'http://192.168.69.203:23333',
    // baseURL: 'http://192.168.0.25:8080',
    // baseURL: 'https://www.希雅.top:22222',
    baseURL: 'http://127.0.0.1:3000',
    // baseURL: 'http://1.116.244.101:222',

    timeout: 3 * 1000
})

service.interceptors.request.use(config => {
    return config;
}, function (error) {
   return Promise.reject(error);
})

service.interceptors.response.use(res => {
    return res;
}, function (error) {
    if (error && error.Message) {
        switch (error.response.status) {
            case 400:
                error.Message = '错误请求'
                break;
            case 408:
                error.Message = '请求超时'
                break;
            case 503:
                error.Message = '服务不可用'
                break;
            case 504:
                error.Message = '网络超时'
                break;
        }
    }
})


export default service;
