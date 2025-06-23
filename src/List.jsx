import React, { useState } from "react";
import "./App.css";

const List = (props) => {
  return props.array.map((item, index) => {
    return (
      <li className="list" key={index}>
        <ListState item={item} />
      </li>
    );
  });
};

const ListState = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((value) => !value);
  };
  return (
    <button onClick={handleClick}>
      {click ? "!!!" : ""}
      {props.item}
    </button>
  );
};

export default List;
