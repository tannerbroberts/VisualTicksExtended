/* eslint-disable react/prop-types */
import React from "react";

export default function TickOrb({
  tickIndex,
  focused,
  tickSize,
  primaryColor,
  secondaryColor,
  primaryTextColor,
  secondaryTextColor,
  onClick,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      style={{
        width: tickSize,
        height: tickSize,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: focused ? primaryColor : secondaryColor,
        color: focused ? primaryTextColor : secondaryTextColor,
        border: "1px solid black",
        margin: "1px",
      }}
      onClick={onClick}
    >
      {tickIndex + 1}
    </div>
  );
}
