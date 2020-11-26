import React from "react";
import { Link } from "react-router-dom";

export default function HolidaysLeft() {
  // TODO: add a form that asks and stores this information ala shopping for love
  // What's your favorite holiday?
  // How old are you?
  // How old on average were your grandparents when they died?
  // You love {holiday}? Good news: you have (age - gpAge) more left to look forward to :)

  return (
    <>
      <p>
        You love Halloween? Good news: you have {92 - 35} more left to look
        forward to :)
      </p>
      <Link to="/" className="button">
        Back to the waiting room
      </Link>
    </>
  );
}
