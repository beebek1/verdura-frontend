import React, { useState } from 'react';

export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    title: '',
    volunteersNeeded: 0,
    startDate: '',
    endDate: '',
    status: '',
    category: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Campaign created:', formData);
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      volunteersNeeded: 0,
      startDate: '',
      endDate: '',
      status: '',
      category: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8">
          <h2 className="text-white text-5xl font-bold mb-12 text-center">
            You have came across a long way..
          </h2>
          
          {/* Stats */}
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <div className="text-white text-left">
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-lg">Active Campaigns</div>
            </div>
            <div className="text-white text-center">
              <div className="text-5xl font-bold mb-2">18 +</div>
              <div className="text-lg">Completed</div>
            </div>
            <div className="text-white text-right">
              <div className="text-5xl font-bold mb-2">450+</div>
              <div className="text-lg">Volunteer helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-8 py-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">Create New Campaign</h3>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Campaign Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Campaign Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g. Beach Cleaning"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            {/* Volunteer Needed */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Volunteer needed
              </label>
              <input
                type="number"
                name="volunteersNeeded"
                value={formData.volunteersNeeded}
                onChange={handleInputChange}
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Start Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
            >
              <option value="">Select Category</option>
              <option value="cleaning">Beach Cleaning</option>
              <option value="planting">Tree Planting</option>
              <option value="recycling">Recycling</option>
              <option value="education">Environmental Education</option>
              <option value="conservation">Wildlife Conservation</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              maxLength={500}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
              placeholder="Describe your campaign..."
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.description.length}/500
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancel}
              className="px-8 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition-colors uppercase"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-900 transition-colors uppercase"
            >
              Create Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Verdura</h2>
          <p className="text-gray-400 text-sm">Copyright © 2025 Impact Teams, Inc.</p>
        </div>
      </footer>
    </div>
  );
}