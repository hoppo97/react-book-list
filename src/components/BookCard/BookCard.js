import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './BookCard.module.scss';
export const BookCard = ({id, volumeInfo}) => {  
  const isImage = !volumeInfo.imageLinks ? 'Нет изображения' : volumeInfo.imageLinks.thumbnail;
  return (
    <div className={styles.bookCard}>
      <Link to={`/bookPage/${id}`}>
        <img src={isImage} alt={isImage} />
        <h3>{volumeInfo.title}</h3>
        <div className={styles.info}>
          <div className={styles.categories}>{volumeInfo?.categories}</div>
          <div className={styles.authors}>{volumeInfo.authors}</div>
        </div>
      </Link>
    </div>
  )
};


