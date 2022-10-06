import {createSlice} from "@reduxjs/toolkit";


const initialState = {
items: [],
totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state,action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push(
                    {
                        ...action.payload,
                        count: 1
                    }
                )
            }
          state.totalPrice = state.items.reduce((sum, obj) => {
                  return obj.price * obj.count + sum
              }, 0
           )
        },
        removeItems(state) {
           return  state = []
        }
    }
})

export const {addItem, removeItems} = cartSlice.actions
export default cartSlice.reducer