import React from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import "./VolunteersTable.css";

const VolunteersTable = () => {
  const navigate = useNavigate(); // تفعيل useNavigate

  const data = [
    { id: 22, firstName: "test", lastName: "tset", phone: "09866", city: "test" },
  ];

  const handleShowClick = (id) => {
    // التنقل إلى /volunteer-info مع إرسال id كمعامل
    navigate(`/volunteer-info`, { state: { id } });
  };

  return (
    <div className="table-container">
      <h2>Volunteers Information</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>last name</th>
            <th>phone number</th>
            <th>city</th>
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
                {/* زر show ينقل المستخدم إلى VolunteerInfo */}
                <button
                  className="show-button"
                  onClick={() => handleShowClick(item.id)}
                >
                  show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteersTable;
