import React from "react";
import Header from "./Home/Header";
import "./Home/Home.css"
import HomeHero from "./Home/HomeHero";
import HomeHeroFlip from "./Home/HomeHeroFlip";
import HomeInfo1 from "./Home/HomeInfo1";
import HomeInfo2 from "./Home/HomeInfo2";
import HomeInfo3 from "./Home/HomeInfo3";
import HomeInfoBox from "./Home/HomeInfoBox";
import Footer from "../common/Footer";
import HomeContact from "./Home/HomeContact";


const HomePage = () => {

  return (
    <>
       
        <div className='w-screen bg-[#161616]' >
       <Header></Header>
      </div>

       <HomeHero></HomeHero>
       <HomeHeroFlip></HomeHeroFlip>
       <HomeInfo1></HomeInfo1>
       <HomeInfo2></HomeInfo2>
       <HomeInfo3></HomeInfo3>
       <HomeInfoBox></HomeInfoBox>
        <HomeContact></HomeContact>
       <Footer></Footer>
       
        {/* <p className="text-center text-[34px] my-10">Home Page</p> */}
       
    </>
  )
}

export default HomePage


