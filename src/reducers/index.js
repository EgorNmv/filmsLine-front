import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";
import auth from "./authReducer";
import film from "./filmReducer";

export default history=>
    combineReducers({
        auth,
        film,
        router: connectRouter(history)
    });
