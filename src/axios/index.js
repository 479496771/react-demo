import axios from 'axios'
import {
    actionType
} from '../common/header/store'
const axiosConfig = {};

// axios 配置
axiosConfig.axios = axios.create({
    baseURL: 'http://192.168.35.246:9527',
    // baseURL: 'http://loaclhost:9527',
    timeout: 1000,
});

//用来处理刷新token后重新请求的自定义变量
// axiosConfig.axios.defaults.isRetryRequest = false;

//刷新token的请求方法
if (localStorage.getItem('cooke_id')) {
    axiosConfig.axios.defaults.headers.common['X-Access-Token'] = localStorage.getItem(actionType.TOKEN)
}

// http request 拦截器
axiosConfig.axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem(actionType.TOKEN);
        if (token) {
            config.headers['X-Access-Token'] = token;
        }
        // console.log(config.headers['X-Access-Token'],'token')
        // iView.LoadingBar.start();
        console.log(config)
        return config;
    },
    err => {
        // iView.LoadingBar.finish();
        // iView.$Message.error('请求超时！');
        return Promise.reject(err);
    }
);



// http response 拦截器
axiosConfig.axios.interceptors.response.use(
    response => {
        // iView.LoadingBar.finish();
        return response
    }, error => { // 这里是返回状态码不为200时候的错误处理
        // iView.LoadingBar.finish();
        // console.log(error.response.status, 5555555555555555)
        // if (error.response.data.code === 10103) {
        // localStorage.removeItem('cooke_id')
        // router.replace({
        //     name: 'login',
        //     query: {
        //         redirect: router.currentRoute.fullPath
        //     }
        // })
        // }
        // 对响应错误做点什么
        return Promise.reject(error)
    }
);

export default axiosConfig.axios