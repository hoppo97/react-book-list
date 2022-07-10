import React from 'react';
import {Select} from '../UI/Select';
import { sort } from '../../utils/filters';

type AppSortProps = {
  changeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  filter: string
}

export const AppSort: React.FC<AppSortProps> = React.memo(({changeFilter, filter}) => {
  return (
    <div>
        <Select options={sort} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
});