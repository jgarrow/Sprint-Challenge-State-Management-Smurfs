import axios from "axios";

export const FETCH_SMURF_DATA = "FETCH_SMURF_DATA";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";

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
