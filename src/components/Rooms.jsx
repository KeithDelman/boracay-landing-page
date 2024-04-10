import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[30%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold '>Find Interior Rooms</h3>
        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto incidunt adipisci rem fugit.</p>
      </div>
      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className= 'object-cover w-full h-full'src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg" alt="/" />
        <img className= 'row-span-2 object-cover w-full h-full'src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg" alt="/" />
        <img className= 'object-cover w-full h-full'src="https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg" alt="/" />
      </div>
    </div>
  )
}

export default Rooms
