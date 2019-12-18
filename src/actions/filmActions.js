import actions from "../utils/actions";
import endpoints from "../utils/endpoints"
import axios from "axios";
import {setUserDispatch} from "../actions/authActions";

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

export const postFilm = (name, description, img = null, producer_name, producer_id, callback, rentalStart, rentalEnd) => async dispatch => {
    try {
        const response = await axios.post(
            endpoints.POST_CREATE_FILM, {
                name,
                description,
                img,
                producer_name,
                producer_id,
                start_rental: rentalStart,
                end_rental: rentalEnd
            }
        );
        if (response.data.status === "ok") {
            const film = response.data.data;
            const response1 = await axios.post(endpoints.POST_FILM_TO_USER_FILMS_LIST, {
                userId: producer_id,
                film_name: film.name,
                film_id: film._id
            });
            if (response1.data.status === "ok") {
                dispatch(addFilmToFilmList(response.data.data));
                dispatch(setUserDispatch(response1.data.data));
                callback();
            }

        }
    } catch (e) {
        console.error(e);
    }
};

export const deleteFilmById = filmId => async dispatch => {
    try {
        const response = await axios.delete(`${endpoints.DELETE_FILM_BY_ID}${filmId}`);
        if (response.data.status === "ok") {
            dispatch(deleteFilm(filmId));
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

export const addFilmToFilmListDispatch = film => dispatch => {
    dispatch(addFilmToFilmList(film));
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

const addFilmToFilmList = film => ({
    payload: film,
    type: actions.ADD_FILM_TO_FILM_LIST
});

const deleteFilm = filmId => ({
    payload: filmId,
    type: actions.DELETE_FILM_FROM_FILM_FIST
});
