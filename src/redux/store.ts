import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import cart from "././cart/slice";
import pizza from "./slices/pizzaSlice"
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {filter: filter,cart: cart,pizza: pizza}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch