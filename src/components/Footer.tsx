
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rentol-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Rentol<span className="text-rentol-orange">.</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Providing quality car rental services since 2010. Your trusted partner for all transportation needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rentol-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rentol-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rentol-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rentol-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-rentol-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-300 hover:text-rentol-orange transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-rentol-orange transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-rentol-orange transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-rentol-orange transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Working Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-white">10:00 AM - 4:00 PM</span>
              </li>
              <li className="mt-4">
                <span className="text-rentol-orange">* Holiday hours may vary</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-rentol-orange shrink-0 mt-1" />
                <span className="text-gray-300">123 Rental Street, New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-rentol-orange" />
                <span className="text-gray-300">+1 234 567 8901</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-rentol-orange" />
                <span className="text-gray-300">info@rentolcars.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rentol Car Rental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
