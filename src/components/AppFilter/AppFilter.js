import React from 'react';
import {useSelector} from 'react-redux';
import { Select } from '../UI/Select';

export const AppFilter = ({changeFilter, filter}) => {
  const options = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  
  return (
    <div>
        <Select options={options} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
}
