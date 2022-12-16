import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ContactInfo from "./infoComp/ContactInfo";
import Design from "./infoComp/Design";
import Education from "./infoComp/Education";
import Experience from "./infoComp/Experience";
import Skill from "./infoComp/Skill";
import Welcome from "./Welcome";
import Preview from "./Preview";
import Occupation from "./infoComp/Occupation";
class Master extends Component {
  state = {
    cvProps: {
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
      occupation: {
        occupationTitle: "",
        occupationDescription: "",
        militaryService: "",
        link: "",
      },
      experience: {
        title: [],
        company: [],
        location: [],
        startDate: [],
        endDate: [],
        aboutTheWork: [],
      },
      education: {
        degree: [],
        nameOfSchool: [],
        location: [],
        startDate: [],
        endDate: [],
      },
      skills: {
        skillTitle: [],
        skillDescription: [],
        language: [],
        abilityLevel: [],
        objective: "",
      },
      design: {
        color: "",
        color2: "",
      },
    },
  };
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route
            path="/contactinfo"
            element={
              <ContactInfo getContactInfo={(obj) => this.getContactInfo(obj)} />
            }
          ></Route>
          <Route
            path="/occupation"
            element={<Occupation getOccInfo={(obj) => this.getOccInfo(obj)} />}
          ></Route>
          <Route
            path="/experience"
            element={
              <Experience
                getExperience={(experience) => this.getExperience(experience)}
                addAnotherExp={(values) => this.addAnotherExp(values)}
              />
            }
          ></Route>
          <Route
            path="/education"
            element={
              <Education getEducation={(obj) => this.getEducation(obj)} />
            }
          ></Route>
          <Route
            path="/skills"
            element={
              <Skill
                getObjective={(skills) => this.getObjective(skills)}
                getlanguageObj={(languageObj) =>
                  this.getlanguageObj(languageObj)
                }
                getSkillObj={(skillObj) => this.getSkillObj(skillObj)}
              />
            }
          ></Route>
          <Route
            path="/design"
            element={<Design getDesign={(obj) => this.getDesign(obj)} />}
          ></Route>
          <Route
            path="/cvpreview"
            element={<Preview cvProps={this.state.cvProps} />}
          ></Route>
        </Routes>
      </React.Fragment>
    );
  }
  getContactInfo = (contactInfo) => {
    this.state.cvProps.contactInfo = contactInfo;
    this.setState({ cvProps: this.state.cvProps });
  };
  getOccInfo = (OccInfo) => {
    this.state.cvProps.occupation = OccInfo;
    this.setState({ cvProps: this.state.cvProps });
  };
  getExperience = (experience) => {
    const title = experience.title;
    const company = experience.company;
    const location = experience.location;
    const startDate = experience.startDate;
    const endDate = experience.endDate;
    const untilToday = experience.untilToday;
    const aboutTheWork = experience.aboutTheWork;
    this.state.cvProps.experience.title.push(title);
    this.state.cvProps.experience.company.push(company);
    this.state.cvProps.experience.location.push(location);
    this.state.cvProps.experience.startDate.push(startDate);
    this.state.cvProps.experience.endDate.push(endDate);
    this.state.cvProps.experience.aboutTheWork.push(aboutTheWork);
    this.setState({ cvProps: this.state.cvProps });
    console.log(this.state.cvProps);
  };
  getEducation = (education) => {
    const degree = education.degree;
    const nameOfSchool = education.nameOfSchool;
    const location = education.location;
    const startDate = education.startDate;
    const endDate = education.endDate;
    const untilToday = education.untilToday;
    this.state.cvProps.education.degree.push(degree);
    this.state.cvProps.education.nameOfSchool.push(nameOfSchool);
    this.state.cvProps.education.location.push(location);
    this.state.cvProps.education.startDate.push(startDate);
    this.state.cvProps.education.endDate.push(endDate);
    this.setState({ cvProps: this.state.cvProps });
  };
  getObjective = (skills) => {
    const objective = skills.skills.objective;
    this.state.cvProps.skills.objective = objective;
    this.setState({ cvProps: this.state.cvProps });
    console.log(this.state.cvProps);
  };
  getlanguageObj = (languageObj) => {
    this.state.cvProps.skills.language.push(languageObj.language);
    this.state.cvProps.skills.abilityLevel.push(languageObj.abilityLevel);
    this.setState({ cvProps: this.state.cvProps });
  };
  getSkillObj = (skillObj) => {
    this.state.cvProps.skills.skillTitle.push(skillObj.skillTitle);
    this.state.cvProps.skills.skillDescription.push(skillObj.SkillDescription);
    this.setState({ cvProps: this.state.cvProps });
    console.log(this.state.cvProps);
  };
  getDesign = (design) => {
    this.state.cvProps.design = design;
    this.setState({ cvProps: this.state.cvProps });
  };
  // addAnotherExp = (e, values) => {
  //   e.preventDefault();
  //   console.log(values);
  //   console.log(values.title);
  //   this.state.cvProps.experience.title.push(values.title);
  //   this.state.cvProps.experience.company.push(values.company);
  //   this.state.cvProps.experience.location.push(values.location);
  //   this.state.cvProps.experience.aboutTheWork.push(values.aboutTheWork);
  //   this.state.cvProps.experience.startDate.push(values.startDate);
  //   this.state.cvProps.experience.endDate.push(values.endDate);
  //   this.setState({ cvProps: this.state.cvProps });
  // };
}

export default Master;
