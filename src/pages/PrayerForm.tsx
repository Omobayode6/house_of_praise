import React, { useRef, useState } from 'react'
import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import HeroSection from '../components/HeroSection'
import emailjs from '@emailjs/browser';
import give from '../assets/images/giving-money.png'
import { toast } from 'react-toastify'
import { AlertTriangle, HandCoins } from 'lucide-react'
import check from '../assets/images/check.gif'

const PrayerForm= () => {
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
    <div className='bg-[#F9FAFB] mt-[80px]'>
      <Header/>
      <HeroSection subtitile='Need Prayer?' titile='We will love to pray with you' menu='prayer' bgimage='prayerbg'/>
      <main className='pt-[70px]'>
        <div className='px-[5%]'>
          <h3 className='text-black text-center mb-2'>Do you need a team to build your prayer life?</h3>
          <p className='text-[#e4655f] text-[24px] text-center'>Please share your prayer request.</p>
        </div>
        
        {/* Prayer Request Form */}
        <div className='px-[5%] bg-[#5f5f5f] text-black mt-[200px]'>
          <div className='w-fit mx-auto relative bottom-[140px] bg-white rounded-lg border border-[#D0D5DD] shadow-lg shadow-black/70 px-6 py-[50px]'>
          <div className='max-w-[654px] text-center mx-auto mb-10'>
            <p className='text-[14px] font-medium mb-2'>It's what we've been called to do!</p>
            <h2 className="text-black">Prayer Request Form</h2>
          </div>
          <form ref={form} onSubmit={sendEmail} className='sm:w-fit mx-auto'>
            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="firstName" className='text-[#404142]'>First Name</label>
                <input type="text" name='firstName' placeholder='Mike' required className='w-full sm:w-[328px] border-[#404142] text-[#404142] ' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="lastName" className='text-[#404142]'>Last Name</label>
                <input type="text" name='lastName' placeholder='Ross' required className='w-full sm:w-[328px] border-[#404142] text-[#404142]' />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-[#404142]'>Phone</label>
                <input type="number" name='phone' placeholder='264747488' required className='w-full sm:w-[328px] border-[#404142] text-[#404142]' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="subject" className='text-[#404142]'>WhatsApp Number</label>
                <input type="number" name='whatsAppNumber' placeholder='2647475555' required className='w-full sm:w-[328px] border-[#404142] text-[#404142]' />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 mb-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-[#404142]'>Email</label>
                <input type="email" name='email' placeholder='Mike.ross@pearsonhardman.com' required className='w-full sm:w-[328px] border-[#404142] text-[#404142]' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="subject" className='text-[#404142]'>Subject</label>
                <input type="text" name='subject' placeholder='What time is Sunday service' required className='w-full sm:w-[328px] border-[#404142] text-[#404142]' />
              </div>
            </div>

            <div className='flex flex-col gap-1 mb-6'>
              <label htmlFor="message" className='text-[#404142]'>Kindly write out prayer request here</label>
              <textarea name="prayerRequest" id="" cols={10} rows={5} placeholder='Type your message here...' className='border-[#404142] text-[#404142]'></textarea>
            </div>
            <button type='submit' className='forward-button w-full sm:w-[218px] bg-primary rounded-[40px] text-white text-base px-4 py-3 font-semibold'>
              <span className=''>Submit</span>
            </button>
          </form>
          </div>
        </div>
      </main>
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

export default PrayerForm