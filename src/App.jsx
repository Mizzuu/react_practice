import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("beggining");

  const [num, setNum] = useState(0);
  const [seaOtterFlag, setSeaOtterFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFlag = () => {
    setSeaOtterFlag(!seaOtterFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        seaOtterFlag || setSeaOtterFlag(true);
      } else {
        seaOtterFlag && setSeaOtterFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello, Makey!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm good.</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up!</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {seaOtterFlag && <p>🦦</p>}
    </>
  );
};

export default App;
