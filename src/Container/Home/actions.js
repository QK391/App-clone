import { HANDLE_INIT_PRODUCT,FILTER_PRODUCT } from "./constants";
export const handleInitProduct = payload => {
    return {
        type: HANDLE_INIT_PRODUCT,
        payload: payload
    }
}
export const filterProduct = payload => {
    return {
        type: FILTER_PRODUCT,
        payload: payload
    }
}