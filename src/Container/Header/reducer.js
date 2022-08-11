import { HANDLE_INIT_PRODUCT_SEARCH } from "./constants";

const initialState = {
   product: []
}
const productSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case HANDLE_INIT_PRODUCT_SEARCH: {
            return {
                ...state,
                product: action.payload
            }
        }
        default: 
            return state
    }
}
export default productSearchReducer;