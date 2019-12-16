import actions from "../utils/actions";
import endpoints from "../utils/endpoints"
import axios from "axios";
import paths from "../routes/paths";
import {push} from "connected-react-router";

export const signUpUser = ({userName, password, type}) => async dispatch => {
    try {
        const response = await axios.post(
            endpoints.POST_SIGN_UP_USER,
            {
                username: userName,
                password: password,
                type: type
            }
        );
        if (response.data.status === "ok") {
            dispatch(push(paths.Home.toPath()));
            dispatch(setAuthStatus(true));
            dispatch(setUser(response.data.user));
        }
    } catch (e) {
        console.error(e);
    }
};

export const signInUser = ({username, password}) => async dispatch => {
    try {
        const response = await axios.post(
            endpoints.POST_SIGN_IN_USER,
            {
                username,
                password
            }
        );
        if (response.data.status === "ok") {
            dispatch(setAuthStatus(true));
            dispatch(setUser(response.data.user));
        }
    } catch (e) {
        console.error(e);
    }
};

export const dropStateOnUnauthDispatch = () => dispatch => {
    dispatch(dropStateOnUnauth());
};

export const setAuthStatusDispatch = status => dispatch => {
    dispatch(setAuthStatus(status));
};

export const setUserDispatch = user => dispatch => {
    dispatch(setUser(user));
};

const dropStateOnUnauth = () => ({type: actions.DROP_STATE_ON_UNAUTH});

const setAuthStatus = status => ({
    payload: status,
    type: actions.SET_AUTH
});

const setUser = user => ({
    payload: user,
    type: actions.SET_USER
});