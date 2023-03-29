// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// react 17.0.2
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './views/App';

// Import thư viện redux để sử dụng
// Thư viện ép thằng react khởi động chạy song song cùng với redux
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";

// Định nghĩa store cho redux
const reduxStore = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    {/* ép thằng react khởi động chạy song song cùng với redux và nạp store lưu trữ dữ liệu cho redux */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);