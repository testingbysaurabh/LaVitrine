import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { contextCall } from "../Utlity/MyContext";
import { LuSearch } from "react-icons/lu";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    orignalData,
    setOrignalData,
    data,
    setData,
    setUser,
    setPassword,
    cartData,
  } = contextCall();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const hideSearch = location.pathname === "/hextended";  

  function inputSearchHandler(e) {
    const filterData = orignalData.filter((items) =>
      items.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filterData);
  }

  function logOutInputHandler() {
    setUser("");
    setPassword("");
  }

  return (
    <header className="bg-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img
            src="https://www.svgrepo.com/show/321738/anubis.svg"
            alt="logo"
            className="h-12 w-12 rounded-tr-2xl bg-[#48A6A7] p-1"
          />
          <h1 className="text-2xl font-bold text-[#48A6A7]">LaVitrine</h1>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          {!hideSearch && (searchActive ? (
            <div className="relative flex-grow">
              <input
                type="text"
                onChange={inputSearchHandler}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg bg-[#F2EFE7] placeholder:text-gray-500 text-sm focus:outline-none shadow-sm"
                autoFocus
              />
              <button
                className="absolute right-2 top-2 text-gray-600"
                onClick={() => setSearchActive(false)}
                aria-label="Close search"
              >
                <FiX size={20} />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setSearchActive(true)}
                aria-label="Open search"
                className="text-[#48A6A7]"
              >
                <LuSearch size={24} />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="text-[#48A6A7]"
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </>
          ))}

          {/* jab search hidden, only hamburger shown karega */}
          {hideSearch && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-[#48A6A7]"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          )}
        </div>


        {/* Desktop search  hide on hextended */}
        {!hideSearch && (
          <div className="hidden md:flex items-center w-[50%] relative">
            <input
              type="text"
              onChange={inputSearchHandler}
              placeholder="Search for products, brands, and more"
              className="flex-1 px-4 py-2 rounded-lg bg-[#F2EFE7] placeholder:text-gray-500 text-sm focus:outline-none shadow-sm"
            />
            <LuSearch className="absolute right-3 text-gray-600" />
          </div>
        )}

        {/* Desktop nav links */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <NavLink
            onClick={logOutInputHandler}
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive
                  ? "text-[#48A6A7] font-bold"
                  : "text-gray-300 hover:text-[#48A6A7]"
              }`
            }
          >
            LogOut
          </NavLink>

          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive
                  ? "text-[#48A6A7] font-bold"
                  : "text-gray-300 hover:text-[#48A6A7]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive
                  ? "text-[#48A6A7] font-bold"
                  : "text-gray-300 hover:text-[#48A6A7]"
              }`
            }
          >
            Cart
            <span className="ml-1 text-xs text-[#48A6A7]">({cartData.length})</span>
          </NavLink>

          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive
                  ? "text-[#48A6A7] font-bold"
                  : "text-gray-300 hover:text-[#48A6A7]"
              }`
            }
          >
            <FaPeopleCarryBox size={20} /> About Us
          </NavLink>
        </nav>
      </div>

      {/* Mobile Dropdown menu */}
      {menuOpen && !searchActive && (
        <div className="md:hidden bg-gray-800 flex flex-col gap-4 px-6 py-4 text-sm">
          <NavLink
            onClick={() => {
              logOutInputHandler();
              setMenuOpen(false);
            }}
            to="/login"
            className="text-gray-300 hover:text-[#48A6A7]"
          >
            LogOut
          </NavLink>

          <NavLink
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-[#48A6A7]"
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-[#48A6A7]"
          >
            Cart ({cartData.length})
          </NavLink>

          <NavLink
            to="/aboutus"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-[#48A6A7]"
          >
            About Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
