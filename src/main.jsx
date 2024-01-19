import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EjercicioEjemplo } from './EjercicioEjemplo.jsx'
import { HookUseEffect } from './HookUseEffect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookUseEffect />
  </React.StrictMode>,
)
