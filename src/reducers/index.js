import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";
import auth from "./authReducer";
import film from "./filmReducer";
import producer from "./producerReducer";

export default history=>
    combineReducers({
        auth,
        film,
        producer,
        router: connectRouter(history)
    });
