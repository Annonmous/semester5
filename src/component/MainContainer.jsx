import React from 'react'
import HomeContainer from './HomeContainer'
const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>

      <section className='w-full my-6 '>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-4
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all 
          ease-in-out duration-100'>
            Our Fresh & Healthy Fruits
          </p>
        </div>
      </section>
    </div>
  )
}

export default MainContainer