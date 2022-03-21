import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Store from "./setting/Store";
import {BrowserRouter} from 'react-router-dom';
import App from './app/App';
import './setting/styles/App.css'


ReactDOM.render(
  <React.StrictMode>   
      <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>         
  </React.StrictMode>,
  document.getElementById('root')
);


