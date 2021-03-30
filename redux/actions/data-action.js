import {SET_DATA, SET_LOADING} from "../types";
import axios from "axios";


export const getProduct = () => (dispatch) => {
    dispatch({
        type: SET_LOADING
    })

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const promise = Promise.race([
        fetch('https://api-test.innoloft.com/product/6781/', requestOptions)
            .then(response => response.json()),

    ]);

    promise.then((result) =>

        dispatch({
            type:SET_DATA,
            payload: result
        }))
        promise.catch(error => console.log(error));
}