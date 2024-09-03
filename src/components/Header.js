import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-300 p-4">
      <div className="container mx-auto flex justify-center items-center relative">
        <nav className="flex space-x-4">
          <Link to="/" className="text-white text-lg hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/albums" className="text-white text-lg hover:text-gray-200 transition duration-300">Álbuns</Link>
          <Link to="/photocards" className="text-white text-lg hover:text-gray-200 transition duration-300">Photocards</Link>
          <Link to="/profile" className="text-white text-lg hover:text-gray-200 transition duration-300">Perfil</Link>
        </nav>
        <div className="absolute right-4">
          <Link to="/login" className="text-white text-lg hover:text-gray-200 transition duration-300">
            <FaRegUserCircle size={35} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
