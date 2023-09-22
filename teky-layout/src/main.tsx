import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../componentes/Header.tsx';
import Carrossel from '../componentes/Carrossel.tsx';

import CarrosselMarcas from '../componentes/CarrosselMarcas.tsx';
import CarrosselCategorias from '../componentes/CarrosselCategorias.tsx'
import CarrosselProdutos from '../componentes/CarrosselProdutos.tsx'

import Footer from '../componentes/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Carrossel />
    <CarrosselProdutos titulo='Destaques' />
    <CarrosselMarcas />
    <CarrosselCategorias />
    <CarrosselProdutos titulo='Mais Destaques' />
    <Footer />
  </React.StrictMode>,
)
