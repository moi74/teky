import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.scss'

function CarouselTop(){
        return (
            <div className='carousel__page'>
                <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} className='carousel__page__carousel'>
                    <div>
                        <img src="./carrossel1.png"></img>
                    </div>
                    <div>
                        <img src="./carrossel2.png"></img>
                    </div>
                    <div>
                        <img src="./carrossel3.png"></img>
                    </div>
                </Carousel>
            </div>
        );
}

export default CarouselTop;