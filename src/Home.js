import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav className="nav_main">
      <Link to="/">Home</Link>
      <Link to="/lost-log">Lost Log</Link>
      <Link to="/shopping-for-love">Shopping for Love</Link>
    </nav>
  );
}
export default Home;
