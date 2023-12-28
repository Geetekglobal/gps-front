import { faBriefcase, faBuilding, faHouse, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HomeBuy = () => {
  return (
    <div className='w-full h-3/4 bg-gray-950 flex flex-col items-center justify-evenly' >
        <div className='w-full h-1/4 flex items-center justify-center' >
            <h1 className='text-4xl font-semibold text-white' >Looking to Buy a new property or Sell an existing one?</h1>
        </div>
        <div className='w-4/5 h-3/5 flex flex-row items-center justify-evenly' >
            <div className='w-1/4 h-4/5 rounded flex flex-col items-center justify-evenly text-white hover:bg-white hover:text-black' >
                <div className='w-full h-2/4 flex items-center justify-center' >
                <FontAwesomeIcon className='text-7xl font-light' icon={faBuilding} />
                </div>
                <div className='w-full h-1/4 flex items-center justify-center' >
                    <h4 className='text-2xl' >Apartment</h4>
                </div>
            </div>
            <p className='w-0.5 h-3/6 bg-white' ></p>
            <div className='w-1/4 h-4/5 rounded flex flex-col items-center justify-evenly text-white hover:bg-white hover:text-black' >
                <div className='w-full h-2/4 flex items-center justify-center' >
                <FontAwesomeIcon className='text-7xl font-light' icon={faHouse} />
                </div>
                <div className='w-full h-1/4 flex items-center justify-center' >
                    <h4 className='text-2xl' >House</h4>
                </div>
            </div>
            <p className='w-0.5 h-3/6 bg-white' ></p>
            <div className='w-1/4 h-4/5 rounded flex flex-col items-center justify-evenly text-white hover:bg-white hover:text-black' >
                <div className='w-full h-2/4 flex items-center justify-center' >
                <FontAwesomeIcon className='text-7xl font-light' icon={faBriefcase} />
                </div>
                <div className='w-full h-1/4 flex items-center justify-center' >
                    <h4 className='text-2xl' >Office</h4>
                </div>
            </div>
            <p className='w-0.5 h-3/6 bg-white' ></p>
            <div className='w-1/4 h-4/5 rounded flex flex-col items-center justify-evenly text-white hover:bg-white hover:text-black' >
                <div className='w-full h-2/4 flex items-center justify-center' >
                <FontAwesomeIcon className='text-7xl font-light' icon={faHouseChimney} />
                </div>
                <div className='w-full h-1/4 flex items-center justify-center' >
                    <h4 className='text-2xl' >Villa</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBuy