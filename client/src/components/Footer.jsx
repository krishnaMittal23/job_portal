import React from 'react';
import { 
  Mail, 
  Phone,
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Briefcase
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left - Company Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">JobPortal</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-sm text-gray-600">
              <span>Connect talent with opportunities</span>
            </div>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Browse Jobs</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Post Jobs</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Resume Builder</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Career Tips</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Right - Social & Legal */}
          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a href="#" className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            © {currentYear} JobPortal. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}