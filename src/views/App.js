import logo from "./logo.svg";
import "./App.scss";
// thư viện hiển thị thông báo notify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import MyComponent from "./Example/MyComponent";
// import MyForm from "./Example/MyForm";
// import MyForm1 from "./Example/MyForm1";
import Todo from "./Todos/Todo";

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
        {/* <MyForm1 /> */}
        <Todo />
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
