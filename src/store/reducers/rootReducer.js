import { combineReducers } from "redux";
import todoSlice from "./todoSlice";
import categorySlice from "./categorySlice";

export const rootReducer = combineReducers({
    todo: todoSlice,
    filter: categorySlice,
})