import * as types from "../actions/actionTypes";


export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_AUHTOR_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}