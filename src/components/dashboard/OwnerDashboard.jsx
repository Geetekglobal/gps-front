import React from 'react'
import Gps from '../../assets/gpslogomain.png'
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHotel } from '@fortawesome/free-solid-svg-icons'
import ReferFriend from './refer/ReferFriend'
import SideBarProp from './sidebar/SideBarProp'

const OwnerDashboard = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-between' >
          <div className='w-full h-[10%] flex flex-row items-center justify-between' >
            <button className='w-1/12 h-full flex flex-row items-center justify-evenly hover:text-[#FFCC00] text-black' >
            <Link to='/' >
            <i className="ri-arrow-left-line"></i> Go Back
            </Link>
            </button>
            <div className='w-2/12 h-full flex items-center justify-center object-cover object-center overflow-hidden' >
              <img className='h-full' src={Gps} alt="" />
            </div>
            <button className='w-1/12 h-full flex flex-row items-center justify-evenly hover:text-[#FFCC00] text-black' >
            Logout <i className="ri-logout-box-r-line"></i>
            </button>
          </div>
          <div className='w-full h-[93%] flex flex-row items-center justify-between' >
        <SideBarProp/>
          <div className='w-4/5 h-full overflow-y-auto' >
            <div className='w-full h-1/2 flex items-center flex-col justify-evenly' >
              <div className='w-5/6 h-2/5  flex flex-row items-center justify-evenly' >
                <div className='w-2/5 h-full  flex flex-col items-start justify-evenly px-3' >
                  <h1 className='text-xl text-black font-semibold' >Hii User!!!</h1>
                  <h1 className='text-lg text-black font-semibold' >Role - Buyer/Tenant</h1>
                  <Link className='text-[#FFCC00] underline hover:text-black' >Profile Details</Link>
                </div>
                <div className='w-2/5 h-full  flex flex-col items-end justify-evenly px-3' >
             <div className='w-28 h-28  rounded-full object-cover object-center overflow-hidden' >
              <img className='w-full h-full' src={avatar} alt="" />
             </div>
                </div>
              </div>
              <div className='w-5/6 h-1/2 rounded-md border border-[#FFCC00] flex flex-col items-center justify-evenly' >
                <h1 className='text-3xl text-black font-semibold' >Your Package</h1>
                <h1 className='text-xl text-black' >Package Name - Free</h1>
                <h1 className='text-lg text-black' >End Date - November 11 , 2023</h1>
                <button className='w-1/4 h-10 rounded bg-[#FFCC00] font-semibold hover:text-white hover:bg-black' >Change Package</button>
              </div>
            </div>
            <div className='w-full h-4/5 flex items-center flex-col justify-evenly' >
              <div className='w-5/6 h-1/4  flex flex-col items-start justify-evenly px-5' >
                <h2 className='text-xl font-medium' >Your Property</h2>
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                Explore my property 
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className='w-5/6 h-1/4 flex flex-col items-start justify-evenly px-5' >
                <h2 className='text-xl font-medium' >Payments</h2>
                <div className='w-full h-5/6 flex flex-row items-center justify-between' >
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                View Current Plan 
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                My Invoice 
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                Change Plan 
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
                </div>
              </div>
              <div className='w-5/6 h-1/4  flex flex-col items-start justify-evenly px-5' >
                <h2 className='text-xl font-medium' >Links</h2>
                <div className='w-full h-5/6 flex flex-row items-center justify-between' >
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                My Favorites
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                My Saved Searches
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                View Reviews 
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
                </div>
              </div>
              <div className='w-5/6 h-1/4  flex flex-col items-start justify-evenly px-5' >
                <h2 className='text-xl font-medium' >Your Profile</h2>
                <button className='w-1/4 h-14 rounded-lg hover:bg-black hover:text-[#FFCC00] bg-[#FFCC00] flex flex-row items-center justify-evenly font-semibold' >
                <FontAwesomeIcon icon={faHotel} />
                Explore my profile
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className='w-full h-4/6 flex items-center flex-col justify-evenly' >
              <ReferFriend/>
            </div>
          </div>
        </div>
          </div>
      )
}

export default OwnerDashboard