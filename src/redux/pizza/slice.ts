import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";
import { Pizza, PizzaSliceState, Status } from "./types";



export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const {currentPage, sortBy, sortMethod, category} = params
        const {data} = await axios.get<Pizza[]>(`https://6311b8dd19eb631f9d779584.mockapi.io/items?page=${currentPage}&limit=8&sortBy=${sortBy}&order=${sortMethod}&category=${category}`)
        return data
    }
)


const initialState:PizzaSliceState = {
    items: [],
    status: Status.LOADING
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: initialState,
    reducers: {
        setItems(state,action: PayloadAction<Pizza[]>) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        },)
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }

})


export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer