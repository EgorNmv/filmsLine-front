import actions from "../utils/actions";
import paths from "../routes/paths";
import {push} from "connected-react-router";
import endpoints from "../utils/endpoints"
import axios from "axios";

export const dropStateOnUnauthDispatch = () => dispatch => {
    dispatch(dropStateOnUnauth());
};

export const setAuthStatusDispatch = status => dispatch => {
    dispatch(setAuthStatus(status));
};

const dropStateOnUnauth = () => ({type: actions.DROP_STATE_ON_UNAUTH});

const setAuthStatus = status => ({
    payload: status,
    type: actions.SET_AUTH
});

export const signUpUser = async ({userName, password, type}) => {
    console.info(userName, password, type);
    try {
        const response = await axios.post(
            endpoints.SIGN_UP_USER,
            {
                username: userName,
                password: password,
                type: type
            }
        );
        if (response.data.status === "ok"){

        }
    } catch (e) {
        console.error(e);
    }
};
