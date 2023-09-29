import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import MarcasData from '../../../data/MarcasData.tsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarrosselMarcas.css';

function CarrosselMarcas() {
  const [paginaAtual, setCurrentPage] = useState(0);
  const produtosPorPagina = 5;
  const CardData = MarcasData;

  const totalSlides = Math.ceil(CardData.length / produtosPorPagina);

  const trocaSlide = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div>
        <h4 className='carrosselMarcas__texto'>Marcas em destaque</h4>
        <div className="carrosselMarcas">
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
                <div key={index} className="carrosselMarcas__cards">
                {cardsInThisSlide.map((card) => (
                    <div key={card.id} className="carrosselMarcas__card">
                    <img className="carrosselMarcas__imagem" src={card.imagemUrl} alt={card.nome} />
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

export default CarrosselMarcas;
