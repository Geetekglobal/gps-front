import React, { useState } from 'react';
import "./Menu.css"

const StudentDropDownb = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isNestedMenuOpen, setIsNestedMenuOpen] = useState(false);
  return (
    <div className="group inline-block">
    <button
      className="outline-none focus:outline-none px-3 py-1 flex items-center min-w-32 text-black hover:text-[#FFCC00] focus:text-[#FFCC00]"
      onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
    >
      <span className="pr-1 font-semibold flex-1">Student Property</span>
      <span>
        <svg
          className={`fill-current h-4 w-4 transform ${
            isSubMenuOpen && 'rotate-180'
          } transition duration-150 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </span>
    </button>

    <ul
      className={`bg-white border rounded-md transform scale-0 ${
        isSubMenuOpen && 'scale-100'
      } absolute transition duration-150 ease-in-out origin-top w-48`}
    >
      <li className="rounded-sm relative px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
        <button
          className="w-full text-left flex items-center outline-none focus:outline-none"
          onClick={() => setIsNestedMenuOpen(!isNestedMenuOpen)}
        >
          <span className="pr-1 flex-1">Shared</span>
          <span className="mr-auto">
            <svg
              className={`fill-current h-4 w-4 transition duration-150 ease-in-out ${
                isNestedMenuOpen && 'rotate-180'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className={`bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-48 ${
            isNestedMenuOpen && 'scale-100'
          }`}
        >
          <li className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">Shared Apartment</li>
          <li className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">Shared House</li>
         
        </ul>
      </li>
      <li className="rounded-sm relative px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">
        <button
          className="w-full text-left flex items-center outline-none focus:outline-none"
          onClick={() => setIsNestedMenuOpen(!isNestedMenuOpen)}
        >
          <span className="pr-1 flex-1">Hostel</span>
          <span className="mr-auto">
            <svg
              className={`fill-current h-4 w-4 transition duration-150 ease-in-out ${
                isNestedMenuOpen && 'rotate-180'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className={`bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-48 ${
            isNestedMenuOpen && 'scale-100'
          }`}
        >
                <li className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">Private Hostel</li>
                <li className="px-3 py-1 text-black hover:bg-black hover:text-[#FFCC00]">University Hostel</li>
        
        </ul>
      </li>
     
    </ul>
  </div>
  )
}

export default StudentDropDownb