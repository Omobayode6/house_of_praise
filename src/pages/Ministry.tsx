import React from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'

const Ministry = () => {
  return (
    <div className='bg-[#F9FAFB] mt-[80px]'>
      <Header/>
      <HeroSection subtitile='Ministry' titile='Join A Ministry' menu='Ministry' bgimage='aboutbg'/>
      <div className='paddingX'>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Ministry