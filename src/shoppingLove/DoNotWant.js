import React, { useState } from "react";
import {
  wantList as recoilWantList,
  doNotWantList as recoilDoNotWantList,
} from "./ShoppingLove";
import { Link, Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

function DoNotWant() {
  const wantList = useRecoilValue(recoilWantList);

  if (!wantList.length) {
    return <Navigate to="/shopping-for-love" />;
  } else {
    return <DoNotWantExercise />;
  }
}

function DoNotWantExercise() {
  const [newDoNotWant, setNewDoNotWant] = useState("");
  const [doNotWantList, setDoNotWantList] = useRecoilState(recoilDoNotWantList);
  function handleAddingWant(e) {
    e.preventDefault();
    if (!newDoNotWant) return;
    setDoNotWantList([
      {
        want: newDoNotWant,
        id:
          newDoNotWant.split(" ").join("").toLowerCase +
          doNotWantList.length +
          Math.floor(Math.random() * (100 - 0) + 0),
      },
      ...doNotWantList,
    ]);
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
        {doNotWantList.map((want) => (
          <li key={want.id}>{want.want}</li>
        ))}
      </ul>
      {doNotWantList.length > 0 && (
        <Link to="../reconciliation" className="button">
          Great, I'm done!
        </Link>
      )}
    </section>
  );
}
export default DoNotWant;
