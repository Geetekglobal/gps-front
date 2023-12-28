import React from 'react'
import HomeLanding from './homePage/HomeLanding'
import HomeProperty from './homePage/HomeProperty'
import HomeChoose from './homePage/HomeChoose'
import HomeSale from './homePage/HomeSale'
import HomeRent from './homePage/HomeRent'
import HomeBuy from './homePage/HomeBuy'
import HomeBlog from './homePage/HomeBlog'
import Footer from '../../footer/Footer'
import Header from '../../navBar/Header'


const Home = () => {
  return (<>
   <Header/>
    <div className='w-full h-full bg-slate-500 absolute top-0' >
        <HomeLanding/>
        <HomeProperty/>
        <HomeChoose/>
        <HomeSale/>
        <HomeRent/>
        <HomeBuy/>
        <HomeBlog/>
        <Footer/>
    </div>
    </>
  )
}

export default Home