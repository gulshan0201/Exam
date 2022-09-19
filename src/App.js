import './App.css';
import Bars from "./Components/Bars";
import Button from "./Components/Button";
import Vertical from "./Components/Vertical";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Button name="History" />
      <Bars />
      <Vertical />
      <Main />
    </div>
  );
}

export default App;
