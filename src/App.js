import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <br />
      <small>
        <a
          href="https://github.com/juliavanvuren"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Julia van Vuren
      </small>
    </div>
  );
}
