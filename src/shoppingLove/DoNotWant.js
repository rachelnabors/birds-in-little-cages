import React, { useState, useContext } from "react";
import { Link as ReactLink, Navigate } from "react-router-dom";
import { ListContext } from "./listContext";
import {
  ListItem,
  Heading,
  Input,
  Button,
  UnorderedList,
} from "@chakra-ui/react";

function DoNotWant() {
  const { list } = useContext(ListContext);

  if (!list.wantList.length) {
    return <Navigate to="/shopping-for-love" />;
  } else {
    return <DoNotWantExercise />;
  }
}

function DoNotWantExercise() {
  const [newDoNotWant, setNewDoNotWant] = useState("");
  const { addToDoNotWantList, list } = useContext(ListContext);
  function handleAddingWant(e) {
    e.preventDefault();
    if (!newDoNotWant) return;
    addToDoNotWantList(newDoNotWant);
    setNewDoNotWant("");
  }

  return (
    <section>
      <Heading as="h1">
        What are you <em>not</em> looking for?
      </Heading>
      <form onSubmit={handleAddingWant}>
        <Input
          type="text"
          value={newDoNotWant}
          onChange={(e) => setNewDoNotWant(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
      <UnorderedList className="list">
        {list.doNotWantList.map((want) => (
          <ListItem key={want.id}>{want.want}</ListItem>
        ))}
      </UnorderedList>
      {list.doNotWantList.length > 0 && (
        <Button as={ReactLink} to="../reconciliation" className="button">
          Great, I'm done!
        </Button>
      )}
    </section>
  );
}
export default DoNotWant;
