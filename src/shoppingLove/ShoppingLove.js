import React from "react";
import { Routes, Route } from "react-router-dom";
import Want from "./Want";
import DoNotWant from "./DoNotWant";
import Reconciliation from "./Reconciliation";
import PickAndChoose from "./PickAndChoose";
import ListContext from "./listContext";

function ShoppingLove() {
  return (
    <ListContext>
      <Routes>
        <Route path="/" element={<Want />} />
        <Route path="/do-not-want" element={<DoNotWant />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
        <Route path="/pick-and-choose" element={<PickAndChoose />} />
      </Routes>
    </ListContext>
  );
}

export default ShoppingLove;
