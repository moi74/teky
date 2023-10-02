import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ProdutosData from '../../../data/ProdutosData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselProducts.css';

function CarouselProducts(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const CardData = ProdutosData;

  const totalSlides = Math.ceil(CardData.length / productsPerPage);

  const nesxtSlide = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div>
        <h4 className='carouselProducts__title'>{props.titulo}</h4>
        <div className="carouselProducts">
        <Carousel
            showThumbs={false}
            selectedItem={currentPage}
            onChange={nesxtSlide}
        >
            {[...Array(totalSlides)].map((_, index) => {
            const startCardIndex = index * productsPerPage;
            const endCardIndex = startCardIndex + productsPerPage;
            const cardsInThisSlide = CardData.slice(startCardIndex, endCardIndex);

            return (
                <div key={index} className="carouselProducts__cards">
                {cardsInThisSlide.map((card) => (
                    <div key={card.id} className="carouselProducts__card">
                        <div className='carouselProducts__card__localImage'>
                          <img className="carouselProducts__image" src={card.imagemUrl} alt={card.nome} />
                        </div>
                        <div className='carouselProducts__productTitle'>
                          <h4>{card.nome}</h4>
                        </div>
                        <div className='carouselProducts__productsData'>
                          <p className='carouselProducts__infos carouselProducts__infos--manufacturer'>
                            Por   <a className='carouselProducts__manufacturerLink' href='#'>{card.fabricante}</a>
                          </p>
                          <p className='carouselProducts__infos carouselProducts__infos--sell'>R${card.precoVenda}</p>
                          <p className='carouselProducts__infos carouselProducts__infos--price'>R${card.precoOriginal}</p>
                          <p className={`carouselProducts__infos ${card.estoque === true ? 'available' : 'unavailable'}`}>
                            {card.estoque === true ? 'Em estoque' : 'Indisponível'}
                          </p>
                        </div>
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

export default CarouselProducts;
