import {useState} from "react";

const categories = ['Все', 'Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']


function Categories() {

    const [activeIndex, setActiveIndex] = useState(0)

    return(<div className="categories">
        <ul>
            {categories.map((value, id) => (
                <li
                    key={id}
                    onClick={() => setActiveIndex(id)}
                    className={activeIndex === id ? "active" : ''}>
                    {value}</li>
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