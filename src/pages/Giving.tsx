import React from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'
import give from '../assets/images/giving-money.png'
import { toast } from 'react-toastify'
import { HandCoins } from 'lucide-react'

const Giving = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <Header/>
      <HeroSection subtitile='House Of Praise' titile='Giving' menu='Giving' bgimage='givingbg'/>
      <div className='paddingX'>
        <div className='py-[70px] flex flex-col md:flex-row justify-center gap-8'>
          <div>
            <img src={give} alt="" className='rounded-tl-[50%] rounded-br-[50%] md:max-w-[400px]' />
            <h3 className='mt-4 mb-1'>Want to Sow Seed?</h3>
            <p className='max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aut! Lorem ipsum dolor sit amet consec</p>
          </div>
          <div className='bg-white max-w-[600px] rounded-[12px] px-[50px] py-[30px] flex flex-col justify-center items-center gap-4 shadow-md'>
            <HandCoins color='#28176f' size={50} />
            <div>
              <h4 className='text-[18px] md:text-[23px] text-center  font-semibold leading-tight mb-2'>10283454</h4>
              <p className='text-center'>House of Praise</p>
              <p className='text-center'>United Bank</p>
            </div>
            <a href="" target='_blank'>
              <button className='outline-button type1 outline-btn-txt w-full sm:w-[218px] rounded-[40px] text-primary text-base border border-primary px-16 md:px-4 py-3 font-semibold'
                onClick={(e) => { 
                  e.preventDefault()
                  navigator.clipboard.writeText('10283454')
                  toast.success('Account number copied successfully')
                }}
              >
                Copy
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Giving