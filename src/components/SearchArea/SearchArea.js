import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterId, setSearchValue, setSort } from '../../redux/filterSlice/slice';
import { AppFilter } from '../AppFilter';
import { AppSort } from '../AppSort';
import { Input } from '../UI/Input';


import styles from './SearchArea.module.scss';
import { fetchBooks } from '../../redux/books/slice';
export const SearchArea = React.memo(() => {

  const dispatch = useDispatch();
  
  const {filterId, sortId, searchValue} = useSelector(state => state.filter);
  const {maxResult, startIndex} = useSelector(state => state?.books);

  
  const onSubmitSearchValue = React.useCallback(() => {
    dispatch(fetchBooks({searchValue, sortId, filterId, maxResult, startIndex}));
  }, [searchValue]);

  const changeFilter = React.useCallback((event) => {
    if(event.target.value === 'all') {
      dispatch(setFilterId(''));
    } else {
      dispatch(setFilterId(event.target.value));
    }
  }, []);

  const changeSort = React.useCallback((event) => {
    dispatch(setSort(event.target.value));
  }, []);

  const changeSearchValue = React.useCallback((event) => {
    dispatch(setSearchValue(event.target.value));
  }, []);

  return (
    <div className={styles.searchArea}>
      <div className='d-flex justify-center mb-20'>
        <Input searchValue={searchValue} setSearchValue={changeSearchValue}/>
        <button onClick={onSubmitSearchValue}>search</button>
      </div>

      <div className='d-flex justify-center mb-20'>
        <AppFilter changeFilter={changeFilter} filter={filterId}/>
        <AppSort changeFilter={changeSort} filter={sortId}/>
      </div>
    </div>
  )
});


