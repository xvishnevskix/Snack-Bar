export type CartItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    count: number,
    size: number,
    type: string
}

export interface CartSliceState  {
    totalPrice: number,
    items: CartItem[ ]
}