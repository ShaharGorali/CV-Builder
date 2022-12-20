import React from "react";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";

const Education = (props) => {
  const { getEducation } = props;
  const [available, setAvailable] = useState(false);
  const formik = useFormik({
    initialValues: {
      education: {
        degree: "",
        nameOfSchool: "",
        location: "",
        startDate: "",
        endDate: "",
        untilToday: "",
      },
    },
    handleSubmit,
  });
  return (
    <React.Fragment>
      <div className="masterClass">
        <Header />
        <div className="infoSpace">
          <div className="rHeaderSpace">
            <span className="routHeader">Education</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <div className="formDiv">
              <div className="mb-3">
                <label className="form-label" htmlFor="degree">
                  Degree
                </label>
                <input
                  className="form-control"
                  name="education.degree"
                  value={formik.values.education.degree}
                  type="text"
                  id="degree"
                  placeholder="Enter your degree"
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="nameOfSchool">
                  School name
                </label>
                <input
                  className="form-control"
                  name="education.nameOfSchool"
                  value={formik.values.education.nameOfSchool}
                  type="text"
                  id="nameOfSchool"
                  placeholder="Enter name of school"
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input
                  className="form-control"
                  name="education.location"
                  value={formik.values.education.location}
                  type="text"
                  id="location"
                  placeholder="Enter school location"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="startDate">
                  Degree start date
                </label>
                <input
                  className="form-control"
                  name="education.startDate"
                  value={formik.values.education.startDate}
                  type="date"
                  id="startDate"
                  placeholder="Enter start date"
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="">
                  Degree end date
                </label>
                <input
                  className="form-control"
                  name="education.endDate"
                  value={formik.values.education.endDate}
                  type="date"
                  id="endDate"
                  placeholder="Enter end date"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="contactBtns1">
              {!available ? (
                <div className="contactBtns1">
                  <button type="submit" className="btn btn-outline-dark">
                    Submit
                  </button>
                </div>
              ) : (
                <div className="contactBtns1 animate__animated animate__bounceIn">
                  <NavLink className="btn btn-success" to="/skills">
                    Continue
                  </NavLink>
                  <button type="submit" className="btn btn-outline-dark">
                    Submit another
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();

    setAvailable(true);
    getEducation(formik.values.education);
  }
};

export default Education;
