
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

            {/*<li onClick={() => onClickColor()} className={activeIndex === 0 ? "active" : ''}>Все</li>
            <li className={activeIndex === 1 ? "active" : ''}>Мясные</li>
            <li className={activeIndex === 2 ? "active" : ''}>Вегетарианская</li>
            <li className={activeIndex === 3 ? "active" : ''}>Гриль</li>
            <li className={activeIndex === 4 ? "active" : ''}>Острые</li>
            <li className={activeIndex === 5 ? "active" : ''}>Закрытые</li>*/}
        </ul>
    </div>)
}

export default Categories;