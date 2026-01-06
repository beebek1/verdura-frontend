// import React from 'react'
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white w-full">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-8 py-12">
//         <div className="text-center">
//           {/* Branding */}
//           <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
//             Verdura
//           </h2>
//           <p className="text-gray-400 mb-8">
//             Track impact, grow greener, inspire change
//           </p>

//           {/* Social Media Icons */}
//           <div className="flex gap-3 justify-center">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
//               <Facebook className="w-5 h-5" />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
//               <Twitter className="w-5 h-5" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
//               <Instagram className="w-5 h-5" />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
//               <Linkedin className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-slate-700">
//         <div className="max-w-7xl mx-auto px-8 py-6 text-center">
//           <p className="text-sm text-gray-400">
//             © 2025 Impact Teams, Inc. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer






















import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Verdu from '../assets/verdu.png';

const Footer = ({ role = 'individual' }) => {
  const [email, setEmail] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscribe logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerLinks = {
    organization: {
      platform: [
        { label: 'Dashboard', href: '#dashboard' },
        { label: 'Create Campaign', href: '#create' },
        { label: 'Analytics', href: '#analytics' },
        { label: 'Resources', href: '#resources' }
      ],
      company: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Mission', href: '#mission' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#careers' }
      ]
    },
    individual: {
      platform: [
        { label: 'Dashboard', to: '/inddashboard' },
        { label: 'Campaigns', to: '/joincampaign' },
        { label: 'My Impact', to: '/my-impact' },
        { label: 'Blog', to: '/blog' }
      ],
      company: [
        { label: 'About Us', to: '/about' },
        { label: 'How It Works', to: '/how-it-works' },
        { label: 'Contact', to: '/contact' },
        { label: 'FAQs', to: '/faq' }
      ]
    }
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#', color: 'from-blue-400 to-blue-600' },
    { name: 'LinkedIn', icon: 'in', url: '#', color: 'from-blue-500 to-blue-700' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'from-pink-500 to-purple-600' },
    { name: 'Facebook', icon: 'f', url: '#', color: 'from-blue-600 to-indigo-700' }
  ];

  const links = footerLinks[role] || footerLinks.individual;

  return (
    <footer className="relative bg-gradient-to-br from-[#1a2332] via-[#29313D] to-[#1e2633] text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 animate-pulse" />
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400" />

      <div className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <img 
              src={Verdu} 
              alt="Verdu Logo" 
              className="w-44 h-16 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Empowering change through collective action. Join us in making a real impact on the causes that matter.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="relative w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                  {hoveredSocial === index && (
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.color} opacity-20 blur-lg`} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
              Platform
            </h3>
            <ul className="space-y-3">
              {links.platform.map((link, index) => (
                <li key={index}>
                  {role === 'organization' ? (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.to}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
              Company
            </h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  {role === 'organization' ? (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.to}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Subscribe to our newsletter for the latest updates and impact stories.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} Verdu. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;