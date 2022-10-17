import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, clearItem, minusItem} from "../../redux/cart/slice";
import {RootState} from "../../redux/store";
import clsx from "clsx";


export type CartItemProps = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    count: number,
    size: number,
    type: string
}

const CartItem:React.FC<CartItemProps> = ({id,title, price, imageUrl, count, size, type}) => {

    const pizzaItem = useSelector((state:RootState) => state.cart.items.find((obj)=> obj?.id ===id && obj?.size === size && obj?.type === type))
    const dispatch = useDispatch()

    const countMinusRef = useRef(false)
    const countPizza = pizzaItem ? pizzaItem.count : 0
    const minus = countPizza > 0 ? countMinusRef.current : !countMinusRef.current

    const onClickPlus = (pizza: CartItemProps) => {
        dispatch(addItem(pizza))
    }

    const onClickClear = (item:CartItemProps) => {
        if (window.confirm("Вы действительно хотите удалить данную пиццу из корзины?")) {
            dispatch(clearItem(item))
        }
    }

    const onClickMinus = (pizza:CartItemProps) => {

        if (pizza.count === 1) {
            onClickClear(pizza)
        } else {
            dispatch(minusItem(pizza))
        }
    }


    return (
        <div className="cart__item">
            { pizzaItem && (<> <div className="cart__item-img">
                <img className="pizza-block__image"
                     src={imageUrl}
                     alt="Pizza"/>
            </div>
                <div className="cart__item-info">
                    <h3>{title}</h3>
                    <p>{type},{size} см.</p>
                </div>
                <div className="cart__item-count">
                    <button disabled={minus} onClick={() => onClickMinus(pizzaItem)} className={clsx('button button--outline button--circle cart__item-count-minus',
                        {'cart__item-count-minus--disabled': countPizza === 1} )}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill="#EB5A1E"></path>
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill="#EB5A1E"></path>
                        </svg>

                    </button>
                    <b>{count}</b>
                    <button onClick={() => onClickPlus(pizzaItem)} className="button button--outline button--circle cart__item-count-plus">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill="#EB5A1E"></path>
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill="#EB5A1E"></path>
                        </svg>

                    </button>
                </div>
                <div className="cart__item-price">
                    <b>{price * count} ₽</b>
                </div>
                <div className="cart__item-remove">
                    <div onClick={() => onClickClear(pizzaItem)} className="button button--outline button--circle">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill="#EB5A1E"></path>
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill="#EB5A1E"></path>
                        </svg>

                    </div>
                </div></>)}
        </div>
    )
}

export default CartItem