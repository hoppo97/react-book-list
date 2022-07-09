import React from 'react';
import { Select } from '../UI/Select';
import { filters } from '../../utils/filters';

type AppFilterProps = {
  changeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  filter: string,
}
export const AppFilter: React.FC<AppFilterProps> = React.memo(({changeFilter, filter}) => {
  return (
    <div>
        <Select options={filters} changeFilter={changeFilter} filter={filter}/>
    </div>
  )
});
