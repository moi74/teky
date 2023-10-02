import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import BrandsData from '../../../data/BrandsData.tsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselBrands.css';

function CarouselBrands() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 5;
  const CardData = BrandsData;

  const totalSlides = Math.ceil(CardData.length / productsPerPage);

  const nextSlide = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div>
        <h4 className='carouselBrands__text'>Marcas em destaque</h4>
        <div className="carouselBrands">
        <Carousel
            showThumbs={false}
            selectedItem={currentPage}
            onChange={nextSlide}
        >
            {[...Array(totalSlides)].map((_, index) => {
            const startCardIndex = index * productsPerPage;
            const endCardIndex = startCardIndex + productsPerPage;
            const cardsInThisSlide = CardData.slice(startCardIndex, endCardIndex);

            return (
                <div key={index} className="carouselBrands__cards">
                {cardsInThisSlide.map((card) => (
                    <div key={card.id} className="carouselBrands__card">
                    <img className="carouselBrands__image" src={card.imagemUrl} alt={card.nome} />
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

export default CarouselBrands;
