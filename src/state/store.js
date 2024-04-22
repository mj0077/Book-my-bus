import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import USERS from '../static/users';

const store = createStore(reducers, { step: 0, users: USERS, loggedIn: false }, applyMiddleware(thunk))

export default store