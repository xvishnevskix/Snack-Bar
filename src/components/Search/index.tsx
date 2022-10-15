import React, {useCallback, useRef} from "react";
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice";



const Search = () => {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')
    const searchRef = useRef<HTMLInputElement>(null)

    const onClickClear = () => {
        dispatch(setSearchValue(''))
        setValue('')
        searchRef.current?.focus()
    }

    const onChangeSearch = ((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updateInput(event.target.value)
    })

    const updateInput = React.useCallback(debounce((event) => {
        dispatch(setSearchValue(event))
    }, 400), [])



    return <div className={styles.root}>
      <svg className={styles.icon}
          enableBackground="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366"/></svg>
        <input
            ref={searchRef}
            value={value}
            onChange={onChangeSearch}
            className={styles.input}
            placeholder="Введите название..."></input>

            {value && ( <svg onClick={onClickClear}
                                   className={styles.close} data-name="Capa 1" id="Capa_1" viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg"><path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,
            0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/></svg>)}
    </div>
}

export default Search