import logo from "./logo.svg";
import "./App.scss";

// thư viện hiển thị thông báo notify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MyComponent from "./Example/MyComponent";
// import MyForm from "./Example/MyForm";
import MyForm1 from "./Example/MyForm1";
import Todo from "./Todos/Todo";

import Nav from "./Nav/Nav";
import Home from "./Example/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import ExRedux from "./ExRedux/ExRedux";

// đây là funtion component cách khai báo truyền thống
// function App() {
// kiểu viết funtion component hiện tại gọi là arrow funtion
const App = () => {
  // cú pháp JSX
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* Swith navigation */}
          <Switch>
            {/* Nếu là vào home thì render ra component home */}
            <Route path="/" exact>
              <Home />
            </Route>

            {/* Nếu là vào todo app thì render ra component todo app */}
            <Route path="/todo">
              <Todo />
            </Route>

            {/* Nếu là vào ListUser thì render ra component ListUser */}
            <Route path="/listuser" exact>
              <ListUser />
            </Route>

            {/* Nếu là vào DetailUser thì render ra component DetailUser */}
            <Route path="/listuser/:id">
              <DetailUser />
            </Route>

            {/* Nếu là vào contact thì render ra component contact */}
            <Route path="/redux">
              <ExRedux />
            </Route>

            {/* Nếu là vào contact thì render ra component contact */}
            <Route path="/contact">
              <MyForm1 />
            </Route>

            {/* Nếu là vào About thì render ra component About */}
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>

          {/* <MyComponent /> */}
          {/* <MyForm /> */}
          {/* <MyForm1 /> */}
          {/* <Todo /> */}
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
    </BrowserRouter>
  );
};

export default App;
