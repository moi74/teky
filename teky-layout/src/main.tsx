import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/Header/Header.tsx';
import CarouselTop from './componentes/Carousel/Carousel.tsx';
import CarrosselBrands from './componentes/CarouselBrands/CarouselBrands.tsx';
import CarouselCategories from './componentes/CarouselCategories/CarouselCategories.tsx';
import CarouselProducts from './componentes/CarouselProducts/CarouselProducts.tsx';
import Footer from './componentes/Footer/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <CarouselTop />
    <CarouselProducts titulo='Destaques' />
    <CarrosselBrands />
    <CarouselCategories />
    <CarouselProducts titulo='Mais Destaques' />
    <Footer />
  </React.StrictMode>,
)
