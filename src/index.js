import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={myStore}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);