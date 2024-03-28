import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App.jsx';
import './variables.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/WaterTrackerFrontend">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
