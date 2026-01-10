import React, { useState } from 'react';
import { User, Mail, MapPin, Calendar, TrendingUp, Settings, Bell, Shield, Camera, Edit2, Save, X, Leaf, Target, Clock, Users, Briefcase, FileText, Upload, Eye, Heart, MessageCircle, BarChart3 } from 'lucide-react';

// Mock organization data - would come from backend
const orgData = {
  profile: {
    name: "Youth Climate Organization",
    email: "contact@ycorg.com",
    bio: "A community-driven environmental group focused on reforestation and waste reduction projects.",
    avatar: null,
    foundedDate: "January 2024",
    location: {
      country: "Nepal",
      state: "Bagmati Province",
      city: "Pātan",
      street: ""
    },
    orgType: "Non-Profit"
  },
  stats: {
    campaignsCreated: 12,
    activeCampaigns: 8,
    totalVolunteers: 450,
    blogsPublished: 28,
    totalImpact: 8500,
    hoursGenerated: 2400
  },
  ongoingCampaigns: [
    {
      id: 1,
      title: "Tree Plantation Drive 2025",
      volunteers: 127,
      hoursContributed: 450,
      progress: 68,
      startDate: "Jan 15, 2025",
      status: "Active",
      nextMilestone: "Plant 1000 trees"
    },
    {
      id: 2,
      title: "Community Cleanup Initiative",
      volunteers: 89,
      hoursContributed: 280,
      progress: 45,
      startDate: "Jan 10, 2025",
      status: "Active",
      nextMilestone: "Collect 500kg waste"
    },
    {
      id: 3,
      title: "Ocean Restoration Project",
      volunteers: 65,
      hoursContributed: 180,
      progress: 30,
      startDate: "Jan 20, 2025",
      status: "Active",
      nextMilestone: "Clean 10km coastline"
    }
  ],
  recentBlogs: [
    { 
      id: 1, 
      title: "How Tree Plantation Improves Air Quality", 
      views: 1520, 
      likes: 152,
      comments: 24,
      date: "Jan 18, 2025"
    },
    { 
      id: 2, 
      title: "Volunteer Stories from the Field", 
      views: 980, 
      likes: 98,
      comments: 15,
      date: "Jan 15, 2025"
    },
    { 
      id: 3, 
      title: "The Impact of Community Action", 
      views: 756, 
      likes: 76,
      comments: 12,
      date: "Jan 12, 2025"
    }
  ],
  achievements: [
    { id: 1, name: "First Campaign", icon: "🎯", earned: true, date: "Jan 2024" },
    { id: 2, name: "Tree Champion", icon: "🌳", earned: true, date: "Mar 2024" },
    { id: 3, name: "Community Leader", icon: "👥", earned: true, date: "Jun 2024" },
    { id: 4, name: "1000 Volunteers", icon: "⭐", earned: false, date: null }
  ],
  recentActivity: [
    { id: 1, action: "Published new blog: 'Tree Plantation Guide'", date: "2 days ago", icon: "📝" },
    { id: 2, action: "Launched Ocean Restoration Project", date: "5 days ago", icon: "🌊" },
    { id: 3, action: "Reached 400 total volunteers", date: "1 week ago", icon: "👥" }
  ],
  preferences: {
    emailNotifications: true,
    volunteerUpdates: true,
    weeklyReport: true,
    marketingEmails: false,
    profileVisibility: "public"
  }
};

const ProfileHeader = ({ profile, isEditing, onEdit, onSave, onCancel }) => {
  const [localProfile, setLocalProfile] = useState(profile);
  const [imageHover, setImageHover] = useState(false);

  const handleChange = (field, value) => {
    setLocalProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(localProfile);
  };

  return (
    <div className="relative group mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="relative group/avatar">
            <div 
              className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg shadow-emerald-500/30 cursor-pointer"
              onMouseEnter={() => setImageHover(true)}
              onMouseLeave={() => setImageHover(false)}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                profile.name.substring(0, 2).toUpperCase()
              )}
              {imageHover && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300">
                  <Camera className="w-6 h-6 text-white" />
                  <span className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Change Logo
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={localProfile.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="text-3xl font-bold text-gray-800 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full focus:outline-none focus:border-emerald-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {profile.name}
                  </h1>
                )}
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 font-medium">
                    <Briefcase className="w-4 h-4" />
                    {profile.orgType}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    {profile.location.city}, {profile.location.country}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Founded {profile.foundedDate}
                  </span>
                </div>

                {isEditing ? (
                  <textarea
                    value={localProfile.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    rows={3}
                    className="text-gray-600 text-sm bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-emerald-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {profile.bio}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <button
                    onClick={onEdit}
                    className="p-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Edit2 className="w-5 h-5 text-emerald-600" />
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      className="p-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      <Save className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={onCancel}
                      className="p-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <X className="w-5 h-5 text-red-500" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon: Icon, label, value, sublabel, color = "from-emerald-500 to-teal-500" }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 text-center">
      <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {value}
      </div>
      <div className="text-sm text-gray-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          {sublabel}
        </div>
      )}
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="relative">
    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <div 
        className="h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700 ease-out relative shadow-sm"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
      </div>
    </div>
  </div>
);

const CampaignCard = ({ campaign }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            {campaign.title}
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-600" />
              {campaign.volunteers} volunteers
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              {campaign.hoursContributed} hours
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-600" />
              Started {campaign.startDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-600" />
              {campaign.nextMilestone}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 font-medium">
              {campaign.status}
            </span>
            <span className="text-gray-600">Progress: {campaign.progress}%</span>
          </div>
        </div>
      </div>
      <ProgressBar progress={campaign.progress} />
      <div className="flex gap-2 mt-4">
        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md" style={{ fontFamily: "'Inter', sans-serif" }}>
          View Details
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
          Edit
        </button>
      </div>
    </div>
  </div>
);

const BlogCard = ({ blog }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
      <h3 className="text-base font-semibold text-gray-800 mb-3 line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
        {blog.title}
      </h3>
      <div className="flex items-center justify-between text-sm text-gray-600 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        <span className="flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-emerald-600" />
          {blog.views}
        </span>
        <span className="flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-red-500" />
          {blog.likes}
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4 text-blue-500" />
          {blog.comments}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
          {blog.date}
        </span>
        <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          Edit
        </button>
      </div>
    </div>
  </div>
);

const AchievementBadge = ({ achievement }) => (
  <div className={`relative group ${!achievement.earned && 'opacity-40'}`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg transition-opacity duration-500 ${achievement.earned ? 'opacity-50 group-hover:opacity-100' : 'opacity-0'}`} />
    <div className="relative bg-white rounded-xl p-4 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 text-center">
      <div className="text-4xl mb-2">{achievement.icon}</div>
      <div className="text-sm font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {achievement.name}
      </div>
      {achievement.earned ? (
        <div className="text-xs text-emerald-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          {achievement.date}
        </div>
      ) : (
        <div className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          Locked
        </div>
      )}
    </div>
  </div>
);

export default function OrganizationProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState(orgData.preferences);
  const [formData, setFormData] = useState(orgData.profile);

  const handleSaveProfile = (updatedProfile) => {
    console.log('Saving profile:', updatedProfile);
    setIsEditing(false);
  };

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLocationChange = (field, value) => {
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [field]: value
      }
    });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'profile', label: 'Organization Info', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <ProfileHeader 
            profile={orgData.profile}
            isEditing={isEditing}
            onEdit={() => setIsEditing(true)}
            onSave={handleSaveProfile}
            onCancel={() => setIsEditing(false)}
          />

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-emerald-300'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <StatsCard 
                  icon={Target} 
                  label="Campaigns" 
                  value={orgData.stats.campaignsCreated}
                  sublabel="Created"
                  color="from-emerald-500 to-teal-500"
                />
                <StatsCard 
                  icon={Leaf} 
                  label="Active" 
                  value={orgData.stats.activeCampaigns}
                  sublabel="Running Now"
                  color="from-teal-500 to-emerald-600"
                />
                <StatsCard 
                  icon={Users} 
                  label="Volunteers" 
                  value={orgData.stats.totalVolunteers}
                  sublabel="Total"
                  color="from-emerald-600 to-teal-500"
                />
                <StatsCard 
                  icon={FileText} 
                  label="Blogs" 
                  value={orgData.stats.blogsPublished}
                  sublabel="Published"
                  color="from-teal-600 to-emerald-500"
                />
                <StatsCard 
                  icon={BarChart3} 
                  label="Impact" 
                  value={orgData.stats.totalImpact}
                  sublabel="Score"
                  color="from-emerald-500 to-teal-600"
                />
                <StatsCard 
                  icon={Clock} 
                  label="Hours" 
                  value={orgData.stats.hoursGenerated}
                  sublabel="Generated"
                  color="from-teal-500 to-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Recent Campaigns */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Active Campaigns
                      </h2>
                      <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        View All <span>→</span>
                      </button>
                    </div>
                    <div className="space-y-4">
                      {orgData.ongoingCampaigns.slice(0, 2).map(campaign => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Recent Activity
                      </h2>
                      <div className="space-y-4">
                        {orgData.recentActivity.map(activity => (
                          <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0 group/item hover:bg-gray-50 -mx-4 px-4 py-2 rounded-lg transition-colors duration-300">
                            <div className="text-2xl">{activity.icon}</div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {activity.action}
                              </p>
                              <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {activity.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Impact Summary */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 to-teal-200/60 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-lg">
                      <h2 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Impact Summary
                      </h2>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {orgData.stats.totalImpact}
                          </div>
                          <p className="text-emerald-100 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Total Impact Score
                          </p>
                        </div>
                        <div className="border-t border-white/20 pt-4">
                          <div className="flex justify-between text-emerald-50 text-sm mb-2">
                            <span style={{ fontFamily: "'Inter', sans-serif" }}>Volunteers Engaged</span>
                            <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{orgData.stats.totalVolunteers}</span>
                          </div>
                          <div className="flex justify-between text-emerald-50 text-sm">
                            <span style={{ fontFamily: "'Inter', sans-serif" }}>Hours Generated</span>
                            <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{orgData.stats.hoursGenerated}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                      <h2 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Achievements
                      </h2>
                      <div className="grid grid-cols-2 gap-3">
                        {orgData.achievements.map(achievement => (
                          <AchievementBadge key={achievement.id} achievement={achievement} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (

                <div className="min-h-screen bg-gray-50">

                  {/* Main Container */}
                  <div className="max-w-4xl mx-auto px-4 py-10">
                    <div className="bg-white rounded-lg shadow-md p-8">

                      {/* Profile Section */}
                      <div className="flex flex-col md:flex-row gap-8 mb-10">
                        {/* Left Side - Form Fields */}
                        <div className="flex-1 space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Organization Bio
                            </label>
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
                          onClick={handleSaveProfile}
                          className="px-8 py-3 bg-[#2d5f4d] text-white font-semibold rounded-md hover:bg-[#1f4035] transition-colors"
                        >
                          SAVE CHANGES
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )};

          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Settings</h2>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.emailNotifications}
                  onChange={() => togglePreference('emailNotifications')}
                />
                Email Notifications
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.weeklyReport}
                  onChange={() => togglePreference('weeklyReport')}
                />
                Weekly Report
              </label>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}