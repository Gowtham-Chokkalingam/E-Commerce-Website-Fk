import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  width: 82%;
`;

const RightComponent = styled(Box)`
  background: #ffffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 10px;
  width: 16%;
  text-align:center;
`;

const MidSlide = ({ products, title, timer }) => {
  const adURL = "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer}></Slide>
      </LeftComponent>
      <RightComponent>
        <img src={adURL} alt="ad" style={{ width: "218px" }}></img>
      </RightComponent>
    </Component>
  );
};

export default MidSlide;