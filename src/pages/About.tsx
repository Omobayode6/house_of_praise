import React from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'
import about from '../assets/images/worship.png'
import aboutMobile from '../assets/images/worship1.png'
import ImageTextSlideUp from '../components/reusable/ImageTextSlideUp'
import pastor from '../assets/images/pastor.png'

const About = () => {
  return (
    <div className='bg-[#F9FAFB] pt-[100px] '>
      <Header/>
      <HeroSection subtitile='House Of Praise' titile='About The Church' menu='About' bgimage='aboutbg'/>
      <div className='paddingX'>
        <div className=' flex flex-col-reverse lg:flex-row items-center gap-8 py-[70px]'>
          <img src={about} alt="Prometrics CEO" className='hidden md:flex max-w-[600px]'/>
          <img src={aboutMobile} alt="Prometrics CEO" className='md:hidden max-w-[600px]'/>
          <div className=''>
            <div>
              <div className='flex gap-2'>
                <p className='text-[30px] md:text-[40px] text-[#e4655f] font-badScript '>01</p>
                <h2 className='text-[25px] md:text-[30px] mb-2'>WHO ARE WE</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, modi.</p>
            </div>
            
            <div className='mt-10'>
              <div className='flex gap-2'>
                <p className='text-[30px] md:text-[40px] text-[#e4655f] font-badScript'>02</p>
                <h2 className='text-[25px] md:text-[30px] mb-2'>WHAT WE BELIEVE</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, officia.</p>
            </div>

            <div className='mt-10'>
              <div className='flex gap-2'>
                <p className='text-[30px] md:text-[40px] text-[#e4655f] font-badScript'>03</p>
                <h2 className='text-[25px] md:text-[30px] mb-2'>OUR COMMUNITY</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ex.</p>
            </div>

            <div className='mt-10'>
              <div className='flex gap-2'>
                <p className='text-[30px] md:text-[40px] text-[#e4655f] font-badScript'>04</p>
                <h2 className='text-[25px] md:text-[30px] mb-2'>OUR VISSION</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, possimus.</p>
            </div>

            <div className='mt-10'>
              <div className='flex gap-2'>
                <p className='text-[30px] md:text-[40px] text-[#e4655f] font-badScript'>05</p>
                <h2 className='text-[25px] md:text-[30px] mb-2'>OUR MISSION</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem?</p>
            </div>
          </div>
        </div>
        {/* Our Pastors */}
        <div className='pb-[70px]'>
          <h2 className='text-center'>Our Pastors</h2>
          <p className='text-center mb-8'>We are commited to your spiritual growth.</p>
          <div className='flex justify-center gap-4'>
            <ImageTextSlideUp
              image={pastor}
              title='Pastor A'
              text='Lead Pastor'
            />
            <ImageTextSlideUp
              image={pastor}
              title='Pastor B'
              text='Assistant Pastor'
            />
            <ImageTextSlideUp
              image={pastor}
              title='Pastor C'
              text='Pastor'
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About