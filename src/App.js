import './scss/app.scss'
 import Header from "./components/Header";
import {
    Routes,
    Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { decrement, increment } from './redux/slices/filterSlice'
import { useSelector, useDispatch } from 'react-redux'

export const SearchContext = React.createContext('')

function App() {


    const [searchValue, setSearchValue] = React.useState('')
    const count = useSelector((state) => state.filter.value)
    const dispatch = useDispatch()



  return (
      <div className="wrapper">
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
      >
          Increment
      </button>
    <span>{count}</span>
    <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
    >
        Decrement
    </button>
      </div>
     /* <div className="wrapper">
     <SearchContext.Provider value={{searchValue, setSearchValue}} >
             <Header />
             <div className="content">
                 <div className="container">
                     <Routes>
                         <Route path="/" element={<Home />}/>
                         <Route path="/cart" element={<Cart/>}/>
                         <Route path="*" element={<NotFound/>}/>
                     </Routes>
                 </div>
             </div>
     </SearchContext.Provider>
</div>*/
  );
}

export default App;
