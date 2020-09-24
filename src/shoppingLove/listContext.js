import React, { useState, createContext } from "react";

const allLists = {
  wantList: [],
  doNotWantList: [],
  reconciledList: [],
  chosenList: [],
};

export const ListContext = createContext(null);

export default ({ children }) => {
  const [list, setList] = useState(allLists);

  const addToWantList = (text) => {
    setList((lists) => ({
      ...lists,
      wantList: [
        ...lists.wantList,
        {
          want: text,
          id:
            text.split(" ").join("").toLowerCase() +
            text.length +
            Math.floor(Math.random() * (100 - 0) + 0),
        },
      ],
    }));
  };

  const addToDoNotWantList = (text) => {
    setList((lists) => ({
      ...lists,
      doNotWantList: [
        ...lists.doNotWantList,
        {
          want: text,
          id:
            text.split(" ").join("").toLowerCase() +
            text.length +
            Math.floor(Math.random() * (100 - 0) + 0),
        },
      ],
    }));
  };

  const addToReconciledList = (text) => {
    setList((lists) => ({
      ...lists,
      reconciledList: [
        ...lists.reconciledList,
        {
          want: text,
          id:
            text.split(" ").join("").toLowerCase() +
            text.length +
            Math.floor(Math.random() * (100 - 0) + 0),
        },
      ],
    }));
  };

  const addToChosenList = (item) => {
    setList((lists) => ({
      ...lists,
      chosenList: [...lists.chosenList, ...item],
    }));
  };

  return (
    <ListContext.Provider
      value={{
        list,
        addToWantList,
        addToDoNotWantList,
        addToReconciledList,
        addToChosenList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
