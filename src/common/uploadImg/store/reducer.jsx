import { add_index_img, oppen_preview_visible, close_preview_visible } from './actionType'

import { fromJS } from 'immutable'

const defaultData = fromJS({
    previewVisible: false,
    previewImage: '',
    fileList: [

    ]
})


export const reducer = (state = defaultData, action) => {
    switch (action.type) {
        case add_index_img:
            return state.set('fileList', action.value)

        case oppen_preview_visible:
            return state.set('previewImage', action.value.url || action.value.thumbUrl).set('previewVisible', true)

        case close_preview_visible:
            return state.set('previewVisible', false)

        default:
            break;
    }
    return state
}