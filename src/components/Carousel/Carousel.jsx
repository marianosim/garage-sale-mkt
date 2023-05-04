import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

function CarouselFade() {
  return (
    <div className='carousel-container'>
      <Carousel fade >
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://res.cloudinary.com/dzxg6dw84/image/upload/v1683228827/garage_sale_uwvof6.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2> -   6 Cuotas sin interés en todo el sitio   - </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;