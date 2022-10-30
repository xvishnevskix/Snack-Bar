import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/filter/slice";
import React from "react";
import {RootState} from "../redux/store";
import {useWhyDidYouUpdate} from "ahooks";

type CategoryProps = {
    categoryId: number
}

const Categories:React.FC<CategoryProps> = React.memo(() => {
    const categories = ['Все', 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']

    const categoryId = useSelector((state:RootState) => state.filter.category)
    const dispatch = useDispatch()

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
})

export default Categories;