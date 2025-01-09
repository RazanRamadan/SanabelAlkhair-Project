import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // استيراد useNavigate و useLocation
import "./EditIndigents.css";

const EditIndigents = () => {
  const navigate = useNavigate(); // تفعيل useNavigate
  const location = useLocation(); // الحصول على البيانات المرسلة عبر التنقل
  const { id } = location.state || {}; // استلام id من state (إذا كان موجوداً)

  // بيانات نموذجية لتعديلها (هذه البيانات يجب أن تأتي من API أو من مصدر بيانات حقيقي)
  const [indigent, setIndigent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    dateOfBirth: "",
    city: "",
    description: "",
    requestPerMonth: "",
    password: "",
  });

  useEffect(() => {
    // من المفترض هنا أن نحصل على البيانات من API بناءً على id، لكن هنا نضع بيانات افتراضية
    if (id) {
      setIndigent({
        id: id,
        firstName: "John", // مثال
        lastName: "Doe", // مثال
        phone: "1234567890", // مثال
        dateOfBirth: "1990-01-01", // مثال
        city: "New York", // مثال
        description: "Some description here", // مثال
        requestPerMonth: 3, // مثال
        password: "password123", // مثال
      });
    }
  }, [id]);

  // دالة حفظ التعديلات
  const handleSaveClick = () => {
    // هنا يمكنك إضافة كود API لحفظ التعديلات
    console.log("Updated data:", indigent);
    navigate("/indigent"); // العودة إلى صفحة الجدول بعد حفظ التعديلات
  };

  // دالة العودة
  const handleCancelClick = () => {
    navigate("/indigent"); // العودة إلى صفحة الجدول
  };

  // تحديث الحقول بناءً على التغييرات
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIndigent({ ...indigent, [name]: value });
  };

  return (
    <div className="edit-indigents-container">
      <h1>Edit Indigent</h1>
      <form className="indigent-form">
        {/* حقل id */}
        <div className="form-row">
          <label>id</label>
          <input
            type="text"
            name="id"
            value={indigent.id}
            disabled
            placeholder="id"
          />
        </div>

        {/* الحقول الأخرى */}
        <div className="form-row">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={indigent.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>

        <div className="form-row">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={indigent.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>

        <div className="form-row">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={indigent.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>

        <div className="form-row">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={indigent.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>City</label>
          <select
            name="city"
            value={indigent.city}
            onChange={handleChange}
          >
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            {/* أضف مدن إضافية هنا */}
          </select>
        </div>

        <div className="form-row">
          <label>Description</label>
          <textarea
            name="description"
            value={indigent.description}
            onChange={handleChange}
            placeholder="Description"
          ></textarea>
        </div>

        <div className="form-row">
          <label>Requests per Month</label>
          <input
            type="number"
            name="requestPerMonth"
            value={indigent.requestPerMonth}
            onChange={handleChange}
            placeholder="Enter a number"
          />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={indigent.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
      </form>

      <div className="form-buttons">
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="cancel-button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditIndigents;
