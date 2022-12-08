import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";

// Components import

const Component = styled(Box)`
  background: #f2f2f2;
  padding: 10px 10px;
`;

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Component>
        <Banner></Banner>
      </Component>
    </>
  );
};

export default Home;
