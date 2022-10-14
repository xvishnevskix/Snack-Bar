import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, CartItem} from "../../redux/slices/cartSlice";
import {Link} from "react-router-dom";
import {RootState} from "../../redux/store";

type PizzaBlockProps = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    count: number,
    size: number[],
    type: number[],
    rating: number,
}

const PizzaBlock:React.FC<PizzaBlockProps> = ({id,title, price, imageUrl, size, type}) => {

    const typeNames = ['тонкое', 'традиционное']
    const [pizzaType, setPizzaType] = useState(0)
    const [pizzaSize, setPizzaSize] = useState(0)
    const dispatch = useDispatch()
    const pizzaItem = useSelector((state:RootState) => state.cart.items.find((obj)=> obj.id ===id))

    const addedCount = pizzaItem ? pizzaItem.count : 0;



    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            count: 0,
            size: size[pizzaSize],
            type: typeNames[pizzaType]
        }
        dispatch(addItem(item))
    }

    return(
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <Link to={`/pizza/${id}`}>
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />
                </Link>
                <h4 className="pizza-block__title">{title} </h4>

                    <div className="pizza-block__selector">
                        {pizzaItem &&
                           ( <ul>
                                {type.map((t, i) => (
                                    <li key={i} onClick={() => (setPizzaType(t))}
                                        className={pizzaType === t ? "active" : ""}>
                                        {typeNames[t]}
                                    </li>
                                ))}
                            </ul>)
                        }


                        <ul>

                            {size.map((s, i) => (
                                <li
                                    key={i}
                                    onClick={() => (setPizzaSize(i))}
                                    className={pizzaSize === i ? "active" : ""}
                                >{s} см.</li>
                            ))}

                        </ul>
                    </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <button onClick={onClickAdd} className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i> }
                    </button>
                </div>
            </div>
        </div>
       )
}

export default PizzaBlock;