// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 md:mb-0">
          <p className="text-center">&copy; 2024.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.twitter.com/outroana" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/saraivanap" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
