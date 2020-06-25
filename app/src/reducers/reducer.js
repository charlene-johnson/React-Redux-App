import {FETCHING_FOXES_START, FETCHING_FOXES_SUCCESS} from "../actions/actions";

const initialState = {
    loading: false,
    picture: "",
    isFetching: false,
    error: ""
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FOXES_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_FOXES_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                picture: action.payload,
                isFetching: false
            };
        default:
            return state;
    };
};