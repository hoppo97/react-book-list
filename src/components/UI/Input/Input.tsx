import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  searchValue: string,
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input: React.FC<InputProps> = ({searchValue, setSearchValue}) => {
  return (
    <div>
        <input className={styles.input} type="text" value={searchValue} onChange={(event) => setSearchValue(event)}/>
    </div>  
  )
}
