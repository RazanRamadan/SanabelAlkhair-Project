import React from "react";
import { useNavigate } from "react-router-dom";
import "./DonationsInfo.css";

const DonationsInfo = () => {
  const navigate = useNavigate();

  const donations = [
    { id: 1, title: "Donation 1", description: "Description for donation 1", category: "Medical Aid", city: "City A", state: "under processing" },
    { id: 2, title: "Donation 2", description: "Description for donation 2", category: "Clothes", city: "City B", state: "Published" },
    { id: 3, title: "Donation 3", description: "Description for donation 3", category: "Furniture", city: "City C", state: "completed" },
  ];

  const handleShowClick = (donation) => {
    // توجيه المستخدم إلى صفحة تعديل التبرع (EditDonation)
    navigate(`/edit-donation`, { state: donation });
  };

  const handleAddDonationClick = () => {
    // توجيه المستخدم إلى صفحة إضافة التبرع (AddDonation)
    navigate(`/add-donation`);
  };

  const getStateClass = (state) => {
    switch (state) {
      case "under processing":
        return "state-under-processing";
      case "Published":
        return "state-published";
      case "completed":
        return "state-completed";
      default:
        return "";
    }
  };

  return (
    <div className="donations-info-container">
      <h1>Donations Information</h1>
      <div className="add-donation-button-container">
        <button className="add-donation-button" onClick={handleAddDonationClick}>
          Add Donation
        </button>
      </div>
      <table className="donations-table">
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
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.id}</td>
              <td>{donation.title}</td>
              <td>{donation.description}</td>
              <td>{donation.category}</td>
              <td>{donation.city}</td>
              <td className={getStateClass(donation.state)}>{donation.state}</td>
              <td>
                <button className="show-button" onClick={() => handleShowClick(donation)}>
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

export default DonationsInfo;
