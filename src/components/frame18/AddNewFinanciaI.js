import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewFinancial.css";

const AddNewFinancial = () => {
  const navigate = useNavigate();

  const financialKinds = ["Medical", "Education", "Housing"];
  const cities = ["City A", "City B", "City C"];

  return (
    <div className="add-financial-container">
      <h1>Add Financial Record</h1>

      {/* Financial Info */}
      <fieldset className="fieldset">
        <legend>Financial Info</legend>
        <form className="add-financial-form">
          <div className="form-row">
            <div className="form-field">
              <label>ID</label>
              <input type="text" placeholder="Enter ID" />
            </div>
            <div className="form-field">
              <label>Title</label>
              <input type="text" placeholder="Enter Title" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Kind</label>
              <select>
                {financialKinds.map((kind, index) => (
                  <option key={index} value={kind}>
                    {kind}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label>City</label>
              <select>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-description">
              <label>Description</label>
              <textarea placeholder="Enter Description"></textarea>
            </div>
            <div className="form-field">
              <label>Total Amount</label>
              <input type="number" placeholder="Enter Total Amount" />
            </div>
            <div className="form-field">
              <label>Reached Amount</label>
              <input type="number" placeholder="Enter Reached Amount" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Photo</label>
              <div className="photo-section">
                <div className="photo-box">
                  <p>No photo uploaded</p>
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

      {/* Form Actions */}
      <div className="form-actions">
        <button type="button">Add Record</button>
        <button type="button" onClick={() => navigate("/financial-info")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNewFinancial;
