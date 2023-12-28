import HomeImage from '../../../../assets/homepageimage.jpg'
import SearchBox from './SearchBox'

const HomeLanding = () => {

  return (
    <div className='w-full h-full bg-slate-600 object-contain object-center overflow-hidden' >
        <img className='w-full h-full' src={HomeImage} alt="" />
      <SearchBox/>
    </div>
  )
}

export default HomeLanding