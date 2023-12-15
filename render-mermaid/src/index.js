import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Text = `
flowchart TD   
  A[順計算] --> B[逆計算] 
  B --> C[誤差計算]
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Mermaid={Text}/>
  </React.StrictMode>
);

