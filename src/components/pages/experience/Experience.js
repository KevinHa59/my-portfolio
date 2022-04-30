import React from "react";
import "../../styles.css";
import SectionHeader from "../../templates/SectionHeader";

export default function Experience() {
  return (
    <div className="SectionContainer">
      <div className="Container">
        <SectionHeader title="EXPERIENCES" />
        <div className="ProjectListContainer">
          <div className="ProjectContainer">
            <div className="ProjectDuration">JANUARY 2017 – DECEMBER 2017</div>
            <div className="ProjectTitle">
              <strong>DiCENTRAL LTD</strong> - <i>Vietnam</i>
            </div>
            <div className="ProjectTitle">
              <strong>Frontend Intern</strong>
            </div>
            <ul className="ProjectDetailContainer">
              <li>
                Business process analysis and problem solving of data quality
                and maintenance issues, including system development and
                user-interface.
              </li>
              <li>Develop UIs with HTML, CSS, JavaScript.</li>
              <li>
                Extensively involved in coding with ReactJS to add
                functionalities and effects to UI.
              </li>
              <li>Utilized React JS, HTML, CSS, JavaScript, GIT.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
