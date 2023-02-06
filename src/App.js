import logo from "./logo.svg";
import adam from "./IMG_1806.JPG";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{}}>
          <img src={logo} className="App-logo" alt="logo" />
          <img
            src={adam}
            className="App-logo"
            style={{ position: "absolute", top: "0", left: "0" }}
            alt="adam"
          />
          <img
            src={adam}
            className="App-logo"
            style={{ position: "absolute", top: "0", right: "0" }}
            alt="adam"
          />
          <img
            src={adam}
            className="App-logo"
            style={{ position: "absolute", bottom: "0", left: "0" }}
            alt="adam"
          />
          <img
            src={adam}
            className="App-logo"
            style={{ position: "absolute", bottom: "0", right: "0" }}
            alt="adam"
          />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>But, like, why would you? This site is already perfect.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
