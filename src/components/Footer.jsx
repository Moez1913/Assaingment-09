import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        

    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Website Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">CareerGuidePro</h2>
          <p className="text-gray-300">
            Empowering your future with expert guidance. Explore your path with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/profile" className="hover:text-blue-400">My Profile</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/login" className="hover:text-blue-400">Login</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect with Us</h3>
          <div className="flex gap-4 mb-3">
            <a href="#" className="text-white hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-blue-600"><FaLinkedinIn /></a>
            <a href="mailto:support@careerguidepro.com" className="text-white hover:text-red-400"><FaEnvelope /></a>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CareerGuidePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;