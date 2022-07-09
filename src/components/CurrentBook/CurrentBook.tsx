import React from 'react'
import styles from './Current.module.scss';

type CurrentBookProps = {
  authors: string[],
  title: string,
  categories: string[], 
  description: string, 
  smallThumbnail: string,
};


export const CurrentBook: React.FC<CurrentBookProps> = ({authors, title, categories, description, smallThumbnail}) => {

  const allCategories = categories && categories[0].split(' / ');
  
  return (
    <div className={styles.currentBook}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.book}>
        <img src={smallThumbnail} alt="" />
        <div>
          <div className={styles.info}>
            {authors && 
              <>
                <h2>Авторы</h2>
                <p className={styles.authors}>{authors.join(', ')}</p>
              </>
            }
            {categories && 
              <>
                <h3 className="mb-10">Категории</h3>
                <ul className={styles.categories}>
                  {allCategories.map((item, i) => (
                      <li key={i}>{item}</li>
                  )
                  )}
                </ul>
              </>
            }
          </div>
          {description && <h2 className="mb-10">Описание</h2>}
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  )
};

 
