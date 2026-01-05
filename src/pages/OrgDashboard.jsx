import React from 'react'
import Navbar from '../components/NavbarOrg'
import forestImage from '../assets/forest.png'
import cleaning from '../assets/clean.png'
import Footer from '../components/Footer'

const OrgDashboard = () => {
  return (
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
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-16">
            <div className="flex-1">
              <p className="text-gray-500 uppercase tracking-wider mb-4 font-semibold">ACT NOW</p>
              <h3 className="text-5xl font-bold text-green-800 mb-6 leading-tight">
                We lose forests every single minute
              </h3>
              <p className="text-gray-700 text-lg mb-8">
                An area of rainforest the size of 20 football fields disappears every minute due to logging and agriculture.
              </p>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded font-semibold transition duration-200">
                Read More
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=800" 
                alt="Deforestation" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
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
  )
}

export default OrgDashboard