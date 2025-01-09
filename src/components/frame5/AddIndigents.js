import React from "react";
import "./AddIndigents.css";


const AddIndigents = () => {
  return (
    <div className="add-indigents-container">
     
     
      {/* Main Content */}
      <div className="add-indigents-content">
        <h1>Add Indigents</h1>
        <form className="indigent-form">
          {/* Row 1 */}
          <div className="form-row">
            <label>id</label>
            <input type="text" placeholder="id" />
          </div>
          <div className="form-row">
            <label>first name</label>
            <input type="text" placeholder="first name" />
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <label>last name</label>
            <input type="text" placeholder="last name" />
          </div>
          <div className="form-row">
            <label>phone number</label>
            <input type="text" placeholder="phone number" />
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <label>date of birth</label>
            <input type="date" />
          </div>
          <div className="form-row">
            <label>city</label>
            <select>
              <option value="">Select</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </div>

          {/* Row 4 */}
          <div className="form-row">
            <label>Description</label>
            <textarea placeholder="description"></textarea>
          </div>
          <div className="form-row">
            <label>number of request per month</label>
            <input type="number" placeholder="enter a number" />
          </div>

          {/* Row 5 */}
          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
        </form>
        {/* Buttons */}
        <div className="form-buttons">
          <button className="add-button">Add</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddIndigents;
