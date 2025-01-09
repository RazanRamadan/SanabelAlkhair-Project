import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
      <div className="user-info">
        <span>Ola Alnabulsi</span>
      </div>
    </div>
  );
};

export default Topbar;
