import {configureStore} from "@reduxjs/toolkit";
import books from "./books/slice";
export const store = configureStore({
    reducer: {
        books,
    },
});