import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, loadMore, nextPage } from '../../redux/books/slice';
import { BookCard } from '../BookCard';
import { SearchArea } from '../SearchArea';

import styles from './Books.module.scss';

export const Books = () => {
  const dispatch = useDispatch();
  const {books, totalCount, maxResult, startIndex, status} = useSelector(state => state?.books);

  const [searchValue, setSearchValue] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [sort, setSort] = React.useState('relevance');
  const [isRes, setIsRes] = React.useState('');
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    if(filter === 'all'){
      setFilter('');
    }
    dispatch(fetchBooks({searchValue, sort, filter, maxResult, startIndex}));
  }, [filter, sort]);


  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const changeSort = (event) => {
    setSort(event.target.value);

  };

  const pag = () => {
    dispatch(nextPage(maxResult));
    dispatch(loadMore({searchValue, sort, filter}));
  }

  const onSubmitSearchValue = (event) => {
    dispatch(fetchBooks({searchValue, sort, filter, page}));
 
    if(books) {
      setIsRes('По запросу найдено');
    } else {
      setIsRes('Ничего не найдено')
    }
  };

  return (
    <>
      <SearchArea searchValue={searchValue} changeFilter={changeFilter} setSearchValue={setSearchValue} changeSort={changeSort} onSubmitSearchValue={onSubmitSearchValue}/>
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

