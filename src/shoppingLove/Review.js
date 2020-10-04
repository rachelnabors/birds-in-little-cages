import React from "react";
import { Navigate, Link } from "react-router-dom";

function Review() {
  const list = JSON.parse(localStorage.getItem("shoppingLoveList"));

  if (!list.length) {
    return <Navigate to="../reconciliation" />;
  } else {
    return (
      <section>
        <h1>Your shopping list:</h1>
        <ul className="list">
          {list.map((want) => (
            <li key={want.id}>{want.want}</li>
          ))}
        </ul>
        <nav>
          <ul>
            <li>
              <Link to="/" className="button">
                Great, I'm done!
              </Link>
            </li>
            <li>
              <Link to="/shopping-for-love" className="button">
                Make a new list...
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Review;
