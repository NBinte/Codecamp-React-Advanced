import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  // console.log(useParams());

  const { id } = useParams();
  const [name, setName] = useState("default name");

  useEffect(() => {
    const findPerson = data.find((person) => person.id === parseInt(id));
    // console.log(findPerson);

    setName(findPerson.name);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back to people
      </Link>
    </div>
  );
};

export default Person;
