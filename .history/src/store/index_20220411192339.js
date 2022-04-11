import { createStore, applyMiddleware, combineReducers } from "redux";
import postReducer from './Post/reducer'
import authReducer from './Auth/reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    Post:postReducer,
    Auth:authReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))
