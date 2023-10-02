import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import CategoriasData from '../../../data/CategoriasData.tsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselCategories.css';

function CarouselCategories() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 5;
  const CardData = CategoriasData;

  const totalSlides = Math.ceil(CardData.length / productsPerPage);

  const trocaSlide = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div>
        <p className='carouselCategories__text'><b>Categorias</b></p>
        <div className="carouselCategories">
        <Carousel
            showThumbs={false}
            selectedItem={currentPage}
            onChange={trocaSlide}
        >
            {[...Array(totalSlides)].map((_, index) => {
            const startCardIndex = index * productsPerPage;
            const endCardIndex = startCardIndex + productsPerPage;
            const cardsInThisSlide = CardData.slice(startCardIndex, endCardIndex);

            return (
                <div key={index} className="carouselCategories__cards">
                {cardsInThisSlide.map((card) => (
                    <div key={card.id} className="carouselCategories__card">
                    <img className="carouselCategories__image" src={card.imagemUrl} alt={card.nome} />
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

export default CarouselCategories;
