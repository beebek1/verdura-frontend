import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop',
      title: 'Why do we need to plant trees ?',
      excerpt: 'Trees are vital to a sign of a healthy climate. In a certified regulatory anti-case content, decent as posts, designed in reverse chronological order with the newest entries appearing first. It is a platform for sharing information, thoughts...',
      views: 1653,
      upvotes: 26,
      tags: ['like', 'nature', 'tree']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
      title: 'Importance of Evolution',
      excerpt: 'Evolution is the process through which species change over time, driven by natural selection and genetic variation. Understanding evolution helps us comprehend biodiversity and our place in nature...',
      views: 2341,
      upvotes: 45,
      tags: ['science', 'nature', 'evolution']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop',
      title: 'Ocean Conservation Matters',
      excerpt: 'Our oceans are facing unprecedented challenges from pollution, overfishing, and climate change. Learn why protecting our marine ecosystems is crucial for the planet and future generations...',
      views: 1876,
      upvotes: 38,
      tags: ['ocean', 'conservation', 'marine']
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleCreateBlog = () => {
    navigate('/create-Blog');

    console.log("im here")
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8">
          <h2 className="text-white text-4xl font-bold mb-8">
            Let others know about your<br />existence
          </h2>
          
          {/* Stats */}
          <div className="flex gap-24">
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">25</div>
              <div className="text-sm">Total Blogs</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">4500+</div>
              <div className="text-sm">Total Views</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">1200+</div>
              <div className="text-sm">Total Upvotes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-8 py-4 flex gap-4 items-center">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Blogs"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 pr-10"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>

          {/* Create Blog Button */}
          <button
            onClick={handleCreateBlog}
            className="px-6 py-2 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-900 transition-colors uppercase text-sm"
          >
            Create Blog
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto px-8 py-8">
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Blog Image */}
                <div className="md:w-2/5">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="md:w-3/5 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                    <span className="text-teal-700 font-medium cursor-pointer hover:underline ml-1">
                      see more
                    </span>
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Views: {blog.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Upvotes: {blog.upvotes}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          index === 0
                            ? 'bg-teal-600 text-white'
                            : index === 1
                            ? 'bg-yellow-400 text-gray-900'
                            : 'bg-pink-500 text-white'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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