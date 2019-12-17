import actions from "../utils/actions";
import endpoints from "../utils/endpoints"
import axios from "axios";

export const getAllProducers = () => async dispatch => {
    try {
        const response = await axios.get(
            endpoints.GET_ALL_PRODUCERS
        );
        if (response.data.status === "ok") {
            dispatch(setProducersList(response.data.data));
        }
    } catch (e) {
        console.error(e);
    }
};

export const getProducerById = producerId => async dispatch => {
    try {
        const response = await axios.get(
            `${endpoints.GET_PRODUCER_BY_ID}${producerId}`,
        );
        if (response.data.status === "ok") {
            dispatch(setCurrentProducer(response.data.data));
        }
    } catch (e) {
        console.error(e);
    }
};

export const dropStateOnUnauthDispatch = () => dispatch => {
    dispatch(dropStateOnUnauth());
};

export const setProducersListDispatch = list => dispatch => {
    dispatch(setProducersList(list));
};

const dropStateOnUnauth = () => ({type: actions.DROP_STATE_ON_UNAUTH});

const setProducersList = list => ({
    payload: list,
    type: actions.SET_PRODUCERS_LIST
});

const setCurrentProducer = producer => ({
    payload: producer,
    type: actions.SET_CURRENT_PRODUCER
});
