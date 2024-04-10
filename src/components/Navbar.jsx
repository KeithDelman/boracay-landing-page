import React, {useState} from 'react'
import { RiMenuFoldLine } from "react-icons/ri";


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
        if (!nav){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "scroll";
        }
    }
  return (
    <div className='w-full absolute flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>BORACAY.</h1>
      <RiMenuFoldLine onClick ={toggleNav}className='z-20 text-white cursor-pointer'size={20}/>

      <div className={
        nav ? 'ease-in duration-700 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10': 'absolute top-0 h-screen left-[-100%] ease-in duration-700 z-10' 
        }>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <li className='font-bold text-3xl p-8 cursor-pointer'>Home</li>
            <li className='font-bold text-3xl p-8 cursor-pointer'>Destination</li>
            <li className='font-bold text-3xl p-8 cursor-pointer'>Reservation</li>
            <li className='font-bold text-3xl p-8 cursor-pointer'>Amenities</li>
            <li className='font-bold text-3xl p-8 cursor-pointer'>Rooms</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
