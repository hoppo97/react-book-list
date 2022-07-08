import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

import {getBooks} from "../../utils/getBooks";

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async ({searchValue, maxResult, startIndex, filterId, sortId}, { rejectWithValue }) => {
        try {
            const books = await getBooks({searchValue, maxResult, startIndex, filterId, sortId});
            return books;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const loadMore = createAsyncThunk(
    'book/loadMore',
    async ({searchValue, filterId, sortId }, {rejectWithValue, getState }) => {
        try {
          const { 
            books: { maxResult, startIndex},
            } = getState();
            const books = await getBooks({searchValue, maxResult, startIndex, filterId, sortId});
            return books;
        } catch (error) {
          return rejectWithValue(error);
        }
    }
);

const initialState = {
    books: [],
    totalCount: 0,
    maxResult: 30,
    startIndex: 0,
    status: '',
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        nextPage(state, action) {
            state.startIndex = state.startIndex + Number(action.payload);
        },
        changeStartInex(state, action) {
            state.startIndex = action.payload;
        }
    },

    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.status = 'loading'
        },

        [fetchBooks.fulfilled]: (state, action) => {
            state.books = action.payload.items;
            state.totalCount = action.payload.totalItems;
            state.status = 'resolved';
        },

        [fetchBooks.rejected]: (state) => {
            state.status = 'error';
        },


        [loadMore.fulfilled]: (state, action) => {
            state.books = [...state.books, ...action.payload.items];
            state.totalCount = action.payload.totalItems;
            state.status = 'resolved';
        },

        [loadMore.rejected]: (state) => {
            state.status = 'error';
        },
    }
});

export const {nextPage, setFilters, changeStartInex} = booksSlice.actions;

export default booksSlice.reducer;

