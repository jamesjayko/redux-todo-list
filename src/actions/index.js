import types from "./types";
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=logitech1017';

export function addItem(item) {
  const request = axios.post(BASE_URL + '/todos' + API_KEY, item);
  return {
    type: types.ADD_ITEM,
    payload: request
  };
}

export function getItems(){
  const request = axios.get(BASE_URL + '/todos' + API_KEY);
  return{
    type: types.GET_ITEMS,
    payload: request
  }
}

export function getSingleItem(id){
  const request = axios.get(BASE_URL + '/todos/' + id + API_KEY); 
  
  return {
    type: types.GET_SINGLE_ITEM,
    payload: request
  }

}

// axios.delete = http://api.prototypes.com/todos/:id#/?key=api key
// toggle complete the item and when time it was completed.