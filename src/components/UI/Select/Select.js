import React from 'react';

import styles from './Select.module.scss';
export const Select = ({options, onChange}) => {
    
  return (
    <select className={styles.select} onChange={onChange}>
        {options.map(item => (
            <option key={item} value={item}>{item}</option>
        ))}
    </select>
  )
}
