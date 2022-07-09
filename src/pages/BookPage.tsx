import React from 'react'
import { useParams } from 'react-router-dom';
import { CurrentBook } from '../components/CurrentBook'
import { getIdCurrentBook } from '../redux/currentBook/slice';
import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentBook } from '../redux/currentBook/selectors';


const BookPage: React.FC = () => {
  const {bookId} = useParams();
  const dispatch = useDispatch();
  const {currentBook, status} = useSelector(selectCurrentBook);

  React.useEffect(() => {
    if(currentBook && currentBook.id !== bookId) {
      dispatch(getIdCurrentBook(bookId));
    };
  }, []);

  if(!currentBook) {
    return null;
  } 

  return (
    <>
      {status === 'loading' ? <h1>Загрузка...</h1> : <CurrentBook {...currentBook}/>}
    </>
  ) 
};

export default BookPage;
