import React, { useState , useEffect } from "react";
import "./Home.css"
import Header from "./Header";
import Footer from "./Footer";
import Earbuds from "./Earbuds";
import Smartwatches from "./Smartwatches";
import Neckbands from "./Neckbands";
import Headphones from "./Headphones";
import Speakers from "./Speakers";





function Homepage(){
  
  // useEffect(() => {
  //   // Scroll to the desired position (e.g., 500 pixels from the top) when the component mounts
  //   window.scrollTo(0, 1010);
  // }, []);

    return(
      <div className="body">
        <Header/>
        <Earbuds/>
        <Smartwatches/>
        <Neckbands/>
        <Headphones/>
        <Speakers/>
        <Footer/>
      </div>
    )
}

export default Homepage