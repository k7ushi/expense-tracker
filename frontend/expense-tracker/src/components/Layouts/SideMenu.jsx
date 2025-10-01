import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";

const SideMenu = ({ activeMenu }) => {
  const { clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <aside className="h-[calc(100vh-56px)] lg:h-[calc(100vh-64px)] w-64 bg-white p-4 border-r">
      <ul className="space-y-2">
        {SIDE_MENU_DATA.map((item) => {
          const isLogout = item.path === "/logout";
          return isLogout ? (
            <li key={item.id}>
              <button
                onClick={handleLogout}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left 
                  hover:bg-gray-100 text-gray-700`}
              >
                <item.icon className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </li>
          ) : (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 p-3 rounded-xl transition",
                    (isActive || activeMenu === item.label)
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100",
                  ].join(" ")
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideMenu;
