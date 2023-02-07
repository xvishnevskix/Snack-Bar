import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {useSelector} from "react-redux";
import {fetchPizzas} from "../redux/pizza/slice";
import {Pizza} from "../redux/pizza/types"
import {useAppDispatch} from "../redux/store";
import { filterSelector } from "../redux/filter/selectors";
import { pizzaSelector } from "../redux/pizza/selectors";



 const Home:React.FC = () => {
     const dispatch = useAppDispatch()
     const {items, status} = useSelector(pizzaSelector)
     const {currentPage, category, selectedSort, searchValue} = useSelector(filterSelector)

     const getPizzas = async () => {
         const sortMethod = selectedSort.sortType.includes('-') ? 'asc' : 'desc'
         const sortBy = selectedSort.sortType.replace('-', '');
             dispatch(fetchPizzas({currentPage: String(currentPage), sortBy, sortMethod, category: String(category)}))
             // setItems(res.data)
     };






    React.useEffect(() => {
            getPizzas()

    }, [category, searchValue,currentPage, selectedSort.sortType])


     const skeleton = [...new Array(9)].map((_, index) => <Skeleton key={index}/>)
     const pizzas = items.filter((obj) => {
         if (obj.title.toLowerCase().includes(searchValue.toLowerCase())){
             return true
         }
         return false
     }).map((obj: Pizza) => <PizzaBlock key={obj.id + obj.types + obj.sizes} {...obj}/>)


    return (
        <>
        <div className="content__top">
            <Categories categoryId={category} />
            <Sort />
        </div>
     <h2 className="content__title">Меню</h2>
            {
                status === 'error'
                    ? (<div className="content__error-info"> <h2>Произошла ошибка <span>😕</span></h2>
                        <p>К сожалению, не удалось получить меню.<br/>
                        Попробуйте повторить снова.</p></div>)
                    : (<div className="content__items">
                        {status === 'loading' ? skeleton : pizzas}</div>)
            }
            <Pagination/>
        </>
    )
}

export default Home