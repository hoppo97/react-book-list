import React from 'react'
import { useSelector } from 'react-redux';
import { setFilterId, setSearchValue, setSort } from '../../redux/filterSlice/slice';
import { AppFilter } from '../AppFilter';
import { AppSort } from '../AppSort';
import { Input } from '../UI/Input';

import { fetchBooks } from '../../redux/books/slice';

import { selectFilter } from '../../redux/filterSlice/selectors';

import styles from './SearchArea.module.scss';
import { useAppDispatch } from '../../redux/store';
import { Button } from '../UI/Button';

export const SearchArea: React.FC = React.memo(() => {

  const dispatch = useAppDispatch();
  
  const {filterId, sortId, searchValue, startIndex, maxResult } = useSelector(selectFilter);
  
  const onSubmitSearchValue = React.useCallback(() => {
    dispatch(fetchBooks({searchValue, sortId, filterId, maxResult, startIndex}));
  }, [searchValue]);

  const changeFilter = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    if(event.target.value === 'all') {
      dispatch(setFilterId(''));
    } else {
      dispatch(setFilterId(event.target.value));
    }
  }, []);

  const changeSort = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(event.target.value));
  }, []);

  const changeSearchValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  }, []);

  return (
    <div className={styles.searchArea}>
      <div className='d-flex justify-center mb-20'>
        <Input searchValue={searchValue} setSearchValue={changeSearchValue}/>
        <Button children={'search'} onClick={onSubmitSearchValue}/>
      </div>

      <div className='d-flex justify-center mb-20'>
        <AppFilter changeFilter={changeFilter} filter={filterId}/>
        <AppSort changeFilter={changeSort} filter={sortId}/>
      </div>
    </div>
  )
});


