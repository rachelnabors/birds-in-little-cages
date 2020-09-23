import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import { ListContext } from "./listContext";

function PickAndChoose() {
  const { list, addToChosenList } = useContext(ListContext);
  const [chosenItemsCount, setChosenItemsCount] = useState(0);
  const [chosenItems, setChosenItems] = useState([]);

  // combine two lists into one temp one
  const compositeList = list.wantList.concat(list.reconciledList);

  let topCount;

  // we want either the top 5 or all traits
  if (compositeList.length >= 5) {
    topCount = 5;
  } else {
    topCount = compositeList.length;
  }

  // Fisher-Yates algorithm practically shuffles itself ;)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(function () {
    // randomize the composite list only on the first render of the component
    shuffle(compositeList);
  }, []);

  function handleTickingCheckbox(checkboxElem, id, setChecked) {
    if (checkboxElem.checked) {
      setChecked(true);
      setChosenItemsCount((previousCount) => previousCount + 1);
      setChosenItems((latestItems) => {
        return [...latestItems, id];
      });
      console.log(chosenItems);
    } else {
      setChecked(false);
      setChosenItemsCount((previousCount) => previousCount - 1);
      // remove from chosenItems
      setChosenItems((latestItems) => {
        return latestItems.filter((item) => item !== id);
      });
    }
  }

  function handleSavingChosenList(e) {
    e.preventDefault();
    // Get all the items from compositeList via their ids
    // filter by id—this could be much faster!
    // for each member of chosenItems,
    chosenItems.forEach(function (chosenItem) {
      // filter compositeList and add to ChosenList the compositeListItem whose id it matches
      addToChosenList(
        compositeList.filter(
          (compositeItem) => compositeItem.id === chosenItem
        )[0]
      );
    });
  }

  if (!list.reconciledList.length) {
    return <Navigate to="../reconciliation" />;
  } else if (list.chosenList.length) {
    return <Navigate to="../review" />;
  } else {
    return (
      <section>
        <h1>Pick the top {topCount} things you're looking for</h1>
        <p>You can't have everything.</p>
        <form onSubmit={handleSavingChosenList}>
          {compositeList.map((want) => (
            <Checkbox
              key={want.id}
              id={want.id}
              want={want.want}
              handleTickingCheckbox={(checkboxElem, setChecked) =>
                handleTickingCheckbox(checkboxElem, want.id, setChecked)
              }
              chosenItemsCount={chosenItemsCount}
              topCount={topCount}
            />
          ))}

          {chosenItemsCount === topCount && (
            <input type="submit" value="Save list" />
          )}
        </form>
      </section>
    );
  }
}

export default PickAndChoose;
