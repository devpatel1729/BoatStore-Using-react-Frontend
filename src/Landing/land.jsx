import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./land.css"
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";

import car1 from '../images/car1.jpg'
import car2 from '../images/car2.png'
import car3 from '../images/car3.jpg'
import car4 from '../images/car4.jpg'
import v1 from '../images/v1.mp4'
import v2 from '../images/v2.mp4'
import v3 from '../images/v3.mp4'
import v4 from '../images/v4.mp4'
import banner from '../images/timer.png'
import img19 from "../images/heart.png"
import img20 from "../images/heartful.png"
import hp1 from '../images/hp1.jpg'
import hp2 from '../images/hp2.jpg'
import hp3 from '../images/hp3.jpg'
import hp4 from '../images/hp4.jpg'
import g1 from '../images/g1.svg'
import g2 from '../images/g2.svg'
import g3 from '../images/g3.svg'
import g4 from '../images/g4.svg'
import v5 from '../images/v5.mp4'
import v5img from '../images/v5img.png'
import v6 from '../images/v6.mp4'
import v6img from '../images/v6img.png'
import v7 from '../images/v7.mp4'
import v7img from '../images/v7img.png'
import v8 from '../images/v8.mp4'
import v8img from '../images/v8img.png'
import v9 from '../images/v9.mp4'
import v9img from '../images/v9img.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'


function VideoBanner(){

    const [timeRemaining, setTimeRemaining] = useState(9600); // Initial time in seconds (5 minutes)

  useEffect(() => {
    let timerInterval;
    if (timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } 
    else {
      clearInterval(timerInterval);
    } return () => clearInterval(timerInterval);
                    }, [timeRemaining]);
    
    const hours = Math.floor(timeRemaining/3600)
    const minutes = Math.floor((timeRemaining%3600) / 60);
    const seconds = timeRemaining % 60;

    return(
    <div>
        <div className="carousel">
            <Carousel fade variant="primary">
            <Carousel.Item>
                <img src={car1}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={car2}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={car3}/>    
            </Carousel.Item>
            <Carousel.Item>
                <img src={car4}/>
            </Carousel.Item>
            </Carousel>
        </div>
        <br/><br/>
        <div>
        <span className="best1">Explore </span><span className="sellers1">Best Selle</span><span className="rs">rs</span>
        </div>
        <br/>
        <div>
            <Row className="vrow">
                <Col sm={3}>
                    <div className="v1">
                        <video className="rounded-4" autoPlay={true} height={310} muted loop>
                            <source src={v1} type="video/mp4" />
                        </video>
                        <p className="v1txt">Smartwatches</p>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <video className="rounded-4" autoPlay={true} height={310} muted loop>
                            <source src={v2} type="video/mp4" />
                        </video>
                        <p className="v1txt">Wireless Earbuds</p>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <video className="rounded-4" autoPlay={true} height={310} muted loop>
                            <source src={v3} type="video/mp4" />
                        </video>
                        <p className="v1txt">Neckbands</p>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <video className="rounded-4" autoPlay={true} height={310} muted loop>
                            <source src={v4} type="video/mp4" />
                        </video>
                        <p className="v1txt">Headphones</p>
                    </div>
                </Col>

            </Row>
        </div>
        <br/>
        <div>
        <span className="best1">Daily </span><span className="sellers1">Dea</span><span className="rs">ls</span>
        </div>
        <br/>
        <div>
            <Row className="banrow rounded-3">
                <Col sm={7}>
                    <p className="bantxt">Save On Gadgets ! October Sale is here </p>
                    
                </Col>
                <Col sm={4}>
                    <p className="timer">Sale Ends In: {hours.toString()}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
                </Col>
                <Col sm={1}>
                    <img src={banner} className="banimg"/>
                </Col>
            </Row>
        </div><br/><br/>
    </div>
    )
}

function Deals(){
    return(
    <div>
        <Container>
        <Row className="row1">

          <Col sm={3}>
            <div className="rounded-4 landpro">
            <img src={hp1} className="hp1 rounded-4"/>
            </div>
            <div className="prodiv rounded-bottom-4">
              <div className="pback rounded-5">
                <p className="pbacktxt">Noise Cancellation</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#008000",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.5</p></Col>
                
              </Row>
              </div>
              <Row>
                <Col sm={7}>
                <div className="det1div"><span className="det1">Airdopes 141 ANC</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 1,799</span> 
                <span className="det3"><del>₹ 5,990</del></span>
                <span className="det4">70% off</span>
              </div>
                </Col>
                <Col sm={5}>
                <button className="cartbland rounded-3">Add To Cart</button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={3}>
            <div className="rounded-4 landpro">
            <img src={hp2} className="hp1 rounded-4"/>
            </div>
            <div className="prodiv rounded-bottom-4">
              <div className="pback rounded-5">
                <p className="pbacktxt">AMOLED Display</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#008000",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.9</p></Col>
                
              </Row>
              </div>
              <Row>
                <Col sm={7}>
                <div className="det1div"><span className="det1">Ultima Prism</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 2,599</span> 
                <span className="det3"><del>₹ 8,999</del></span>
                <span className="det4">63% off</span>
              </div>
                </Col>
                <Col>
                <button className="cartbland rounded-3">Add To Cart</button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={3}>
            <div className="rounded-4 landpro">
            <img src={hp3} className="hp1 rounded-4"/>
            </div>
            <div className="prodiv rounded-bottom-4">
              <div className="pback rounded-5">
                <p className="pbacktxt">30 Hours playback</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#008000",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.8</p></Col>
                
              </Row>
              </div>
              <Row>
                <Col sm={7}>
                <div className="det1div"><span className="det1">Rockerz 245 V2</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 999</span> 
                <span className="det3"><del>₹ 3,490</del></span>
                <span className="det4">71% off</span>
              </div>
                </Col>
                <Col>
                <button className="cartbland rounded-3">Add To Cart</button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={3}>
            <div className="rounded-4 landpro">
            <img src={hp4} className="hp1 rounded-4"/>
            </div>
            <div className="prodiv rounded-bottom-4">
              <div className="pback rounded-5">
                <p className="pbacktxt">BT Calling</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#008000",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.8</p></Col>
                
              </Row>
              </div>
              <Row>
                <Col sm={7}>
                <div className="det1div"><span className="det1">Wave Sigma</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 1,499</span> 
                <span className="det3"><del>₹ 7,499</del></span>
                <span className="det4">80% off</span>
              </div>
                </Col>
                <Col>
                <button className="cartbland rounded-3">Add To Cart</button>
                </Col>
              </Row>
            </div>
          </Col>

          

        </Row>
        </Container>

        <Row className="g1row">
            <Col xs={3}>
                <img src={g1} className="g1"/>
                <div>
                <span><b> 1 Year </b></span><span> Warranty</span>
                </div>
            </Col>
            <Col xs={3}>
                <img src={g2} className="g2"/>
                <div>
                <span><b> 7 Day </b></span><span> Replacement</span>
                </div>
            </Col>
            <Col xs={3}>
                <img src={g3} className="g3"/>
                <div>
                <span><b>Free </b></span><span> Shipping</span>
                </div>
            </Col>
            <Col xs={3}>
                <img src={g4} className="g4"/>
                <div>
                <span><b>GST </b></span><span> Billing</span>
                </div>
            </Col>
        </Row><br/><br/>
    </div>
    )
}

function Newly(){
    return(
        <div>
          <span className="best1">Newly </span><span className="sellers1">Add</span><span className="rs">ed</span><br/><br/>
          <Row className="vrow2">
            <Col sm={2} className="vrowcol">
                <div>
                  <video className="rounded-top-3" autoPlay={true} height={420} muted loop>
                      <source src={v5} type="video/mp4" />
                   </video>
                </div>
                <div className="v5div rounded-3">
                  <img src={v5img} className="v5img rounded-4"/>
                  <span className="v5txt">Airdopes 458</span><br/>
                  <span className="v5txt2">₹ 1,999 <span className="orgprice"><del> ₹ 4,990 </del></span> <span className="disc"> 59% off </span></span>
                  <button className="v5btn rounded-2">Add To Cart</button>
                </div>
            </Col>
            <Col sm={2} className="vrowcol">
                <div>
                  <video className="rounded-top-3" autoPlay={true} height={420} muted loop>
                      <source src={v6} type="video/mp4" />
                   </video>
                   <div className="v5div rounded-3">
                  <img src={v6img} className="v5img rounded-4"/>
                  <span className="v6txt">Wave Flex Connect</span><br/>
                  <span className="v5txt2">₹ 1,799 <span className="orgprice"><del> ₹ 7,990 </del></span> <span className="disc"> 77% off </span></span>
                  <button className="v5btn rounded-2">Add To Cart</button>
                </div>
                </div>
            </Col>
            <Col sm={2} className="vrowcol">
                <div>
                  <video className="rounded-top-3" autoPlay={true} height={420} muted loop>
                      <source src={v7} type="video/mp4" />
                   </video>
                   <div className="v5div rounded-3">
                  <img src={v7img} className="v5img rounded-4"/>
                  <span className="v5txt">Wave Style Call</span><br/>
                  <span className="v5txt2">₹ 1,799 <span className="orgprice"><del> ₹ 7,990 </del></span> <span className="disc"> 77% off </span></span>
                  <button className="v5btn rounded-2">Add To Cart</button>
                </div>
                </div>
            </Col>
            <Col sm={2} className="vrowcol">
                <div>
                  <video className="rounded-top-3" autoPlay={true} height={420} muted loop>
                      <source src={v8} type="video/mp4" />
                   </video>
                   <div className="v5div rounded-3">
                  <img src={v8img} className="v5img rounded-4"/>
                  <span className="v5txt">Airdopes 141</span><br/>
                  <span className="v5txt2">₹ 1,299 <span className="orgprice"><del> ₹ 4,490 </del></span> <span className="disc"> 71% off </span></span>
                  <button className="v5btn rounded-2">Add To Cart</button>
                </div>
                </div>
            </Col>
            <Col sm={2} className="vrowcol">
                <div>
                  <video className="rounded-top-3" autoPlay={true} height={420} muted loop>
                      <source src={v9} type="video/mp4" />
                   </video>
                   <div className="v5div rounded-3">
                  <img src={v9img} className="v5img rounded-4"/>
                  <span className="v5txt">Airdopes Atom 81</span><br/>
                  <span className="v5txt2">₹ 1,299 <span className="orgprice"><del> ₹ 3,490 </del></span> <span className="disc"> 62% off </span></span>
                  <button className="v5btn rounded-2">Add To Cart</button>
                </div>
                </div>
            </Col>
          </Row>
        </div>
    )
}

function Land(){
    return(
        <div className="land">
            <Header/>
            <VideoBanner/>
            <Deals/>
            <Newly/>
            <Footer/>
        </div>
    )
}

export default Land;
