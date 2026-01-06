import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import Verdu from '../assets/verdu.png';

const Navbar = ({ transparent = false, role = 'organization' }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Define navigation items based on role
  const navItems = {
    organization: [
      { label: 'Blog', href: '/blog' },
      { label: 'Campaigns', href: '/campaigns' },
      { label: 'Profile', href: '/profile', icon: User }
    ],
    individual: [
      { label: 'Blog', to: '/blog' },
      { label: 'Campaigns', to: '/campaigns' },
      { label: 'My Impact', to: '/my-impact' },
      { label: 'Profile', to: '/profileind', icon: User }
    ]
  };

  const items = navItems[role] || navItems.individual;

  return (
    <nav className={`flex justify-between items-center w-full px-12 py-5 ${
      transparent 
        ? 'bg-transparent absolute top-0 left-0 right-0 z-50' 
        : 'bg-gradient-to-r from-[#1a2332] via-[#29313D] to-[#1a2332] shadow-lg'
    }`}>
      {/* Logo */}
      <div className="cursor-pointer">
        {role === 'individual' ? (
          <Link to="/">
            <img 
              src={Verdu} 
              alt="logo" 
              className='w-44 h-16 object-contain drop-shadow-2xl'
            />
          </Link>
        ) : (
          <img 
            src={Verdu} 
            alt="logo" 
            className='w-44 h-16 object-contain drop-shadow-2xl'
          />
        )}
      </div>

      {/* Navigation links */}
      <div className="flex items-center space-x-6 mr-8">
        {items.map((item, index) => {
          const Icon = item.icon; // If an icon is defined, use it
          return (
            <div 
              key={index}
              className="relative px-2 py-2 cursor-pointer"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {role === 'organization' ? (
                <a 
                  href={item.href} 
                  className="text-white text-base font-semibold tracking-wide transition-colors duration-300 hover:text-emerald-400"
                  style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", letterSpacing: '0.5px' }}
                >
                  {Icon ? <Icon className="w-5 h-5 inline" /> : item.label}
                </a>
              ) : (
                <Link 
                  to={item.to} 
                  className="text-white text-base font-semibold tracking-wide transition-colors duration-300 hover:text-emerald-400"
                  style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", letterSpacing: '0.5px' }}
                >
                  {Icon ? <Icon className="w-5 h-5 inline" /> : item.label}
                </Link>
              )}
              {/* Glow effect on hover */}
              {hoveredItem === index && (
                <div className="absolute inset-0 bg-emerald-400/10 blur-xl rounded-lg -z-10" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;