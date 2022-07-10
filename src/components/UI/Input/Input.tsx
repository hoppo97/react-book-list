import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  searchValue: string,
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void,
}

export const Input: React.FC<InputProps> = ({searchValue, setSearchValue, onKeyPress}) => {
  return (
    <div>
        <input className={styles.input} type="text" value={searchValue} onKeyPress={onKeyPress} onChange={(event) => setSearchValue(event)}/>
    </div>  
  )
}
