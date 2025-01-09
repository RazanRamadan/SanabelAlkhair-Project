import React from "react";
import { useNavigate } from "react-router-dom";
import "./RequestsInformation.css";

const RequestsInformation = () => {
  const navigate = useNavigate();

  const requests = [
    { id: 22, title: "test", description: "test test test ..", category: "medical", city: "test", state: "Pending" },
    { id: 556, title: "test", description: "hhhhh", category: "hhhhh", city: "jiddgij", state: "Accepted" },
    { id: 777, title: "test", description: "kjkgyj", category: "bmhbb", city: "nnn", state: "Rejected" },
  ];

  const handleShowClick = (request) => {
    navigate(`/edit-request`, { state: request }); // إرسال بيانات الطلب
  };

  const getStateClass = (state) => {
    switch (state) {
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
    <div className="requests-information-container">
      <h1>Requests Information</h1>
      <table className="requests-table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>short description</th>
            <th>category</th>
            <th>city</th>
            <th>state</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.title}</td>
              <td>{request.description}</td>
              <td>{request.category}</td>
              <td>{request.city}</td>
              <td className={getStateClass(request.state)}>{request.state}</td>
              <td>
                <button className="show-button" onClick={() => handleShowClick(request)}>
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

export default RequestsInformation;
