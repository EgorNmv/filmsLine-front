import actions from "../utils/actions";
import endpoints from "../utils/endpoints"
import axios from "axios";

export const getAllFilms = () => async dispatch => {
    try {
        const response = await axios.get(
            endpoints.GET_ALL_FILMS
        );
        if (response.data.status === "ok") {
            dispatch(setFilmsList(response.data.data));
        }
    } catch (e) {
        console.error(e);
    }
};

export const getFilmById = filmId => async dispatch => {
    try {
        const response = await axios.get(
            `${endpoints.GET_FILM_BY_ID}${filmId}`,
        );
        if (response.data.status === "ok") {
            dispatch(setCurrentFilm(response.data.data));
        }
    } catch (e) {
        console.error(e);
    }
};

export const dropStateOnUnauthDispatch = () => dispatch => {
    dispatch(dropStateOnUnauth());
};

export const setFilmsListDispatch = list => dispatch => {
    dispatch(setFilmsList(list));
};

const dropStateOnUnauth = () => ({type: actions.DROP_STATE_ON_UNAUTH});

const setFilmsList = list => ({
    payload: list,
    type: actions.SET_FILMS_LIST
});

const setCurrentFilm = film => ({
    payload: film,
    type: actions.SET_CURRENT_FILM
});
