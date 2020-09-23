import React, { useState } from "react";

function Checkbox(props) {
  const [checked, setChecked] = useState(false);
  if (checked) {
    return (
      <label key={props.id} htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          value={props.want}
          onChange={(e) => props.handleTickingCheckbox(e.target, setChecked)}
          checked={checked}
        />
        {props.want}
      </label>
    );
  } else {
    return (
      <label key={props.id} htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          value={props.want}
          onChange={(e) => props.handleTickingCheckbox(e.target, setChecked)}
          disabled={props.chosenItemsCount === props.topCount ? "disabled" : ""}
          checked={checked}
        />
        {props.want}
      </label>
    );
  }
}

export default Checkbox;
