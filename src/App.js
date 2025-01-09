import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import FinancialInfo from "./components/frame16/FinancialInfo"; // استيراد FinancialInfo
import EditFinanciaI from "./components/frame17/EditFinanciaI"; // استيراد EditFinanciaI
import AddNewFinanciaI from "./components/frame18/AddNewFinanciaI"; // استيراد AddNewFinanciaI

import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Topbar />
          <div className="main-content">
            <Routes>
              {/* المسار الافتراضي يعرض Dashboard */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* مسارات المتطوعين */}
              <Route path="/volunteers" element={<VolunteersTable />} />
              <Route path="/volunteer-info" element={<VolunteerInfo />} />

              {/* مسارات المستفيدين */}
              <Route path="/indigent" element={<IndigentsTable />} />
              <Route path="/add-indigent" element={<AddIndigents />} />
              <Route path="/edit-indigent/:id" element={<EditIndigents />} />

              {/* مسارات المؤسسات */}
              <Route path="/institutions" element={<InstitutionTable />} />
              <Route path="/add-institution" element={<AddInstitution />} />
              <Route path="/edit-institution/:id" element={<EditInstitution />} />

              {/* مسارات الطلبات */}
              <Route path="/requests" element={<RequestsInformation />} />
              <Route path="/edit-request" element={<EditRequest />} />

              {/* مسارات التبرعات */}
              <Route path="/donations" element={<DonationsInfo />} />
              <Route path="/edit-donation" element={<EditDonation />} />
              <Route path="/add-donation" element={<AddDonation />} />

              {/* مسارات المعلومات المالية */}
              <Route path="/financial" element={<FinancialInfo />} />
              <Route path="/edit-financial" element={<EditFinanciaI />} />
              <Route path="/add-financial" element={<AddNewFinanciaI />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
