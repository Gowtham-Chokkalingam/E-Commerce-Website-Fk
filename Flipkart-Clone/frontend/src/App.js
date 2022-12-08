import Header from "./components/header/Header";
import Home from "./components/home/Home";

import { Box } from "@mui/material";

function App() {
  return (
    <div >
      <Header></Header>
      <Box style={{ marginTop: "64px" }}>
        <Home> </Home>
      </Box>
    </div>
  );
}

export default App;
