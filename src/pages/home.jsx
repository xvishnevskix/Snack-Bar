import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

 const Home = () => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://6311b8dd19eb631f9d779584.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
        <div className="content__top">
            <Categories/>
            <Sort/>
        </div>
     <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
            ? [...new Array(9)]
                .map((_, index) => <Skeleton key={index}/>)
            : items
                .map((obj) => <PizzaBlock key={obj.title} {...obj}/>)}
        {items.map((object) => (
            <PizzaBlock key={object.title} {...object}/>
        ))}
    </div>
        </>
    )
}

export default Home