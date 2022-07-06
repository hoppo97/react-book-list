import React from 'react';
import { useSelector } from 'react-redux';

import {Select} from '../UI/Select';

export const AppSort = ({changeFilter, filter}) => {
  const options = ['relevance', 'newest'];
  
  return (
    <div>
        <Select options={options} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
}
