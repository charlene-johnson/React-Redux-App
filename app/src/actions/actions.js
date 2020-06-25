import axios from 'axios';
export const FETCHING_FOXES_START = "FETCHING_FOXES_START";
export const FETCHING_FOXES_SUCCESS = "FETCHING_FOXES_SUCCESS";

const headers = {
    Accept: "Application/json"
  };

export const getPic = () => dispatch => {
    console.log("test")
    dispatch({type: FETCHING_FOXES_START});
    axios
        .get("https://randomfox.ca/floof", {headers})
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCHING_FOXES_SUCCESS, payload: res.data.image})
        })
        .catch(err => {
            console.log(err);
        });
};