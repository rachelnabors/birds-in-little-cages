import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { ListContext } from "./listContext";

function Review() {
  const { list, addToReconciledList } = useContext(ListContext);

  if (!list.chosenList.length) {
    return <Navigate to="../reconciliation" />;
  } else {
    return (
      <section>
        <h1>Your shopping list:</h1>
        <ul className="list">
          {list.chosenList.map((want) => (
            <li key={want.id}>{want.want}</li>
          ))}
        </ul>
        <Link to="/" className="button">
          Great, I'm done!
        </Link>
      </section>
    );
  }
}

export default Review;
