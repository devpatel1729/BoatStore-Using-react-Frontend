import React, { useState } from "react";
import "./Smartwatches.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'


import img2 from "../images/main2.png"
import img15 from "../images/product11.jpg"
import img16 from "../images/product12.jpg"
import img17 from "../images/product13.jpg"
import img18 from "../images/product14.jpg"
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
            <p className="t1">Smart  Watches</p>
            <p className="t33">Starting from ₹ 1699*</p>
            <Link to="/store">
            <Button variant="outline-dark" className="shopprox">Shop Products <FontAwesomeIcon icon={faCircleArrowRight} /> </Button>
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

function Products(){
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
                <p className="playbacktxt1">BT Calling</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.9</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Wave Call</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 1,799</span> 
                <span className="det3"><del>₹ 7,990</del></span>
                <span className="det4">77% off</span>
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
                <p className="playbacktxt1">BT Calling</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">5.0</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Lunar Connect Ace</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 2,499</span> 
                <span className="det3"><del>₹ 9,499</del></span>
                <span className="det4">74% off</span>
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
                <p className="playbacktxt2">AMOLED Display</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">5.0</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Ultima Chronos</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 2,799</span> 
                <span className="det3"><del>₹ 8,999</del></span>
                <span className="det4">69% off</span>
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
                <p className="playbacktxt1">BT Calling</p>
              </div>
              <div className="starrow">
              <Row style={{height:"20px"}}>
                <Col xs={1} className="starsym"><span><FontAwesomeIcon icon={faStar} style={{color: "#f4c730",}} /></span></Col>
                <Col xs={1} className="det0c"><p className="det0">4.9</p></Col>
                <Col xs={1} className="heartbc"><button className="heartb" onClick={changeImg}><img src={imgSrc} className="img19"/></button></Col>
              </Row>
              </div>
              <div className="det1div"><span className="det1">Wave Stride Voice</span><br/></div>
              <div className="det234">
                <span className="det2">₹ 1,999</span> 
                <span className="det3"><del>₹ 6,990</del></span>
                <span className="det4">71% off</span>
              </div>
              <button className="cartb rounded-3">Add To Cart</button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

function Smartwatches(){
    return(
      <div className="body">
        <Intro/>
        <Products/>
      </div>
    )
}

export default Smartwatches;