/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdown, setDropdown] = useState({
    home: false,
    about: false,
    contact: false,
  });
  const dropdownRefs = {
    home: useRef(),
    about: useRef(),
    contact: useRef(),
  };

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if any of the dropdown menus are clicked outside
      Object.keys(dropdownRefs).forEach((menu) => {
        if (
          dropdown[menu] &&
          dropdownRefs[menu].current &&
          !dropdownRefs[menu].current.contains(event.target)
        ) {
          setDropdown((prev) => ({ ...prev, [menu]: false }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown, dropdownRefs]);

  return (
    <nav className="bg-white text-gray-500 py-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-black">Winexchange</div>
        <ul className="flex space-x-8">
          {/* Home Menu */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("home")}
              className="font-bold py-2 px-4 hover:bg-gray-200 rounded"
            >
              Online Casino
            </button>
            {dropdown.home && (
              <div
                ref={dropdownRefs.home}
                className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
              >
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Sky247
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Bet barter
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Bluechip
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  CricketBook
                </Link>
              </div>
            )}
          </li>

          {/* About Menu */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="font-bold py-2 px-4 hover:bg-gray-200 rounded"
            >
              Online Betting
            </button>
            {dropdown.about && (
              <div
                ref={dropdownRefs.about}
                className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
              >
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Betting Exchange sites
                </Link>
                <Link
                  href="/about/team"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Cricket Betting sites
                </Link>
              </div>
            )}
          </li>

          {/* Contact Menu */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("contact")}
              className="font-bold py-2 px-4 hover:bg-gray-200 rounded"
            >
              Contact
            </button>
            {dropdown.contact && (
              <div
                ref={dropdownRefs.contact}
                className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
              >
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Contact Form
                </Link>
                <Link
                  href="/contact/email"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Email Us
                </Link>
                <Link
                  href="/contact/support"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Support
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
