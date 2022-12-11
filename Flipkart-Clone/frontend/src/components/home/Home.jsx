import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../redux/actions/productAction";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";

// Components import

const Component = styled(Box)`
  background: #f2f2f2;
  padding: 10px 10px;
`;

const Home = () => {

const dispatch = useDispatch();
const {products} = useSelector(state=>state.getProducts)
console.log('products:', products)

const [data, setData] = useState([]);

useEffect(() => {

  dispatch(getProductsAction())

}, [dispatch])



  
  return (
    <>
      <NavBar></NavBar>
      <Component>
        <Banner></Banner>
        <Slide products={products}></Slide>
        <Slide products={products}></Slide>

        <Slide products={products}></Slide>

        <Slide products={products}></Slide>

      </Component>
    </>
  );
};

export default Home;
