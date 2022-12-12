import { Box, Grid, styled } from "@mui/material";
import React from "react";

import { imageURL } from "../../constants/data";

const WrapperGrid = styled(Grid)`
  margin-top: 10px;
  justofy-content: space-between;
`;

const Image = styled("img")(({ theme }) => ({
  marginTop: 10,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    ObjectFit: "cover",
    height: "120px",
  },
}));

const MidSection = () => {
  const url = "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <WrapperGrid container >
        {imageURL.map((image, i) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={i}>
            <img style={{ width: "100%" }} src={image} alt={`Banner img ${i}`} ></img>
          </Grid>
        ))}
      </WrapperGrid>
      <Image src={url} alt="covid"></Image>
    </>
  );
};

export default MidSection;
