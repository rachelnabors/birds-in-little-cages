import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ShoppingList from "./shoppingList/ShoppingList";
import LostLog from "./lostLog/LostLog";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <nav className="nav_main">
            <Link to="/">Home</Link>
            <Link to="/shopping-for-love">Shopping for Love</Link>
            <Link to="/lost-log">Lost Log</Link>
          </nav>
        </Route>
        <Route path="/shopping-for-love" element={<ShoppingList />} />
        <Route path="/lost-log" element={<LostLog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
