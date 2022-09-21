import React, {useState} from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

 const Home = () => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
     const [selectedSort, setSelectedSort] = React.useState({name: 'популярности', sortType: 'rating'})
     const [categoryId, setCategoryId] = React.useState(0)

     const sortMethod = selectedSort.sortType.includes('-') ? 'asc' : 'desc'
     const sortBy = selectedSort.sortType.replace('-','')

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://6311b8dd19eb631f9d779584.mockapi.io/items?sortBy=${sortBy}&order=${sortMethod}&category=${categoryId}`)

            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0,0)
    }, [categoryId, selectedSort])

    return (
        <>
        <div className="content__top">
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
            <Sort value={selectedSort} onChangeSort={(id) => setSelectedSort(id)}/>
        </div>
     <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
            ? [...new Array(9)]
                .map((_, index) => <Skeleton key={index}/>)
            : items
                .map((obj) => <PizzaBlock key={obj.title} {...obj}/>)}
    </div>
        </>
    )
}

export default Home