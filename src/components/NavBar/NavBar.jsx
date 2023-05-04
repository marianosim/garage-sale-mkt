import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/KWLogo_redVariant.png';
import './navbar.css';
import { NavbarBrand } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <div className='top-banner'> <span >Envío gratis en compras superiores a $15.000</span></div>
      <Navbar expand="lg">
        <Container fluid>
          <Link to='/'>
            <NavbarBrand><img src={logo} alt='logo' className='logo' /></NavbarBrand>
          </Link>
          <Link to='/' className='brand-title'>
            <Navbar.Brand className='brand-title'>Garage Sale MKT</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <NavDropdown title='Categorías' id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={'/category/ropa'} className='navbar-link'>Ropa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/accesorios'} className='navbar-link'>
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/hogar'} className='navbar-link'>
                  Hogar
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={'/category/electronica'} className='navbar-link'>
                  Electrónica
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/calzado'} className='navbar-link'>
                  Calzado
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link as={Link} to='/cart' className='p-4 cart-widget'><CartWidget /></Nav.Link>
        </Container>
      </Navbar>
      <Alert variant='secondary' style={{ borderTop: '2px solid #c3bfbf', borderBottom: '2px solid #c3bfbf' }}>
        <div className='navbar-alert'>
          <Nav.Link as={Link} to='/' className='register-link'>Creá tu cuenta</Nav.Link>
          <Nav.Link as={Link} to='/' className='sign-in-link'>Iniciá Sesión</Nav.Link>
        </div>
      </Alert>
    </>
  );
}

export default NavBar;