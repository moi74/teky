import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/Header/Header.tsx';
import Carrossel from './componentes/Carrossel/Carrossel.tsx';
import CarrosselMarcas from './componentes/CarrosselMarcas/CarrosselMarcas.tsx';
import CarrosselCategorias from './componentes/CarrosselCategorias/CarrosselCategorias.tsx';
import CarrosselProdutos from './componentes/CarrosselProdutos/CarrosselProdutos.tsx';
import Footer from './componentes/Footer/Footer.tsx';

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
