import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { GlobalStyles } from 'Styles/GlobalStyles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GlobalStyles/>
    <App />
  </BrowserRouter>
);
