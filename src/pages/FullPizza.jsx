import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import React from "react";


const FullPizza = () => {

    const {id} = useParams()
    const [pizza, setPizza] = React.useState()
    const navigate = useNavigate()

    React.useEffect(() => {
        async function fetchPizza () {

            try {
                const {data} = await axios.get(`https://6311b8dd19eb631f9d779584.mockapi.io/items/` + id)
                setPizza(data)
            } catch (err) {
                console.log(err, "GET PIZZAS ERROR")
                alert("Ошибка при отображении пиццы")
                navigate("/")
            }
        }
        fetchPizza()
    }, [])

    if (!pizza) {
        return ("Загрузка...")
    }


    return (
        <div className="content__full-pizza">
            <img src={pizza.imageUrl} />
            <div className="content__full-pizza-title">
                <h2>{pizza.title}</h2>
                <p>Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы</p>
                <h4>{pizza.price} р.</h4>
            </div>
        </div>
    )
}

export default FullPizza