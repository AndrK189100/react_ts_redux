import {legacy_createStore, combineReducers, compose} from 'redux';
import {changeFieldReducer, changeItemsReducer, changeFormModeReducer} from '../redicers/reducers';

const reducer = combineReducers(
    {
        changeField: changeFieldReducer,
        addItem: changeItemsReducer,
        changeFormMode: changeFormModeReducer,
    });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
const store = legacy_createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export type RootState = ReturnType<typeof store.getState>

export default store;

