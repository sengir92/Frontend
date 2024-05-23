import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Container.css';


const CustomContainer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('mainNav');
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Navbar expand="lg" bg="light" fixed="top" id="mainNav">
        <Container>
          <Navbar.Brand href="#page-top">
            <img src="/img/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              style={{ color: 'white' }}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto nav-right">
              <Nav.Item className="nav-item">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link href="#classes">Classes</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link href="#trainer">Trainer</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link href="#review">Review</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link href="#contact-us">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link href="#join_us">
                  <Button variant="warning">JOIN US</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default CustomContainer;
