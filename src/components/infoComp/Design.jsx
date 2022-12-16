import React from "react";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";
const Design = (props) => {
  const [available, setAvailable] = useState(false);
  const { getDesign } = props;
  const formik = useFormik({
    initialValues: {
      design: {
        color: "",
        color2: "",
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
            <span className="routHeader">Design</span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <div className="formDiv">
              <div className="mb-3">
                <label className="form-label">Color picker</label>
                <input
                  onChange={formik.handleChange}
                  type="color"
                  className="form-control form-control-color"
                  id="exampleColorInput"
                  name="design.color"
                  title="Choose your CV color"
                />
                <input
                  onChange={formik.handleChange}
                  type="color"
                  className="form-control form-control-color"
                  id="exampleColorInput"
                  name="design.color2"
                  title="Choose your second CV color"
                />
              </div>
            </div>
            <div className="contactBtns">
              {!available ? (
                <div className="contactBtns1">
                  <span id="almostF">Almost finished...</span>
                  <button type="submit" className="btn btn-outline-dark">
                    Submit
                  </button>
                </div>
              ) : (
                <div className="contactBtns1 animate__animated animate__bounceIn">
                  <span id="almostF">Almost finished...</span>
                  <NavLink to="/cvpreview">
                    <button className="btn btn-success">Continue</button>
                  </NavLink>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    getDesign(formik.values.design);
    setAvailable(true);
  }
};

export default Design;
