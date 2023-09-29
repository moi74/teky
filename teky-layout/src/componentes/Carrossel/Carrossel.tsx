import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import './Carrossel.css'

function Carrossel(){
        return (
            <div className='Carrossel'>
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

export default Carrossel;