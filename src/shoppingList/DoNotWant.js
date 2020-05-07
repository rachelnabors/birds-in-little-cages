import React, { useState } from "react";

function DoNotWant(props) {
  const [newDoNotWant, setNewDoNotWant] = useState("");

  function handleAddingWant(e) {
    e.preventDefault();
    if (!newDoNotWant) return;
    props.setList([
      ...props.list,
      {
        want: newDoNotWant,
        id:
          newDoNotWant.split(" ").join("").toLowerCase +
          props.list.length +
          Math.floor(Math.random() * (100 - 0) + 0),
      },
    ]);
    setNewDoNotWant("");
  }

  if (props.currentPage === 1) {
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
          {props.list.map((want) => (
            <li key={want.id}>{want.want}</li>
          ))}
        </ul>
        {props.list.length > 0 && (
          <button onClick={props.onFormSubmit}>Great, I'm done!</button>
        )}
      </section>
    );
  } else {
    return null;
  }
}

export default DoNotWant;
