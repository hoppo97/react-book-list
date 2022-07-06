import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom'

import { fetchBooks, loadMore, nextPage, setFilters } from '../../redux/books/slice';
import { BookCard } from '../BookCard';
import { SearchArea } from '../SearchArea';


import styles from './Books.module.scss';
import { setFilterId, setSort } from '../../redux/filterSlice/slice';

export const Books = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const {filterId} = useSelector(state => state.filter);
  const {sortId} = useSelector(state => state.filter);

  const {books, totalCount, maxResult, startIndex, filter ,status} = useSelector(state => state?.books);
  

  const [searchValue, setSearchValue] = React.useState('');
  const [isRes, setIsRes] = React.useState('');

  const getBooks = () => {
  
    dispatch(fetchBooks({searchValue, sortId, filterId, maxResult, startIndex}));
  }

  React.useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(
        fetchBooks({
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
        searchValue,
      });
   
    navigate(`?${queryString}`);
  }
  isMounted.current = true;
  }, [filterId, sortId, startIndex])

  const pag = () => {
    dispatch(nextPage(maxResult, startIndex));
    dispatch(loadMore({searchValue, sortId, filterId, maxResult, startIndex}));
  }

  const onSubmitSearchValue = (event) => {
    dispatch(fetchBooks({searchValue, sortId, filterId, maxResult, startIndex}));
 
    if(books) {
      setIsRes('По запросу найдено');
    } else {
      setIsRes('Ничего не найдено')
    }
  };

  return (
    <>
      <SearchArea searchValue={searchValue} /*changeFilter={changeFilter}*/ setSearchValue={setSearchValue} onSubmitSearchValue={onSubmitSearchValue}/>
      {totalCount > 0 ? <p className='mb-20'>Найдено книг: {totalCount}  </p> : <h1 className={styles.booksError}>{isRes}</h1>}
      <div className={styles.books}>
        {books && books.map(item => (
            <BookCard key={item.id} {...item}/>
        ))}
      </div>
      <button onClick={pag}>load more</button>
    </>
  )
};

