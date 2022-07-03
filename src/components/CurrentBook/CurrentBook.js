import React from 'react'
import styles from './Current.Module.scss';

export const CurrentBook = ({info}) => {
  return (
    <div className="currentBook">
      <h1 className="title">{info?.title}</h1>
      <div className="book">
        <img width='400px' height='600px' src={info?.imageLinks.smallThumbnail} alt="" />
        <div className="bookRight">
          <p className="authors">{info?.authors.join(', ')}</p>
          <ul className="categories">
            {info?.categories && info?.categories.map(item => (
                <li>{item}</li>
            )
            )}
          </ul>
          <p className="description">{info?.description}</p>
        </div>
      </div>
    </div>
  )
};

 
