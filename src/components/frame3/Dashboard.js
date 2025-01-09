import React, { useState } from "react";
import "./Dashboard.css";
import {
  FaTachometerAlt,
  FaDonate,
  FaUser,
  FaCheckCircle,
  FaTimesCircle,
  FaBell,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [showDonationMenu, setShowDonationMenu] = useState(false);

  const toggleDonationMenu = () => {
    setShowDonationMenu(!showDonationMenu);
  };

  // بيانات الرسوم البيانية
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Requests",
        data: [20, 30, 50, 80, 130, 160, 200, 220, 250, 270, 290, 310],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ["Medical Device", "Clothes", "Home Furniture", "Medication"],
    datasets: [
      {
        data: [38.6, 27.3, 20.5, 13.6],
        backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB", "#9C27B0"],
      },
    ],
  };

  return (
    <div className="dashboard-container">

      {/* Main Content */}
      <div className="main-content">
      
        {/* Welcome Text */}
        <h1 className="welcome-text">
          Welcome back, <span className="highlighted-name">Ola Alnabusi</span>
        </h1>

        {/* Stats Cards */}
        <div className="stats-cards">
          <div className="card donations">
            <FaDonate />
            <h3>Total Donations</h3>
            <p>1.224</p>
            <span>+12% +200 this week</span>
          </div>
          <div className="card visitors">
            <h3>Visitors</h3>
            <p>6.589</p>
            <span>+18% +900 this week</span>
          </div>
          <div className="card users">
            <h3>Total Users</h3>
            <p>5.483</p>
            <span>+22% +700 this week</span>
          </div>
          <div className="card requests">
            <h3>Total Requests</h3>
            <p>2.324</p>
            <span>+25% +500 this week</span>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-container">
          <div className="chart requests-chart">
            <h3>Number of Request per month</h3>
            <Line data={lineChartData} />
          </div>
          <div className="chart donations-chart">
            <h3>Donations by Category</h3>
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
