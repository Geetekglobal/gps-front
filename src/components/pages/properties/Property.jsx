import React from 'react'

import HeaderBlack from '../../navBar/HeaderBlack'
import Footer from '../../footer/Footer'
import SideBar from './sidebar/SideBar'
import PropertyItem from './property/PropertyItem'

const Property = () => {
  return (
    < >
    <HeaderBlack/>
    <div className='w-full h-screen mt-24' >
        <div className='w-full h-full  flex flex-row items-center justify-evenly' >
           <SideBar/>
            <PropertyItem/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Property