import React, { useState } from "react";
import DoNotWant from "./DoNotWant";
import PositiveWant from "./PositiveWant";

function WantConversion(props) {
  const [doNotWantList, setDoNotWantList] = useState([]);

  return (
    <>
      <DoNotWant
        onFormSubmit={props.onFormSubmit}
        currentPage={props.currentPage}
        list={doNotWantList}
        setList={setDoNotWantList}
      />
      <PositiveWant
        onFormSubmit={props.onFormSubmit}
        listToAnalyze={doNotWantList}
        currentPage={props.currentPage}
      />
    </>
  );
}

export default WantConversion;
