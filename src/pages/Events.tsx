import React, { useState } from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Events= () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className='bg-[#F9FAFB] mt-[80px]'>
      <Header/>
      <HeroSection subtitile='House Of Praise' titile='Upcoming Events' menu='Events' bgimage='eventbg'/>
      <main className='paddingX py-10'>
        <div className='flex flex-col items-center '>
          <h2 className='mb-6'>Events for July 2024</h2>
          <Calendar onChange = {(e:any)=>setDate(e?.target.value)} value = {date} />
        </div>
        
      </main>
      <Footer/>
    </div>
  )
}

export default Events