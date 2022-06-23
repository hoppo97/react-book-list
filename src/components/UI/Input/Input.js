import React from 'react';
import styles from './Input.module.scss';

export const Input = ({searchValue, setSearchValue }) => {
  return (
    <div>
        <input className={styles.input} type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
    </div>  
  )
}
