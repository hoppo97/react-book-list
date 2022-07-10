import React from 'react'
import { useParams } from 'react-router-dom';
import { CurrentBook } from '../components/CurrentBook'
import { getIdCurrentBook } from '../redux/currentBook/slice';
import { useSelector} from 'react-redux';
import { selectCurrentBook } from '../redux/currentBook/selectors';
import { useAppDispatch } from '../redux/store';


const BookPage: React.FC = () => {
  const {bookId} = useParams();
  const dispatch = useAppDispatch();
  const {currentBook, status} = useSelector(selectCurrentBook);
 
  React.useEffect(() => {
    currentBook?.id !== bookId && dispatch(getIdCurrentBook(bookId));
  }, []);

  if(!currentBook) return null;
 

  return (
    <>
      {status === 'loading' ? <h1 className="center">Загрузка...</h1> : <CurrentBook {...currentBook}/>}
    </>
  ) 
};

export default BookPage;
