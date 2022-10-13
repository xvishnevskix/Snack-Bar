import {createSlice} from "@reduxjs/toolkit";


const initialState = {
items: [],
totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const item = findItem(state, action)
            if (item) {
                item.count++
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
            const item = findItem(state, action)
            if (item) {
                item.count--
                state.totalPrice = state.totalPrice - item.price
            }
        },
        removeItems(state) {
           state.items = []
            state.totalPrice = 0
        },
        clearItem(state, action) {
            const item = findItem(state, action)
            state.items  = state.items.filter((obj) =>  obj !==  item)
            state.totalPrice = state.totalPrice - item.price * item.count
        }
    }
})

const findItem = (state, action) => state.items.find(obj => {
    return ((obj.id === action.payload.id) &&
        (obj.size === action.payload.size) &&
        (obj.type === action.payload.type))
});


export const {addItem, removeItems, clearItem, minusItem} = cartSlice.actions
export default cartSlice.reducer