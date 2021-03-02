import React from "react";
import { test } from "./TestFunction";

const TestComponent = () => {
  const [output, setOutput] = React.useState(undefined as any);

  React.useEffect(() => {
    const result = test();
    console.log({ result });
    setOutput(result);
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        // border: "1px solid black",
        // borderRadius: "10px",
        padding: "10px",
        fontSize: "18px"
      }}
    >
      <pre>{JSON.stringify(output, null, "  ")}</pre>
    </div>
  );
};

export default TestComponent;
