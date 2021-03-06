import React, { useState, useEffect } from "react";

//ex - data fetching, changing title, signing up for subscriptions, listening for events
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("calling useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]); //works everytime the value is changed

  useEffect(() => {
    console.log("boop once");
  }, []); //works only in first render

  useEffect(() => {
    console.log("once?");
  }); //works after every render

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>

      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
