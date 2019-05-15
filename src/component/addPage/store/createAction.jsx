import { addTitle, addContent } from './actionType'

export const addTitleAction = (value) => (
    {
        type: addTitle,
        value,
    }
)

export const addContentAction = (value) => (
    {
        type: addContent,
        value,
    }
)