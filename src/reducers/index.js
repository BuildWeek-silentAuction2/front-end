import {combineReducers} from "redux";
import {sellerReducer} from "./sellerReducer";
import {bidderReducer} from "./bidderReducer";

export default combineReducers ({
    sellerReducer,
    bidderReducer
})