import { Box } from "@mui/material";
import React from "react";

import { imageURL } from "../../constants/data";

const MidSection = () => {
  return (
    <Box style={{display:"flex"}}>
      {imageURL.map((image, i) => (
        <img style={{width:"100%"}}  src={image} alt={`Banner img ${i}`} key={i}></img>
      ))}
    </Box>
  );
};

export default MidSection;
