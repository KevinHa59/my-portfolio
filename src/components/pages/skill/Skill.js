import React from "react";
import "../../styles.css";
import SectionHeader from "../../templates/SectionHeader";
import { GrBottomCorner, GrLanguage } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { VscServer } from "react-icons/vsc";
import { RiDatabase2Line } from "react-icons/ri";
import { GrCycle } from "react-icons/gr";
import { BiGitMerge } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { GrSystem } from "react-icons/gr";

export default function Skill() {
  return (
    <div className="SectionContainer">
      <div className="Container">
        <SectionHeader title="SKILLS" />
        <div className="SkillContainer ">
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <CgWebsite />
              Front-End
            </span>{" "}
            React JS, HTML5, CSS3, JavaScript, Redux, Axios, Bootstrap, Material
            UI
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <VscServer />
              Back-End
            </span>{" "}
            Java, J2EE, Spring, Spring Boot, Spring data JPA, Spring JDBC,
            Spring Security
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <GrBottomCorner />
              Web Service
            </span>{" "}
            REST, REST API
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <RiDatabase2Line />
              Database
            </span>{" "}
            MySQL, SQL Server
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <GrCycle />
              Software Development Life Cycle
            </span>{" "}
            Agile
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <BiGitMerge />
              Version Control
            </span>{" "}
            Git
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <AiOutlineAppstore />
              IDE
            </span>{" "}
            IntelliJ IDEA, Visual Studio Code, Microsoft SQL Server, MySQL
            Workbench
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <GrSystem />
              Operating System
            </span>{" "}
            Windows
          </div>
          <div className="SkillSetContainer">
            <span className="SkillSetLabel">
              <GrLanguage />
              Language
            </span>{" "}
            English, Vietnamese
          </div>
        </div>
      </div>
    </div>
  );
}
