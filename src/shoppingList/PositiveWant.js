import React, { useState } from "react";

function PositiveWant(props) {
  const [positiveWant, setPositiveWant] = useState("");
  const [positiveWantList, setPositiveWantList] = useState([]);
  const [counterNegWantList, setcounterNegWantList] = useState(0);

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
    if (counterNegWantList <= props.listToAnalyze.length) {
      setcounterNegWantList(counterNegWantList + 1);
    }

    //else {
    // TODO hide the form for processing negative wants and move on
    //}
  }

  if (props.currentPage === 2) {
    return (
      <section>
        <h1>Can you rephrase these?</h1>
        <p>
          Can you express everything you don't want in terms of something you do
          want?
        </p>
        {props.listToAnalyze.length > counterNegWantList && (
          <form onSubmit={handleAddingPositiveWant}>
            <p>
              <strong>{props.listToAnalyze[counterNegWantList].want}</strong>
            </p>
            <input
              type="text"
              className="input"
              value={positiveWant}
              onChange={(e) => setPositiveWant(e.target.value)}
            />
            <input type="submit" value="Add" />
          </form>
        )}
        <ul className="list">
          {positiveWantList.map((want) => (
            <li key={want.id}>{want.want}</li>
          ))}
        </ul>
        {counterNegWantList === props.listToAnalyze.length && (
          <button onClick={props.onFormSubmit}>Great, I'm done!</button>
        )}
      </section>
    );
  } else {
    return null;
  }
}

export default PositiveWant;
