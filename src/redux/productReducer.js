import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
    switch(action.type) {
        // case PRODUCT_LIST:
        //     return [action.data];
        //     break;
        case SET_PRODUCT_LIST:
            console.log('set Product Case', action)
            return [...action.data]
    default:
        return data;
        break;
    }
}