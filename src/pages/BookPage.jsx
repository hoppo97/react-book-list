import React from 'react'
import { useParams } from 'react-router-dom';
import { CurrentBook } from '../components/CurrentBook'
import { getIdCurrentBook } from '../redux/currentBook/slice';
import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentBook } from '../redux/currentBook/selectors';


const BookPage = () => {
  const {bookId} = useParams();
  const dispatch = useDispatch();
  const {currentBook: {id, volumeInfo}, status} = useSelector(selectCurrentBook);

  React.useEffect(() => {
    if(id !== bookId) {
      dispatch(getIdCurrentBook(bookId));
    };
  }, []);

  return (
    <>
      {status === 'loading' ? <h1>Загрузка...</h1> : <CurrentBook info={volumeInfo}/>}
    </>
  ) 
}

export default BookPage
