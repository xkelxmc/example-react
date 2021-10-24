import {Header} from "./components/Header";
import {Counter} from "./components/Counter";
import {Footer} from "./components/Footer";
import {TextInput} from "./components/TextInput";

const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Header title="Example counter!"/>
      <Counter intValue={42} />
      <Counter intValue={1000}/>
      <Counter/>
      <Header title="Example Text input"/>
      <TextInput/>
      <Footer>
        Footer content
        <a href="https://google.com">Link</a>
      </Footer>
    </div>
  );
}

export default App;
