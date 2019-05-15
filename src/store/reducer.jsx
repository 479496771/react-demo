// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as headerRecucer } from '../common/header/store'
import { reducer as addReducer } from '../component/addPage/store/'
import { reducer as addImgReducer } from '../common/uploadImg/store'

export default combineReducers({
    header: headerRecucer,
    add: addReducer,
    addImg: addImgReducer
})

