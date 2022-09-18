import './scss/app.scss'
 import Header from "./components/Header";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home";


function App() {



  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
             <Routes>
                 <Route path="/" element={<Home/>}/>
             </Routes>
        </div>
      </div>
      </div>
  );
}

export default App;
