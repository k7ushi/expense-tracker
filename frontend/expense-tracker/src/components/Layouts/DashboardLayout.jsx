import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "../Layouts/Navbar";
import SideMenu from "../Layouts/SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeMenu={activeMenu} />

      <div className="flex">
        {/* Desktop sidebar: visible on lg and up */}
        <aside className="hidden lg:block w-64 border-r bg-white">
          <SideMenu activeMenu={activeMenu} />
        </aside>

        {/* Main content */}
        <main className="flex-1 px-5 py-5">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
