import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom'

import { fetchBooks, loadMore, nextPage } from '../../redux/books/slice';
import {setFilters} from '../../redux/filterSlice/slice';
import { BookCard } from '../BookCard';

import styles from './Books.module.scss';

export const Books = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const {filterId, sortId, searchValue} = useSelector(state => state.filter);
  const {books, totalCount, maxResult, startIndex, status} = useSelector(state => state?.books);


  const getBooks = () => {
    dispatch(fetchBooks({searchValue, sortId, filterId, maxResult, startIndex}));
  }

  React.useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(
        setFilters({
          ...params,
        })
      );
      
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if(!isSearch.current) {
      getBooks();
    }
    isSearch.current = false;

  }, [filterId, sortId]);

  React.useEffect(() => {
    if(isMounted.current) {
      const queryString = qs.stringify({
        sortId,
        filterId,
        maxResult,
        startIndex,
      });
   
    navigate(`?${queryString}`);
  }
  isMounted.current = true;
  }, [filterId, sortId, startIndex]);

  const pag = () => {
    if(books) {
      dispatch(nextPage(maxResult, startIndex));
      dispatch(loadMore({searchValue, sortId, filterId, maxResult, startIndex}));
    } else {
      alert("Книжек больше нет!")
    }
  };

  return (
    <>
      {totalCount > 0 ? <p className='mb-20'>Найдено книг: {totalCount} </p> : <h1 className={styles.booksError}>Ничего не найдено</h1>}
      {status === 'loading' ? <h1>Загрузка...</h1> : <> <div className={styles.books}>
        {books && books.map(item => (
            <BookCard key={item.id} {...item}/>
        ))}
      </div>
      <button disabled={totalCount < 30 && true} onClick={pag}>load more</button>
      </>
      }
    </>
  )
};

