import React, { useState } from "react";
import "./Headphones.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'


import img2 from "../images/main4.png"
import img15 from "../images/product31.jpg"
import img16 from "../images/product32.png"
import img17 from "../images/product33.png"
import img18 from "../images/product34.png"
import img19 from "../images/heart.png"
import img20 from "../images/heartful.png"






function Intro(){
  return(
    <div className="intro">
      <Container>
        <Row className="row1">
            <Col xs={6} className="introcol">
            <img src={img2} className="img12"/>
          </Col>
          <Col xs={6} className="introcol">
            <p className="t9">Headphones</p>
            <p className="t33">Starting from ₹ 1199*</p>
            <Link to="/store">
            <Button variant="outline-dark" className="shoppro1">Shop Products <FontAwesomeIcon icon={faCircleArrowRight} /> </Button>
            </Link>
          </Col>
        </Row><br/>
        <Row className="row1"> 
        <div>
        <span className="best">Best </span><span className="sellers"> Sellers</span>
        </div>
        </Row><br/><br/>
      </Container>
    </div>
  )
}

function Products()
{
  var a = 0;
  const [imgSrc, setImgSrc] = useState(img19);
  const update1Src = img20 ;
  const update2Src = img19
  const changeImg = (e) => {
      e.preventDefault();
      a+=1
      if(a%2==0){
        setImgSrc(update2Src);
      }
      else{
        setImgSrc(update1Src);
      }
    };
  return(
    <div className="">
      <Container>
        <Row className="row1">

          <Col sm>
            <div className="img15cont rounded-4">
            <img src={img15} className="img15 rounded-4"/>
            </div>
            <div className="product rounded-bottom-4">
              <div className="playback rounded-5">
                <p className="playbacktxt78">8 Hours Playback</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.8</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Rockerz 370</span><br/></div>
              <div className="det234">
                <span className="det2">₹  999</span> 
                <span className="det3"><del>₹  2,499</del></span>
                <span className="det4">60% off</span>
              </div>
              <button className="cartb rounded-3">Add To Cart</button>
            </div>
          </Col>

          <Col sm className="procol2">
            <div className="img15cont rounded-4">
            <img src={img16} className="img15 rounded-4"/>
            </div>
            <div className="product rounded-bottom-4">
              <div className="playback rounded-5">
                <p className="playbacktxt78">8 Hours Playback</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.9</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Rockerz 425</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 1,499</span> 
                <span className="det3"><del>₹ 2,990</del></span>
                <span className="det4">50% off</span>
              </div>
              <button className="cartb rounded-3">Add To Cart</button>
            </div>
          </Col>

          <Col sm className="procol3">
            <div className="img15cont rounded-4">
            <img src={img17} className="img15 rounded-4"/>
            </div>
            <div className="product rounded-bottom-4">
              <div className="playback rounded-5">
                <p className="playbacktxt69">Special Edition</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.9</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Rockerz 450 Batman DC Edition</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 1,799</span> 
                <span className="det3"><del>₹ 3,990</del></span>
                <span className="det4">55% off</span>
              </div>
              <button className="cartb rounded-3">Add To Cart</button>
            </div>
          </Col>

          <Col sm className="procol4">
            <div className="img15cont rounded-4">
            <img src={img18} className="img15 rounded-4"/>
            </div>
            <div className="product rounded-bottom-4">
              <div className="playback rounded-5">
                <p className="playbacktxt69">Best for Gaming</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.8</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Immortal 1300</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 3,499</span> 
                <span className="det3"><del>₹ 9,990</del></span>
                <span className="det4">65% off</span>
              </div>
              <button className="cartb rounded-3">Add To Cart</button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

function Headphones(){
    return(
      <div className="body">
        <Intro/>
        <Products/>
      </div>
    )
}

export default Headphones;