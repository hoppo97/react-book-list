import React from 'react'
import { useParams } from 'react-router-dom';

import styles from './Current.Module.scss';

export const CurrentBook = () => {
  const {id} = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

 
