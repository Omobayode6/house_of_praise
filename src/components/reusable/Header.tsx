import { useState } from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom"
import logo from '../../assets/images/logo.png'
import { Menu, ChevronDown } from 'lucide-react';
import './dropdown.css'
import { X } from 'lucide-react';


const  Header = () =>{
  const [ display, setDisplay ] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  
  // Dropdown click event 
  const handleDropdown = () => {
    setDisplay(!display)
  }

  // mobile menu reponsive design
  const handleClick =()=>{
    setShowMenu(!showMenu)
  }
  
  return (
    <div className= {showMenu ? 'bg-[#F2F8FC]  homeHeader ' : 'bg-[#F2F8FC] homeHeader'}>
      <div className='flex justify-center items-center gap-2'>
        <Link to='/'><img src={logo} alt="logo" className='w-[39px]'/></Link> 
        <p className='text-[#15110D] text-[25px] font-bold'>House of Praise</p>
      </div>
      {/* mobile Menu */}
      <div className="md:hidden text-right" >
        {/* handburger - Open menu */}
        <button className='relative' onClick={handleClick}>
        {showMenu ? <X className='border border-primary rounded-lg p-2 w-10 h-10'/>: <Menu />}
        </button>
        <nav className={showMenu ? 'homeNavMenu right-0 duration-300' : 'homeNavMenu -right-full duration-700'}>
          <ul className="flex flex-col gap-5 text-center text-[#15110D] font-medium">
            <li className="hover:text-primary"><NavLink to="/house_of_praise">Home</NavLink></li>
            <li className='hover:text-primary'><NavLink to="/about">About</NavLink></li>
            <li className='hover:text-primary'><NavLink to="/giving">Giving</NavLink></li>
            <li className='hover:text-primary'><NavLink to="/media">Media</NavLink></li>
            <li className='hover:text-primary'><NavLink to="/ministry">miistries</NavLink></li>
            <li className='mb-6 hover:text-primary'><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button className='mx-auto md:hidden flex justify-center items-center w-full rounded-[40px] bg-primary text-white font-semibold py-5 px-4'>
            <a href="https://calendly.com/prometricspro/legal-consult" target='_blank' >Join Us </a>
          </button>
        </nav>
      </div>


      
      {/* Desktop Menu */}
      <nav className='hidden md:flex'>
        <ul className="flex items-center gap-6 text-[#15110D] font-medium">
          <li className="hover:text-primary"><NavLink to="/house_of_praise">Home</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/about">About</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/giving">Giving</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/media">Media</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/ministry">Ministries</NavLink></li>
          <li className='hover:text-primary'><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <a href="" className='hidden md:flex justify-center items-center'> 
        <button className='full-rounded contained-button text-base w-[218px] rounded-[40px] bg-primary text-white font-semibold px-4 py-2'>
          <span>Join Us</span>
          <div className="outside-border full-rounded"></div>
        </button>
      </a>
    </div>
  )
}

export default Header