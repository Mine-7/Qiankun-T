import logo from "./assets/logo192.png";
import "./App.css";

function App(props) {
  console.log(props);
  const { history, propsMainAPP } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            propsMainAPP.historyMain("/sub-react");
          }}
        >
          跳转至sub-react
        </button>
        <div className="App-link">SUB-REACT-SRCOND</div>
      </header>
    </div>
  );
}
export default App;
