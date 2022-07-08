import React from 'react';
import { Select } from '../UI/Select';

export const AppFilter = React.memo(({changeFilter, filter}) => {
  const options = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

  return (
    <div>
        <Select options={options} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
});
