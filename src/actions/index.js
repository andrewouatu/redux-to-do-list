import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c918_demoandrew';

export function addToDoItem(item){
    const response = axios.post(BASE_URL + API_KEY, item);

    return {
        type: types.ADD_LIST_ITEM,
        payload: response
    }
}

export function getListData(){

    const response = axios.get(BASE_URL + API_KEY);

    return {
        type: types.GET_ALL_LIST_DATA,
        payload: response
    }
}

export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/${id + API_KEY}`);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: response
    }
}
