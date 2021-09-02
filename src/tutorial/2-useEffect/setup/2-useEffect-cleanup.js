import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  // console.log(size);

  const checkSize = () => {
    console.log("inside checkSize method");
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("inside useEffect");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("cleaning listener");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render component");
  return (
    <>
      <h1>Window</h1>

      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
