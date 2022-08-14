// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './reset.css';
import './index.css';
import './assets/fonts/poppins/poppins.css';

// Components
import Nav from './components/Nav/Nav';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
