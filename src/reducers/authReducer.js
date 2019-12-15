import actions from '../utils/actions';

const INITIAL_STATE = {
    isSignedIn: false,
    user: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.DROP_STATE_ON_UNAUTH:
            return {...INITIAL_STATE};
        default:
            return state;
    }
};
