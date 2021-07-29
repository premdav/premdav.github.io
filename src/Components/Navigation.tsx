import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="transparent" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">Preston</Navbar.Brand>
      <Nav className="m-0">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#features">Skills</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default Navigation;