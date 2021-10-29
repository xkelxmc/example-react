import {Header} from "./components/Header";
import {Counter} from "./components/Counter";
import {Footer} from "./components/Footer";
import {TextInput} from "./components/TextInput";
import {useState} from "react";

const App = () => {
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
      <Header title="Example counter!"/>
      <div style={{marginBottom: '40px'}}>
      <button onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </button>
      <button onClick={handleClickChangeValue}>
        set new initial value
      </button>
      </div>
      {show && <Counter intValue={intValue} />}
      {/*<Counter intValue={1000}/>*/}
      {/*<Counter/>*/}
      {/*<Header title="Example Text input"/>*/}
      {/*<TextInput/>*/}
      {/*<Footer>*/}
      {/*  Footer content*/}
      {/*  <a href="https://google.com">Link</a>*/}
      {/*</Footer>*/}
    </div>
  );
}

export default App;
