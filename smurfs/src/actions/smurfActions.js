import axios from "axios";

export const FETCH_SMURF_DATA = "FETCH_SMURF_DATA";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";
export const POST_NEW_SMURF = "POST_NEW_SMURF";
export const POST_NEW_SMURF_SUCCESS = "POST_NEW_SMURF_SUCCESS";
export const POST_NEW_SMURF_FAILURE = "POST_NEW_SMURF_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";
export const TOGGLE_IS_EDITING = "TOGGLE_IS_EDITING";
export const EDIT_SMURF = "EDIT_SMURF";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_DATA });

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("initial get request res: ", res);
            dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log("error getting smurfs: ", err);
            dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err });
        });
};

export const addSmurf = smurf => dispatch => {
    dispatch({ type: POST_NEW_SMURF });

    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log("post res: ", res);
            dispatch({ type: POST_NEW_SMURF_SUCCESS, payload: smurf });
        })
        .catch(err => {
            console.log("err posting smurf: ", err);
            dispatch({ type: POST_NEW_SMURF_FAILURE, payload: err });
        });
};

export const deleteSmurf = smurf => dispatch => {
    dispatch({ type: DELETE_SMURF });

    axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
            console.log("delete res: ", res);
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: smurf });
        })
        .catch(err => {
            console.log("delete error: ", err);
            dispatch({ type: DELETE_SMURF_FAILURE, payload: smurf });
        });
};

export const toggleIsEditing = smurfToEdit => dispatch => {
    dispatch({ type: TOGGLE_IS_EDITING, payload: smurfToEdit });
};

export const editSmurf = smurf => dispatch => {
    dispatch({ type: EDIT_SMURF });

    axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(res => {
            console.log("put request res: ", res);
            dispatch({ type: EDIT_SMURF_SUCCESS, payload: smurf });
        })
        .catch(err => {
            console.log("error editing smurf: ", err);
            dispatch({ type: EDIT_SMURF_FAILURE, payload: err });
        });
};
