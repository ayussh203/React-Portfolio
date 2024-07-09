import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Ay.png'; // Ensure the path to the logo is correct

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py--6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 "src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;