import React from "react";
import { Navigate, Link as ReactLink } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

function Review() {
  const list = JSON.parse(localStorage.getItem("shoppingLoveList"));

  if (!list.length) {
    return <Navigate to="../reconciliation" />;
  } else {
    return (
      <section>
        <Heading as="h1">Your shopping list:</Heading>
        <UnorderedList className="list">
          {list.map((want) => (
            <ListItem key={want.id}>{want.want}</ListItem>
          ))}
        </UnorderedList>
        <nav>
          <ButtonGroup>
            <Button as={ReactLink} to="/">
              Great, I'm done!
            </Button>
            <Button to="/shopping-for-love" as={ReactLink}>
              Make a new list...
            </Button>
          </ButtonGroup>
        </nav>
      </section>
    );
  }
}

export default Review;
