import {combineReducers} from "redux";
import categoriesReducer from "./Reducers/Categories/categoriesReducer";
import iphoneReducer from "./Reducers/Iphones/iphoneReducer";


const rootReducer=combineReducers({
categoriesReducer,
    iphoneReducer

})

export default rootReducer;