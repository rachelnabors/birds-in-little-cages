import React from "react";
import { Link } from "react-router-dom";

const list = JSON.parse(localStorage.getItem("shoppingLoveList"));

function Home() {
  return (
    <nav className="nav_main">
      <Link to="/">Home</Link>
      <Link to="/lost-log">Lost Log</Link>
      {list ? (
        <Link to="/shopping-for-love/review">Shopping for Love</Link>
      ) : (
        <Link to="/shopping-for-love">Shopping for Love</Link>
      )}
    </nav>
  );
}
export default Home;
