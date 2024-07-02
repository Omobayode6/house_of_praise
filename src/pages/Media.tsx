import React from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'

const Media = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <Header/>
      <HeroSection subtitile='House Of Praise' titile='Media' menu='Media' bgimage='mediabg'/>
      <div className='paddingX'>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Media