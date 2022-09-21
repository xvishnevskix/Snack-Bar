
function Categories({value, onClickCategory} ) {
    const categories = ['Все', 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']
    return(<div className="categories">
        <ul>
            {categories.map((categoryName, id) => (
                <li
                    key={id}
                    onClick={() => onClickCategory(id)}
                    className={value === id ? "active" : ''}>
                    {categoryName}</li>
            ))}

        </ul>
    </div>)
}

export default Categories;