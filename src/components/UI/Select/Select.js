import React from 'react';

import styles from './Select.module.scss';
export const Select = ({options, changeFilter, filter}) => {


  return (
    <select className={styles.select} onChange={changeFilter}>
        {options.map((item, i) => (
          <option key={i} selected={filter === item && filter} value={item}>{item}</option>
        ))}
    </select>
  )
}
