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
        minusItem(state,action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type)

            if (findItem) {
                findItem.count--
                state.totalPrice = state.totalPrice - findItem.price
            }
        },
        removeItems(state) {
           state.items = []
            state.totalPrice = 0
        },
        clearItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type)
            state.items  = state.items.filter((obj) =>  obj !==  findItem)
            state.totalPrice = state.totalPrice - findItem.price * findItem.count
        }
    }
})

export const {addItem, removeItems, clearItem, minusItem} = cartSlice.actions
export default cartSlice.reducer