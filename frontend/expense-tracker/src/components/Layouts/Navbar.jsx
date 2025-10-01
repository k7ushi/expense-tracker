import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between bg-white border-b px-4 py-3">
      {/* Left: Toggle button (mobile) */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        onClick={() => setOpenSideMenu(!openSideMenu)}
        aria-label="Toggle menu"
      >
        {openSideMenu ? (
          <HiOutlineX className="w-6 h-6 text-gray-700" />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Title (left on desktop, centered on mobile) */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Expense Tracker</h2>

      {/* Spacer to balance flex (keeps title centered on mobile) */}
      <div className="w-6 lg:w-0" />

      {/* Mobile drawer */}
      {openSideMenu && (
        <div className="fixed top-[56px] left-0 w-64 h-[calc(100vh-56px)] bg-white shadow-xl z-50 lg:hidden">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
