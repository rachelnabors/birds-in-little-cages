import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { ListContext } from "./listContext";

function Review() {
  const { list } = useContext(ListContext);

  console.log(list);

  if (!list.chosenList.length) {
    return <Navigate to="../reconciliation" />;
  } else {
    // Todo: generate from Local Storage
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
