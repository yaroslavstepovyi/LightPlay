import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/reset.css'

import { App } from './pages/app'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
