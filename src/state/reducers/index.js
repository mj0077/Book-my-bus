import { combineReducers } from "redux";
import reducer from './stepReducer'
import { loginReducer } from "./loginReducer";
import { userReducer } from './userReducer'

const reducers = combineReducers({
    step: reducer,
    users: userReducer,
    loggedIn: loginReducer
})

export default reducers