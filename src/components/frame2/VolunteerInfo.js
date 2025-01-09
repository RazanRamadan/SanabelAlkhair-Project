import React from "react";
import { useLocation } from "react-router-dom"; // استيراد useLocation
import "./VolunteerInfo.css";

const VolunteerInfo = () => {
  const location = useLocation(); // الوصول إلى البيانات المرسلة
  const { id, firstName, lastName, phone, city } = location.state || {}; // استخراج البيانات أو عرض القيم الافتراضية

  return (
    <div className="volunteer-info-container">
     

      {/* Content */}
      <div className="volunteer-content">
        <h1>Volunteer Info</h1>
        <div className="info-form">
          <div className="form-row">
            <label>id</label>
            <input type="text" defaultValue={id || "No ID"} />
          </div>
          <div className="form-row">
            <label>first name</label>
            <input type="text" defaultValue={firstName || "No First Name"} />
          </div>
          <div className="form-row">
            <label>last name</label>
            <input type="text" defaultValue={lastName || "No Last Name"} />
          </div>
          <div className="form-row">
            <label>phone number</label>
            <input type="text" defaultValue={phone || "No Phone Number"} />
          </div>
          <div className="form-row">
            <label>date of birth</label>
            <input type="text" defaultValue="11/9/1999" />
          </div>
          <div className="form-row">
            <label>city</label>
            <input type="text" defaultValue={city || "No City"} />
          </div>
          <div className="form-row">
            <label>profile pic</label>
            <div className="profile-pic"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerInfo;
