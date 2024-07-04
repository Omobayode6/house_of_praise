import React, {useRef, useState } from "react";
import headphone from '../assets/icons/headphone.svg'
import chat from '../assets/icons/chat.svg'
import check from '../assets/images/check.gif'
import { Phone, Mail  } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { AlertTriangle } from "lucide-react";
import Header from "../components/reusable/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/reusable/Footer";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const form:any = useRef();

  // Send Email
  const sendEmail = (e:any) => {
    setIsLoading(true)
    e.preventDefault(); // prevents the page from reloading when you hit “Submit”

    // Service ID, Template ID, Public Key
    emailjs.sendForm('service_qzmls8', 'template_gnlncc', form.current, '5ljy3r4KJ-WrwILR')
      .then((result:any) => {
        // show the user a success message
        console.log(result.text);
        setSuccess(!success)
        setIsLoading(false)
      }, (error:any) => {
        setIsLoading(false)
        setWarning(!warning)
        // show the user an error
        console.log(error.text);
      });
  };

  return (
    <div>
      <Header/>
      <div className='bg-[#f2f8fc] mt-[110px]'>
        <HeroSection subtitile='Reach Out' titile='Contact Us' menu='Contact' bgimage='contactbg'/>
        {/* Contact Cards */}
        <div className='px-[5%] flex flex-col md:flex-row justify-center items-center gap-8 md:absolute left-0 right-0'>
          <div className='bg-white max-w-[520px] h-[461px] rounded-[12px] p-[40px] flex flex-col justify-center items-center gap-8 '>
            <img src={headphone} alt="Call Prometrics" />
            <h4 className='text-[18px] md:text-[23px] text-center  font-semibold leading-tight '>Join us Today!</h4>
            <p className='text-center'>Ready to take the next step in your spiritual jouney with God?</p>
            <a href="" target='_blank'>
              <button className='outline-button type1 outline-btn-txt w-full sm:w-[218px] rounded-[40px] text-primary text-base border border-primary px-16 md:px-4 py-3 font-semibold'>
                Join us
              </button>
            </a>
          </div>
          <div className='bg-white max-w-[520px] h-[461px] rounded-[12px] p-[40px] flex flex-col justify-center items-center gap-8 '>
            <img src={chat} alt="Call Prometrics" />
            <h4 className='text-[18px] md:text-[20px] text-center font-semibold leading-tight '>Our team is here to support you every step of the way. Email us or place a call now.</h4>
            <div className='flex flex-col items-center gap-3'>
              <a href='tel:+1-419-378-9459' ><div className='flex items-center gap-2 text-[18px] md:text-[20px] font-semibold '>
                <Phone color='white' fill='secondary'/> +1 234567</div>
              </a>
              <a href='mailto:info@gmail.com'><div className='flex items-center gap-2 text-[18px] md:text-[20px] text-primary font-semibold '>
                <Mail color='white' fill='secondary'/> info@gmail.com</div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='px-[5%] bg-[#5f5f5f] text-[#F2F8FC] py-[100px] md:pt-[200px] mt-[50px] md:mt-[350px]'>
          <div className='max-w-[654px] text-center mx-auto mb-10'>
            <p className='text-[14px] font-medium mb-2'>REACH OUT</p>
            <h2 className="text-white">Get In Touch</h2>
          </div>
          <form ref={form} onSubmit={sendEmail} className='sm:w-fit mx-auto'>
            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' placeholder='Mike' required className='w-full sm:w-[328px] ' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' placeholder='Ross' required className='w-full sm:w-[328px] ' />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Mike.ross@pearsonhardman.com' required className='w-full sm:w-[328px] ' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' placeholder='What time is Sunday service' required className='w-full sm:w-[328px] ' />
              </div>
            </div>

            <div className='flex flex-col gap-1 mb-6'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="" cols={10} rows={5} placeholder='Type your message here...'></textarea>
            </div>
            <button type='submit' className='forward-button w-full sm:w-[218px] bg-primary rounded-[40px] text-white text-base px-4 py-3 font-semibold'>
              <span className=''>Send your message</span>
            </button>
          </form>
        </div>
      </div>
      <Footer/>

      {/* Form Reply */}
      {success && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba flex items-center justify-center z-20 overflow-y-scroll no-scrollbar">
          <div className="max-w-[484px] md:w-[484px] h-72 p-6 bg-white rounded-md shadow-3xl">
            <img src={check} alt="warning"className="bg-green-100 p-1 w-10 h-10 rounded-sm"/>
            {/* img={<AlertTriangle className="text-red-600 bg-[#FDE3E3] p-1 w-8 h-8 rounded-sm" />} */}
            <h1 className="mt-6 mb-2 text-neutral-950 text-2xl font-semibold leading-loose">Message sent</h1>
            <p className="max-w-[436px] text-zinc-900 text-sm font-normal leading-tight">Your form submition was successful.</p>
            <div className="w-fit md:ml-auto mt-8"
              onClick={()=>setSuccess(false)}
            >
              <button className="w-[178px] h-12 px-8 bg-neutral-950 rounded-lg text-zinc-300 text-base font-medium leading-normal">close</button>
            </div>
          </div>
        </div>
      )}
      { warning && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba flex items-center justify-center z-20 overflow-y-scroll no-scrollbar">
          <div className="max-w-[484px] md:w-[484px] h-72 p-6 bg-white rounded-md shadow-3xl">
            <AlertTriangle color='red' className="bg-[#FDE3E3] p-1 w-10 h-10 rounded-sm"/>
            {/* <img src={warningIcon} alt="warning"className="bg-[#FDE3E3] p-1 w-10 h-10 rounded-sm"/> */}
            {/* img={<AlertTriangle className="text-red-600 bg-[#FDE3E3] p-1 w-8 h-8 rounded-sm" />} */}
            <h1 className="mt-6 mb-2 text-neutral-950 text-2xl font-semibold leading-loose">Message not sent</h1>
            <p className="max-w-[436px] text-zinc-900 text-sm font-normal leading-tight">Your form submition failed please try again later!</p>
            <div className="w-fit md:ml-auto mt-8"
              onClick={()=>setWarning(false)}
            >
              <button className="w-[178px] h-12 px-8 bg-neutral-950 rounded-lg text-zinc-300 text-base font-medium leading-normal">close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact