import React from "react";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";

const ContactInfo = (props) => {
  const [available, setAvailable] = useState(false);
  const { getContactInfo } = props;
  const formik = useFormik({
    initialValues: {
      contactInfo: {
        name: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        phoneNumber: "",
        imgUrl: "",
        address: {
          country: "",
          city: "",
          street: "",
        },
      },
    },
    handleSubmit,
  });
  return (
    <React.Fragment>
      <div className="masterClass">
        <Header />
        <div className="infoSpace animate__animated animate__fadeIn">
          <div className="rHeaderSpace">
            <span className="routHeader">Personal Information</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <div className="formDiv">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  name="contactInfo.name"
                  type="text"
                  id="name"
                  placeholder="Enter first name"
                  onChange={formik.handleChange}
                />
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  className="form-control"
                  name="contactInfo.lastName"
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                  onChange={formik.handleChange}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  name="contactInfo.email"
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={formik.handleChange}
                />
                <label htmlFor="phoneNumber" className="form-label">
                  Phone
                </label>
                <input
                  className="form-control"
                  name="contactInfo.phoneNumber"
                  type="text"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  className="form-control"
                  name="contactInfo.address.country"
                  type="text"
                  id="country"
                  placeholder="Country"
                  onChange={formik.handleChange}
                />
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  className="form-control"
                  name="contactInfo.address.city"
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  onChange={formik.handleChange}
                />
                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <input
                  className="form-control"
                  name="contactInfo.address.street"
                  type="text"
                  id="street"
                  placeholder="Enter Street + Number"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            {!available ? (
              <div className="contactBtns1">
                <button type="submit" className="btn btn-outline-dark">
                  Submit
                </button>
              </div>
            ) : (
              <div className="contactBtns1 animate__animated animate__bounceIn">
                <NavLink className="btn btn-success" to="/occupation">
                  Continue
                </NavLink>
              </div>
            )}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    setAvailable(true);
    getContactInfo(formik.values.contactInfo);
  }
};

export default ContactInfo;
