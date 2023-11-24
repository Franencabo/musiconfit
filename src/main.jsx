import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MusiconfitApp } from './MusiconfitApp.jsx'
import { AudioProvider } from '../src/musiconfit/components/AudioContext.jsx'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AudioProvider>
        <MusiconfitApp />
      </AudioProvider>
    </BrowserRouter>
  </React.StrictMode>
)
