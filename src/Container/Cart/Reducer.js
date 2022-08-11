import { ADD_PRODUCT_CART, HANDLE_CHANGE_STATUS, DELETE_PRODUCT_CART, HANDLE_INCREASE_QUANTITY, HANDLE_DECREASE_QUANTITY } from "./constants";
import _ from 'lodash';

const initialState = {
    cartStore: []
}
const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_CART: {
            const productId = action.payload;
            let isExist = false;
            let productsNew = state.cartStore.map(item => {

                if(item.id === productId.id) {
                    isExist = true
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
            if(!isExist) {
                productsNew = [...productsNew, action.payload];
            }
            return {
                ...state,
                cartStore: productsNew
            }
        }
        case HANDLE_CHANGE_STATUS : {
            const actions = action.payload;
            const newProduct = state.cartStore.map(item => {
                if(actions.id === item.id) {
                    return {
                        ...item,
                        status: !item.status
                    }
                }
                return item;
            })
            return {
                ...state,
                cartStore: newProduct
            }
        }
        case DELETE_PRODUCT_CART: {
            const data = action.payload;
            const productNews = _.differenceBy([...state.cartStore], data);
            return {
                ...state,
                cartStore: productNews
            }
        }

        case HANDLE_INCREASE_QUANTITY: {
            const productId = action.payload;
            const newProductCart = state.cartStore.map((item) => {
                if(item.id === productId.id) {
              return {
                ...item,
                quantity: item.quantity + 1
              };
            }
            return item;
            });
            return {
              ...state,
              cartStore: newProductCart
            };
          }
          case HANDLE_DECREASE_QUANTITY: {
            const productId = action.payload;
            const newProductCart = state.cartStore.map((item) => {
                if(item.id === productId.id) {
              return {
                ...item,
                quantity: item.quantity - 1
              };
            }
            return item;
            });
            return {
              ...state,
              cartStore: newProductCart
            };
          }
        default:
            return state;
    }
}
export default CartReducer;