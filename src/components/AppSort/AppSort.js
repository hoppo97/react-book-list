import React from 'react';

import {Select} from '../UI/Select';

export const AppSort = ({changeSort}) => {
  const options = ['relevance', 'newest'];


  return (
    <div>
        <Select options={options} onChange={changeSort}/>
    </div>
  )
}
