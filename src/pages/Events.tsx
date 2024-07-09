import React from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'
import give from '../assets/images/giving-money.png'
import { toast } from 'react-toastify'
import { HandCoins } from 'lucide-react'

const Events= () => {
  return (
    <div className='bg-[#F9FAFB] mt-[80px]'>
      <Header/>
      <HeroSection subtitile='House Of Praise' titile='Upcoming Events' menu='Events' bgimage='eventbg'/>
      <main className='paddingX'>
        
      </main>
      <Footer/>
    </div>
  )
}

export default Events