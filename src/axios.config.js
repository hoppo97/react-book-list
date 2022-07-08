
 function initAxiosConfig() {
  const BOOKS_API_WITH_PARAMS = ({filterId, searchValue, sortId, maxResult, startIndex}) => `https://www.googleapis.com/books/v1/volumes?q=subject:${filterId}+intitle:${searchValue}&orderBy=${sortId}&maxResults=${maxResult}&startIndex=${startIndex}&key=AIzaSyB6EEPBsFah3IPuvNHP8By61c_cZCPO5MY`;

  return {
    BOOKS_API_WITH_PARAMS
  };
}

export const AXIOS_CONFIG = initAxiosConfig();