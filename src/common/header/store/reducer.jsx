import * as actionType from './actionType'
import { fromJS } from 'immutable'

const tokenInfo = localStorage.getItem(actionType.TOKEN)
const stateDafault = fromJS({
    token: tokenInfo ? tokenInfo : "",
    login: tokenInfo ? true : false,
    addWindow: false,
    loginWindow: tokenInfo ? false : true,
    confirmLoading: false,
    alertMessage: ''
})

export const reducer = (state = stateDafault, action) => {
    switch (action.type) {
        case actionType.SET_TOKEN:
            localStorage.setItem(actionType.TOKEN, action.value)
            //immutable对象的set方法，会结合之前immutable对象的值和设置的值，
            //返回一个全新的对象,set方法可以链式调用
            return state.set('login', true).set('token', action.value).set('loginWindow', false).set('confirmLoading', false)

        case actionType.GET_TOKEN:
            let tokenValue = localStorage.getItem(actionType.TOKEN)
            return tokenValue

        case actionType.OPEN_ADD_WINDOW:
            return state.set('addWindow', true)

        case actionType.CLOSE_ADD_WINDOW:
            return state.set('addWindow', false)

        case actionType.OPEN_LOGIN_WINDOW:
            return state.set('loginWindow', true)

        case actionType.CLOSE_LOGIN_WINDOW:
            return state.set('loginWindow', false)

        case actionType.OPEN_CONFIRM_LOADING:
            return state.set('confirmLoading', true)

        default:
            break
    }

    return state
}

