import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export function Navbarr() {
    const navigate = useNavigate();
  return (
    <Navbar expand="lg"  bg="dark" variant='dark'>
    <Container>
      <Navbar.Brand href="/">BookZone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav"  >
        <Nav className="me-auto" >
          <Nav.Link >Home</Nav.Link>
          <Nav.Link onClick={()=>navigate("/addbook")} >AddBook</Nav.Link>    
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

