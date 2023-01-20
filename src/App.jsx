import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
    <Box sx={{background:'#01022F'}}>

      <Routes exact />
    </Box>
    </BrowserRouter>
  );
}

export default App;
