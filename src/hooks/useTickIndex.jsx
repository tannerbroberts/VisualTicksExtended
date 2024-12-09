import React, { useState, useEffect } from "react";

// update and return the value of the tick index every 0.6 seconds
// Return a 4-button component used for fine-tuning the exact timing of the tick index

const tunerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const buttonStyle = {
  margin: "5px",
  padding: "5px",
  backgroundColor: "lightgrey",
  border: "none",
  borderRadius: "5px",
};

export default function useTickIndex({ tickCount }) {
  const [focusedTickIndex, setFocusedTickIndex] = useState(0);
  const [nextUpdate, setNextUpdate] = useState(Date.now() + 600);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() >= nextUpdate) {
        setFocusedTickIndex((previous) =>
          previous + 1 >= tickCount ? 0 : previous + 1
        );
        setNextUpdate((previous) => previous + 600);
      }
    }, 10);

    return () => clearInterval(interval);
  });

  function Tuner() {
    return (
      <div style={tunerStyle}>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setNextUpdate((prev) => prev + 10)}
        >
          -
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setNextUpdate((prev) => prev + 50)}
        >
          --
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setNextUpdate((prev) => prev - 50)}
        >
          ++
        </button>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setNextUpdate((prev) => prev - 10)}
        >
          +
        </button>
      </div>
    );
  }

  return { focusedTickIndex, setFocusedTickIndex, Tuner };
}
