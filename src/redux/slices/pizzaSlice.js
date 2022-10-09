import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params,thunkAPI) => {
        const {currentPage, sortBy, sortMethod, category} = params
        const {data} = await axios.get(`https://6311b8dd19eb631f9d779584.mockapi.io/items?page=${currentPage}&limit=8&sortBy=${sortBy}&order=${sortMethod}&category=${category}`)
        return data
    }
)

const initialState = {
    items: [],
    status: 'loading',
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: initialState,
    reducers: {
        setItems(state,action) {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state, action) => {
            state.status = 'error'
            state.items = []
        }
    }
})

export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer