import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBookById } from '../../utils/getBooks';

export type Currentbook = {
  id: string,
  etag: string,
  authors: string[],
  description: string,
  categories: string[],
  smallThumbnail: string,
  title: string,
}
interface CurrentBookSliceState {
  currentBook: Currentbook | null,
  status: 'loading' | 'resolved' | 'error',
};

const initialState: CurrentBookSliceState = {
  currentBook: null,
  status: 'loading'
};

export const getIdCurrentBook = createAsyncThunk(
  'book/getIdCurrentBook',
  async function (id: string | undefined, {rejectWithValue}) {
    try {
      const data = await getBookById(id);
      return data;
    } catch (error) {
     return rejectWithValue(error);
    }
  }
);

export const currentBook = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getIdCurrentBook.pending, (state, action) => {
      state.status = 'loading';
    }); 

    builder.addCase(getIdCurrentBook.fulfilled, (state, action) => {
      state.currentBook = action.payload;
      state.status = 'resolved';
    }); 

    builder.addCase(getIdCurrentBook.rejected, (state, action) => {
      state.status = 'error';
    }); 
  }
});

export const { } = currentBook.reducer;

export default currentBook.reducer;