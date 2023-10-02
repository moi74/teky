import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/Header/Header.tsx';
import CarouselTop from './componentes/Carousel/Carousel.tsx';
import CarrosselMarcas from './componentes/CarrosselMarcas/CarrosselMarcas.tsx';
import CarrosselCategorias from './componentes/CarrosselCategorias/CarrosselCategorias.tsx';
import CarrosselProdutos from './componentes/CarrosselProdutos/CarrosselProdutos.tsx';
import Footer from './componentes/Footer/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <CarouselTop />
    <CarrosselProdutos titulo='Destaques' />
    <CarrosselMarcas />
    <CarrosselCategorias />
    <CarrosselProdutos titulo='Mais Destaques' />
    <Footer />
  </React.StrictMode>,
)
