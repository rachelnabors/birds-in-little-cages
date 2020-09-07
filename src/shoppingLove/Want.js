import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ListContext } from "./listContext";

function Want() {
  const [newWant, setNewWant] = useState("");
  const { list, addToWantList } = useContext(ListContext);

  function handleAddingWant(e) {
    e.preventDefault();
    if (!newWant) return;
    addToWantList(newWant);
    setNewWant("");
  }

  return (
    <section>
      <h1>What are you looking for?</h1>
      <form onSubmit={handleAddingWant}>
        <input
          type="text"
          className="input"
          value={newWant}
          onChange={(e) => setNewWant(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <ul className="list">
        {list.wantList.map((want) => (
          <li key={want.id}>{want.want}</li>
        ))}
      </ul>
      {list.wantList.length > 0 && (
        <Link to="do-not-want" className="button">
          Great, I'm done!
        </Link>
      )}
    </section>
  );
}

export default Want;
