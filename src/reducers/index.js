import {combineReducers} from "redux";
import {sellerReducer} from "./sellerReducer";
import {buyerReducer} from "./buyerReducer";

export default combineReducers ({
    sellerReducer,
    buyerReducer
})