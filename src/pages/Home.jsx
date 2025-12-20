import React from 'react'
import coverpic from '../assets/coverpic.png'
import BtnCompo from '../components/BtnCompo'
import ImageFormat from '../components/ImageFormat'

const Home = () => {
  return (
    <>
      <div className='relative'>

        {/* background image */}
        <img 
            src={coverpic} 
            alt="home page coverpage"
            className='w-full h-full object-cover' />

        
        {/* for dark fade */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none"
           style={{
             background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.7) 20%, transparent 90%)'
           }}
      />



        {/* text content */}
        <div className="absolute inset-0 flex flex-col space-y-4 pt-[17vh] justify-start pl-20 z-10">


            <div className="w-23 h-10 border-b-3 border-r-3 border-[#dc9e0d]">
                <h1 className='text-white font-bold'>ACT NOW</h1>
            </div>

            <h1 
                className='text-white text-5xl font-bold leading-relaxed tracking-wide'
                style={{fontFamily:'Abril Fatface'}}>
                This Earth Season, stand <br/> with nature and restore  <br/> a planet rapidly losing its  <br/> balance
            </h1>

            <button className=' rounded-xs mr-6 text-white py-2 w-[17vh] bg-[#ac7b06] font-bold tracking-widest my-5' style={{fontFamily:'Oswald'}}>GET START →</button>

        </div>

        <div className="absolute inset-0 flex items-center justify-end space-x-6 pl-20 pt-[100vh] z-10">

            {/* <div className='flex justify-start'> */}
                <h5 className='text-white font-bold '>SEE MORE</h5>
                <div className="w-100 h-0.5 border-b border-white"/>
            {/* </div> */}

            <div className='flex mt-4 overflow-hidden justify-start w-200 flex-shrink-0 space-x-4 '>
                <ImageFormat src={coverpic} alt="image 1" className="w-40 flex-shrink-0" />
                <ImageFormat src={coverpic} alt="image 2" className="w-40 flex-shrink-0"/>
                <ImageFormat src={coverpic} alt="image 3" className="w-40 flex-shrink-0"/>
                <ImageFormat src={coverpic} alt="image 4" className="w-40" crop />

            </div>   
        </div>
      </div>
    </>
  )
}

export default Home
