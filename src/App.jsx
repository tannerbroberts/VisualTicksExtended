import React, { useState } from "react";
import TickContainer from "./components/TickContainer";
import CountInput from "./components/CountInput";
import useTickIndex from "./hooks/useTickIndex";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const { focusedTickIndex, setFocusedTickIndex, Tuner } = useTickIndex({
    tickCount: count,
  });

  return (
    <div className="App">
      <ErrorBoundary>
        <Tuner />
        <CountInput count={count} setCount={setCount} />
        <TickContainer
          ticksPerColumn={1}
          ticksPerRow={10}
          tickCount={count}
          focusedIndex={focusedTickIndex}
          setFocusedTickIndex={setFocusedTickIndex}
          primaryColor="blue"
          secondaryColor="lightblue"
          primaryTextColor="white"
          secondaryTextColor="black"
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
