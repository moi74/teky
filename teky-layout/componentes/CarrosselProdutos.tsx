import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ProdutosData from '../data/ProdutosData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/CarrosselProdutos.css';

function CarrosselProdutos(props) {
  const [paginaAtual, setCurrentPage] = useState(0);
  const produtosPorPagina = 4;
  const CardData = ProdutosData;

  const totalSlides = Math.ceil(CardData.length / produtosPorPagina);

  const trocaSlide = (index: number) => {
    setCurrentPage(index)
  }

  return (
    <div>
        <p className='carrosselProdutos__titulo'><b>{props.titulo}</b></p>
        <div className="carrosselProdutos">
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
                <div key={index} className="carrosselProdutos__cards">
                {cardsInThisSlide.map((card) => (
                    <div key={card.id} className="carrosselProdutos__card">
                        <div className='carrosselProdutos__card__localImagem'>
                          <img className="carrosselProdutos__imagem" src={card.imagemUrl} alt={card.nome} />
                        </div>
                        <div className='carrosselProdutos__tituloProduto'>
                          <h3>{card.nome}</h3>
                        </div>
                        <div className='carrosselProdutos__dadosProduto'>
                          <p className='carrosselProdutos__infos carrosselProdutos__infos--fabricante'>
                            Por   <a className='carrosselProdutos__linkFabricante' href='#'>{card.fabricante}</a>
                          </p>
                          <p className='carrosselProdutos__infos carrosselProdutos__infos--venda'>R${card.precoVenda}</p>
                          <p className='carrosselProdutos__infos carrosselProdutos__infos--preco'>R${card.precoOriginal}</p>
                          <p className={`carrosselProdutos__infos ${card.estoque === true ? 'disponivel' : 'indisponivel'}`}>
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

export default CarrosselProdutos;
