import actions from '../utils/actions';

const INITIAL_STATE = {
    producersList: [],
    currentProducer: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SET_PRODUCERS_LIST:
            return {...state, producersList: action.payload};
        case actions.SET_CURRENT_PRODUCER:
            return {...state, currentProducer: action.payload};
        case actions.DROP_STATE_ON_UNAUTH:
            return {...INITIAL_STATE};
        default:
            return state;
    }
};
