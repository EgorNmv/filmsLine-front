import axios from "axios";
import endpoints from "../utils/endpoints";
import {setAuthStatusDispatch, setUserDispatch} from "../actions/authActions";

export const signInAdmin = (adminName, adminPassword) => async dispatch => {
    try {
        const response = await axios.post(
            endpoints.POST_SIGN_IN_ADMIN,
            {
                username: adminName,
                password: adminPassword
            }
        );
        if (response.data.status === "ok") {
            dispatch(setAuthStatusDispatch(true));
            dispatch(setUserDispatch(response.data.user));
        }
    } catch (e) {
        console.error(e);
    }
};

export const getAllUsers = callback => async dispatch => {
    try {
        console.info("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESPONSEEEEEEEEEEEEEEEEEE");
        const response = await axios.get(endpoints.GET_ALL_USERS);
        if (response.data.status === "ok") {
            callback(response.data.data);
        }
    } catch (e) {
        console.info(e);
    }
};