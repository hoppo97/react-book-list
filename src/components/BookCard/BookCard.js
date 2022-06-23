import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from './BookCard.module.scss';
export const BookCard = ({volumeInfo}) => {  
  const isImage = !volumeInfo.imageLinks ? 'Нет изображения' : volumeInfo.imageLinks.thumbnail;

  const navigate = useNavigate();

  const linkToBookPage = () => {
    navigate(`/bookPage/${volumeInfo.title}`);
  };

  return (
    <div onClick={linkToBookPage} className={styles.bookCard}>
      <img src={isImage} alt={isImage} />
      <h3>{volumeInfo.title}</h3>
      <div className={styles.info}>
        <div className={styles.categories}>{volumeInfo?.categories}</div>
        <div className={styles.authors}>{volumeInfo.authors}</div>
      </div>
    </div>
  )
};


