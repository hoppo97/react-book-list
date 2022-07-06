import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  filterId:  '',
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
    }
  },
});


export const {setFilterId, setSort} = filterSlice.actions;


export default filterSlice.reducer;