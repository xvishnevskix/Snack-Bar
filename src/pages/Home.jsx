import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import ReactPaginate from "react-paginate";

 const Home = ({searchValue}) => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
     const [selectedSort, setSelectedSort] = React.useState({name: 'популярности', sortType: 'rating'})
     const [categoryId, setCategoryId] = React.useState(0)



    React.useEffect(() => {
        setIsLoading(true)

        const sortMethod = selectedSort.sortType.includes('-') ? 'asc' : 'desc'
        const sortBy = selectedSort.sortType.replace('-','')
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://6311b8dd19eb631f9d779584.mockapi.io/items?sortBy=${sortBy}&order=${sortMethod}&category=${categoryId}`)

            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0,0)
    }, [categoryId, selectedSort, searchValue])

     const skeleton = [...new Array(9)].map((_, index) => <Skeleton key={index}/>)

     const pizzas = items.filter((obj) => {
         if (obj.title.toLowerCase().includes(searchValue.toLowerCase())){
             return true
         }
         return false
     }).map((obj) => <PizzaBlock key={obj.id} {...obj}/>)

    return (
        <>
        <div className="content__top">
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
            <Sort value={selectedSort} onChangeSort={(id) => setSelectedSort(id)}/>
        </div>
     <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading ? skeleton : pizzas}
    </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={(event) => console.log(event)}
                pageRangeDisplayed={8}
                pageCount={3}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Home