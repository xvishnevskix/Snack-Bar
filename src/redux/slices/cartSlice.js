import {createSlice} from "@reduxjs/toolkit";


const initialState = {
items: 0,
totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state,action) {
            state.items = action.payload
        },
    }
})

export const {addItem} = cartSlice.actions
export default cartSlice.reducer