import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center">
          {/* Branding */}
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Verdura
          </h2>
          <p className="text-gray-400 mb-8">
            Track impact, grow greener, inspire change
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-3 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-8 py-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Impact Teams, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer