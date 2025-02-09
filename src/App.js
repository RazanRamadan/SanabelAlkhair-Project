import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// استيراد المكونات المختلفة
import Sidebar from "./components/frame1/Sidebar";
import Topbar from "./components/frame1/Topbar";
import VolunteersTable from "./components/frame1/VolunteersTable";
import VolunteerInfo from "./components/frame2/VolunteerInfo";
import Dashboard from "./components/frame3/Dashboard";
import IndigentsTable from "./components/frame4/IndigentsTable";
import AddIndigents from "./components/frame5/AddIndigents";
import EditIndigents from "./components/frame6/EditIndigents";
import InstitutionTable from "./components/frame7/InstitutionTable";
import AddInstitution from "./components/frame8/AddInstitution";
import EditInstitution from "./components/frame9/EditInstitution";
import RequestsInformation from "./components/frame11/RequestsInformation";
import EditRequest from "./components/frame12/EditRequest";
import DonationsInfo from "./components/frame13/DonationsInfo";
import EditDonation from "./components/frame14/EditDonation";
import AddDonation from "./components/frame15/AddDonation";
import FinancialInfo from "./components/frame16/FinancialInfo";
import EditFinanciaI from "./components/frame17/EditFinanciaI";
import AddNewFinanciaI from "./components/frame18/AddNewFinanciaI";
import Login from "./components/frame10/Login";

import "./App.css";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <div className="main-container">
        {isAuthenticated && <Sidebar />}
        <div className="content">
          {isAuthenticated && <Topbar />}
          <div className="main-content">
            <Routes>
              {/* واجهة تسجيل الدخول */}
              <Route path="/login" element={<Login />} />
              {/* حماية المسارات */}
              {isAuthenticated ? (
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/volunteers" element={<VolunteersTable />} />
                  <Route path="/volunteer-info" element={<VolunteerInfo />} />
                  <Route path="/indigent" element={<IndigentsTable />} />
                  <Route path="/add-indigent" element={<AddIndigents />} />
                  <Route path="/edit-indigent/:id" element={<EditIndigents />} />
                  <Route path="/institutions" element={<InstitutionTable />} />
                  <Route path="/add-institution" element={<AddInstitution />} />
                  <Route path="/edit-institution/:id" element={<EditInstitution />} />
                  <Route path="/requests" element={<RequestsInformation />} />
                  <Route path="/edit-request" element={<EditRequest />} />
                  <Route path="/donations" element={<DonationsInfo />} />
                  <Route path="/edit-donation" element={<EditDonation />} />
                  <Route path="/add-donation" element={<AddDonation />} />
                  <Route path="/financial" element={<FinancialInfo />} />
                  <Route path="/edit-financial" element={<EditFinanciaI />} />
                  <Route path="/add-financial" element={<AddNewFinanciaI />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
