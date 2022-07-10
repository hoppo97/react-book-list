import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface FilterSliceState {
  filterId:  string,
  searchValue: string,
  sortId: string,
  startIndex: number,
  maxResult: number
}

const initialState: FilterSliceState = {
  filterId:  '',
  searchValue: '',
  sortId: 'relevance',
  startIndex: 0,
  maxResult: 3,
}


export const filterSlice = createSlice ({
  name: 'filters',
  initialState,
  reducers: {
    setStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = state.startIndex + action.payload;
    },
    setFilterId(state, action: PayloadAction<string>) {
      state.filterId = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sortId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
        state.filterId = action.payload.filterId;
        state.sortId = action.payload.sortId;
    }
  },
});


export const { setFilterId, setSort, setSearchValue, setFilters, setStartIndex } = filterSlice.actions;


export default filterSlice.reducer;