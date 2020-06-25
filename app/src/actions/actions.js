import axios from 'axios';
export const FETCHING_FOXES_START = "FETCHING_FOXES_START";
export const FETCHING_FOXES_SUCCESS = "FETCHING_FOXES_SUCCESS";

export const getPic = () => dispatch => {
    dispatch({type: FETCHING_FOXES_START});
    axios
        .get("https://randomfox.ca/floof")
        .then(res => {
            console.log(res)
            dispatch({type: FETCHING_FOXES_SUCCESS, payload: res.data.image})
        })
        .catch(err => {
            console.log(err);
        });
};