import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger'
import postReducer from "./Post/reducer";
import authReducer from "./Auth/reducer";
import categoryReducer from "./Category/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer,
  Category: categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk,logger));
export default store;
