import { addTitle, addContent } from './actionType'

import { fromJS } from 'immutable'
const defaultAddValue = fromJS({
    addTitle: '',
    addContent: '',
})


export const reducer = (state = defaultAddValue, action) => {
    switch (action.type) {
        case addTitle:
            return state.set('addTitle', action.value)

        case addContent:
            return state.set('addContent', action.value)

        default:
            break;
    }
    return state
}