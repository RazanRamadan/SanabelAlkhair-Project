import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./EditFinancial.css";

const EditFinancial = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    id,
    title,
    description,
    kind,
    city,
    totalAmount,
    reachedAmount,
    photo,
    indigentId,
    firstName,
    lastName,
    phoneNumber,
  } = location.state || {};

  const financialKinds = ["Medical", "Education", "Housing"];
  const cities = ["New York", "Los Angeles", "Chicago"];

  return (
    <div className="edit-financial-container">
      <h1>Edit Financial Information</h1>

      {/* Financial Info */}
      <fieldset className="fieldset">
        <legend>Financial Info</legend>
        <form className="edit-financial-form">
          <div className="form-row">
            <div className="form-field">
              <label>ID</label>
              <input type="text" defaultValue={id} disabled />
            </div>
            <div className="form-field">
              <label>Title</label>
              <input type="text" defaultValue={title} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Kind</label>
              <select defaultValue={kind}>
                {financialKinds.map((k, index) => (
                  <option key={index} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label>Description</label>
              <textarea defaultValue={description}></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>City</label>
              <select defaultValue={city}>
                {cities.map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label>Total Amount</label>
              <input type="number" defaultValue={totalAmount} />
            </div>
            <div className="form-field">
              <label>Reached Amount</label>
              <input type="number" defaultValue={reachedAmount} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Photo</label>
              <div className="photo-section">
                <div className="photo-box">
                  {photo ? <img src={photo} alt="Financial" /> : <p>No photo uploaded</p>}
                </div>
                <div className="photo-buttons">
                  <button type="button">Upload Photo</button>
                  <button type="button">Generate Photo</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </fieldset>

      {/* Indigent Info */}
      <fieldset className="fieldset">
        <legend>Indigent Info</legend>
        <form className="edit-financial-form">
          <div className="form-row">
            <div className="form-field">
              <label>ID</label>
              <input type="text" defaultValue={indigentId} />
            </div>
            <div className="form-field">
              <label>First Name</label>
              <input type="text" defaultValue={firstName} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label>Last Name</label>
              <input type="text" defaultValue={lastName} />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input type="text" defaultValue={phoneNumber} />
            </div>
          </div>
        </form>
      </fieldset>

      {/* Form Actions */}
      <div className="form-actions">
        <button type="button">Save Edits</button>
        <button type="button" onClick={() => navigate("/financial-info")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditFinancial;
