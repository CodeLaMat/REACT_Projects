import React from "react";
import "./App.css";

const Form = ({
  submitHandler,
  firstname,
  lastname,
  phone,
  role,
  message,
  change,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="formContent">
        <label htmlFor="firstname">First name</label>
        <input
          name="firstname"
          type="text"
          className="firstname"
          id="firstname"
          value={firstname}
          placeholder="Your name"
          required
          onChange={change}
        ></input>
      </div>
      <div className="formContent">
        <label htmlFor="lastname">Last name</label>
        <input
          name="lastname"
          type="text"
          className="lastname"
          id="lastname"
          placeholder="Your last name"
          required
          value={lastname}
          onChange={change}
        ></input>
      </div>
      <div className="formContent">
        <label htmlFor="phone">Phone number</label>
        <input
          name="phone"
          type="tel"
          className="phone"
          id="phone"
          placeholder="Your phone number"
          value={phone}
          required
          onChange={change}
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
          onChange={change}
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
          onChange={change}
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
