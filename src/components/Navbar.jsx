import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import Verdu from '../assets/logo.png';

const Navbar = ({ transparent = false}) => {

  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Blog', to: '/blogs' },
    { label: 'Campaigns', to: '/campaigns' },
    { label: 'Climate', to: '/climate' },
    { label: 'Profile', to: '/profile', icon: User }
  ];

  return (
    <nav className={`w-full px-10 py-4 backdrop-blur-xl overscroll-none ${
      transparent
        ? 'bg-transparent absolute top-0 left-0 right-0 z-50'
        : 'bg-gradient-to-br from-[#1a2332]/90 via-[#29313D]/90 to-[#1e2633]/90 border-b border-white/10'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="/">
            <img 
              src={Verdu} 
              alt="logo" 
              className="w-40 h-14 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group cursor-pointer">
                <Link
                  to={item.to}
                  className="text-gray-300 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-emerald-400"
                  style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", letterSpacing: '0.5px' }}
                >
                  {Icon ? <Icon className="w-5 h-5 inline" /> : item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 mx-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 flex flex-col gap-4 px-6 py-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.to}
                className="text-gray-300 text-sm font-medium hover:text-emerald-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {Icon && <Icon className="inline w-4 h-4 mr-2" />}
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
