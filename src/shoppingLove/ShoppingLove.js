import React from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot, atom } from "recoil";
import Want from "./Want";
import DoNotWant from "./DoNotWant";
import Reconciliation from "./Reconciliation";

const wantList = atom({
  key: "wantList",
  default: [],
});

const doNotWantList = atom({
  key: "doNotWantList",
  default: [],
});

const reconciledList = atom({
  key: "reconciledList",
  default: [],
});

function ShoppingLove() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Want />} />
        <Route path="/do-not-want" element={<DoNotWant />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
      </Routes>
    </RecoilRoot>
  );
}

export default ShoppingLove;

export { doNotWantList, reconciledList, wantList };
