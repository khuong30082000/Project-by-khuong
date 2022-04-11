import { createStore, applyMiddleware, combineReducers } from "redux";
import postReducer from './Post/reducer'
import authReducer from './Auth/reducer'
const rootReducer = combineReducers({
    Post:postReducer
})