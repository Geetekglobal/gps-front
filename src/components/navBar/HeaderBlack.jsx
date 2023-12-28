import React from 'react'
import Gps from '../../assets/gpslogomain.png'
import ConstructionDropDownb from './dropDown/ConstructionDropDownb';
import Menub from './dropDown/Menub';
import SigninDropdownb from './dropDown/SigninDropdownb'
import StudentDropDownb from './dropDown/StudentDropDownb';

import { Link } from 'react-router-dom';
import AgentDropDownb from './dropDown/AgentDropDownb';

const options = [
    { value: 'Dashboard', label: 'Dashboard' , icon:<i className="ri-speed-up-line"></i>},
    { value: 'Myproperties', label: 'My Properties' , icon:<i className="ri-file-list-3-line"></i>},
    { value: 'Myinvoice', label: 'My Invoice' , icon:<i className="ri-bill-line"></i>},
    { value: 'Myfavorites', label: 'My Favorites' , icon:<i className="ri-heart-3-line"></i>},
    { value: 'Mysavedsearches', label: 'My Saved Searches' , icon:<i className="ri-search-line"></i>},
    { value: 'Reviews', label: 'Reviews' , icon:<i className="ri-discuss-line"></i>},
    { value: 'newproperty', label: 'Submit New Property' , icon:<i className="ri-add-circle-line"></i>},
    { value: 'Myprofile', label: 'My Profile' , icon:<i className="ri-user-3-line"></i>},
    { value: 'Logout', label: 'logout' , icon:<i className="ri-logout-box-r-line"></i>},
  ];

const HeaderBlack = () => {
    const handleSelect = (selectedOption) => {
        console.log('Selected option:', selectedOption);
      };
      return (
        <div className="w-full h-24 bg-none flex flex-row items-center justify-between px-5 absolute top-0 z-40 !text-black" >
            <div className="w-1/12 h-full flex items-center justify-center" >
                <img src={Gps} alt="" />
            </div>
            <div className="w-3/5 h-full  flex flex-row items-center justify-evenly !text-black" >
            <Menub/>
            <StudentDropDownb/>
            <ConstructionDropDownb/>
          <Link to="" className='font-semibold  hover:text-[#FFCC00]' > Service </Link>
          <AgentDropDownb/>
            </div>
            <div className="w-3/12 h-full flex flex-row items-center justify-evenly" >
              <SigninDropdownb  options={options} onSelect={handleSelect} />
                <button className="border border-black border-1  font-bold py-2 px-4 rounded hover:border-[#FFCC00] hover:text-[#FFCC00]"><i className="ri-home-4-line"></i> Add Listing</button>
            </div>
        </div>
      )
}

export default HeaderBlack