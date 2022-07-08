import React from 'react';
import {Select} from '../UI/Select';
import { sort } from '../../utils/filters';
export const AppSort = React.memo(({changeFilter, filter}) => {
  return (
    <div>
        <Select options={sort} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
});