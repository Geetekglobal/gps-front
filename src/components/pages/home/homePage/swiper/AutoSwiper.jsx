import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
const AutoSwiper = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-full h-full bg-white"
    >
      <SwiperSlide>
        <div className='w-full h-full bg-yellow-200 flex flex-col items-center justify-evenly' >
            <div className='w-full h-1/6 flex flex-row items-center justify-between' >
                <div className='w-2/4 h-full flex flex-row items-center px-4' >
                  <h1 className='text-semibold text-3xl' >Amazing!</h1>
                </div>
                <div className='w-1/5 h-full flex flex-row items-center px-4' >
                <FontAwesomeIcon className='text-8xl text-[#FFCC00]' icon={faQuoteRight} />
                </div>
            </div>
            <div className='w-full h-4/5  flex flex-col items-center justify-evenly' >
              <div className='w-4/5 h-3/5  flex items-center justify-evenly' >
                <p className='text-2xl' >
			We have chosen to work extensively with Get Property Solutions because of their quality services, including their On-the-Job Training program and other employer.		</p>
              </div>
              <div className='w-4/5 h-1/4  flex items-center flex-row ' >
                <div className='w-20 h-20 rounded-full bg-slate-300 overflow-hidden object-cover items-center' >
                   
                </div>
                <div className='w-1/3  h-full ml-2 flex flex-col items-start justify-evenly' >
                  <h4 className='text-semibold text-xl' >Maggie Strickland	</h4>
                  <h4 className='text-semibold text-lg text-gray-500' >/ Manchester</h4>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-full bg-yellow-200 flex flex-col items-center justify-evenly' >
            <div className='w-full h-1/6 flex flex-row items-center justify-between' >
                <div className='w-2/4 h-full flex flex-row items-center px-4' >
                  <h1 className='text-semibold text-3xl' >Amazing!</h1>
                </div>
                <div className='w-1/5 h-full flex flex-row items-center px-4' >
                <FontAwesomeIcon className='text-8xl text-[#FFCC00]' icon={faQuoteRight} />
                </div>
            </div>
            <div className='w-full h-4/5  flex flex-col items-center justify-evenly' >
              <div className='w-4/5 h-3/5  flex items-center justify-evenly' >
                <p className='text-2xl' >
			We have chosen to work extensively with Get Property Solutions because of their quality services, including their On-the-Job Training program and other employer.		</p>
              </div>
              <div className='w-4/5 h-1/4  flex items-center flex-row ' >
                <div className='w-20 h-20 rounded-full bg-slate-300 overflow-hidden object-cover items-center' >
                   
                </div>
                <div className='w-1/3  h-full ml-2 flex flex-col items-start justify-evenly' >
                  <h4 className='text-semibold text-xl' >Maggie Strickland	</h4>
                  <h4 className='text-semibold text-lg text-gray-500' >/ Manchester</h4>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-full bg-yellow-200 flex flex-col items-center justify-evenly' >
            <div className='w-full h-1/6 flex flex-row items-center justify-between' >
                <div className='w-2/4 h-full flex flex-row items-center px-4' >
                  <h1 className='text-semibold text-3xl' >Amazing!</h1>
                </div>
                <div className='w-1/5 h-full flex flex-row items-center px-4' >
                <FontAwesomeIcon className='text-8xl text-[#FFCC00]' icon={faQuoteRight} />
                </div>
            </div>
            <div className='w-full h-4/5  flex flex-col items-center justify-evenly' >
              <div className='w-4/5 h-3/5  flex items-center justify-evenly' >
                <p className='text-2xl' >
			We have chosen to work extensively with Get Property Solutions because of their quality services, including their On-the-Job Training program and other employer.		</p>
              </div>
              <div className='w-4/5 h-1/4  flex items-center flex-row ' >
                <div className='w-20 h-20 rounded-full bg-slate-300 overflow-hidden object-cover items-center' >
                   
                </div>
                <div className='w-1/3  h-full ml-2 flex flex-col items-start justify-evenly' >
                  <h4 className='text-semibold text-xl' >Maggie Strickland	</h4>
                  <h4 className='text-semibold text-lg text-gray-500' >/ Manchester</h4>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>

    </Swiper>
  </>
  )
}

export default AutoSwiper