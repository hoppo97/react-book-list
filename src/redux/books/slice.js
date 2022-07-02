import { createSlice } from "@reduxjs/toolkit";
// import { fetchBooks } from "./asyncAction";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async ({searchValue, sort , filter}, {getState}) => {
        const { 
            books: { maxResult, startIndex },
          } = getState();
        const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${filter}+intitle:${searchValue}&orderBy=${sort}&maxResults=${maxResult}&startIndex=${startIndex}&key=AIzaSyB6EEPBsFah3IPuvNHP8By61c_cZCPO5MY`);
        return data;
    }
);

export const loadMore = createAsyncThunk(
    'book/loadMore',
    async ({searchValue, sort, filter}, {getState}) => {
        const { 
            books: { maxResult, startIndex },
          } = getState();
        
        const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${filter}+intitle:${searchValue}&orderBy=${sort}&maxResults=${maxResult}&startIndex=${startIndex}&key=AIzaSyB6EEPBsFah3IPuvNHP8By61c_cZCPO5MY`);
        return data;
    }
);

const initialState = {
    books: [],
    totalCount: 0,
    maxResult: 3,
    startIndex: 0,
    status: '',
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        nextPage(state, action) {
            state.startIndex = state.startIndex + action.payload;
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

        [loadMore.pending]: (state) => {
            state.status = 'loading'
        },

        [loadMore.fulfilled]: (state, action) => {
            state.books = [...state.books, ...action.payload.items];
            // state.totalCount = action.payload.totalItems;
            state.status = 'resolved';
        },

        [loadMore.rejected]: (state) => {
            state.status = 'error';
        },
    }
});

export const {nextPage} = booksSlice.actions;

export default booksSlice.reducer;

// https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyB6EEPBsFah3IPuvNHP8By61c_cZCPO5MY