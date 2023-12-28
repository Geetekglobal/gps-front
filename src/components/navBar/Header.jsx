import { Link } from 'react-router-dom';
import Gps from '../../assets/gpslogomain.png'
import ConstructionDropDown from './dropDown/ConstructionDropDown';
import Menu from './dropDown/Menu';
import SigninDropdown from './dropDown/SigninDropdown'
import StudentDropDown from './dropDown/StudentDropDown';
import AgentDropDown from './dropDown/AgentDropDown';

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

const Header = () => {
  const handleSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };
  return (
    <div className="w-full h-24 bg-none flex flex-row items-center justify-between px-5 absolute top-0 z-40" >
        <div className="w-1/12 h-full flex items-center justify-center" >
            <img src={Gps} alt="" />
        </div>
        <div className="w-3/5 h-full  flex flex-row items-center justify-evenly" >
        <Menu/>
        <StudentDropDown/>
        <ConstructionDropDown/>
      <Link to="" className='font-semibold text-white hover:text-[#FFCC00]' > Service </Link>
      <AgentDropDown/>
        </div>
        <div className="w-3/12 h-full flex flex-row items-center justify-evenly" >
          <SigninDropdown  options={options} onSelect={handleSelect} />
            <button className="border border-white border-1 text-white font-bold py-2 px-4 rounded hover:border-[#FFCC00] hover:text-[#FFCC00]"><i className="ri-home-4-line"></i> Add Listing</button>
        </div>
    </div>
  )
}

export default Header