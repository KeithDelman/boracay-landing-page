import React from 'react'
import { FaFacebook,FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'
const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
            <h6 className='font-bold uppercase pt-2'>Solutions</h6>
            <ul>
                <li className='py-1'>Travel</li>
                <li className='py-1'>Booking</li>
                <li className='py-1'>Flights</li>
                <li className='py-1'>Cruises</li>
                <li className='py-1'>Ground</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
            <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentation</li>
                <li className='py-1'>Tours</li>
                <li className='py-1'>Refunds</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Jobs</li>
                <li className='py-1'>Partners</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
                <li className='py-1'>Claims</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Terms</li>
                <li className='py-1'>Policies</li>
                <li className='py-1'>Refunds</li>
            </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our Newsletter</p>
            <p className='py-4'>The Latest deals, articles, an resources, sent to your inbox weekly</p>
            <form className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter Email' />
                <button className='p-2 mb-4 rounded-md'>Subscribe</button>
            </form>
        </div>
      </div>
      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>&#169; 2024 Boracay, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaTwitter className='cursor-pointer' size={20}/>
            <TiSocialPinterest  className='cursor-pointer'size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
