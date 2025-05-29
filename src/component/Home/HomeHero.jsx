import React from 'react'
import "./Home.css"
import {Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

// clerk
// import { SignInButton } from '@clerk/clerk-react';

// import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
   const navigate = useNavigate()
//   const { isSignedIn, user, isLoaded } = useUser();
  

//    const handleUserSign = ()=>{

//       if(isSignedIn){
//         navigate("/user-dashboard")
//       }

//       console.log("handleUserSing")
//    }


  return (
    <>

     <div className='bg-[#161616] w-screen'>
     <div className='home-hero-bg-image flex flex-col items-center justify-center text-center text-white py-16 rounded-[32px]  lg:mx-40 '>
            {/* <p className='font-semibold text-[19px] lg:text-[28px] italic'>India's  #1</p> */}
             <p className='font-semibold text-[19px] lg:text-[28px] italic'></p>
            <p className='font-bold text-[23px] lg:text-[30px]'>Discover House Parties Near You</p>
            <p className='mt-3 font-semibold'>Join verified hosts, meet new friends and even throw your own!</p>
        </div>

     </div>

     {/* cylindrical div  */}
     <div className='flex items-center justify-center bg-[#161616] pb-2 '>
      
     <div className='  mt-[-29px] bg-[#282828] md:gap-10 px-10 py-3 md:py-5  rounded-[37px]  text-white inline-flex flex-col md:flex-row items-center justify-center '>
         {/* div 1 */}
         <div className='flex flex-col text-center'>
          <p className='font-semibold text-[14px]'>Discover</p>
          <p className='text-[14px]'>Find Parties</p>
         </div>

     <div className='bg-[#323232] my-3 w-[220px] md:my-0 h-[3px] md:w-1 md:h-12 '></div>

          {/* div 2*/}
          <div className='flex flex-col text-center'>
          <p className='font-semibold text-[14px]'>Host</p>
          <p className='text-[14px]'>Create Party</p>
         </div>

         <div className='bg-[#323232] my-3 w-[220px] md:my-0 h-[3px] md:w-1 md:h-12'></div>
          {/* div 1 */}
          <div className='flex flex-col text-center'>
          <p className='font-semibold text-[14px]'>Verified</p>
          <p className='text-[14px]'>Safe, ID-checked</p>
         </div>

         <div className='bg-[#323232] my-3 w-[220px] md:my-0 h-[3px] md:w-1 md:h-12'></div>
          {/* div 4*/}
          <div className='flex flex-row gap-4 text-center'>
            <div>
            <p className='font-semibold text-[14px]'>Join</p>
           <p className='text-[14px]'>Now</p>

            </div>     

              <button className='bg-red-600 rounded-[30px] px-3 py-2'><FaArrowRightLong className='font-bold text-[19px]' />
            
            </button>
         
         </div>
     </div>

     </div>
   
        
    </>
  )
}

export default HomeHero