import React from 'react'
import Header from '../Home/Header'
import PartyCard from './PartyCard'

const PartyPage = () => {
  return (
      <>
         <div className='w-screen bg-[#161616]' >
       <Header></Header>
      </div>
      <div className='w-screen bg-[#161616]' >
       <PartyCard></PartyCard>
      </div>
      </>
  )
}

export default PartyPage