/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TickOrb from "./TickOrb";
import TickSizer from "./TickSizer";

export default function TickContainer({
  tickCount,
  focusedIndex,
  setFocusedTickIndex,
  primaryColor,
  secondaryColor,
  primaryTextColor,
  secondaryTextColor,
}) {
  const [tickSize, setTickSize] = useState(50);
  const [ticksPerRow, setTicksPerRow] = useState(5);

  const increaseTicksPerRow = () => setTicksPerRow(ticksPerRow + 1);
  const decreaseTicksPerRow = () =>
    setTicksPerRow(Math.max(1, ticksPerRow - 1));

  let tickIndex = 0;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <button type="button" onClick={increaseTicksPerRow}>
          Increase Ticks Per Row
        </button>
        <button type="button" onClick={decreaseTicksPerRow}>
          Decrease Ticks Per Row
        </button>
      </div>
      <TickSizer size={tickSize} setSize={setTickSize} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {Array.from({ length: Math.ceil(tickCount / ticksPerRow) }).map(
          (_, rowIndex) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={rowIndex}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {Array.from({ length: ticksPerRow }).map((_1, columnIndex) => {
                if (tickIndex < tickCount) {
                  const isFocused = tickIndex === focusedIndex;
                  const tickOrbIndex = tickIndex;
                  const tickOrb = (
                    <TickOrb
                      // eslint-disable-next-line react/no-array-index-key
                      key={columnIndex}
                      tickIndex={tickIndex}
                      focused={isFocused}
                      tickSize={tickSize}
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      primaryTextColor={primaryTextColor}
                      secondaryTextColor={secondaryTextColor}
                      onClick={() => setFocusedTickIndex(tickOrbIndex)}
                    />
                  );
                  tickIndex += 1;
                  return tickOrb;
                }
                return null;
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
}
