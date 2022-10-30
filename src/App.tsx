import './scss/app.scss'
import {
    Routes,
    Route,
} from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import("./pages/Cart"))
const FullPizza = React.lazy(() => import("./pages/FullPizza"))
const NotFound = React.lazy(() => import("./pages/NotFound"))

function App() {
  return (
      <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Home />}/>
              <Route path="cart" element={<Suspense fallback={<div>Идёт загрузка корзины...</div>}><Cart/></Suspense>}/>
              <Route path="pizza/:id" element={<Suspense fallback={<div>Идёт загрузка пиццы...</div>}><FullPizza/></Suspense>}/>
              <Route path="*" element={<Suspense fallback={<div>Идёт загрузка...</div>}><NotFound/></Suspense>}/>
          </Route>
      </Routes>
  );
}

export default App;
