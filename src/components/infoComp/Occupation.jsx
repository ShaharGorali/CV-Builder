import React from "react";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";

const Occupation = (props) => {
  const { getOccInfo } = props;
  const [available, setAvailable] = useState(false);
  const formik = useFormik({
    initialValues: {
      occupation: {
        occupationtitle: "",
        occupationDescription: "",
        militaryService: "",
        link: "",
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
            <span className="routHeader">Occupation</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <div className="formDiv">
              <div className="mb-3">
                <label htmlFor="occupationTitle" className="form-label">
                  Occupation Title
                </label>
                <input
                  className="form-control"
                  name="occupation.occupationtitle"
                  type="text"
                  id="occupation"
                  placeholder="Enter occupation title"
                  onChange={formik.handleChange}
                />
                <label htmlFor="occupationDescription" className="form-label">
                  Occupation Description
                </label>
                <input
                  className="form-control"
                  name="occupation.occupationDescription"
                  type="text"
                  id="occupationDescription"
                  placeholder="Enter occupation description"
                  onChange={formik.handleChange}
                />
                <label htmlFor="militaryService" className="form-label">
                  Military Service
                </label>
                <input
                  className="form-control"
                  name="occupation.militaryService"
                  type="text"
                  id="militaryService"
                  placeholder="Enter about your Military service"
                  onChange={formik.handleChange}
                />
                <label htmlFor="link" className="form-label">
                  Link
                </label>
                <input
                  className="form-control"
                  name="occupation.link"
                  type="text"
                  id="link"
                  placeholder="Enter link"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            {!available ? (
              <div className="contactBtns">
                <button type="submit" className="btn btn-outline-dark">
                  Submit
                </button>
              </div>
            ) : (
              <div className="contactBtns animate__animated animate__bounceIn">
                <NavLink to="/experience">
                  <button className="btn btn-success">Continue</button>
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
    getOccInfo(formik.values.occupation);
    setAvailable(true);
  }
};

export default Occupation;
