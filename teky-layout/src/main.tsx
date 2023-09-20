import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../pages/Header.tsx'
import Carrossel from '../pages/Carrossel.tsx'
import Footer from '../pages/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Carrossel />
    <Footer />
  </React.StrictMode>,
)
