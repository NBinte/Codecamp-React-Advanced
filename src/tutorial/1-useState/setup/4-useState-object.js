import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Tsuki",
    age: 24,
    message: "Coffee?",
  });

  const [name, setName] = useState("Tsuki");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Coffee?");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Tea?" });

    setMessage("Tea?");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>

      <button onClick={changeMessage} className="btn">
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
