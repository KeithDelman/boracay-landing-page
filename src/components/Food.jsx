import React,{useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from "react-icons/rx";


const Food = () => {

    const slides = [
        {
            url:'https://images.pexels.com/photos/1031780/pexels-photo-1031780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Shrimps'
        },
        {
            url:'https://images.pexels.com/photos/3217155/pexels-photo-3217155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Oysters'
        },
        {
            url:'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Desserts'
        },
        {
            url:'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Chicken'
        },
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentSlide ===0
        const newSlide = isFirstSlide ? slides.length - 1 : currentSlide -1
        setCurrentSlide(newSlide)
    }
    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1
        const newSlide = isLastSlide ? 0 : currentSlide + 1
        setCurrentSlide(newSlide)
    }

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex)
    }
  return (
    <div className='max-w-[1440px] h-[580px] w-full m-auto py-16 px-4 relative group'> 
      <div className = 'w-full h-full rounded-2xl bg-center bg-cover duration-500'style={{backgroundImage: `url(${slides[currentSlide].url})`}}></div>
      {/* left arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      {/* right arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          className={`text-1xl cursor-pointer ${currentSlide === slideIndex ? 'text-xl' : ''}`}
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Food
