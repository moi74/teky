import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import CategoriasData from '../../../data/CategoriasData.tsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarrosselCategorias.css';

function CarrosselCategorias() {
  const [paginaAtual, setCurrentPage] = useState(0);
  const produtosPorPagina = 5;
  const CardData = CategoriasData;

  const totalSlides = Math.ceil(CardData.length / produtosPorPagina);

  const trocaSlide = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div>
        <p className='carrosselCategorias__texto'><b>Categorias</b></p>
        <div className="carrosselCategorias">
        <Carousel
            showThumbs={false}
            selectedItem={paginaAtual}
            onChange={trocaSlide}
        >
            {[...Array(totalSlides)].map((_, index) => {
            const startCardIndex = index * produtosPorPagina;
            const endCardIndex = startCardIndex + produtosPorPagina;
            const cardsInThisSlide = CardData.slice(startCardIndex, endCardIndex);

            return (
                <div key={index} className="carrosselCategorias__cards">
                {cardsInThisSlide.map((card) => (
                    <div key={card.id} className="carrosselCategorias__card">
                    <img className="carrosselCategorias__imagem" src={card.imagemUrl} alt={card.nome} />
                    </div>
                ))}
                </div>
            );
            })}
        </Carousel>
        </div>
    </div>
  );
}

export default CarrosselCategorias;
