import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { ListContext } from "./listContext";

function Reconciliation() {
  const [positiveWant, setPositiveWant] = useState("");
  const { list, addToReconciledList } = useContext(ListContext);
  const [counterNegWantList, setCounterNegWantList] = useState(0);

  function handleAddingPositiveWant(e) {
    e.preventDefault();
    if (!positiveWant) return;
    addToReconciledList(positiveWant);
    setPositiveWant("");
    if (counterNegWantList <= list.doNotWantList.length) {
      setCounterNegWantList(counterNegWantList + 1);
    }
  }

  if (!list.doNotWantList.length) {
    return <Navigate to="../do-not-want" />;
  } else if (counterNegWantList === list.doNotWantList.length) {
    // when user has finished converting all their don't wants to positive statements,
    // move on to the next page
    return <Navigate to="../pick-and-choose" />;
  } else {
    return (
      <section>
        <h1>Can you rephrase these?</h1>
        <p>
          Can you express everything you don't want in terms of something you do
          want?
        </p>
        {list.doNotWantList.length > counterNegWantList && (
          <form onSubmit={handleAddingPositiveWant}>
            <p>
              <strong>{list.doNotWantList[counterNegWantList].want}</strong>
            </p>
            <input
              type="text"
              className="input"
              value={positiveWant}
              onChange={(e) => setPositiveWant(e.target.value)}
            />
            <input type="submit" value="Convert" />
          </form>
        )}
        <ul className="list">
          {list.reconciledList.map((want) => (
            <li key={want.id}>{want.want}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Reconciliation;
