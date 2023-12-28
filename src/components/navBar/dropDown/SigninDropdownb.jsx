
import React, { useState } from 'react';

const SigninDropdownb = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option);
    };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 bg-none text-base font-semibold text-black hover:text-[#FFCC00]"
          id="options-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
        <i className="ri-user-2-line"></i> Sign in
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option.value}
                className="cursor-pointer block px-4 py-2 text-sm text-black hover:text-[#FFCC00] hover:bg-black"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
               {option.icon} {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SigninDropdownb