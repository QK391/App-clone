import { HANDLE_INIT_PRODUCT_SEARCH } from "./constants";
export const handleInitProductSearch = payload => {
    return {
        type: HANDLE_INIT_PRODUCT_SEARCH,
        payload: payload
    }
}