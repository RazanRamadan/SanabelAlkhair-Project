import React from "react";
import { useNavigate } from "react-router-dom";
import "./FinancialInfo.css";

const FinancialInfo = () => {
  const navigate = useNavigate();

  const financialRecords = [
    { id: 101, title: "Donation 1", description: "Financial support for project A", kind: "Medical", city: "City A", Institution: "Pending" },
    { id: 202, title: "Donation 2", description: "Education aid for school B", kind: "Education", city: "City B", Institution: "Accepted" },
    { id: 303, title: "Donation 3", description: "Support for housing project C", kind: "Housing", city: "City C", Institution: "Rejected" },
  ];

  const handleShowClick = (record) => {
    navigate(`/frame17/EditFinanciaI`, { state: record });
  };

  const handleAddNewClick = () => {
    navigate(`/frame18/AddNewFinanciaI`);
  };

  const getStateClass = (Institution) => {
    switch (Institution) {
      case "Pending":
        return "state-pending";
      case "Accepted":
        return "state-accepted";
      case "Rejected":
        return "state-rejected";
      default:
        return "";
    }
  };

  return (
    <div className="financial-info-container">
      <h1>Financial Information</h1>
      
      {/* زر Add New مع حاوية للتحكم بموقعه */}
      <div className="add-financial-button-container">
        <button className="add-financial-button" onClick={handleAddNewClick}>
          Add New
        </button>
      </div>

      <table className="financial-table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>short description</th>
            <th>kind</th>
            <th>city</th>
            <th>Institution</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {financialRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.title}</td>
              <td>{record.description}</td>
              <td>{record.kind}</td>
              <td>{record.city}</td>
              <td className={getStateClass(record.Institution)}>{record.Institution}</td>
              <td>
                <button className="show-button" onClick={() => handleShowClick(record)}>
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

export default FinancialInfo;
