import axios from 'axios'
import {
    PHOTO_LIST_REQUEST,
    PHOTO_LIST_SUCCESS,
    PHOTO_LIST_FAIL,
} from '../constants/photoConstants'

export const listPhotos = () => async (
    dispatch
) => {
    try {
        dispatch({ type: PHOTO_LIST_REQUEST })

        const { data } = await axios.get('/posts')

        dispatch({
            type: PHOTO_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PHOTO_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

