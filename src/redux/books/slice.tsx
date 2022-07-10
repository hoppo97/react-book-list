import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getBooks } from "../../utils/getBooks";
import { setStartIndex } from "../filterSlice/slice";

export type FetchBooksArgs = {
    searchValue: string,
    sortId: string,
    filterId: string,
    maxResult: number,
    startIndex: number,
    nextPage?: number,
};

export type DataBooks = {
    books: Books[],
    totalItems: number | string,
    items?: Books[],
};

export type Books = {
    id: string,
    etag: string,
    authors: string[],
    categories: string[],
    thumbnail: string,
    title: string,
};

interface BooksSliceState {
    books: Books[],
    totalCount: number | string,
    status: 'loading' | 'resolved' | 'error',
};

const initialState: BooksSliceState = {
    books: [],
    totalCount: 0,
    status: 'loading'
};

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async (params: FetchBooksArgs, { rejectWithValue , dispatch}) => {
        try {
            const books = await getBooks(params);
            return books;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const loadMore = createAsyncThunk(
    'book/loadMore',
    async (params: FetchBooksArgs, { rejectWithValue , dispatch}) => {
        try {
           
            const books = await getBooks(params);
            return books;
        } catch (error) {
          return rejectWithValue(error);
        }
    }
);

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        
    },

    extraReducers: (builder) =>  {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = action.payload.books;
            state.totalCount = action.payload.totalItems;
            state.status = 'resolved';
        });

        builder.addCase(fetchBooks.rejected, (state) => {
            state.books = [];
            state.totalCount = 0;
            state.status = 'error';
        });

        builder.addCase(loadMore.fulfilled, (state, action) => {
            state.books = [...state.books, ...action.payload.books];
            state.status = 'resolved';
        });

        builder.addCase(loadMore.rejected, (state) => {
            state.books = []
            state.status = 'error';
        });
    },
});

export const { } = booksSlice.actions;

export default booksSlice.reducer;

