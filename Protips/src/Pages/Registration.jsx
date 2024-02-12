
import { useState } from "react";
import '../App.css'

export default function Registration() {
  const [Validation, setValidation] = useState(false);
  const [Submit, setSubmit] = useState(false);

  const [Field, setField] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Number: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (Field.firstName && Field.lastName && Field.Email && Field.Number) {
      setValidation(true);
    }
    setSubmit(true);
  }

  return (
    <section className="formContainer">
      <form className="useForm" onSubmit={(e) => handleSubmit(e)}>
        {Submit && Validation ? (
          <div className="Success-message">Registration Successful</div>
        ) : null}
        <label htmlFor="Name">
          <strong>First Name </strong>
        </label>
        <br />
        <input
          type="text"
          id="Name"
          placeholder="Enter your name"
          onChange={(e) => {
            setField({ ...Field, firstName: e.target.value });
          }}
          value={Field.firstName}
        />
        {Submit && !Field.firstName ? (
          <div className="errorMessage">Please Enter your first Name</div>
        ) : null}
        <br />
        <label htmlFor="Name1">
          <strong>Last Name</strong>
        </label>
        <br />
        <input
          type="text"
          id="Name1"
          placeholder="Enter your last name"
          onChange={(e) => {
            setField({ ...Field, lastName: e.target.value });
          }}
        />
        {Submit && !Field.lastName ? (
          <div className="errorMessage">Please Enter your last Name</div>
        ) : null}
        <br />
        <label htmlFor="Name2">
          <strong>Email</strong>
        </label>
        <br />
        <input
          type="email"
          id="Email"
          placeholder="Enter your email"
          onChange={(e) => {
            setField({ ...Field, Email: e.target.value });
          }}
        />
        {Submit && !Field.Email ? (
          <div className="errorMessage">Please Enter your email</div>
        ) : null}
        <br />
        <label htmlFor="Name3">
          <strong>Phone Number</strong>
           </label>
        <br/>
        <input
          type="text"
          id="PhoneNumber"
          placeholder="Enter your phone number"
          onChange={(e) => {
            const phoneNumber = e.target.value;
            setField({ ...Field, Number: phoneNumber });
            if (Submit && phoneNumber.length !== 10) {
              setValidation(false);
            }
          }}
        />
        {Submit && !Field.Number ? (
          <div className="errorMessage">Please Enter your Number</div>
        ) : null}
        {Submit && Field.Number && Field.Number.length !== 10 ? (
          <div className="errorMessage">
            Please enter a valid 10-digit number
          </div>
        ) : null}
        <br/>

        <button type="submit" className="button">Register</button>
      </form>
    </section>
  );
}
