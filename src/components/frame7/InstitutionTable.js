import React from "react";
import { Link } from "react-router-dom";
import "./InstitutionTable.css";

const InstitutionTable = () => {
  // بيانات تجريبية للعرض في الجدول
  const institutions = [
    { id: 1, name: "Institution A", phone: "123-456-789", kind: "Charity", city: "City 1" },
    { id: 2, name: "Institution B", phone: "987-654-321", kind: "Non-Profit", city: "City 2" },
    { id: 3, name: "Institution C", phone: "555-666-777", kind: "Foundation", city: "City 3" },
  ];

  return (
    <div className="institution-table-container">
      {/* زر Add New */}
      <div className="table-header">
        <h2>Institutions</h2>
        <Link to="/add-institution" className="add-new-button">
          Add New
        </Link>
      </div>

      {/* جدول البيانات */}
      <table className="institution-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Kind</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {institutions.map((institution) => (
            <tr key={institution.id}>
              <td>{institution.id}</td>
              <td>{institution.name}</td>
              <td>{institution.phone}</td>
              <td>{institution.kind}</td>
              <td>{institution.city}</td>
              <td>
                <Link to={`/edit-institution/${institution.id}`} className="edit-button">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstitutionTable;
