import React from 'react'

const SideBar = () => {
  return (
    <div className='w-1/5 h-full flex flex-row items-center justify-center' >
    <div className='w-11/12 h-2/4 flex flex-col items-center justify-evenly' >
      <button className='w-10/12 h-[10%] hover:bg-[#FFCC00] rounded-md flex flex-row items-center text-black text-lg px-3 hover:text-black' >
      <i className="ri-file-list-3-line mr-3"></i>  Home
      </button>
      <button className='w-10/12 h-[10%] hover:bg-[#FFCC00] rounded-md flex flex-row items-center text-black text-lg px-3 hover:text-black' >
      <i className="mr-3 ri-bill-line"></i>  My Property
      </button>
      <button className='w-10/12 h-[10%] hover:bg-[#FFCC00] rounded-md flex flex-row items-center text-black text-lg px-3 hover:text-black' >
      <i className="mr-3 ri-heart-3-line"></i>  Payments
      </button>
      <button className='w-10/12 h-[10%] hover:bg-[#FFCC00] rounded-md flex flex-row items-center text-black text-lg px-3 hover:text-black' >
      <i className="mr-3 ri-user-3-line"></i>  My Profile
      </button>
    </div>
  </div>
  )
}

export default SideBar