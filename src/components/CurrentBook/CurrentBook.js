import React from 'react'
import styles from './Current.Module.scss';

export const CurrentBook = ({info}) => {

  const categories = info?.categories && info?.categories[0].split(' / ');
  
  return (
    <div className="currentBook">
      <h1 className="title">{info?.title}</h1>
      <div className="book">
        <img src={info?.imageLinks.smallThumbnail} alt="" />
        <div className="bookRight">
          <div className="info">
            {info?.authors && 
              <>
                <h2>Авторы</h2>
                <p className="authors">{info?.authors.join(', ')}</p>
              </>
            }
            {categories && 
              <>
              <h3 className="mb-10">Категории</h3>
              <ul className="categories">
                {categories.map((item, i) => (
                    <li key={i}>{item}</li>
                )
                )}
              </ul>
              </>
            }
          </div>
          {info?.description && <h2 className="mb-10">Описание</h2>}
          <p className="description">{info?.description}</p>
        </div>
      </div>
    </div>
  )
};

 
