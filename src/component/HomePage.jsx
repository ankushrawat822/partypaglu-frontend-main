import React from "react";
import Header from "./Home/Header";
import "./Home/Home.css"
import HomeHero from "./Home/HomeHero";
import HomeHeroFlip from "./Home/HomeHeroFlip";


const HomePage = () => {

  return (
    <>
       
        <div className='w-screen bg-[#161616]' >
       <Header></Header>
      </div>

       <HomeHero></HomeHero>
       <HomeHeroFlip></HomeHeroFlip>
       
        {/* <p className="text-center text-[34px] my-10">Home Page</p> */}
       
    </>
  )
}

export default HomePage


