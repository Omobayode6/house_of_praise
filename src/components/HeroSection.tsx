import React from 'react'

const HeroSection = ({subtitile, titile, menu, menudetails, bgimage}:any) => {
  return (
    <div className={`px-[5%] h-[280px] md:h-[450px] ${bgimage} bg-cover bg-center flex flex-col justify-center items-center md:items-start bg-primary-normal text-white text-center md:text-left `}>
      <p className='text-[14px] font-medium mb-1'>{subtitile}</p>
      <h2 className='max-w-[714px] text-white mb-4 md:mb-10'>{titile}</h2>

      <p className='text-base text-[#B6BABD] font-medium'>
        <a href="/" className='underline text-secondary '>Go Home</a> / {menu} {menudetails}
      </p>
    </div>
  )
}

export default HeroSection