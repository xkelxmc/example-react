import {useState} from "react";
import {Counter} from "../features/counter/Counter";
import {Header} from "../components/Header";

export const CounterPage = () => {
  const [show, setShow] = useState(true)
  const [intValue, setIntValue] = useState(0)

  const handleClick = () => {
    setShow(prev => !prev);
  }

  const handleClickChangeValue = () => {
    setIntValue(42)
  }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Header title={'This is counter page'}/>
      <div style={{marginBottom: '40px'}}>
      <button onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </button>
      <button onClick={handleClickChangeValue}>
        set new initial value
      </button>
      </div>
      {show && <Counter intValue={intValue} />}
      <Counter intValue={1000}/>
      <Counter/>
    </div>
  );
}
