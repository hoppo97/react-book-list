import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchBooks, loadMore } from '../../redux/books/slice';
import { setFilters, setStartIndex } from '../../redux/filterSlice/slice';
import { FetchBooksArgs } from '../../redux/books/slice';
import { BookCard } from '../BookCard';

import { selectBooksData } from '../../redux/books/selectors';
import { selectFilter } from '../../redux/filterSlice/selectors';

import qs from 'qs';

import styles from './Books.module.scss';
import { Button } from '../UI/Button';


export const Books = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { filterId, sortId, searchValue, maxResult, startIndex} = useSelector(selectFilter);
  const { books, totalCount, status } = useSelector(selectBooksData);


  const params = {
    searchValue,
    sortId,
    filterId,
    maxResult,
    startIndex,
  };


  const getBooks = () => {
    dispatch(fetchBooks(params));
  }

  React.useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as FetchBooksArgs;
      console.log(params);
      
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
      dispatch(setStartIndex(maxResult));
      dispatch(loadMore(params));
    } else {
      alert("Книжек больше нет!")
    }
  };

  return (
    <>
      {status === 'loading' ? <h1>Загрузка...</h1> : <> 
        <p className='mb-20'>Найдено книг: { totalCount } </p>
        <div className={ styles.books }>
        {books && books.map(item => (
            <BookCard key={ item.etag } { ...item }/>
        ))}
      </div>
      <Button children={'Load more'} onClick={pag} totalCount={totalCount} />
      </>
      }
    </>
  )
};

