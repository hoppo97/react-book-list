import React from 'react';
import {Select} from '../UI/Select';

export const AppSort = React.memo(({changeFilter, filter}) => {
  const options = ['relevance', 'newest'];
  
  return (
    <div>
        <Select options={options} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
});