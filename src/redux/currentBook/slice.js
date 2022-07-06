import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getIdCurrentBook = createAsyncThunk(
  'book/getIdCurrentBook',
  async function (id, {rejectWithValue, dispatch}) {
    try {
      const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      return data;
    } catch (error) {
     return rejectWithValue(error);
    }
  }
);

const initialState = {
  currentBook: [],
  status: ''
};

export const currentBook = createSlice({
  name: 'currentBook',
  initialState,

  extraReducers : {
    [getIdCurrentBook.pending]: (state) => {
      state.status = 'loading';
    },
    [getIdCurrentBook.fulfilled]: (state, action) => {
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