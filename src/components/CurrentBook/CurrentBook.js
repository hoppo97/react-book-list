import React from 'react'
import styles from './Current.module.scss';

export const CurrentBook = ({info}) => {

  const categories = info?.categories && info?.categories[0].split(' / ');
  
  return (
    <div className={styles.currentBook}>
      <h1 className={styles.title}>{info?.title}</h1>
      <div className={styles.book}>
        <img src={info?.imageLinks.smallThumbnail} alt="" />
        <div>
          <div className={styles.info}>
            {info?.authors && 
              <>
                <h2>Авторы</h2>
                <p className={styles.authors}>{info?.authors.join(', ')}</p>
              </>
            }
            {categories && 
              <>
                <h3 className="mb-10">Категории</h3>
                <ul className={styles.categories}>
                  {categories.map((item, i) => (
                      <li key={i}>{item}</li>
                  )
                  )}
                </ul>
              </>
            }
          </div>
          {info?.description && <h2 className="mb-10">Описание</h2>}
          <p className={styles.description}>{info?.description}</p>
        </div>
      </div>
    </div>
  )
};

 
