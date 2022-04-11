import { createStore, applyMiddleware, combineReducers } from "redux";
import postReducer from './Post/reducer'
const rootReducer = combineReducers({
    Post:postReducer
})