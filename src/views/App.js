import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import MyForm from "./Example/MyForm";
import MyForm1 from "./Example/MyForm1";

// đây là funtion component cách khai báo truyền thống
// function App() {
// kiểu viết funtion component hiện tại gọi là arrow funtion
const App = () => {
  // cú pháp JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent /> */}
        {/* <MyForm /> */}
        <MyForm1 />
      </header>
    </div>
  );
};

export default App;
