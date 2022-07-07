import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "c4aaf4683952ff7f3d7b63ae702e0e962e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News App</h1>
    </div>
  );
};

export default App;
