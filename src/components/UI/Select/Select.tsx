
import React from 'react';
import styles from './Select.module.scss';

type SelectProps = {
  options: string[],
  changeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  filter: string,
}
export const Select: React.FC<SelectProps> = ({options, changeFilter, filter}) => {

  const value = options.find(item => item === filter);  

  return (
    <select value={value} className={styles.select} onChange={changeFilter}>
        {options.map((item, i) => (
          <option key={i} value={item}>{item}</option>
        ))}
    </select>
  )
}
