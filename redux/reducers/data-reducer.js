import {SET_DATA, SET_LOADING} from "../types";


const initialState = {
    loading: false,
    data:{}
}
const dataReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return {
                initialState
            }
    }
}

export default dataReducer;