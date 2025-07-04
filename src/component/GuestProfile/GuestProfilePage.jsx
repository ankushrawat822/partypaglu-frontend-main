import React from 'react'
import GuestProfileForm from './GuestProfileForm'
import Header from '../Home/Header'

const GuestProfilePage = () => {
  return (
    <div>
            
        <div className='w-screen bg-[#161616]' >
       <Header></Header>
      </div>
        <GuestProfileForm></GuestProfileForm>
    </div>
  )
}

export default GuestProfilePage