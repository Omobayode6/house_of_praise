import React from 'react'
import logo from '../../assets/images/logoWhie.png'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedIn from '../../assets/icons/linkedIn.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-[2%] lg-px-[3%] py-[50px] text-[#C2C6CA] bg-primary '>
      <div className='w-fit flex flex-col items-center gap-4 mx-auto'>
        {/* Socials */}
        <div className='flex gap-x-16 mt-4 text-white'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Prometrics Facebook" /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Prometrics twitter" /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Prometrics instagram" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="Prometrics linkedIn" /></a>
        </div>
        {/* Quick Links */}
        <div className='flex justify-center flex-wrap gap-4'>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/about">About</NavLink> |
          <NavLink to="/giving">Giving</NavLink> |
          <NavLink to="/media">Media</NavLink> |
          <NavLink to="/ministry">Ministries</NavLink> |
          <NavLink to="/contact">Contact</NavLink>
        </div>
        {/* Contact */}
        <div className='flex gap-4'>
          <a href='mailto:info@gmail.com'>info@gmail.com</a>
          <a href='tel:+1-419-378-9459' >+1 2645686</a>
        </div>
        <p>21 westly way uk</p>
        <p className='text-[14px] font-medium '>© 2024 House of Praise. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer