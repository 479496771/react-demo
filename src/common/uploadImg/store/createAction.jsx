import { add_index_img, oppen_preview_visible, close_preview_visible } from './actionType'
import { fromJS } from 'immutable'

export const addIndexImgAction = (value) => (
    {
        type: add_index_img,
        value: fromJS(value)
    }
)

export const oppenPreviewVisibleAction = (value) => (
    {
        type: oppen_preview_visible,
        value,
    }
)

export const closePreviewVisibleAction = () => (
    {
        type: close_preview_visible
    }
)