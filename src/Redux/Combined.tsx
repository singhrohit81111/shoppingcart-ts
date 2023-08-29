import { combineReducers } from "redux";
import { CartChange } from "./Reducers";
import { userReducer } from "./Reducers";

export const Combined = combineReducers({
    CartChange,userReducer
    
})