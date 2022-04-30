import React from "react";
import "../../styles.css";
import SectionHeader from "../../templates/SectionHeader";

export default function Project() {
  return (
    <div className="SectionContainer">
      <div className="Container">
        <SectionHeader title="PROJECTS" />
        <div className="ProjectListContainer">
          <div className="ProjectContainer">
            <div className="ProjectDuration">JANUARY 2020 - MAY 2020</div>
            <div className="ProjectTitle">
              <i>Team Leader</i>,{" "}
              <strong>
                School Management Project – University of Houston-Downtown
              </strong>
              , Houston, TX
            </div>
            <ul className="ProjectDetailContainer">
              <li>
                Collaborated with a group of 5 to the design and stimulate
                application’s UI, functions, database, and report for a desktop
                application delivering University services where professors and
                students manage their courses.
              </li>
              <li>
                Utilized Java, Spring Boot, React JS, HTML5, CSS3, JavaScript,
                Redux, MySQL
              </li>
            </ul>
          </div>
          <div className="ProjectContainer">
            <div className="ProjectDuration">AUGUST 2020 – DECEMBER 2020</div>
            <div className="ProjectTitle">
              <i>Independent</i>,{" "}
              <strong>
                Binary Search Tree Visualization Project – University of
                Houston-Downtown
              </strong>
              , Houston, TX
            </div>
            <ul className="ProjectDetailContainer">
              <li>
                Design a desktop app visualizing how a binary search tree work
                with several functions such as Add Node, Search Node, Remove
                Node, Find Lowest Common Ancestor.
              </li>
              <li>Utilized Java, JavaFX, CSS.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
