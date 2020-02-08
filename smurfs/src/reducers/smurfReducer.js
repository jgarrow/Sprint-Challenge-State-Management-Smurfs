import {
    FETCH_SMURF_DATA,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE,
    POST_NEW_SMURF,
    POST_NEW_SMURF_SUCCESS,
    POST_NEW_SMURF_FAILURE,
    DELETE_SMURF,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
    TOGGLE_IS_EDITING,
    EDIT_SMURF,
    EDIT_SMURF_SUCCESS,
    EDIT_SMURF_FAILURE
} from "../actions/smurfActions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
    isEditing: false,
    smurfToEdit: {}
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
        case POST_NEW_SMURF:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case POST_NEW_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isFetching: false,
                error: ""
            };
        case POST_NEW_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case DELETE_SMURF:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case DELETE_SMURF_SUCCESS:
            let tempArray = [...state.smurfs];
            const removeIndex = tempArray.findIndex(
                smurf => smurf.id === action.payload.id
            );

            tempArray.splice(removeIndex, 1);

            console.log("tempArray with removed smurf: ", tempArray);

            return {
                ...state,
                smurfs: tempArray,
                isFetching: false,
                error: ""
            };
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case TOGGLE_IS_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing,
                smurfToEdit: action.payload
            };
        case EDIT_SMURF:
            return {
                ...state,
                isFetching: true,
                error: "",
                isEditing: true
            };
        case EDIT_SMURF_SUCCESS:
            let tempArr = [...state.smurfs];
            const editIndex = tempArr.findIndex(
                smurf => smurf.id === action.payload.id
            );

            tempArr[editIndex] = action.payload;

            console.log("edited tempArr: ", tempArr);

            return {
                ...state,
                smurfs: tempArr,
                isFetching: false,
                error: ""
            };
        case EDIT_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
