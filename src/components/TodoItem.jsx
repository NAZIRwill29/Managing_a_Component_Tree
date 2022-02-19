import React, { useState } from "react";

function TodoItem(props) {
  //for crossstate
  const [isDone, setIsDone] = useState(false);
  //cross the text
  function crossText() {
    setIsDone(true);
  }

  return (
    <li
      style={{ textDecoration: isDone ? "line-through" : "none" }}
      onClick={crossText}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
