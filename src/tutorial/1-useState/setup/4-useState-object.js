import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Tsuki",
    age: 24,
    message: "Coffee?",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Tea?" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button onClick={changeMessage} className="btn">
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
