import React from "react";
import "./App.css";

const Form = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="formContent">
        <label htmlFor="firstName">First name</label>
        <input
          name="firstName"
          type="text"
          className="firstName"
          id="firstName"
          value={props.firstName}
          placeholder="Your name"
          required
          onChange={props.change}
        ></input>
      </div>
      <div className="formContent">
        <label htmlFor="lastName">Last name</label>
        <input
          name="lastName"
          type="text"
          className="lastName"
          id="lastName"
          placeholder="Your last name"
          required
          value={props.lastName}
          onChange={props.change}
        ></input>
      </div>
      <div className="formContent">
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          name="phoneNumber"
          type="tel"
          className="phoneNumber"
          id="phoneNumber"
          placeholder="Your phone number"
          value={props.phoneNumber}
          required
          onChange={props.change}
        ></input>
      </div>
      <div className="formContent">
        <label id="role">Role</label>
        <select
          name="role"
          className="role"
          id="role"
          required
          defaultValue="choice"
          onChange={props.change}
        >
          <option value="choice" disabled>
            Please select one
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="formContent">
        <label id="message">Message</label>
        <textarea
          name="message"
          className="message"
          id="message"
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
