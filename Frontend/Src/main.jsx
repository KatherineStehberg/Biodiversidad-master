import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Corrected the path to import your global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Mounting the application in the element with id 'root' in the index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
