import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-200 shadow-md sticky top-0 z-50">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* HAMBURGER MENU BUTTON (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* NAV LINKS */}
          <div
            className={`lg:flex lg:w-auto lg:order-1 w-full transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 mt-4 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 rounded-md ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-700 hover:bg-orange-50 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 rounded-md ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-700 hover:bg-orange-50 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 rounded-md ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-700 hover:bg-orange-50 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 rounded-md ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-700 hover:bg-orange-50 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          {/* LOGIN & SIGNUP BUTTONS */}
          <div className="flex items-center lg:order-2 mt-4 lg:mt-0">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 transition duration-300"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
