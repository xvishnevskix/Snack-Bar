import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";

function Categories( ) {

    const dispatch = useDispatch()
    const categoryId = useSelector((state) => state.filter.category)

    const categories = ['Все', 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']
    return(<div className="categories">
        <ul>
            {categories.map((categoryName, id) => (
                <li
                    key={id}
                    onClick={() => (dispatch(setCategoryId(id)))}
                    className={categoryId === id ? "active" : ''}>
                    {categoryName}</li>
            ))}

        </ul>
    </div>)
}

export default Categories;