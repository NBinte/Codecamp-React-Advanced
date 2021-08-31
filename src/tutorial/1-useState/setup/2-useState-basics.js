import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Boop"));

  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  // console.log(value, handler);

  const [text, setText] = useState("meh");

  const clickHandler = () => {
    if (text === "meh") {
      setText("Boop");
    } else {
      setText("meh");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={clickHandler}>
        change title
      </button>
    </React.Fragment>
  );
};
export default UseStateBasics;
