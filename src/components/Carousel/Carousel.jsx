import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

function CarouselFade() {
  return (
    <div className='carousel-container'>
      <Carousel fade >
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://res.cloudinary.com/dzxg6dw84/image/upload/v1666306070/KitchenWarehouse/Captura_de_Pantalla_2022-10-20_a_la_s_19.46.40_jelgl7.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2> -   6 Cuotas sin interés en todo el sitio   - </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://res.cloudinary.com/dzxg6dw84/image/upload/v1666306070/KitchenWarehouse/Captura_de_Pantalla_2022-10-20_a_la_s_19.46.58_d9mzh4.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2> -   Envío gratis en compras superiores a $15.000   - </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://res.cloudinary.com/dzxg6dw84/image/upload/v1666306284/KitchenWarehouse/Captura_de_Pantalla_2022-10-20_a_la_s_19.51.02_dbodmf.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2> -   ¡Mirá todo nuestro catálogo!   - </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;