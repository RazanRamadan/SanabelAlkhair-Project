import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isUsersOpen, setIsUsersOpen] = useState(false);

  const toggleUsersMenu = () => {
    setIsUsersOpen(!isUsersOpen);
  };

  const handleLogout = () => {
    // تنفيذ تسجيل الخروج
    console.log("Logged out");
  };

  return (
    <div className="sidebar">
      <h2 className="logo">Sanabel Alkhair</h2>
      <ul className="menu">
        {/* Dashboard */}
        <li>
          <button className="menu-button">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Dashboard
            </NavLink>
          </button>
        </li>

        {/* Users with Submenu */}
        <li>
          <button
            className="menu-button"
            onClick={toggleUsersMenu}
            aria-expanded={isUsersOpen}
          >
            Users
          </button>
          {isUsersOpen && (
            <ul className="submenu-items">
              <li>
                <button className="submenu-button">
                  <NavLink
                    to="/volunteers"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Volunteers
                  </NavLink>
                </button>
              </li>
              <li>
                <button className="submenu-button">
                  <NavLink
                    to="/indigent"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Indigents
                  </NavLink>
                </button>
              </li>
              <li>
                <button className="submenu-button">
                  <NavLink
                    to="/institutions"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Institutions
                  </NavLink>
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* Requests */}
        <li>
          <button className="menu-button">
            <NavLink
              to="/requests"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Requests
            </NavLink>
          </button>
        </li>

        {/* Donations */}
        <li>
          <button className="menu-button">
            <NavLink
              to="/donations"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Donations
            </NavLink>
          </button>
        </li>

        {/* Financial */}
        <li>
          <button className="menu-button">
            <NavLink
              to="/financial"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Financial
            </NavLink>
          </button>
        </li>
      </ul>

      {/* Logout */}
      <div className="logout">
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
