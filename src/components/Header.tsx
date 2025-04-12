
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-rentol-blue text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 234 567 8901</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@rentolcars.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm hover:text-rentol-orange transition-colors">Sign In</Link>
            <Link to="/register" className="text-sm hover:text-rentol-orange transition-colors">Register</Link>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-rentol-blue">
            Rentol<span className="text-rentol-orange">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors">Home</Link>
            <Link to="/about" className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors">About</Link>
            <Link to="/cars" className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors">Cars</Link>
            <Link to="/services" className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors">Services</Link>
            <Link to="/contact" className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-rentol-orange hover:bg-rentol-orange/90 text-white">
              Book Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-rentol-blue p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/cars" 
              className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cars
            </Link>
            <Link 
              to="/services" 
              className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-rentol-blue hover:text-rentol-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-rentol-orange hover:bg-rentol-orange/90 text-white w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
