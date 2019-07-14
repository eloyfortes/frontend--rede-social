import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers.js";
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const dev_tools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk,multi,promise,)(createStore)(rootReducer,dev_tools)

export default store;