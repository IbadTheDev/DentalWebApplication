import React from "react"
import { Link } from 'react-scroll';
import Button from './Button';
import {useNavigate} from 'react-router-dom'


const Navv = () => {
    let navigate = useNavigate();
    return (
<nav className='flex justify-between items-center max-w-[1200px] mx-auto px-5 h-20'>
<Link to="home" smooth={true} duration={500} className='z-10 cursor-pointer'>
       <h1 className={`text-2xl lg:text-3xl 'text-black'}`}
            >Dental<span className="text-blue">Care.</span></ h1>
       </Link>
       
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-blue hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className='flex space-x-8'>
      <a href="/home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue ">
        Home
      </a>
      <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue ">
        About
      </a>
      <a href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue">
        Services
      </a>
      <a href="/process" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue">
        Process
      </a>
      <a href="/clients" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue">
        Clients
      </a>
      <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue">
        Appointments
      </a>
    </div>
    <div className="grid grid-rows-2 grid-flow-col gap-1">
    <button onClick={() => {navigate('/adminLogin')}} className='absolute top-2 right-14 bg-gray-800 text-white bg-blue py-1 px-3 rounded hover:bg-black inline-block hover:duration-300'>Admin Login</button>
          <button onClick={() => {navigate('/register')}} className='absolute top-11 right-14 bg-gray-800 text-white bg-blue py-1 px-3 rounded hover:bg-black inline-block hover:duration-300'>User Login</button>
          </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
    )
}

export default Navv;