import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";

import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";
import Cart from "../Cart/Cart";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.CART} element={<Cart />} />
    {/* <Route path='/login' element={<LoginPage />} */}
  </Routes>
);

export default AppRoutes;
