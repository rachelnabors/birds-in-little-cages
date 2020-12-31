import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { ListContext } from "./listContext";
import {
  ListItem,
  Heading,
  Input,
  Button,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

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
        <Heading as="h1">Can you rephrase these?</Heading>
        <Text>
          Can you express everything you don't want in terms of something you do
          want?
        </Text>
        {list.doNotWantList.length > counterNegWantList && (
          <form onSubmit={handleAddingPositiveWant}>
            <Text>
              <strong>{list.doNotWantList[counterNegWantList].want}</strong>
            </Text>
            <Input
              value={positiveWant}
              onChange={(e) => setPositiveWant(e.target.value)}
            />
            <Button type="submit">Convert</Button>
          </form>
        )}
        <UnorderedList className="list">
          {list.reconciledList.map((want) => (
            <ListItem key={want.id}>{want.want}</ListItem>
          ))}
        </UnorderedList>
      </section>
    );
  }
}

export default Reconciliation;
