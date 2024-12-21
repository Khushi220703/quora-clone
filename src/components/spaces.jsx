import React, { useState } from 'react';

const Spaces = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar for large screens */}
      <div className="w-64 bg-white sticky top-0 h-screen p-4 mt-8 hidden md:block">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="bg-gray-200 text-black px-4 py-2 hover:bg-gray-100 w-full">
            + Create Space
          </button>
        </div>

        {/* Space List */}
        <ul className="space-y-4 text-lg">
          <li className="hover:bg-gray-100 p-2 rounded-md">
            <a href="#" className="text-gray-800">Music</a>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-md">
            <a href="#" className="text-gray-800">Entertainment</a>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-md">
            <a href="#" className="text-gray-800">Study</a>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-md">
            <a href="#" className="text-gray-800">Games</a>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-md">
            <a href="#" className="text-gray-800">Movies</a>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-md">
            <a href="#" className="text-gray-800">Books</a>
          </li>
        </ul>
      </div>

      {/* Dropdown for small screens */}
      <div className="md:hidden w-full">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="bg-gray-200 text-black px-4 py-2 hover:bg-gray-100 w-full mt-8"
        >
          {isDropdownOpen ? 'Hide Spaces' : 'Show Spaces'}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="space-y-4 text-lg mt-4">
            <li className="hover:bg-gray-100 p-2 rounded-md">
              <a href="#" className="text-gray-800">Music</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              <a href="#" className="text-gray-800">Entertainment</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              <a href="#" className="text-gray-800">Study</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              <a href="#" className="text-gray-800">Games</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              <a href="#" className="text-gray-800">Movies</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              <a href="#" className="text-gray-800">Books</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Spaces;
