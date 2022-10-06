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



 const Home = () => {
     const navigate = useNavigate()
     const dispatch = useDispatch()

     const {currentPage, category, selectedSort, } = useSelector((state) => state.filter)
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
     const {searchValue} = React.useContext(SearchContext)
     const isSearch = React.useRef(false)
     const isMounted = React.useRef(false)

     const fetchPizzas = () => {
         setIsLoading(true);
         const sortMethod = selectedSort.sortType.includes('-') ? 'asc' : 'desc'
         const sortBy = selectedSort.sortType.replace('-', '');

         axios.get(`https://6311b8dd19eb631f9d779584.mockapi.io/items?page=${currentPage}&limit=8&sortBy=${sortBy}&order=${sortMethod}&category=${category}`)
             .then((res) => {
                 setItems(res.data);
                 setIsLoading(false);
             });
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
            fetchPizzas()
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
    <div className="content__items">
        {isLoading ? skeleton : pizzas}
    </div>
            <Pagination/>
        </>
    )
}

export default Home