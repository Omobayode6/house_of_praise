import React from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'

const Media = () => {
  return (
    <div className='bg-[#F9FAFB] mt-[80px]'>
      <Header/>
      <HeroSection subtitile='media' titile='Join Us Online' menu='Media' bgimage='mediabg'/>
      <div className='paddingX'>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Media