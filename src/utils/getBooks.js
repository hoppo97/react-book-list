import axios from 'axios';

import {AXIOS_CONFIG} from '../axios.config';
const { BOOKS_API_WITH_PARAMS, BOOKS_API_WITH_ID} = AXIOS_CONFIG;

export const getBooks = async ({searchValue, maxResult, startIndex, filterId, sortId}) => {
  const {data} = await axios.get(BOOKS_API_WITH_PARAMS({searchValue, maxResult, startIndex, filterId, sortId}));
  const {items, totalItems} = data;
  const books = requiredData(items);
  
  return {books, totalItems};
}

export const getBookById = async (bookId) => {
  const {data} = await axios.get(BOOKS_API_WITH_ID(bookId));
  const {id, etag, volumeInfo: {authors, description, categories, imageLinks: {smallThumbnail}, title}} = data;
  return {id, etag, authors, description, categories, smallThumbnail, title}
};

const requiredData = (data) => {
  return data.map(({id, etag, volumeInfo: {authors, description, categories, imageLinks: {thumbnail}, title}}) => ({id, etag, authors, categories, description, thumbnail, title}));
}

