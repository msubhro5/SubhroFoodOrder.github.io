import { combineReducers } from "redux";
import selectedCategory from "./category";
import myCart from "./cart";

const rootReducer= combineReducers({
    selectedCategory,
    myCart
})

export default rootReducer;