import './actions';
import { ADD_ITEM, CHANGE_FIELD, CHANGE_FORM_MODE, CHANGE_ITEM, DELETE_ITEM } from './actions';

import { Item } from '../types';


export function changeField(item_name: string, item_price: string) {
    return {type: CHANGE_FIELD, payload:{item: item_name, price: item_price}}
}

export function addItem(item: Item) {
    return {type: ADD_ITEM, payload: item};
}

export function changeFormMode(id: string) {
    return {type: CHANGE_FORM_MODE, payload: id};
}

export function changeItem(id: string, item: string, price: string) {
    return {type: CHANGE_ITEM, payload: {id: id, item: item, price: price}};
}

export function deleteItem(id: string){
    return {type: DELETE_ITEM, payload: id};
}


