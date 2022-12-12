import axios from "axios";
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../constants/productsConstants";
const URL = `http://localhost:8080`;

export const getProductsAction = () => async (dispatch) => {
  try {
    let response = await axios.get(`${URL}/products`);

    // console.log("GetProduct Response:", response);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILURE,payload:error.message });

    console.log("Error While calling get products API Action", error.message);
  }
};
