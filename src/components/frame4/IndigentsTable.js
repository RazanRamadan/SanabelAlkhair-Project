import React from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import "./IndigentsTable.css"; // تأكد من أن هذا الملف موجود

const IndigentsTable = () => {
  const navigate = useNavigate(); // تفعيل useNavigate

  // البيانات الخاصة بـ Indigents
  const data = [
    { id: 1, firstName: "John", lastName: "Doe", phone: "1234567890", city: "New York" },
    { id: 2, firstName: "Jane", lastName: "Smith", phone: "0987654321", city: "Los Angeles" },
    // أضف المزيد من البيانات هنا حسب الحاجة
  ];

  const handleAddNewClick = () => {
    // التنقل إلى frame5 لإضافة بيانات جديدة
    navigate(`/frame5`);
  };

  const handleEditClick = (id) => {
    // التنقل إلى frame6 مع إرسال id كمعامل
    navigate(`/frame6`, { state: { id } });
  };

  return (
    <div className="table-container">
      {/* زر Add New */}
      <div className="add-new-button-container">
        <button className="add-new-button" onClick={handleAddNewClick}>
          Add New
        </button>
      </div>

      <h2>Indigents Information</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.phone}</td>
              <td>{item.city}</td>
              <td>
                {/* زر Edit ينقل المستخدم إلى frame6 */}
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(item.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndigentsTable;
