import React from "react";
import axios from "axios"
import Categories from "../components/Categories";
import Sort, {sortList} from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setFilters} from "../redux/slices/filterSlice";
import qs from "qs"
import { useNavigate } from "react-router-dom";
import {fetchPizzas} from "../redux/slices/pizzaSlice";



 const Home = () => {
     const navigate = useNavigate()
     const dispatch = useDispatch()
      const {items, status} = useSelector((state) => state.pizza)
     const {currentPage, category, selectedSort, searchValue} = useSelector((state) => state.filter)

     // const [items, setItems] = React.useState([])
     const isSearch = React.useRef(false)
     const isMounted = React.useRef(false)

     const getPizzas = async () => {
         const sortMethod = selectedSort.sortType.includes('-') ? 'asc' : 'desc'
         const sortBy = selectedSort.sortType.replace('-', '');

             dispatch(fetchPizzas({currentPage, sortBy, sortMethod, category}))
             // setItems(res.data)

     };

     // React.useEffect(() => {
     //     const querySearch = qs.stringify({
     //         category,
     //         currentPage,
     //         sortType: selectedSort.sortType
     //     })
     //
     //         navigate(`?${querySearch}`)
     //
     // }, [category, selectedSort.sortType,currentPage])

     // React.useEffect(() => {
     //     if (window.location.search) {
     //         const params = qs.parse(window.location.search.substring(1));
     //
     //         const sort = sortList.find((obj) => obj.sortType === params.sortType);
     //
     //         dispatch(
     //             setFilters({
     //                 ...params,
     //                 sort,
     //             }),
     //         );
     //         isSearch.current = true;
     //     }
     // }, []);

    React.useEffect(() => {
            getPizzas()
    }, [category, searchValue,currentPage, selectedSort.sortType])



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

            <Categories/>
            <Sort />
        </div>
     <h2 className="content__title">Все пиццы</h2>
            {
                status === 'error'
                    ? (<div className="content__error-info"> <h2>Произошла ошибка <icon>😕</icon></h2>
                        <p>К сожалению, не удалось получить пиццы.<br/>
                        Попробуйте повторить снова.</p></div>)
                    : (<div className="content__items">
                        {status === 'loading' ? skeleton : pizzas}</div>)
            }

            <Pagination/>
        </>
    )
}

export default Home