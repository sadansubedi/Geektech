
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const getdata = useSelector((state) => state.counter.carts);

  useEffect(() => {
    function handleClickOutside(event) {
      // Close the dropdown when user clicks outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent the default behavior of NavLink
    setOpen(!open);
  };

  return (
    <nav className="bg-gray-800 p-4 h-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">My Website</div>
        <ul className="flex space-x-4" ref={dropdownRef}>
          {getdata.length > 0 ? (
            <li>
              <NavLink
                className="text-white hover:text-gray-300"
                onClick={toggleDropdown}
              >
                Addcart({getdata.length})
              </NavLink> 
              {open && <Dropdown />}
            </li>
          ) : (
            <li>
              <NavLink
                
                className="text-white hover:text-gray-300"
              >
                Emptycart
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
