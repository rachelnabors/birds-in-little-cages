import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ShoppingLove from "./shoppingLove/ShoppingLove";
import Home from "./Home";
import LostLog from "./lostLog/LostLog";
import HolidaysLeft from "./holidaysLeft/HolidaysLeft";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.js";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-for-love/*" element={<ShoppingLove />} />
          <Route path="/lost-log" element={<LostLog />} />
          <Route path="/holidays-Left" element={<HolidaysLeft />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
