import { createStore, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
    Post:postReducer
})