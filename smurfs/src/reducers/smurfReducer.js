import {
    FETCH_SMURF_DATA,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE
} from "../actions/smurfActions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_DATA:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
