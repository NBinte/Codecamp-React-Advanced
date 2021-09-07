import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(firstName, email);
    if (firstName && email) {
      // console.log("submit the form");
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((oldPeople) => {
        return [...oldPeople, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty field(s)");
    }
  };

  return (
    <>
      <article>
        <form action="" className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;

          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
