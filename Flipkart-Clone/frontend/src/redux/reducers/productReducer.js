import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../constants/productsConstants";



export const getProductsReducer = (state={products:[]},action) => {

switch (action.type) {
    case GET_PRODUCTS_SUCCESS:{
        return {products:action.payload}

    }


    case GET_PRODUCTS_FAILURE:{
        return {error:action.payload}
    }
        

    default:
    return state;
}

};
