import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";

class Skill extends Component {
  state = {};
  skillTitle = React.createRef();
  skillDescription = React.createRef();
  language = React.createRef();
  abilityLevel = React.createRef();
  objective = React.createRef();
  render(props) {
    return (
      <React.Fragment>
        <div className="masterClass">
          <Header />
          <div className="infoSpace animate__animated animate__fadeIn">
            <div className="rHeaderSpace">
              <span className="routHeader">Skills</span>
            </div>
            <form autoComplete="off">
              <div className="formDiv">
                <div className="mb-3">
                  <label className="form-label" htmlFor="skill">
                    Personal skills
                  </label>
                  <input
                    ref={this.skillTitle}
                    className="form-control"
                    type="text"
                    id="skillName"
                    placeholder="Enter skill title"
                  />
                  <input
                    ref={this.skillDescription}
                    className="form-control"
                    type="text"
                    id="skillDescription"
                    placeholder="Enter skill description"
                  />
                  <button
                    onClick={(e) => this.anotherSkill(e)}
                    className="btn btn-dark addBtn"
                  >
                    Add another skill
                  </button>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="objective">
                      Objective (About me)
                    </label>
                    <input
                      ref={this.objective}
                      className="form-control"
                      type="text"
                      id="objective"
                    />
                    <button
                      onClick={(e) => this.handleSubmit(e)}
                      className="btn btn-dark contactBtns"
                    >
                      Submit objective
                    </button>
                  </div>
                </div>
                <div className="mb-3 languages">
                  <label className="form-label" htmlFor="language">
                    Languages
                  </label>
                  <select
                    ref={this.language}
                    className="form-select"
                    aria-label="Default select example"
                    id="language"
                  >
                    <option value="">Select language</option>
                    <option value="English">English</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Other">Other</option>
                  </select>
                  <label className="form-label" htmlFor="abilityLevel">
                    Ability level
                  </label>
                  <select
                    ref={this.abilityLevel}
                    className="form-select"
                    aria-label="Default select example"
                    id="abilityLevel"
                  >
                    <option value="">Select level</option>
                    <option value="Elementary">Elementary</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Native">Native</option>
                  </select>
                  <button
                    onClick={(e) => this.anotherLanguage(e)}
                    className="btn btn-dark contactBtns"
                  >
                    Add another language
                  </button>
                </div>
              </div>
              <div className="contactBtns1">
                <Link className="btn btn-success" to="/design">
                  Continue
                </Link>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    {
      e.target.disabled = true;
    }
    const objective = this.objective.current.value;
    let skills = {
      skills: {
        objective: objective,
      },
    };
    this.props.getObjective(skills);
  };
  anotherLanguage = (e) => {
    e.preventDefault();
    const language = this.language.current.value;
    const abilityLevel = this.abilityLevel.current.value;
    let languageObj = {
      language: language,
      abilityLevel: abilityLevel,
    };
    this.props.getlanguageObj(languageObj);
    this.language.current.value = "";
    this.abilityLevel.current.value = "";
  };
  anotherSkill = (e) => {
    e.preventDefault();
    const skillTitle = this.skillTitle.current.value;
    const SkillDescription = this.skillDescription.current.value;
    const skillObj = {
      skillTitle: skillTitle,
      SkillDescription: SkillDescription,
    };
    this.props.getSkillObj(skillObj);
    this.skillTitle.current.value = "";
    this.skillDescription.current.value = "";
  };
}

export default Skill;
