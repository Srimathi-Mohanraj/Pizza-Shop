import { Container, Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Container fludi>
<Row className='justify-content-center align-items-center'>
<Col lg={8}>
<Carousel data-bs-theme="dark">
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={require('../assest/one.jpeg')}
      alt="First slide"
    />
    <Carousel.Caption className='text-light'>
      <h5>Margherita</h5>
      <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={require('../assest/two.jpeg')}
      alt="Second slide"
    />
    <Carousel.Caption className='text-light' >
      <h5>Cheese Pizza</h5>
      <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={require("../assest/three.jpeg")}
      alt="Third slide"
    />
    <Carousel.Caption className='text-light'>
      <h5>Perporoni</h5>
      <p className='d-none d-sm-block'>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
</Row>
<div className='text-center '>
<h2 className="display-5 mt-3">Pizza for Every Occasion</h2>
<p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

</Container>
    
  );
}

export default Banner;