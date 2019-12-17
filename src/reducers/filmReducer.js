import actions from '../utils/actions';

const INITIAL_STATE = {
    filmsList: [],
    currentFilm: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_FILM_TO_FILM_LIST:
            return {...state, filmsList: [action.payload, ...state.filmsList]};
        case actions.SET_FILMS_LIST:
            return {...state, filmsList: action.payload};
        case actions.SET_CURRENT_FILM:
            return {...state, currentFilm: action.payload};
        case actions.DROP_STATE_ON_UNAUTH:
            return {...INITIAL_STATE};
        default:
            return state;
    }
};
