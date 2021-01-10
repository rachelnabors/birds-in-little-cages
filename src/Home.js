import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Button, ButtonGroup, space } from "@chakra-ui/react";

const list = JSON.parse(localStorage.getItem("shoppingLoveList"));

function Home() {
  return (
    <nav>
      <ButtonGroup>
        <Button as={ReactLink} variant="ghost" to="/lost-log">
          Lost Log
        </Button>
        {list ? (
          <Button as={ReactLink} variant="ghost" to="/shopping-for-love/review">
            Shopping for Love
          </Button>
        ) : (
          <Button as={ReactLink} variant="ghost" to="/shopping-for-love">
            Shopping for Love
          </Button>
        )}
        {/* <Button as={ReactLink} variant="ghost" to="/holidays-left">
          Your Favorite Holiday
        </Button> */}
      </ButtonGroup>
    </nav>
  );
}
export default Home;
