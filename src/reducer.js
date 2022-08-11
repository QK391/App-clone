import { combineReducers } from "redux";
import ProductReducer from "./Container/Home/reducer";
import CartReducer from "./Container/Cart/Reducer";
import productSearchReducer from "./Container/Header/reducer";
const rootReducer = combineReducers({
    product: ProductReducer,
    cartsReducer: CartReducer,
    searchProduct: productSearchReducer
});
export default rootReducer;