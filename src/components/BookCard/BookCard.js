import React from 'react'

import styles from './BookCard.module.scss';
export const BookCard = ({volumeInfo}) => {
  
  const isImage = !volumeInfo.imageLinks ? 'Нет изображения' : volumeInfo.imageLinks.thumbnail;

  const arr = [];
    arr.push(volumeInfo.categories)
  console.log(arr);

  return (
    <div className={styles.bookCard}>
      <img src={isImage} alt={isImage} />
      <h3>{volumeInfo.title}</h3>
      <div className={styles.info}>
        <div className={styles.categories}>{volumeInfo?.categories}</div>
        <div className={styles.authors}>{volumeInfo.authors}</div>
      </div>
    </div>
  )
};


