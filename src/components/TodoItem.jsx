import React, { useState } from "react";

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        //pass the id to func from onChecked in App comp
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
