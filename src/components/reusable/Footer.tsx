import React from 'react'
import logo from '../../assets/images/logoWhie.png'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedIn from '../../assets/icons/linkedIn.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-[2%] lg-px-[3%] py-[100px] text-[#C2C6CA] bg-[#161313] '>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='w-[264px]'>
          <img src={logo} alt="Prometrics logo" className='w-[150px] rounded-[16px]'/>
          <p className='mt-8 mb-4 '>The Redeemed Christian Church of God House of Praise Uk is a home for all worshiper</p>
          <p className='text-[14px] font-medium '>© 2024 Prometrics. All rights reserved.</p>
          {/* Socials */}
          <div className='flex gap-x-2 mt-4 text-white'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Prometrics Facebook" /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Prometrics twitter" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Prometrics instagram" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="Prometrics linkedIn" /></a>
          </div>
        </div>

        {/* practice Areas */}
        <div className='flex flex-col gap-4 w-[200px]'>
          <p className='font-semibold text-[#F9FAFB] mb-4'>Services</p>
          <p>Sunday Service</p>
          <p>MidWeek Service</p>
          {/* <NavLink to="/pa-employment-based">Employment Based Immigration Consult </NavLink>
          <NavLink to="/pa-employment-consult">Employment Consult</NavLink>
          <NavLink to="/pa-tax">Tax Planning</NavLink>
          <NavLink to="/pa-business">Business Planning</NavLink>
          <NavLink to="/pa-estate">Estate Planning</NavLink>
          <NavLink to="/pa-notarization">Notarization</NavLink> */}
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-4'>
          <p className='font-semibold text-[#F9FAFB] mb-4'>Quick Links</p>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/giving">Giving</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/ministry">Ministries</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-4'>
          <p className='font-semibold text-[#F9FAFB] mb-4 '>Contact</p>
          <a href='mailto:info@gmail.com'>info@gmail.com</a>
          <a href='tel:+1-419-378-9459' >+1 2645686</a>
          <a href='' target='_blank'>21 westly way uk</a>
        </div>
      </div>

      


    </div>
  )
}

export default Footer