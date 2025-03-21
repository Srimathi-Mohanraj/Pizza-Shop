
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OrderList from './OrderList';


function AppBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h1 className='text-primary'><span><i className="bi bi-yelp"></i>Pizz Shop</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end'>
          <Nav >
            <Nav.Link href="#home" className='fw-semibold'>Home</Nav.Link>
            <Nav.Link href="#menu" className='fw-semibold'>Menu</Nav.Link>
            <Nav.Link href="#must try" className='fw-semibold'>Must Try</Nav.Link>
            <Nav.Link href="#contact us" className='fw-semibold'>Contact Us</Nav.Link>
            <OrderList/>
                
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}

export default AppBar;