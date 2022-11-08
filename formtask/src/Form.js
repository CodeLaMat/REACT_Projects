import React from "react";
import "./App.css";

const Form = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="formContent">
        <label>First name</label>
        <input
          name="firstName"
          type="text"
          className="firstName"
          placeholder="Your name"
          required
          onChange={props.change}
        ></input>
      </div>
      <div className="formContent">
        <label>Last name</label>
        <input
          name="lastName"
          type="text"
          className="lastName"
          placeholder="Your last name"
          required
          onChange={props.change}
        ></input>
      </div>
      <div className="formContent">
        <label>Phone number</label>
        <input
          name="phoneNumber"
          type="phone"
          className="phoneNumber"
          placeholder="Your phone number"
          required
          onChange={props.change}
        ></input>
      </div>
      <div className="formContent">
        <label>Role</label>
        <select name="role" className="role" required onChange={props.change}>
          <option disabled selected="selected">
            Please select one
          </option>
          <option>Teacher</option>
          <option>Student</option>
          <option>Else</option>
        </select>
      </div>
      <div className="formContent">
        <label>Message</label>
        <textarea
          name="message"
          type="text"
          className="message"
          placeholder="Write something..."
          onChange={props.change}
        ></textarea>
      </div>
      <div>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
