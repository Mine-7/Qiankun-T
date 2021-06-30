import logo from "./assets/logo192.png";
import "./App.css";

function App(props) {
  console.log(props);
  const { history, propsMainAPP } = props;
  console.log(localStorage.getItem("token"));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            history.push("/main");
          }}
        >
          /main页面
        </button>
        <button
        // onClick={() => {
        //   propsMainAPP.historyMain("/sec_sub");
        // }}
        >
          另一个应用页面
        </button>
        <div className="App-link" style={{ color: "red" }}>
          Learn React
        </div>
      </header>
    </div>
  );
}
export default App;
