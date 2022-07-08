import React from 'react';
import { Select } from '../UI/Select';
import { filters } from '../../utils/filters';
export const AppFilter = React.memo(({changeFilter, filter}) => {
  return (
    <div>
        <Select options={filters} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
});
