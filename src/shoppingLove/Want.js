import React, { useState } from "react";
import { wantList as recoilWantList } from "./ShoppingLove";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

function Want(props) {
  const [newWant, setNewWant] = useState("");
  const [wantList, setWantList] = useRecoilState(recoilWantList);

  function handleAddingWant(e) {
    e.preventDefault();
    if (!newWant) return;
    setWantList([
      {
        want: newWant,
        id:
          newWant + wantList.length + Math.floor(Math.random() * (100 - 0) + 0),
      },
      ...wantList,
    ]);
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
        {wantList.map((want) => (
          <li key={want.id}>{want.want}</li>
        ))}
      </ul>
      {wantList.length > 0 && (
        <Link to="do-not-want" className="button">
          Great, I'm done!
        </Link>
      )}
    </section>
  );
}

export default Want;
