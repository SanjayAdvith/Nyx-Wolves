import axios from 'axios'
import {
    PHOTO_LIST_REQUEST,
    PHOTO_LIST_SUCCESS,
    PHOTO_LIST_FAIL,
    PHOTO_DETAILS_FAIL,
    PHOTO_DETAILS_SUCCESS,
    PHOTO_DETAILS_REQUEST,
    PHOTO_DELETE_REQUEST,
    PHOTO_DELETE_SUCCESS,
    PHOTO_DELETE_FAIL,
    PHOTO_CREATE_SUCCESS,
    PHOTO_CREATE_REQUEST,
    PHOTO_CREATE_FAIL,
} from '../constants/photoConstants'

export const listPhotoDetails = (id) => async (
    dispatch
) => {
    try {
        dispatch({ type: PHOTO_DETAILS_REQUEST })

        const { data } = await axios.get(`/posts/${id}`)

        dispatch({
            type: PHOTO_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PHOTO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


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


export const deletePhoto = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PHOTO_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/posts/${id}`, config)

        dispatch({
            type: PHOTO_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        dispatch({
            type: PHOTO_DELETE_FAIL,
            payload: message,
        })
    }
}






export const createPhoto = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PHOTO_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/posts`, {}, config)

        dispatch({
            type: PHOTO_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        dispatch({
            type: PHOTO_CREATE_FAIL,
            payload: message,
        })
    }
}
