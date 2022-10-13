import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import React from "react";



const Categories:React.FC = () => {
    const categories = ['Все', 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']

    const dispatch = useDispatch()
    const categoryId = useSelector((state) => state.filter.category)

    const onChangeCategory: (id:number) => void = React.useCallback((idx) => {
        dispatch(setCategoryId(idx));
    }, []);


    return(<div className="categories">
        <ul>
            {categories.map((categoryName, id) => (
                <li
                    key={id}
                    onClick={() => (onChangeCategory(id))}
                    className={categoryId === id ? "active" : ''}>
                    {categoryName}</li>
            ))}

        </ul>
    </div>)
}

export default Categories;