import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
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


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();