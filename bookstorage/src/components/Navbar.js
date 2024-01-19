// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-semibold">
          Book App
        </NavLink>
        <div className="space-x-4">
          <NavLink to="/" className="text-white">
            Books
          </NavLink>
          <NavLink to="/add" className="text-white">
            Add Book
          </NavLink>
          <NavLink to="/search" className="text-white">
            Search
          </NavLink>
          <NavLink to="/login" className="text-white">
            Login
          </NavLink>
          <NavLink to="/register" className="text-white">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
