import React, { useState } from 'react';
import { FaHome, FaBell } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi';
import { IoPeopleSharp } from 'react-icons/io5';
import { GrNotes } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Post from './post';

const Navbar = ({ isModalOpen, toggleModal }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Home');

  const handleHamburgerClick = (option) => {
    setSelectedOption(option);
    setIsHamburgerOpen(false); // Close the hamburger menu after selecting an option
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      {/* Navbar */}
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-4xl font-semibold text-red-600">
            Quora
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-14 text-lg text-gray-700">
          <li>
            <Link to="/" className="hover:text-red-600" title="Home">
              <FaHome size={24} />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-red-600" title="Following">
              <GrNotes size={24} />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-red-600" title="Answer">
              <HiPencilAlt size={28} />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-red-600" title="Spaces">
              <IoPeopleSharp size={24} />
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="hover:text-red-600" title="Notifications">
              <FaBell size={24} />
            </Link>
          </li>
        </ul>

        {/* Search Input */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
            className="w-80 p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Profile and Add Question */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl">
              K
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={toggleModal}
            >
              Add Question
            </button>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden relative">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isHamburgerOpen && (
            <div className="absolute right-0 top-10 bg-white border rounded-md shadow-lg w-48">
              <ul className="text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleHamburgerClick('Home')}
                >
                 <Link to="/" className="hover:text-red-600">Home</Link>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleHamburgerClick('Following')}
                >
                  <Link to="/" className="hover:text-red-600">Following</Link>
                 
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleHamburgerClick('Answer')}
                >
                  <Link to="/" className="hover:text-red-600">Answer</Link>
                  
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleHamburgerClick('Spaces')}
                >
                  <Link to="/" className="hover:text-red-600">Spaces</Link>
                  
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleHamburgerClick('Notifications')}
                >
                   <Link to="/notifications" className="hover:text-red-600">Notifications</Link>
                  
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      

      {/* Modal for Add Question */}
      <Post isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Navbar;
