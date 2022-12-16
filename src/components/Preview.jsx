import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Preview = (props) => {
  const { cvProps } = props;
  let temp = Object.entries(cvProps.skills);
  let skillsHtml = [];
  let languageHtml = [];
  for (let i = 0; i < temp[0][1].length; i++) {
    skillsHtml.push(
      <>
        <span style={{ fontWeight: "bold" }} className="skill">
          {temp[0][1][i]}
        </span>
        <span className="skillD">{temp[1][1][i]}</span>
      </>
    );
  }
  for (let i = 0; i < temp[0][1].length; i++) {
    languageHtml.push(
      <>
        <span style={{ fontWeight: "bold" }} className="lang">
          {temp[2][1][i]}
        </span>
        <span className="ability">{temp[3][1][i]}</span>
      </>
    );
  }

  let temp1 = Object.entries(cvProps.experience);
  let expHtml = [];
  for (let i = 0; i < temp[0][1].length; i++) {
    expHtml.push(
      <>
        <span className="secTitle">{temp1[0][1][i]}</span>
        <span className="company">
          {temp1[1][1][i]}
          <span className="expLocation">, {temp1[2][1][i]}</span>
        </span>
        <span>
          {temp1[3][1][i]} <span>until</span> <span>{temp1[4][1][i]}</span>
        </span>
        <span className="expInfo">{temp1[5][1][i]}</span>
      </>
    );
  }

  let temp2 = Object.entries(cvProps.education);
  let eduHtml = [];
  for (let i = 0; i < temp[0][1].length; i++) {
    eduHtml.push(
      <>
        <span className="secTitle">{temp2[0][1][i]}</span>
        <span id="eduSecH">
          {temp2[1][1][i]},<span id="eduDate">{temp2[2][1][i]}</span>
        </span>

        <span id="eduInfo">
          {temp2[3][1][i]} <span>until</span> {temp2[4][1][i]}
        </span>
      </>
    );
  }
  return (
    <React.Fragment>
      <div className="masterClass">
        <Header />
        <div className="previewSpace">
          <div
            id="pdfpreview"
            className="pdfpreview animate__animated animate__fadeInTopLeft"
          >
            <div
              className="smallCol"
              style={{ backgroundColor: cvProps.design.color }}
            >
              <div className="leftDiv">
                <div className="persInfoDiv">
                  <span id="phone">Phone</span>
                  <span>{cvProps.contactInfo.phoneNumber}</span>
                  <span id="address">Address</span>
                  <span>
                    <span>{cvProps.contactInfo.address.country}</span>
                    <span> {cvProps.contactInfo.address.city}</span>
                    <span> {cvProps.contactInfo.address.street}</span>
                  </span>
                  <span id="email">Email</span>
                  <span>{cvProps.contactInfo.email}</span>
                </div>
                <div className="skillsDiv">
                  <span id="skillsHeader">Skills</span>
                  {skillsHtml}
                </div>
                <div className="languagesDiv">
                  <span id="languageHeader">Languages</span>
                  {languageHtml}
                </div>
                <div className="linksDiv">
                  <span id="languageHeader">Links</span>
                  <span id="link">{cvProps.occupation.link}</span>
                </div>
              </div>
            </div>
            <div className="bigCol">
              <div className="rightDiv">
                <div
                  id="headAtrSpace"
                  style={{ backgroundColor: cvProps.design.color2 }}
                >
                  <div className="headAtr">
                    <span id="nameH">
                      {cvProps.contactInfo.name}&nbsp;
                      {cvProps.contactInfo.lastName}
                    </span>
                    <span id="occtitle">
                      {cvProps.occupation.occupationTitle}
                    </span>
                    <span>{cvProps.occupation.occupationDescription}</span>
                  </div>
                </div>
                <div className="expDiv">
                  <span id="expTitle">Experience</span>
                  {expHtml}
                  <span id="eduTitle">Education</span>
                  {eduHtml}
                </div>
                <div className="militaryhServ">
                  <span id="miliTitle">Military Sercive</span>
                  <span>{cvProps.occupation.militaryService}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="downloadBtn">
            <button
              onClick={() => printHtml()}
              className="btn btn-outline-danger"
            >
              Download CV file
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
let printHtml = () => {
  var data = document.getElementById("pdfpreview");
  var canvas = document.createElement("canvas");
  canvas.width = 730;
  canvas.height = 1050;

  var options = {
    canvas: canvas,
    scale: 1,
    width: 1920,
    height: 1280,
    windowHeight: 1280,
    windowWidth: 1920,
  };

  html2canvas(data, options).then((canvas) => {
    const contentDataURL = canvas.toDataURL("image/png");
    var pdf = new jsPDF("p", "px", "a4");

    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();

    pdf.addImage(contentDataURL, "PNG", 1, 1, width, height);
    pdf.save(" - myCV");
  });
};

export default Preview;
