import React from 'react'
import delivery from '../img/delivery.png'


const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className=' py-2 flex-1 flex flex-col items-start  justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full px-2 py-1'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Bike Delivery
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={delivery} alt="delivery" className='w-full h-full object-contain' />
                    </div>
                </div>

                <p className='text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]'>
                    The Fastest Delivery In <span className='text-orange-600 text-[3rem]'>Pakistan</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit, amet consectetur
                    placeat est quae consectetur mollitia quisquam sequi?
                    Facilis quos nihil voluptatem, minus error quis culpa officia!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, deserunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, et.
                </p>
                <button
                    className='bg-gradient-to-br
from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg
hover:shodow-lg transition-all ease-in-out
duration-100'
                    type='button'>Order Now</button>
            </div>


            <div className='py-2  flex-1'>
                {/* <HomeContainer/> */}
            </div>
        </section>
    )
}

export default HomeContainer