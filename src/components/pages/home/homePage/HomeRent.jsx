import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import homeimg from "../../../../assets/homepageimage.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed, faExpand, faShower } from "@fortawesome/free-solid-svg-icons";

const HomeRent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
    <div className="w-full h-1/4 flex flex-row items-center justify-between">
      <div className="w-9/12 h-full flex flex-col items-start justify-evenly px-7">
        <h1 className="text-5xl font-semibold">Properties for Rent</h1>
        <p className="text-xl font-medium">
          Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
          suscipit
        </p>
      </div>
      <div className="w-1/4 h-full flex items-center justify-center">
        <button className="w-56 h-16 bg-black rounded border border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:border-black hover:text-black transition-all ease-in-out">
          See All Properties <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
    <div className="w-full h-3/4  flex items-center justify-center">
    <Swiper 
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-10/12 h-5/6"
    >
      <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
      <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
         <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
         <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
         <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
         <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
        <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
         <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
         <SwiperSlide className="w-64 h-3/4 flex flex-col items-center justify-evenly" >
          <div className="w-full h-3/5 rounded overflow-hidden object-cover object-center relative" >
              <img className="w-full h-full" src={homeimg} alt="" />
              <div className="w-full h-1/6 absolute z-20 top-3/4 flex flex-row items-center justify-evenly">
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faDoorClosed} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faShower} /> 3BHK
              </h5>
              <h5 className="mr-5 text-white">
                {" "}
                <FontAwesomeIcon icon={faExpand} /> 3BHK
              </h5>
              </div>
          </div>
          <div className="w-full h-2/6 flex flex-col items-start justify-evenly px-5" >
              <h3 className="text-2xl font-semibold" >Property Name</h3>
              <h4 className="text-lg font-semibold" >Property Location</h4>
              <h4 className="text-2xl font-bold" >£18,000</h4>
          </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </div>
  )
}

export default HomeRent