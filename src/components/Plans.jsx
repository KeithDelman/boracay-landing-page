import React from 'react'

const Plans = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh] w-full '>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/11686040/pexels-photo-11686040.jpeg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/12926994/pexels-photo-12926994.jpeg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3507996/pexels-photo-3507996.jpeg" alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/20535495/pexels-photo-20535495/free-photo-of-blue-water-and-palms.jpeg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/19071521/pexels-photo-19071521/free-photo-of-belmont.jpeg" alt="/" />
      </div>
      {/* Right */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-4xl md:text-6xl font-bold'>Book Your Next Trip</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
        <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus earum eius minus dolor enim excepturi molestias? Tempore odit magnam ut blanditiis, omnis saepe aspernatur quis voluptates sapiente soluta, quia eligendi.</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Plans
