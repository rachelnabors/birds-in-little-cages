import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

function Want(props) {
  const [newWant, setNewWant] = useState("");
  const [wantList, setWantList] = useState([]);

  function handleAddingWant(e) {
    e.preventDefault();
    if (!newWant) return;
    setWantList([
      ...wantList,
      {
        want: newWant,
        id:
          newWant + wantList.length + Math.floor(Math.random() * (100 - 0) + 0),
      },
    ]);
    setNewWant("");
  }

  if (props.currentPage === 0) {
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
          <button onClick={props.onFormSubmit}>Great, I'm done!</button>
        )}
      </section>
    );
  } else {
    return null;
  }
}

export default Want;
