import {configureStore} from "@reduxjs/toolkit";
import books from "./books/slice";
import currentBook from "./currentBook/slice";
import filter from "./filterSlice/slice";
export const store = configureStore({
    reducer: {
        books,
        currentBook,
        filter,
    },
});