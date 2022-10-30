import {calcTotalPrice} from "./calcTotalPrice";

export const GetCartFromLS = () => {
    const data = localStorage.getItem("cart")
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)

    return {
        items,
        totalPrice
    }
}

export  default GetCartFromLS