import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./logo.jpeg";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className='img-fluid rounded-circle' width={35}/> Study Buddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to="/" className='fs-5 nav-link active me-3'>Home</Link>
            <NavDropdown title="Groups" id="basic-nav-dropdown" className='fs-5'>
              <NavDropdown.Item><Link to="/" className='nav-link active'>State Board</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/" className='nav-link active'>CBSE</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/contact" className='fs-5 nav-link active me-3'>Contact Us</Link>
            <Link to="/signup" className='fs-5 nav-link active me-3'>Login/SignUp</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
