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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const closeAllDropdowns = () => {
    setDropdown({ home: false, about: false, contact: false });
  };

  const handleClickOutside = (event) => {
    // Close mobile menu if clicked outside
    if (!event.target.closest(".navbar") && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      closeAllDropdowns();
    }

    // Check if any dropdowns should be closed when clicking outside
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown, dropdownRefs, isMobileMenuOpen]);

  return (
    <nav className="bg-white text-gray-500 py-4 shadow-2xl navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-black">Winexchange</div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block space-y-2 md:space-y-0 md:space-x-8 absolute md:relative bg-white w-full md:w-auto z-10`}
        >
          {/* Home Menu */}
          <li className="relative">
            <button
              onClick={() => {
                toggleDropdown("home");
                setIsMobileMenuOpen(true); // Keep mobile menu open when clicking
              }}
              className="font-bold py-2 px-4 hover:bg-gray-200 rounded w-full text-left"
            >
              Online Casino
            </button>
            {dropdown.home && (
              <div
                ref={dropdownRefs.home}
                className="mt-2 py-2 w-full bg-white rounded-lg shadow-lg"
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
              onClick={() => {
                toggleDropdown("about");
                setIsMobileMenuOpen(true); // Keep mobile menu open when clicking
              }}
              className="font-bold py-2 px-4 hover:bg-gray-200 rounded w-full text-left"
            >
              Online Betting
            </button>
            {dropdown.about && (
              <div
                ref={dropdownRefs.about}
                className="mt-2 py-2 w-full bg-white rounded-lg shadow-lg"
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
              onClick={() => {
                toggleDropdown("contact");
                setIsMobileMenuOpen(true); // Keep mobile menu open when clicking
              }}
              className="font-bold py-2 px-4 hover:bg-gray-200 rounded w-full text-left"
            >
              Contact
            </button>
            {dropdown.contact && (
              <div
                ref={dropdownRefs.contact}
                className="mt-2 py-2 w-full bg-white rounded-lg shadow-lg"
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
