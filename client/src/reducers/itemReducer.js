import uuid from 'react-uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs'},
        { id: uuid(), name: 'Milk'},
        { id: uuid(), name: 'Chocolate'},
        { id: uuid(), name: 'Oats'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
            default:
                return state;
    }
}