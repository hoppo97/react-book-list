import axios from 'axios';

import { AXIOS_CONFIG } from '../axios.config';
import { FetchBooksArgs, DataBooks, Books } from '../redux/books/slice';
import { Currentbook } from '../redux/currentBook/slice';
const { BOOKS_API_WITH_PARAMS, BOOKS_API_WITH_ID } = AXIOS_CONFIG;


export const getBooks = async (params: FetchBooksArgs) => {

  const { data } = await axios.get(BOOKS_API_WITH_PARAMS(params));
  
  const { items, totalItems } = data as DataBooks;
  const books = prepareBooksData(items);
  
  return { books, totalItems } as DataBooks;
};

export const getBookById = async (bookId: string | undefined) => {
  const { data } = await axios.get(BOOKS_API_WITH_ID(bookId));
  const { id, etag, volumeInfo: { authors, description, categories, imageLinks: { smallThumbnail }, title } } = data;
  return { id, etag, authors, description, categories, smallThumbnail, title } as Currentbook;
};

const prepareBooksData = (data: any): Books[] => {
  return data.map(({ id, etag, volumeInfo: { authors, description, categories, imageLinks: { thumbnail }, title } }: any) => ({ id, etag, authors, categories, description, thumbnail, title }) as Books);
};

 