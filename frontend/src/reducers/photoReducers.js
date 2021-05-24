import {
    PHOTO_LIST_REQUEST,
    PHOTO_LIST_SUCCESS,
    PHOTO_LIST_FAIL,

} from '../constants/photoConstants'

export const photoListReducer = (state = { photos: [] }, action) => {
    switch (action.type) {
        case PHOTO_LIST_REQUEST:
            return { loading: true, photos: [] }
        case PHOTO_LIST_SUCCESS:
            return {
                loading: false,
                photos: action.payload,

            }
        case PHOTO_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

