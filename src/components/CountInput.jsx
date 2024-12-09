/* eslint-disable react/prop-types */
import React from "react";

export default function CountInput({ count, setCount }) {
  return (
    <input
      style={{ fontSize: "1.5em", marginBottom: "10px", textAlign: "center" }}
      type="number"
      value={count}
      onChange={(e) => setCount(parseInt(e.target.value, 10))}
    />
  );
}
