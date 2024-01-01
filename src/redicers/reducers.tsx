import { nanoid } from "nanoid";

import { ADD_ITEM, CHANGE_FIELD, CHANGE_FORM_MODE, CHANGE_ITEM, DELETE_ITEM } from "../actions/actions";
import { Item, Action } from "../types";

const initialStateChangeField = {item: '', price: ''};
const intialStateAddItem: Array<Item> = [];
const initialStateChangeFormMode = {editMode: false, itemId: ''}

export function changeFieldReducer(state=initialStateChangeField, action: Action) {
    let s;
    switch(action.type) {
        case CHANGE_FIELD:
            s = {...state, [action.payload.item]: action.payload.price};
            return s;
        default:
            return state;    
    }
}

export function changeItemsReducer(state=intialStateAddItem, action: Action) {
    
    switch(action.type) {
        case ADD_ITEM: 
            return [...state, {id: nanoid(16), item: action.payload.item, price: action.payload.price}];
        case CHANGE_ITEM:
            return state.map(item => {
                     return item.id === action.payload.id ? {...item, ['item']: action.payload.item, ['price']: action.payload.price } : item;
                    });
        case DELETE_ITEM:
                    return state.filter(item => item.id !== action.payload)
        default:
            return state;    
    }
}

export function changeFormModeReducer(state=initialStateChangeFormMode, action: Action) {
    switch(action.type) {
        case CHANGE_FORM_MODE:
            return !state.editMode ? {editMode: true, itemId: action.payload} : {editMode: false, itemId: ''}
        default:
            return state;    
    }
}

