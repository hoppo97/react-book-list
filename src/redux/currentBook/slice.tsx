import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {getBookById} from '../../utils/getBooks';

export const getIdCurrentBook = createAsyncThunk(
  'book/getIdCurrentBook',
  async function (id, {rejectWithValue}) {
    try {
      const data = await getBookById(id);
      console.log(data);
      
      return data;
    } catch (error) {
     return rejectWithValue(error);
    }
  }
);


type Currentbook = {
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
  status: string,
};

const initialState: CurrentBookSliceState = {
  currentBook: null,
  status: ''
};

export const currentBook = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {},
  extraReducers : {
    [getIdCurrentBook.pending]: (state) => {
      state.status = 'loading';
    },
    [getIdCurrentBook.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.currentBook = action.payload;
      state.status = 'resolved';
    },
    [getIdCurrentBook.rejected]: (state) => {
      state.status = 'rejected';
    }
  }
});

export const {} = currentBook.reducer;

export default currentBook.reducer;