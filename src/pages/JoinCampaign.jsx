import React from 'react'
import Navbar from '../components/NavbarInd'

const CampaignCard = ({ title, status, volunteers, currentVolunteers }) => {
  const isActive = status === 'Active';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
        isActive ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-800'
      }`}>
        {status}
      </span>
      
      <p className="text-gray-600 mt-4 mb-6">
        <span className="font-semibold">Seeking :</span> {currentVolunteers}/{volunteers} Volunteers
      </p>
      
      <div className="flex gap-3">
        <button className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
          View Details
        </button>
        <button className="px-6 py-2 bg-green-800 text-white rounded hover:bg-green-900 transition">
          Join
        </button>
      </div>
    </div>
  );
};

const JoinCampaign = () => {
  // Initial campaign - more will be added when organizations create them
  // This data would come from your backend API
  const campaigns = [
    {
      id: 1,
      title: 'Tree Plantation Drive',
      status: 'Active',
      volunteers: 20,
      currentVolunteers: 12
    },
    // New campaigns will be added here dynamically when organizations create them
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full">
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main className="flex-grow px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Nearby Campaigns
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campaigns.map(campaign => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Verdura</h2>
          <p className="text-sm text-gray-400">copyright © 2025 Impact Teams, Inc.</p>
        </div>
      </footer>
    </div>
  )
}

export default JoinCampaign