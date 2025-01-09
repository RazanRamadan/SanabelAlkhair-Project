import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddDonation.css";

const AddDonation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    id,
    title,
    description,
    category,
    city,
    state,
    indigentId,
    firstName,
    lastName,
    phoneNumber,
    photo,
  } = location.state || {};

  const donationCategories = ["Medical", "Education", "Food"];
  const cities = ["New York", "Los Angeles", "Chicago"];
  const states = ["Under Processing", "Published", "Completed"];

  return (
    <div className="add-donation-container">
      <h1>Add Donation</h1>

      {/* Request Info */}
      <fieldset className="fieldset">
        <legend>Request Info</legend>
        <form className="add-donation-form">
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
              <label>Category</label>
              <select defaultValue={category}>
                {donationCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label>Sub Category</label>
              <select>
                {donationCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-description">
              <label>Description</label>
              <textarea defaultValue={description}></textarea>
            </div>
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
              <label>State</label>
              <select defaultValue={state}>
                {states.map((s, index) => (
                  <option key={index} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Photo</label>
              <div className="photo-section">
                <div className="photo-box">
                  {photo ? <img src={photo} alt="Donation" /> : <p>No photo uploaded</p>}
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
        <form className="add-donation-form">
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
        <button type="button">Add</button>
        <button type="button" onClick={() => navigate("/donations")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddDonation;
