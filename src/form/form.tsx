import './form.css'

import { useDispatch, useSelector } from 'react-redux';

import {addItem, changeField, changeFormMode, changeItem} from '../actions/actionsCreators';
import { RootState } from '../store/store';

export default function Form() {
    const item = useSelector((state: RootState) => state.changeField);
    const mode = useSelector((state:RootState) => state.changeFormMode);
    const dispatch = useDispatch();
    
    const SubmitHandler = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        if(item.item === '' || item.price === '') return;
        if(!mode.editMode) {
            dispatch(addItem(item));
            dispatch(changeField('item', ''));
            dispatch(changeField('price', ''));
            return;
        }

        dispatch(changeItem(mode.itemId, item.item, item.price))
        dispatch(changeField('item', ''));
        dispatch(changeField('price', ''));
        dispatch(changeFormMode(''));
    }

    const CancelHandler =(e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        dispatch(changeField('item', ''));
        dispatch(changeField('price', ''));
        dispatch(changeFormMode(''));
    }

    const changeHandler = (e: React.BaseSyntheticEvent) => {
        const {name, value} = e.target;
        const tmp = changeField(name,value);
        dispatch(tmp);
    }    
    
    return (

        <form onSubmit={SubmitHandler}>
            <input name='item' value={item.item} onChange={changeHandler}></input>
            <input name='price' value={item.price} onChange={changeHandler}></input>
            <button type='submit'>Save</button>
            <button type='reset' style={{visibility: mode.editMode ? 'visible' : 'hidden'}} onClick={CancelHandler}>Cancel</button>
        </form>
    
    )
}