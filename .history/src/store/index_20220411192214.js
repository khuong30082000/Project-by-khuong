import { createStore, applyMiddleware, combineReducers } from "redux";
import postReducer from '../store/Post/reducer'
const rootReducer = combineReducers({
    Post:postReducer
})