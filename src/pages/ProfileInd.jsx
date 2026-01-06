import React from 'react'
import bird from '../assets/birds.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProfileInd = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full">
      {/* Navbar */}

      
      {/* Main Content */}
      <div className="flex-grow max-w-5xl mx-auto px-0 py-8 w-full">
        {/* Header */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Account Settings</h1>
          <p className="text-gray-600">user@gmail.com</p>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6 mx-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Personal Bio</h2>
                <p className="text-gray-600">
                  A community-driven environmental group focused on reforestation and waste reduction projects.
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g necessary cleaner"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g necessary cleaner"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Addresss
                </label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Right Column - Profile Picture */}
            <div className="flex flex-col items-center justify-start md:w-80">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Profile Picture</h2>
              <div className="relative">
                <img
                  src={bird}
                  alt="Profile"
                  className="w-56 h-56 rounded-full object-cover border-4 border-green-700"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200 font-semibold">
                  Update Profile Picture
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-8 rounded-md transition duration-200">
              SAVE CHANGES
            </button>
          </div>
        </div>

        {/* Delete Account & Logout */}
        <div className="space-y-2 px-4 mb-8">
          <button className="text-red-600 hover:text-red-700 font-bold text-lg">
            Delete Account
          </button>
          <br />
          <button className="text-gray-800 hover:text-gray-900 font-bold text-lg">
            Log out
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default ProfileInd