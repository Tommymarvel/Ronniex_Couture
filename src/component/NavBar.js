import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = () => (
  <header className="bg-bg_primary">
    <nav className="lg:ml-20 md:ml-10 sm:ml-10 xsm:ml-5 p-4 flex justify-between bg-bg_primary">
      <div className="flex items-center">
        <h2 className="flex lg:flex-1 logo font-semibold ">RC</h2>
        <ul className="hidden sm:flex flex-row justify-start">
          <li className="mr-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="/About us" activeclassname="font-bold">
              About us
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="/Shopping" activeclassname="font-bold">
              Shopping
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="/Contact" activeclassname="font-bold">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button className="sm:hidden mr-4" type="button">
          <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
            <path
              fillRule="evenodd"
              d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM1 9a1 1 0 011-1h14a1 1 0 110 2H2a1 1 0 01-1-1zM3 14a1 1 0 100 2h14a1 1 0 100-2H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul className="hidden sm:flex flex-row justify-start">
          <li className="mr-4">
            <NavLink to="/SignUp" activeclassname="font-bold">
              Sign up
            </NavLink>
          </li>
          <li
            className="border-black border-solid hover:border-dotted rounded-lg px-1"
            style={{ borderWidth: '1px' }}
          >
            <NavLink to="/LogIn" activeclassname="font-bold">
              Log in
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
