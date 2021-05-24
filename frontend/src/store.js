import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userRegisterReducer, } from './reducers/userReducers.js'
import {
    photoListReducer,
    photoDetailsReducer,
    photoDeleteReducer,
    photoCreateReducer,
    photoUpdateReducer
} from './reducers/photoReducers.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    photoList: photoListReducer,
    photoDetails: photoDetailsReducer,
    photoDelete: photoDeleteReducer,
    photoCreate: photoCreateReducer,
    photoUpdate: photoUpdateReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null




const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store