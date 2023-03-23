import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

// đây là funtion component cách khai báo truyền thống
// function App() {
// kiểu viết funtion component hiện tại gọi là arrow funtion
const App = ()=> {
  // cú pháp JSX
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
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
