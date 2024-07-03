import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">foodie</h2>
            <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida ullamcorper dignissim.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm">
              <li><NavLink to="/" className="text-gray-300 hover:text-white transition duration-300" activeClassName="text-red-500">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-300 hover:text-white transition duration-300" activeClassName="text-red-500">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-gray-300 hover:text-white transition duration-300" activeClassName="text-red-500">Services</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-300 hover:text-white transition duration-300" activeClassName="text-red-500">Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <ul className="text-sm">
              <li className="flex items-center mb-2"><FaMapMarkerAlt className="text-gray-400 mr-2" /> 123 Street Name, City, Country</li>
              <li className="flex items-center mb-2"><FaPhoneAlt className="text-gray-400 mr-2" /> +919596555555</li>
              <li className="flex items-center"><FaEnvelope className="text-gray-400 mr-2" /> waseem@example.com</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} foodie corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
