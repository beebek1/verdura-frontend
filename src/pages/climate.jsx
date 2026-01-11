import React, { useState } from 'react';
import { MapPin, Cloud, Wind, Droplets, Eye, Gauge, AlertTriangle, TrendingUp, ThermometerSun, Leaf, Factory, Car, Search } from 'lucide-react';

// Mock climate data - will be replaced with API data later
const mockClimateData = {
  location: {
    city: "Pātan",
    state: "Bagmati Province",
    country: "Nepal",
    coordinates: { lat: 27.6725, lon: 85.3268 }
  },
  weather: {
    temperature: 18,
    feelsLike: 16,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    pressure: 1013,
    uvIndex: 6
  },
  airQuality: {
    aqi: 156,
    category: "Unhealthy",
    pm25: 62,
    pm10: 98,
    no2: 45,
    o3: 32,
    co: 1.2,
    so2: 15
  },
  forecast: [
    { day: "Mon", temp: 19, condition: "Sunny", aqi: 142 },
    { day: "Tue", temp: 20, condition: "Cloudy", aqi: 158 },
    { day: "Wed", temp: 18, condition: "Rainy", aqi: 134 },
    { day: "Thu", temp: 17, condition: "Cloudy", aqi: 145 },
    { day: "Fri", temp: 19, condition: "Sunny", aqi: 150 }
  ]
};

const getAQIColor = (aqi) => {
  if (aqi <= 50) return 'from-green-500 to-emerald-500';
  if (aqi <= 100) return 'from-yellow-500 to-amber-500';
  if (aqi <= 150) return 'from-orange-500 to-orange-600';
  if (aqi <= 200) return 'from-red-500 to-red-600';
  return 'from-purple-500 to-purple-600';
};

const getAQITextColor = (aqi) => {
  if (aqi <= 50) return 'text-green-600';
  if (aqi <= 100) return 'text-yellow-600';
  if (aqi <= 150) return 'text-orange-600';
  if (aqi <= 200) return 'text-red-600';
  return 'text-purple-600';
};

const MetricCard = ({ icon: Icon, label, value, unit, color = "from-emerald-500 to-teal-500" }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {value}<span className="text-lg text-gray-500 ml-1">{unit}</span>
      </div>
      <div className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </div>
    </div>
  </div>
);

const PollutantBar = ({ name, value, max, unit }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
          {name}
        </span>
        <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
          {value} {unit}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default function ClimateDashboard() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(mockClimateData);

  const handleSearch = () => {
    // In future, this will call API with the location
    console.log('Searching for:', location);
    // For now, just use mock data
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              Climate Dashboard
            </h1>
            <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
              Real-time weather and air quality information
            </p>
          </div>

          {/* Location Search */}
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter city name..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Current Location */}
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg" />
            <div className="relative bg-white rounded-xl p-5 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {data.location.city}, {data.location.state}, {data.location.country}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Weather & AQI Overview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Weather Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Current Weather
                      </h2>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.weather.condition}
                      </p>
                    </div>
                    <Cloud className="w-12 h-12 text-emerald-600" />
                  </div>
                  
                  <div className="flex items-center gap-8 mb-6">
                    <div>
                      <div className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.weather.temperature}°C
                      </div>
                      <p className="text-gray-600 text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Feels like {data.weather.feelsLike}°C
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <Droplets className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.weather.humidity}%
                      </div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Humidity
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <Wind className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.weather.windSpeed} km/h
                      </div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Wind Speed
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <Eye className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.weather.visibility} km
                      </div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Visibility
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <Gauge className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.weather.pressure} mb
                      </div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Pressure
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Air Quality Index */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-red-100/50 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Air Quality Index
                      </h2>
                      <p className={`text-sm font-semibold ${getAQITextColor(data.airQuality.aqi)}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.airQuality.category}
                      </p>
                    </div>
                    <AlertTriangle className={`w-8 h-8 ${getAQITextColor(data.airQuality.aqi)}`} />
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${getAQIColor(data.airQuality.aqi)} flex items-center justify-center shadow-lg`}>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {data.airQuality.aqi}
                        </div>
                        <div className="text-xs text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                          AQI
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                        The air quality is unhealthy for sensitive groups. Consider limiting outdoor activities.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${getAQIColor(data.airQuality.aqi)}`}
                            style={{ width: `${(data.airQuality.aqi / 300) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {data.airQuality.aqi}/300
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <PollutantBar name="PM2.5" value={data.airQuality.pm25} max={100} unit="μg/m³" />
                    <PollutantBar name="PM10" value={data.airQuality.pm10} max={150} unit="μg/m³" />
                    <PollutantBar name="NO₂" value={data.airQuality.no2} max={100} unit="ppb" />
                    <PollutantBar name="O₃" value={data.airQuality.o3} max={100} unit="ppb" />
                  </div>
                </div>
              </div>

              {/* 5-Day Forecast */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    5-Day Forecast
                  </h2>
                  <div className="grid grid-cols-5 gap-4">
                    {data.forecast.map((day, idx) => (
                      <div 
                        key={idx} 
                        className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                      >
                        <div className="font-semibold text-gray-800 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {day.day}
                        </div>
                        <div className="text-2xl mb-2">☁️</div>
                        <div className="text-lg font-bold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {day.temp}°C
                        </div>
                        <div className={`text-xs font-semibold ${getAQITextColor(day.aqi)}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                          AQI {day.aqi}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              {/* UV Index */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/60 to-orange-200/60 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 shadow-lg">
                  <ThermometerSun className="w-8 h-8 text-white mb-4" />
                  <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {data.weather.uvIndex}
                  </div>
                  <div className="text-white font-semibold mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    UV Index
                  </div>
                  <p className="text-white/90 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    High - Use sun protection
                  </p>
                </div>
              </div>

              {/* Health Recommendations */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Health Tips
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Sensitive groups should reduce outdoor activities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Keep windows closed during peak pollution hours</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Use air purifiers indoors</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Wear masks when going outside</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pollution Sources */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Main Pollutants
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Factory className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Industrial
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-orange-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        High
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Car className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Traffic
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-orange-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Medium
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}