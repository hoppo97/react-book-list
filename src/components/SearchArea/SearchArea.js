import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterId, setSort } from '../../redux/filterSlice/slice';
import { AppFilter } from '../AppFilter';
import { AppSort } from '../AppSort';
import { Input } from '../UI/Input';


import styles from './SearchArea.module.scss';
export const SearchArea = ({searchValue, setSearchValue, onSubmitSearchValue }) => {

  const dispatch = useDispatch();
  const {filterId} = useSelector(state => state.filter);
  const {sortId} = useSelector(state => state.filter);


  const changeFilter = (event) => {
    if(event.target.value === 'all') {
      dispatch(setFilterId(''));
    } else {
      dispatch(setFilterId(event.target.value));
    }
  };

  const changeSort = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <div className={styles.searchArea}>
      <div className='d-flex justify-center mb-20'>
        <Input searchValue={searchValue} setSearchValue={setSearchValue}/>
        <button onClick={onSubmitSearchValue}>ok</button>
      </div>

      <div className='d-flex justify-center mb-20'>
        <AppFilter changeFilter={changeFilter} filter={filterId}/>
        <AppSort changeFilter={changeSort} filter={sortId}/>
      </div>
    </div>
  )
};


