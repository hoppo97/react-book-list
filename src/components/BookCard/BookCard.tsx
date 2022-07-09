import React from 'react'
import { Link } from 'react-router-dom';
import styles from './BookCard.module.scss';

type BookCardprops = {
  id: string,
  thumbnail: string,
  categories: string[],
  authors: string[],
  title: string,
}
export const BookCard: React.FC<BookCardprops> = React.memo(({id, authors, categories, thumbnail, title}) => {  
  
  const cartegory = (categories: string[]) => {
    const arrCategories = categories?.join('').split(' ');
    return arrCategories?.length > 1 ? arrCategories[0] : categories;
  };

  const isImage = !thumbnail ? 'Нет изображения' : thumbnail;

  return (
    <div className={styles.bookCard}>
      <Link to={`/bookPage/${id}`}>
        <img src={isImage} alt={isImage} />
        <h3>{title}</h3>
        <div className={styles.info}>
          <div className={styles.categories}>{cartegory(categories)}</div>
          <div className={styles.authors}>{authors}</div>
        </div>
      </Link>
    </div>
  )
});


