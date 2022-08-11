import { ADD_PRODUCT_CART,HANDLE_CHANGE_STATUS,DELETE_PRODUCT_CART, HANDLE_INCREASE_QUANTITY, HANDLE_DECREASE_QUANTITY } from "./constants";
export const addProductCart = payload => {
    return {
        type: ADD_PRODUCT_CART,
        payload: payload
    }
}
export const handleChangeStatus = payload => {
    return {
        type: HANDLE_CHANGE_STATUS,
        payload: payload
    }
}
export const deleteProductCart = payload => {
    return {
        type: DELETE_PRODUCT_CART,
        payload: payload
    }
}

export const increaseQuantity = (payload) => {
    return {
      type: HANDLE_INCREASE_QUANTITY,
      payload
    };
  };
  
  export const decreaseQuantity = (payload) => {
    return {
      type: HANDLE_DECREASE_QUANTITY,
      payload
    };
  };