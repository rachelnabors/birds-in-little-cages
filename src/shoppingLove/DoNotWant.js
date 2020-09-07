import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { ListContext } from "./listContext";

function DoNotWant() {
  const { list } = useContext(ListContext);

  if (!list.wantList.length) {
    return <Navigate to="/shopping-for-love" />;
  } else {
    return <DoNotWantExercise />;
  }
}

function DoNotWantExercise() {
  const [newDoNotWant, setNewDoNotWant] = useState("");
  const { addToDoNotWantList, list } = useContext(ListContext);
  function handleAddingWant(e) {
    e.preventDefault();
    if (!newDoNotWant) return;
    addToDoNotWantList(newDoNotWant);
    setNewDoNotWant("");
  }

  return (
    <section>
      <h1>
        What are you <em>not</em> looking for?
      </h1>
      <form onSubmit={handleAddingWant}>
        <input
          type="text"
          className="input"
          value={newDoNotWant}
          onChange={(e) => setNewDoNotWant(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <ul className="list">
        {list.doNotWantList.map((want) => (
          <li key={want.id}>{want.want}</li>
        ))}
      </ul>
      {list.doNotWantList.length > 0 && (
        <Link to="../reconciliation" className="button">
          Great, I'm done!
        </Link>
      )}
    </section>
  );
}
export default DoNotWant;
