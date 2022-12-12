import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: " 82%",
  [theme.breakpoints.down("md")]: {
    width: " 100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: "5px",
  marginTop: "10px",
  marginLeft: "10px",
  width: "16%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

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
