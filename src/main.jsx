import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ContadorApp } from './components/ContadorApp'
// import { FormularioApp } from './components/FormularioApp';
// import { ListaTareas } from './components/ListaTareas';
import { ClockApp } from './components/ClockApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClockApp />
  </React.StrictMode>,
)
