import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
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

    //else {
    // TODO hide the form for processing negative wants and move on
    //}
  }

  if (!list.doNotWantList.length) {
    return <Navigate to="../do-not-want" />;
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
        {counterNegWantList === list.doNotWantList.length && (
          <Link to="../pick-and-choose" className="button">
            Great, I'm done!
          </Link>
        )}
      </section>
    );
  }
}

export default Reconciliation;
