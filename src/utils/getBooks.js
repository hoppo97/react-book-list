import axios from 'axios';

import {AXIOS_CONFIG} from '../axios.config';
const { BOOKS_API_WITH_PARAMS } = AXIOS_CONFIG;

export const getBooks = async ({searchValue, maxResult, startIndex, filterId, sortId}) => {
  const {data} = await axios.get(BOOKS_API_WITH_PARAMS({searchValue, maxResult, startIndex, filterId, sortId}));
  return data;
}