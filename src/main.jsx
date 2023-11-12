import React from 'react'
import ReactDOM from 'react-dom/client'
import { MusiconfitApp } from './MusiconfitApp.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MusiconfitApp />
    </BrowserRouter>
  </React.StrictMode>
)
