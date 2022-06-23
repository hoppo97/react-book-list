import React from 'react';

import { Select } from '../UI/Select';

export const AppFilter = ({changeFilter}) => {
  const options = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

  
  return (
    <div>
        <Select options={options} onChange={changeFilter}/>
    </div>
  )
}
