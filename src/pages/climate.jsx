import React, { useState, useEffect } from 'react';
import { MapPin, Cloud, Wind, Droplets, Eye, Gauge, AlertTriangle, TrendingUp, ThermometerSun, Leaf, Factory, Car, Search, RefreshCw } from 'lucide-react';
import { getLatestWeather } from '../services/api';


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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);

      const response = await getLatestWeather("ilam");
      const current = response.data.current;
      const air = current.air_quality;

      const calculateSimpleAQI = (pm2_5) => {
        if (pm2_5 <= 12.0) return Math.round((50 / 12.0) * pm2_5);
        if (pm2_5 <= 35.4) return Math.round(((100 - 51) / (35.4 - 12.1)) * (pm2_5 - 12.1) + 51);
        if (pm2_5 <= 55.4) return Math.round(((150 - 101) / (55.4 - 35.5)) * (pm2_5 - 35.5) + 101);
        if (pm2_5 <= 150.4) return Math.round(((200 - 151) / (150.4 - 55.5)) * (pm2_5 - 55.5) + 151);
        if (pm2_5 <= 250.4) return Math.round(((300 - 201) / (250.4 - 150.5)) * (pm2_5 - 150.5) + 201);
        return 301;
      };

      const calculateCategory = (aqi) => {
        if (aqi <= 50) return "Good";
        if (aqi <= 100) return "Moderate";
        if (aqi <= 150) return "Unhealthy for Sensitive Groups";
        if (aqi <= 200) return "Unhealthy";
        if (aqi <= 300) return "Very Unhealthy";
        return "Hazardous";
      };

      const aqi = calculateSimpleAQI(air.pm2_5);

      setData({
        location: {
          city: "Kathmandu",
          state: "Bagmati Province",
          country: "Nepal",
        },
        weather: {
          temperature: current.temp_c,
          feelsLike: current.feelslike_c,
          condition: current.condition.text,
          humidity: current.humidity,
          windSpeed: current.wind_kph,
          visibility: current.vis_km,
          pressure: current.pressure_mb,
          uvIndex: current.uv,
        },
        airQuality: {
          aqi,
          category: calculateCategory(aqi),
          pm2_5: air.pm2_5,
          pm10: air.pm10,
          no2: air.no2,
          o3: air.o3,
          co: air.co,
          so2: air.so2,
        },
      });
    } catch (error) {
      console.error("Failed to fetch weather data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (loading) return <div className="p-10">Loading climate data...</div>;
  if (!data) return <div className="p-10">No climate data available</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Current Location */}
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg" />
            <div className="relative bg-white rounded-xl p-5 shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {data.location.city}, {data.location.state}, {data.location.country}
                  </span>
                </div>

                <button
                  onClick={getWeather}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300"
                  title="Refresh weather"
                >
                  <RefreshCw className={`w-4 h-4 text-emerald-600 ${loading ? 'animate-spin' : 'group-hover:rotate-180'} transition-transform duration-500`} />
                  <span className="text-sm font-medium text-emerald-700">Refresh</span>
                </button>
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
                    <PollutantBar name="PM2.5" value={data.airQuality.pm2_5} max={100} unit="μg/m³" />
                    <PollutantBar name="PM10" value={data.airQuality.pm10} max={150} unit="μg/m³" />
                    <PollutantBar name="NO₂" value={data.airQuality.no2} max={100} unit="ppb" />
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