import React from 'react'
import homeimg from "../../../../assets/homepageimage.jpg"
import AutoSwiper from './swiper/AutoSwiper'
const HomeBlog = () => {
  return (
    <div className='w-full h-5/6 flex flex-row items-center justify-evenly' >
        <div className='w-2/5 h-4/5 flex flex-col items-center justify-evenly' >
            <div className='w-full h-1/6 flex flex-row items-center px-4' >
                <h1 className='text-3xl font-semibold' >From Our Blog</h1>
            </div>
            <div className='w-full h-4/5 fex flex-col items-center justify-evenly' >
                <div className='w-full h-2/4 flex flex-row items-center justify-evenly' >
                    <div className='w-2/5 h-3/4 rounded object-cover object-center overflow-hidden' >
                        <img className='w-full h-full' src={homeimg} alt="" />
                        </div>
                    <div className='w-2/5 h-3/4 flex flex-col items-start justify-evenly px-3' >
                        <h3 className='text-lg'>July 20 2023</h3>
                        <h1 className='text-2xl' >Modern apartment adjacent</h1>
                    </div>
                </div>
                <div className='w-full h-2/4 flex flex-row items-center justify-evenly' >
                    <div className='w-2/5 h-3/4 rounded object-cover object-center overflow-hidden' >
                        <img className='w-full h-full' src={homeimg} alt="" />
                        </div>
                    <div className='w-2/5 h-3/4 flex flex-col items-start justify-evenly px-3' >
                        <h3 className='text-lg'>July 20 2023</h3>
                        <h1 className='text-2xl' >Modern apartment adjacent</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-2/5 h-4/5 bg-slate-600 ' >
            <AutoSwiper/>
        </div>
    </div>
  )
}

export default HomeBlog