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


function Footer(){
    return(
      <div>
        <div>
        <Row>
          <div className="foot">
            <Row className="footrow">
              <Col className="c1">
                <h5>Company</h5>
                
                <p className="hoaqua">Partner with us</p>
                <p className="hoaqua">Advertise</p>
                <p className="hoaqua">Media Kit</p>
              </Col>
              <Col className="c2">
                <h5>Legal</h5>
                
                <p className="hoaqua">Terms</p>
                <p className="hoaqua">Privacy</p>
                <p className="hoaqua">Cookies</p>
              </Col>
              <Col>
                <h5>Get The App</h5>
                
                <img src={img55}/><br/><br/>
                <img src={img66}/>
              </Col>
              <Col>
                <h5>Find Us On</h5>
                
                <p className="brands">
                <i className="fa-brands hoaqua fa-instagram" />
                <i className="fa-brands hoaqua fa-facebook" />
                <i className="fa-brands hoaqua fa-linkedin" />
                <i className="fa-brands hoaqua fa-twitter" />
                <i className="fa-brands hoaqua fa-youtube" />
                </p>
              </Col>
            </Row>
            <hr className="hr"/>
            <Row>
              <Col sm={6}>
                <Link to="/">
                    <img src={img1} className="img1f rounded"/>
                </Link>
              </Col>
              <Col sm={6}>
                <p className="copyright">© 2023 Gadjective.Co. All Rights Reserved.<br/>Powered By Dev H Patel</p>
              </Col>
            </Row>
            <Row>
        <div className="news rounded-3">
        
            <Row>
              <Col>
                <Row>
                  <p className="n1">Join Our Newsletter</p>
                  <p className="n2">Subscribe to newsletter to get Exclusive information about the latest offers , news , upcoming events 48 hours before , at Just ₹ 49 Per <br/> Year.</p>
                </Row>
              </Col>
              <Col>
              <Row className="ema">
                <Form>
                <Col><Form.Control type="email" className="emailip" placeholder="Email" required/></Col>
                <Col><Button type="submit" className="emailb">Subscribe</Button></Col>
                </Form>
              </Row>
              </Col>
            </Row>
          
        </div>
            </Row>
          </div>
        </Row>
        </div>
      </div>
      
    )
  }

export default Footer