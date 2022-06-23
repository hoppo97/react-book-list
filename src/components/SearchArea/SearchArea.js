import React from 'react'
import { AppFilter } from '../AppFilter';
import { AppSort } from '../AppSort';
import { Input } from '../UI/Input';


import styles from './SearchArea.module.scss';
export const SearchArea = ({searchValue, setSearchValue, onSubmitSearchValue, changeFilter, changeSort }) => {

  return (
    <div className={styles.searchArea}>
      <div className='d-flex justify-center mb-20'>
        <Input searchValue={searchValue} setSearchValue={setSearchValue}/>
        <button onClick={onSubmitSearchValue}>ok</button>
      </div>

      <div className='d-flex justify-center mb-20'>
        <AppFilter changeFilter={changeFilter}/>
        <AppSort changeSort={changeSort}/>
      </div>
    </div>
  )
};


