import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <HashRouter>x
  <StrictMode>
    <App />
  </StrictMode>,
  </HashRouter>
)
