import React from 'react'

type ImageProps = {
  image: any; 
  title: string; 
  text?: string; 
  font?: any;
};

const ImageTextSlideUp = ({image, title, text, font}:ImageProps) => {
  return (
    <div className='imageTextSlideUp relative w-[300px]'>
      <img src={image} alt="" className='w-[300px]'/>
      <div className='w-full bg-[#292929] text-white absolute bottom-0 px-3 py-4'>
        <h3 className={`font-${font}`}>{title}</h3>
        <p className={`transition duration-2000 ease-in-out hidden `}>{text}</p>
      </div>
    </div>
  )
}

export default ImageTextSlideUp