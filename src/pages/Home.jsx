import React from "react";
import axios from "axios"
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";



 const Home = () => {

     const {category, selectedSort} = useSelector((state) => state.filter)


    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
     const [currentPage, setCurrentPage] = React.useState(1)
     const {searchValue} = React.useContext(SearchContext)


    React.useEffect(() => {
        setIsLoading(true)

        const sortMethod = selectedSort.sortType.includes('-') ? 'asc' : 'desc'
        const sortBy = selectedSort.sortType.replace('-','')
       const search = searchValue ? `&search=${searchValue}` : ''


        axios.get(`https://6311b8dd19eb631f9d779584.mockapi.io/items?page=${currentPage}&limit=8&sortBy=${sortBy}&order=${sortMethod}&category=${category}`)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
        window.scrollTo(0,0)
    }, [category, selectedSort, searchValue,currentPage])

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
            <Categories />
            <Sort />
        </div>
     <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading ? skeleton : pizzas}
    </div>
            <Pagination onChangePage={(id) => setCurrentPage(id)}/>
        </>
    )
}

export default Home