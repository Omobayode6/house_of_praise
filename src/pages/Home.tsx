import Header from '../components/reusable/Header'
import Footer from '../components/reusable/Footer'
import Slider from '../components/reusable/Slider'
import { Link } from 'react-router-dom'
import about from '../assets/images/about.png'
import churchIcon from '../assets/icons/church-icon.png'
import conselling from '../assets/icons/icon-touwel.png'
import exhortation from '../assets/icons/icon-book.png'
import service from '../assets/images/service.png'
import preaching from '../assets/images/preaching.png'
import services from '../assets/images/services.png'
import { useState } from 'react'
import ImageTextSlideUp from '../components/reusable/ImageTextSlideUp'
import { HandCoins } from 'lucide-react'
import { toast } from 'react-toastify'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-[#F9FAFB] pt-[80px] '>
      <Header/>
      <main>
        {/* slider */}
        <Slider/>
        <div className=''>
          <div className='paddingX flex flex-col-reverse lg:flex-row items-center gap-8 py-[50px]'>
            <img src={about} alt="house of praise" className='transform -scale-x-100 md:max-w-[600px]'/>
            <div className=''>
              <p className='text-[14px] font-medium mb-2'>Welcome to</p>
              <h2 className='max-w-full mb-6'>House of Praise</h2>
              <p className='mb-2 leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, doloribus?</p>
              <p className='mb-2 leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius facere nobis excepturi recusandae tenetur.</p>
              <p className='mb-4 leading-relaxed '>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <p>Need counsseling send an email to <a className='text-primary font-semibold' href="mailto:test@gmail.com">test@gmail.com</a>.</p>
              <button className='outline-button type1 outline-btn-txt w-[194px] h-[46px] border-2 border-primary rounded-[40px] mt-6 text-primary font-semibold '>
                <Link to='about'>Learn More</Link>
              </button>
            </div>
          </div>
          <div className='paddingX flex justify-center gap-x-6 flex-wrap'>
            <div className='flex flex-col items-center'>
              <div className='w-fit'>
                <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-b from-primary to-white relative top-[50px]'/>
                <img src={churchIcon} alt="house of praise" className='mx-auto relative'/>
              </div>
              <h3 className='mt-4 mb-2'>Praise & Worship</h3>
              <p className='w-[330px] md:w-[350px] text-center'>Our church is open and friendly with many social activities. To keep our church running smoothly, we have committees .</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-fit'>
                <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-b from-primary to-white relative top-[50px]'/>
                <img src={conselling} alt="house of praise" className='mx-auto relative'/>
              </div>
              <h3 className='mt-4 mb-2'>Counseling</h3>
              <p className='w-[330px] md:w-[350px] text-center'>We exist to represent Christ to our community and world so that they might see Jesus and realize all that God has planned for them!</p>
            </div>

            <div className='flex flex-col items-center pb-[70px]'>
              <div className='w-fit'>
                <div className='w-[150px] h-[150px] rounded-[50%] bg-gradient-to-b from-primary to-white relative top-[50px]'/>
                <img src={exhortation} alt="house of praise" className='mx-auto relative'/>
              </div>
              <h3 className='mt-4 mb-2'>Exhortation</h3>
              <p className='w-[330px] md:w-[350px] text-center'>We invite you to see for yourself how exciting church can be when the focus is simple and people are free to go after God with passion.</p>
            </div>
          </div>
          {/* Our Services*/}
          <div className='paddingX w-full bg-gradient-to-b from-black to-white py-[70px]'>
            <h2 className='text-center text-white'>Our Services</h2>
            <p className='text-center mb-8 text-white'>Join us in any of our services</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8'>
              <div className='imageTextSlideUp relative'>
                <img src={service} alt="" className='w-[300px]'/>
                <div className='w-full bg-primary text-white absolute bottom-0 px-3 py-4'>
                  <h3 className='font-bold'>Sunday Service</h3>
                  <p className={`transition duration-2000 ease-in-out hidden `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!</p>
                </div>
              </div>

              <div className='imageTextSlideUp relative'>
                <img src={preaching} alt="" className='w-[300px]'/>
                <div className='w-full bg-primary text-white absolute bottom-0 px-3 py-4'>
                  <h3 className='font-bold'>Midweek Service</h3>
                  <p className={`transition duration-2000 ease-in-out hidden `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!</p>
                </div>
              </div>

              <div className='imageTextSlideUp relative'>
                <img src={service} alt="" className='w-[300px]'/>
                <div className='w-full bg-primary text-white absolute bottom-0 px-3 py-4'>
                  <h3 className='font-bold '>Friday Fellowship</h3>
                  <p className={`transition duration-2000 ease-in-out hidden `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <Testimonials/>

          {/* Ministries */}
          <div className="paddingX bg-gradient-to-b hover:bg-gradient-to-t from-black to-primary flex flex-col md:flex-row py-[100px]">
            <div className='mb-8 md:mb-0 w-full md:max-w-[300px] min-h-[100%] md:bg-[#e4655f] flex flex-col justify-center'>
              <div className='md:max-w-[250px] mx-auto'>
                <p className="text-[14px] text-black font-bold mb-2">Ministry</p>
                <h2 className="leading-tight md:text-white">
                  Join any Ministries
                </h2>
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Sunday School'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title={`Children's Church`}
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Prayer'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
              </div>

              <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-4'>
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Ushering'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Choir'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Multimedia'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
              </div>

              <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-4'>
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Sanctuary Keepers'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Welfare'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
                <ImageTextSlideUp
                  font='bold'
                  image={services}
                  title='Evangelism'
                  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ipsam, sed voluptates eveniet voluptas a? Rerum nesciunt dolor perferendis!'
                />
              </div>
            </div>
          </div>

          {/* Giving */}
          <div className='paddingX givingsectionbg bg-cover bg-center py-[70px]'>
            <h2 className='text-center text-white '>Giving</h2>
            <p className='text-center mb-8 text-white '>The Lord Loves a cheerful giver. You can transfer to this account number</p>
            <div>
              <div className='bg-white max-w-[300px] rounded-[12px] py-[30px] flex flex-col justify-center items-center gap-4 mx-auto shadow-md '>
                <HandCoins color='#28176f' size={50} />
                <div>
                  <h4 className='text-[18px] md:text-[23px] text-center  font-semibold leading-tight mb-2'>10283454</h4>
                  <p className='text-center'>House of Praise</p>
                  <p className='text-center'>United Bank</p>
                </div>
                <a href="" target='_blank'>
                  <button className='outline-button type1 outline-btn-txt w-full sm:w-[218px] rounded-[40px] text-primary text-base border border-primary px-4 py-3 font-semibold'
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

          {/* Media */}
          <div className='paddingX py-[70px]'>
            <h2 className='text-center'>Galery</h2>
            <p className='text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nostrum.</p>
            <div>
              <div className='flex justify-center gap-4 flex-wrap'>
                {galleries.map((gallery, key)=>(
                  <div key={key} className='w-[300px] relative'>
                    <img src={gallery?.image} alt="" />
                    <p className='absolute bottom-0 left-3 text-white font-semibold bg-[#555555] px-3 py-1 rounded-[16px]'>
                      {gallery?.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className='w-fit mx-auto'>
                <button className='outline-button type1 outline-btn-txt w-[194px] h-[46px] border-2 border-primary rounded-[40px] mt-6 text-primary font-semibold '>
                  <Link to='/media'>see More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

const galleries = [
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday school'},
  {image: './gallery1.jpg', title: 'Picnic'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
  {image: './gallery1.jpg', title: 'Sunday service'},
]
export default Home