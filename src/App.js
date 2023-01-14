import logo from './logo.svg';
import './App.css';
import { useCopyToClipboard } from './hook/useCopyToClipboard';

function App() {
  const [isCopied, copy] = useCopyToClipboard("Text to copy!");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='button' onClick={copy}>{isCopied ? "Copied!" : "Copy"}</button>
      </header>
    </div>
  );
}

export default App;
