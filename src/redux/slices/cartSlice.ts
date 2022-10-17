import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CartItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    count: number,
    size: number,
    type: string
}

interface CartSliceState  {
    totalPrice: number,
    items: CartItem[ ]
}

const initialState: CartSliceState = {
items: [],
totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
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
        minusItem(state,action: PayloadAction<CartItem>) {
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
        clearItem(state, action: PayloadAction<CartItem>) {
            const item = findItem(state, action)
            state.items  = state.items.filter((obj) =>  obj !==  item)
            if (item) {
                state.totalPrice = state.totalPrice - item.price * item.count
            }
        }
    }
})

const findItem = (state: CartSliceState, {payload}: PayloadAction<CartItem>) => state.items.find(obj => {
    return ((obj.id === payload.id) &&
        (obj.size === payload.size) &&
        (obj.type === payload.type))
});


export const {addItem, removeItems, clearItem, minusItem} = cartSlice.actions
export default cartSlice.reducer