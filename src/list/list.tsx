import './list.css'

import { useDispatch, useSelector } from 'react-redux';

import { Item } from '../types';
import { RootState } from '../store/store';
import { changeField, changeFormMode, deleteItem } from '../actions/actionsCreators';
import { useState } from 'react';

export default function List() {

    const [filter, setFilter] = useState('');

    const dispatch = useDispatch();
    const items = useSelector((state:RootState) => state.addItem);
    const mode = useSelector((state:RootState) => state.changeFormMode);    
    
    const ChangeHandler = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        const [item] = items.filter(item => item.id === e.target.parentElement.id)
        dispatch(changeField('item', item.item));
        dispatch(changeField('price', item.price));
        dispatch(changeFormMode(e.target.parentElement.id));
    }

    const DeleteHandler = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        dispatch(deleteItem(e.target.parentElement.id));
    }
    
    const ChangeFilterHandler = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    return (
        <div className='container'>
            <div className='filter__container'>
                <input className='filter' value={filter} type='text' 
                    placeholder='filter' onChange={ChangeFilterHandler} disabled={mode.editMode}></input>
            </div>
            <ul className='list'>
                {items.filter(item => {
                    if(filter === '') return true;
                    return item.item.startsWith(filter) ? true : false
                }).map((item: Item) => 
                            <li key={item.id} id={item.id} className='list__element'>
                                <div className='list__element-info'>
                                    <span className='item__name'>{item.item}</span>
                                    <span className='price'>{item.price}</span>
                                </div>
                                <button onClick={ChangeHandler} disabled={mode.editMode}>&#9997;</button>
                                <button onClick={DeleteHandler} disabled={mode.editMode}>&#10060;</button>
                            </li>)}
            </ul>
        </div>
    )
}