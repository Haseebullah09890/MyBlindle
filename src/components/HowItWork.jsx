import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HowItWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className='w-full min-h-auto pb-10 bg-gray-100'>
      <div className='w-[90%] m-auto'>
        {/* Heading */}
        <div className='text-center' data-aos="fade-up">
          <h1 className='text-5xl font-bold py-4 text-gray-800'>How to Install Our App</h1>
          <p className='text-gray-600'>
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Step Progress Line */}
        <div className='text-center pt-10 flex justify-center items-center gap-4 text-gray-500' data-aos="fade-up" data-aos-delay="200">
          <span className='text-red-500 text-3xl'>01</span>
          <div className="w-[150px] h-[2px] bg-gray-300" />
          <span className='text-3xl'>02</span>
          <div className="w-[150px] h-[2px] bg-gray-300" />
          <span className='text-3xl'>03</span>
        </div>

        {/* Step Cards */}
        <div className='w-[90%] m-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div
            className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className='text-2xl font-bold mb-3 text-gray-800'>Download</h2>
            <p className='text-base text-gray-600'>Open Play Store or App Store</p>
          </div>

          <div
            className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className='text-2xl font-bold mb-3 text-gray-800'>Install App</h2>
            <p className='text-base text-gray-600'>The app will install automatically.</p>
          </div>

          <div
            className='bg-gray-100 p-8 rounded-lg border border-gray-200 shadow-lg text-center'
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className='text-2xl font-bold mb-3 text-gray-800'>Ready to Use</h2>
            <p className='text-base text-gray-600'>Sign up or log in to start exploring!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWork
