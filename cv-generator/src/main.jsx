import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './nav.jsx'
import Hero from './hero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Hero/>
  </React.StrictMode>,
)
