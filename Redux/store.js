import { combineReducers } from "redux";
import Language from './Reducer/language';
import Products from './Reducer/products';
import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Reducer/cart";

const reducer =  combineReducers ({
    Products,
    Language,
    Cart
})

const store = configureStore({
    reducer
})

export default store