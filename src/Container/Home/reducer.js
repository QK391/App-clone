import { HANDLE_INIT_PRODUCT} from "./constants";

const initialState = {
    listProduct: [],
}
const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case HANDLE_INIT_PRODUCT: {
            return {
                ...state,
                listProduct: action.payload
            }
        }
        default: 
            return state
    }
}
export default ProductReducer;