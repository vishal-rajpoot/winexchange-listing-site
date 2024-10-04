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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state

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

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close mobile menu when clicking on a link
  };

  return (
    <nav className="bg-white text-gray-500 py-4 shadow-2xl">
      <div className="container mx-auto flex justify-around items-center">
        <div className="font-bold text-xl text-black">Winexchange</div>

        {/* Hamburger icon for mobile */}
        <button
          className="text-black md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          {/* Home Menu */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("home")}
              className="font-bold py-2 px-4 hover:bg-gray-100 rounded"
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
                  onClick={handleLinkClick}
                >
                  Sky247
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Bet Barter
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Bluechip
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleLinkClick}
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
              className="font-bold py-2 px-4 hover:bg-gray-100 rounded"
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
                  onClick={handleLinkClick}
                >
                  Betting Exchange sites
                </Link>
                <Link
                  href="/about/team"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleLinkClick}
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
              className="font-bold py-2 px-4 hover:bg-gray-100 rounded"
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
                  onClick={handleLinkClick}
                >
                  Contact Form
                </Link>
                <Link
                  href="/contact/email"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Email Us
                </Link>
                <Link
                  href="/contact/support"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Support
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4">
            {/* Home Links with Children */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("home")}
                className="block w-full text-left font-bold py-2 px-4 hover:bg-gray-100 rounded"
              >
                Online Casino
              </button>
              {dropdown.home && (
                <div
                  ref={dropdownRefs.home}
                  className="py-2 w-full bg-white rounded-lg shadow-lg"
                >
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Sky247
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Bet Barter
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Bluechip
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    CricketBook
                  </Link>
                </div>
              )}
            </li>

            {/* About Links with Children */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="block w-full text-left font-bold py-2 px-4 hover:bg-gray-100 rounded"
              >
                Online Betting
              </button>
              {dropdown.about && (
                <div
                  ref={dropdownRefs.about}
                  className="py-2 w-full bg-white rounded-lg shadow-lg"
                >
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Betting Exchange sites
                  </Link>
                  <Link
                    href="/about/team"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Cricket Betting sites
                  </Link>
                </div>
              )}
            </li>

            {/* Contact Links */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("contact")}
                className="block w-full text-left font-bold py-2 px-4 hover:bg-gray-100 rounded"
              >
                Contact
              </button>
              {dropdown.contact && (
                <div
                  ref={dropdownRefs.contact}
                  className="py-2 w-full bg-white rounded-lg shadow-lg"
                >
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Contact Form
                  </Link>
                  <Link
                    href="/contact/email"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Email Us
                  </Link>
                  <Link
                    href="/contact/support"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Support
                  </Link>
                </div>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
