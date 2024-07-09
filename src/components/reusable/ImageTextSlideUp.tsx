import React from 'react'

type ImageProps = {
  image: any; 
  title: string; 
  text?: string; 
  font?: string;
};

const ImageTextSlideUp = ({image, title, text, font}:ImageProps) => {
  return (
    <div className='imageTextSlideUp relative w-[320px]'>
      <img src={image} alt="" className='w-[320px]'/>
      <div className='w-full bg-white absolute bottom-0 px-3 py-4'>
        <h3 className={`font-${font} text-primary text-[24px] `}>{title}</h3>
        <p className={`transition duration-2000 ease-in-out hidden text-black`}>{text}</p>
      </div>
    </div>
  )
}

export default ImageTextSlideUp