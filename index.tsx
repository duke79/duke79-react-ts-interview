import React, { Component } from "react";
import { render } from "react-dom";
import TestComponent from "./TestComponent";

const App = () => {
  return (
    <div
      style={{
        height: "98vh",
        display: "grid",
        gridTemplateRows: "1fr",
        margin: "auto",
        background: "#00000029",
      }}
    >
      <TestComponent />
    </div>
  );
};

render(<App />, document.getElementById("root"));
