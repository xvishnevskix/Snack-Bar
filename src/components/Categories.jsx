import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import React from "react";

function Categories( ) {

    const dispatch = useDispatch()
    const categoryId = useSelector((state) => state.filter.category)

    const onChangeCategory = React.useCallback((idx) => {
        dispatch(setCategoryId(idx));
    }, []);

    const categories = ['Все', 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']
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