import {useState} from "react";
import {CounterControls} from "./CounterControls";
import {CounterValue} from "./CounterValue";

export const Counter = ({intValue = 0}) => {
  const [count, setCount] = useState(intValue);

  return (
    <>
      <CounterControls setCount={setCount} intValue={intValue}/>
      <CounterValue count={count}/>
    </>
  )
}
