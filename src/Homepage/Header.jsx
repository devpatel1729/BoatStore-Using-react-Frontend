import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./Home.css"
import Earbuds from "./Earbuds";
import Smartwatches from "./Smartwatches";
import Neckbands from "./Neckbands";
import Headphones from "./Headphones";
import Speakers from "./Speakers";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faFacebook,faXTwitter,faYoutube,faLinkedin} from '@fortawesome/react-fontawesome'

import img1 from "../images/logo2.png"
import img3 from "../images/cate1.png"
import img4 from "../images/cate2.png"
import img5 from "../images/cate3.png"
import img6 from "../images/cate4.png"
import img7 from "../images/cate5.png"
import img8 from "../images/cate6.png"
import img9 from "../images/cate7.png"
import img10 from "../images/cate8.png"
import img11 from "../images/cate9.png"
import img12 from "../images/cate10.png"
import img13 from "../images/cate11.png"
import img14 from "../images/cate12.png"
import img55 from "../images/playstore.png"
import img66 from "../images/appstore.png"





function Header(){
  
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State variable for Offcanvas visibility

  // Function to toggle Offcanvas visibility
  const toggleOffcanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

    return(
        <div>
    <Navbar fixed="top" expand="lg" bg="white" data-bs-theme="white" className="nav">
      <Container>
        <Navbar.Brand className="img1c">
          <Link to="/">
          <img src={img1} className="rounded img1"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown" className="dropcont">

            <Container className="drop1">
              <Row className="categoryrow">
                <Col>
            <Container>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col sm={2}>
                  <img src={img3} className="img3"/>
                  </Col>
                  <Col sm={6}>
                  <p className="catetxt">True Wireless Earbuds</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img4} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Wired Headphones</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img5} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Trimmers</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img6} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Superhero Collection</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              </Container>
              </Col>
              <Col>
            <Container>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img7} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Neckbands</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img8} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Wired Earphones</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img9} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Chargers</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img10} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Smartwatches</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              </Container>
              </Col>
              <Col>
            <Container>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img11} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Soundbars</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img12} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Power Banks</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img13} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Limited Edition</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              <Row>
                 <NavDropdown.Item>
                  <Row>
                    <Col xs={2}>
                  <img src={img14} className="img3"/>
                  </Col>
                  <Col xs={6}>
                  <p className="catetxt">Speakers</p>
                  </Col>
                  </Row>
                  </NavDropdown.Item>
              </Row>
              </Container>
              </Col>
              </Row>
            </Container>
              
          </NavDropdown>
          

          
        
          <Nav.Link href="/" className="deals">
          <Link to="/front">
            <span className="dealstxt">Collections</span>  
          </Link>  
          </Nav.Link>
          
        
          <div className="searchCont"></div>
          <div className="search">
            <InputGroup className="navinp">
              <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control type="text"/>
            </InputGroup>
          </div>
          

          <div className="wishc">
          <Nav.Link href="" className="wish"><FontAwesomeIcon icon={faHeart} /></Nav.Link>
          </div>

          <div className="cartc">
          <Button onClick={toggleOffcanvas} variant="white"  className="cart">
            <FontAwesomeIcon icon={faBagShopping} />
          </Button>
      
          <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas Title</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>Offcanvas content goes here.</p>
            </Offcanvas.Body>
          </Offcanvas>
            </div>
        
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}


export default Header