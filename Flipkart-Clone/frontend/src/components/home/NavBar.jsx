import React from "react";

import { Box, Button, Typography, styled } from "@mui/material";

import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-around",
  overflow:'overlay',
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Containter = styled(Box)`
  text-align: center;
  padding: 12px 8px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Component>
      {navData.map((data, id) => (
        <Containter key={id}>
          <img src={data.url} alt={"nav"} style={{ width: 64 }}></img>
          <Text>{data.text}</Text>
        </Containter>
      ))}
    </Component>
  );
};

export default NavBar;
