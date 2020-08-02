import React, { useState } from "react";
import {
  reconciledList as recoilReconciledList,
  doNotWantList as recoilDoNotWantList,
} from "./ShoppingLove";
import { Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

function Reconciliation() {
  const [positiveWant, setPositiveWant] = useState("");
  const [positiveWantList, setPositiveWantList] = useRecoilState(
    recoilReconciledList
  );
  const negativeWantList = useRecoilValue(recoilDoNotWantList);
  const [counterNegWantList, setCounterNegWantList] = useState(0);

  function handleAddingPositiveWant(e) {
    e.preventDefault();
    if (!positiveWant) return;
    setPositiveWantList([
      ...positiveWantList,
      {
        want: positiveWant,
        id:
          positiveWant +
          positiveWantList.length +
          Math.floor(Math.random() * (100 - 0) + 0),
      },
    ]);
    setPositiveWant("");
    if (counterNegWantList <= negativeWantList.length) {
      setCounterNegWantList(counterNegWantList + 1);
    }

    //else {
    // TODO hide the form for processing negative wants and move on
    //}
  }

  if (!negativeWantList.length) {
    return <Navigate to="../do-not-want" />;
  } else {
    return (
      <section>
        <h1>Can you rephrase these?</h1>
        <p>
          Can you express everything you don't want in terms of something you do
          want?
        </p>
        {negativeWantList.length > counterNegWantList && (
          <form onSubmit={handleAddingPositiveWant}>
            <p>
              <strong>{negativeWantList[counterNegWantList].want}</strong>
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
          {positiveWantList.map((want) => (
            <li key={want.id}>{want.want}</li>
          ))}
        </ul>
        {counterNegWantList === negativeWantList.length && (
          <p>Great, I'm done!</p>
        )}
      </section>
    );
  }
}

export default Reconciliation;
