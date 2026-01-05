import React from 'react'
import Navbar from '../components/NavbarInd'
import forestImage from '../assets/forest.png'
import cleaning from '../assets/clean.png'
import Footer from '../components/Footer'

const IndDashboard = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image */}
        <img 
          src={cleaning} 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center px-16 z-10">
          <div className="text-white max-w-2xl">
            <h2 className="text-6xl font-bold mb-4 leading-tight">
              A Goal without a plan is just a wish
            </h2>
            <p className="text-xl">Create your own funders change!</p>
          </div>
        </div>
      </section>

      {/* Forest Loss Section */}
      <section className="py-20 px-16">
        
      </section>

      {/* Forest Image Section */}
      <section className="w-full h-[800px]">
      <img 
        src={forestImage} 
        alt="Lush forest" 
        className="w-full h-full object-cover"
      />
    </section>
      {/* Footer */}
      <Footer/>
    </div>
    </div>
  )
}

export default IndDashboard
