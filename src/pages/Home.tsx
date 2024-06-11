import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import Slider from '../components/reusable/Slider'
import { Link } from 'react-router-dom'
import about from '../assets/images/about.png'
import churchIcon from '../assets/icons/church-icon.png'
import conselling from '../assets/icons/icon-touwel.png'
import exhortation from '../assets/icons/icon-book.png'

const Home = () => {
  return (
    <div className='bg-[#F9FAFB] py-[80px] '>
      <Header/>
      <main>
        {/* slider */}
        <Slider/>
        <div className='paddingX '>
          <div className=' flex flex-col-reverse lg:flex-row items-center gap-8'>
            <img src={about} alt="Prometrics CEO" className='transform -scale-x-100 max-w-[600px]'/>
            <div className='py-[50px]'>
              <p className='text-[14px] font-medium mb-2'>Welcome to</p>
              <h2 className='max-w-full mb-6'>House of Praise</h2>
              <p className='mb-2 leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, doloribus?</p>
              <p className='mb-2 leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius facere nobis excepturi recusandae tenetur.</p>
              <p className='mb-4 leading-relaxed '>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <p>Need counsseling send an email to <a className='text-primary font-semibold' href="mailto:test@gmail.com">test@gmail.com</a>.</p>
              <button className='outline-button type1 outline-btn-txt w-[194px] h-[46px] border-2 border-primary rounded-[40px] mt-6 text-primary font-semibold '>
                <Link to='/about-us'>Learn More</Link>
              </button>
            </div>
          </div>
          <div className='flex justify-center gap-6 flex-wrap'>
            <div className='flex flex-col items-center'>
              <div className='w-fit'>
                <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-b from-primary to-white relative top-[50px]'/>
                <img src={churchIcon} alt="house of praise" className='mx-auto relative'/>
              </div>
              <h3 className='mt-4 mb-2'>Praise & Worship</h3>
              <p className='w-[350px] text-center'>Our church is open and friendly with many social activities. To keep our church running smoothly, we have committees .</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-fit'>
                <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-b from-primary to-white relative top-[50px]'/>
                <img src={conselling} alt="house of praise" className='mx-auto relative'/>
              </div>
              <h3 className='mt-4 mb-2'>Counseling</h3>
              <p className='w-[350px] text-center'>We exist to represent Christ to our community and world so that they might see Jesus and realize all that God has planned for them!</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-fit'>
                <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-b from-primary to-white relative top-[50px]'/>
                <img src={exhortation} alt="house of praise" className='mx-auto relative'/>
              </div>
              <h3 className='mt-4 mb-2'>Exhortation</h3>
              <p className='w-[350px] text-center'>We invite you to see for yourself how exciting church can be when the focus is simple and people are free to go after God with passion.</p>
            </div>
          </div>
        </div>
      </main>
      

      <Footer/>
    </div>
  )
}

export default Home