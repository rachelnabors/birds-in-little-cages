import React, { useState } from "react";
import Want from "./Want";
import WantConversion from "./WantConversion";

function ShoppingList() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePagingForward = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Want currentPage={currentPage} onFormSubmit={handlePagingForward} />
      <WantConversion
        currentPage={currentPage}
        onFormSubmit={handlePagingForward}
      />
    </>
  );
}

export default ShoppingList;
