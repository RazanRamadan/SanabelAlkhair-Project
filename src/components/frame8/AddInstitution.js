import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddInstitution.css";

const AddInstitution = () => {
  const [institution, setInstitution] = useState({
    name: "",
    phone: "",
    kind: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstitution((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال البيانات إلى الخادم أو حفظها في حالة محلية
    console.log("New Institution Added:", institution);
    navigate("/institutions"); // بعد الإضافة، ارجع إلى صفحة المؤسسات
  };

  return (
    <div className="add-institution-container">
      <h2>Add New Institution</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={institution.name}
          onChange={handleInputChange}
          required
        />
        
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={institution.phone}
          onChange={handleInputChange}
          required
        />
        
        <label htmlFor="kind">Kind</label>
        <input
          type="text"
          id="kind"
          name="kind"
          value={institution.kind}
          onChange={handleInputChange}
          required
        />
        
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={institution.city}
          onChange={handleInputChange}
          required
        />
        
        <button type="submit" className="submit-button">Add Institution</button>
      </form>
    </div>
  );
};

export default AddInstitution;
