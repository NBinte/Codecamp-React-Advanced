import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  //const [text, setText] = useState("Boba tea");
  const [text, setText] = useState("");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}
      {/* {
    if(){
      console.log("This will throw an error");
    }

  } */}

      <h1>{text || "Milk tea"}</h1>

      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle error
      </button>

      {isError && <h1>Error...</h1>}

      {/* {!text && <h1>Want Some?</h1>} */}

      {/* {text && <h1>Want Some?</h1>} */}

      {isError ? (
        <p>There is an error!</p>
      ) : (
        <div>
          <h2> There is no error </h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
