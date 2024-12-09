import React, { useState } from "react";

export default function TickSizer({ size, setSize }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        gap: "10px",
      }}
    >
      <input
        type="range"
        min="1"
        max="100"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "50%",
          height: `${size}px`,
          width: `${size}px`,
          lineHeight: `${size}px`,
          fontWeight: "bold",
        }}
      >
        {size}px
      </div>
    </div>
  );
}
