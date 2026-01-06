import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function AccountSettings() {
  const [formData, setFormData] = useState({
    bio: 'A community-driven environmental group focused on reforestation and waste reduction projects.',
    email: 'contact@ycorg.com',
    orgName: '',
    country: '',
    state: '',
    city: '',
    street: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving changes:', formData);
    alert('Changes saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-[#1a3a2e] mb-2">Account Settings</h1>
          <p className="text-gray-600 text-sm mb-10">{formData.email}</p>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            {/* Left Side - Form Fields */}
            <div className="flex-1 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization Bio
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  A community-driven environmental group focused on reforestation and waste reduction projects.
                </p>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about your organization..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent resize-none h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g necessary cleaner"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization Full Name
                </label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleInputChange}
                  placeholder="e.g necessary cleaner"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex flex-col items-center">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Profile Picture
              </label>
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#c8b899] to-[#a89968] flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <p className="text-gray-600 text-xs text-center px-2">Upload Profile Picture</p>
                <p className="text-gray-500 text-sm italic mt-1">Pseudocide SafCore</p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Address
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
              />
            </div>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              placeholder="Street"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
            />
          </div>

          {/* Legal Documents Section */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Legal Documents
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-[#2d5f4d] hover:bg-gray-50 transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-blue-300" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Drop your image here, or{' '}
                    <span className="text-[#2d5f4d] font-semibold cursor-pointer hover:underline">
                      Browse
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-[#2d5f4d] text-white font-semibold rounded-md hover:bg-[#1f4035] transition-colors"
            >
              SAVE CHANGES56
            </button>
          </div>

          {/* Danger Zone */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex gap-6">
              <button className="text-red-600 font-semibold hover:underline">
                Delete Account
              </button>
              <button className="text-gray-600 font-semibold hover:underline">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}