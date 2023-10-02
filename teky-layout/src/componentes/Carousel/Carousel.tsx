import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import './Carousel.css'

function CarouselTop(){
        return (
            <div className='Carousel__page'>
                <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
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