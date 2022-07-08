import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  filterId:  '',
  searchValue: '',
  sortId: 'relevance',
}

export const filterSlice = createSlice ({
  name: 'filters',
  initialState,
  reducers: {
    setFilterId(state, action) {
      state.filterId = action.payload;
    },
    setSort(state, action) {
      state.sortId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setFilters(state, action) {
      if (Object.keys(action.payload).length) {
        state.filterId = action.payload.filterId;
        state.sortId = action.payload.sortId;
      } else {
        state.filterId = '';
        state.sortId = 'relevance';
      }
    }
  },
});


export const {setFilterId, setSort, setSearchValue, setFilters} = filterSlice.actions;


export default filterSlice.reducer;