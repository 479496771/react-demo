import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../../common/header/index.jsx'
import Content from '../../common/content/index.jsx'
import { actionCreate } from '../../common/header/store'
import LoginUi from '../../common/login'
import './index.css'

const Index = (props) => {
    const { loging, login, addText, history, loginWindow, openLoginWindow, closeLoginWindow, confirmLoading} = props
    return (
        <div>
            <Header isLogin={login} addClick={() => { addText(props, history) }} buttonClick={() => { openLoginWindow() }} />
            {loginWindow && (
                <LoginUi close={() =>{ closeLoginWindow() }} confirmLoading={confirmLoading} sure={(data) =>{loging(data)}} />
            )}
            <div className="contentMain">
                <Content />
            </div>
        </div>
    )
}

//把store中的数据映射到组件的props中  state就是store中的数据
const mapStateToProps = (state) => {
    return {
        login: state.get('header').get('login'),
        loginWindow: state.get('header').get('loginWindow'),
        confirmLoading: state.get('header').get('confirmLoading')
    }
}

//store.dispatch方法挂载到props上 可以让props里面的方法能够调用dispatch(),去操作store里的数据
const mapDispatchToProps = (dispatch) => {
    return {
        closeLoginWindow(){
            const action = actionCreate.close_login_window()
            dispatch(action)
        },
        openLoginWindow:() =>{
            const action = actionCreate.open_login_window()
            dispatch(action)
        },
        loging: (data) => {
            const actio = actionCreate.openConfirmLoading()
            dispatch(actio)

            const action = actionCreate.Login(data)
            dispatch(action)
        },
        addText: (props, history) => {
            if (props.login) {
                history.push('/add')
            } else {
                const action = actionCreate.open_add_window()
                dispatch(action)
            }
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))

