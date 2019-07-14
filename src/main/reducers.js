import {combineReducers} from 'redux'
import MainReducer from '../pages/main/mainReducer.js'
import AuthReducer from '../auth/authReducer.js'
import HeaderReducer from '../pages/header/headerReducer.js'

const rootReducer = combineReducers({

main: MainReducer,
auth: AuthReducer,
head: HeaderReducer
})

export default rootReducer