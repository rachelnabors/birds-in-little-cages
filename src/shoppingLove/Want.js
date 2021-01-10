import React, { useState, useContext } from "react";
import { Link as ReactLink } from "react-router-dom";
import { ListContext } from "./listContext";
import {
  ListItem,
  Heading,
  Input,
  Button,
  UnorderedList,
} from "@chakra-ui/react";

function Want() {
  const [newWant, setNewWant] = useState("");
  const { list, addToWantList } = useContext(ListContext);

  function handleAddingWant(e) {
    e.preventDefault();
    if (!newWant) return;
    addToWantList(newWant);
    setNewWant("");
  }

  return (
    <section>
      <Heading as="h1">What are you looking for?</Heading>
      <form onSubmit={handleAddingWant}>
        <Input
          placeholder="Example: cute, funny, smart, etc."
          value={newWant}
          onChange={(e) => setNewWant(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
      <UnorderedList className="list">
        {list.wantList.map((want) => (
          <ListItem key={want.id}>{want.want}</ListItem>
        ))}
      </UnorderedList>
      {list.wantList.length > 0 && (
        <Button as={ReactLink} to="do-not-want" className="button">
          Great, I'm done!
        </Button>
      )}
    </section>
  );
}

export default Want;
