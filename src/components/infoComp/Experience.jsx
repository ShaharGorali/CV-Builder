import React from "react";
import { Formik, useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";

const Experience = (props) => {
  const { getExperience, addAnotherExp } = props;
  const [available, setAvailable] = useState(false);
  const formik = useFormik({
    initialValues: {
      experience: {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        untilToday: "",
        aboutTheWork: "",
      },
      handleSubmit,
    },
  });

  return (
    <React.Fragment>
      <div className="masterClass">
        <Header />
        <div className="infoSpace animate__animated animate__fadeIn">
          <div className="rHeaderSpace">
            <span className="routHeader">Experience</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <div className="formDiv">
              <div className="mb-3">
                <label className="form-label" htmlFor="title">
                  Experience title
                </label>
                <input
                  className="form-control"
                  name="experience.title"
                  type="text"
                  id="title"
                  placeholder="Enter your title"
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="company">
                  Company
                </label>
                <input
                  className="form-control"
                  name="experience.company"
                  type="text"
                  id="company"
                  placeholder="Enter your experience company"
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input
                  className="form-control"
                  name="experience.location"
                  type="text"
                  id="location"
                  placeholder="Enter your experience location"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="aboutTheWork">
                  About the work
                </label>
                <input
                  className="form-control"
                  name="experience.aboutTheWork"
                  type="text"
                  id="aboutTheWork"
                  placeholder="Enter information about the work"
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="startDate">
                  Experience start date
                </label>
                <input
                  className="form-control"
                  name="experience.startDate"
                  type="date"
                  id="startDate"
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="endDate">
                  Experience end date
                </label>
                <input
                  className="form-control"
                  name="experience.endDate"
                  type="date"
                  id="endDate"
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
                <NavLink to="/education">
                  <button className="btn btn-success">Continue</button>
                </NavLink>
                <button type="submit" className="btn btn-outline-dark">
                  Submit another
                </button>
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
    getExperience(formik.values.experience);
    setAvailable(true);
  }
  // function addAnother(e) {
  //   e.preventDefault();
  //   addAnotherExp(formik.values);
  //   formik.resetForm();
  // }
};

export default Experience;
