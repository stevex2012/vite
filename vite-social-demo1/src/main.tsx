import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

console.log('--React', React)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
