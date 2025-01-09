import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditInstitution.css";

const EditInstitution = () => {
  const { id } = useParams(); // الحصول على id من الرابط
  const [institution, setInstitution] = useState({
    name: "",
    phone: "",
    kind: "",
    city: "",
  });

  const navigate = useNavigate();

  // تحميل بيانات المؤسسة بناءً على id (هنا يتم استخدام بيانات وهمية)
  useEffect(() => {
    // في حالة وجود API حقيقية يمكنك جلب بيانات المؤسسة باستخدام الـ id
    // سنستخدم بيانات تجريبية هنا
    setInstitution({
      name: "Institution A",
      phone: "123-456-789",
      kind: "Charity",
      city: "City 1",
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstitution((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Institution:", institution);
    navigate("/institutions"); // العودة إلى قائمة المؤسسات بعد التعديل
  };

  return (
    <div className="edit-institution-container">
      <h2>Edit Institution</h2>
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
        
        <button type="submit" className="submit-button">Update Institution</button>
      </form>
    </div>
  );
};

export default EditInstitution;
