import React from "react";
import "../../styles.css";
import SectionHeader from "../../templates/SectionHeader";

export default function Education() {
  return (
    <div className="SectionContainer">
      <div className="Container">
        <SectionHeader title="EDUCATION" />
        <div className="ProjectListContainer">
          <div className="ProjectContainer">
            <div className="ProjectDuration">JANUARY 2020 - DECEMBER 2021</div>
            <div className="ProjectTitle">
              <strong>University of Houston-Downtown</strong>,{" "}
              <i>Houston, TX</i>
            </div>

            <ul className="ProjectDetailContainer">
              <li>
                <strong>Major</strong>: Computer Science
              </li>
              <li>
                <strong>GPA</strong>: 3.94
              </li>
              <li>
                <strong>Honors</strong>: Dean’s List
              </li>
              <li>
                <strong>Relevant Coursework</strong> Software Engineering,
                Database Systems, Digital Logic, Object-Oriented Programming,
                Intro to Theory of Computation, Web Programming, Programming
                Language Concepts, Operating Systems, Data and Information
                Structures, IoT, Natural Language Processing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
