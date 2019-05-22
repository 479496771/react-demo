// import { SET_TOKEN, GET_TOKEN, TOKEN, OPEN_ADD_WINDOW, CLOSE_ADD_WINDOW } from './actionType'
import * as actionType from './actionType'
import $axios from '../../../axios/index'
import { message } from 'antd'

export const setToken = (value) => (
    {
        type: actionType.SET_TOKEN,
        value,
    }
)

export const getToken = () => (
    {
        type: actionType.GET_TOKEN,
        value: actionType.TOKEN
    }
)

export const Login = (data) => {
    //返回的这个函数可以获取store.dispatch方法
    return dispatch => {
        $axios
            .post("/login", data)
            .then(res => {
                //InfoListValueActiong 方法在本文件中，可以直接调用这个action,更改store
                //在action中创建新的action，并用dispatch方法派发给store
                if (res.data.code === 1001) {
                    const action = setToken(res.data.tokenID);
                    dispatch(action);
                    message.success(res.data.msg + '!')
                } else {
                    message.error(res.data.msg + '!')
                }
            }, err => {
                message.error('服务器错误！')
            });
    };

};

export const open_add_window = (history) => (
    {
        type: actionType.OPEN_ADD_WINDOW,
        history,
    }
)

export const close_add_window = () => (
    {
        type: actionType.CLOSE_ADD_WINDOW
    }
)

export const open_login_window = () => (
    {
        type: actionType.OPEN_LOGIN_WINDOW
    }
)

export const close_login_window = () => (
    {
        type: actionType.CLOSE_LOGIN_WINDOW
    }
)

export const openConfirmLoading = () => (
    {
        type: actionType.OPEN_CONFIRM_LOADING
    }
)

export const closeConfirmLoading = () => (
    {
        type: actionType.CLOSE_CONFIRM_LOADING
    }
)