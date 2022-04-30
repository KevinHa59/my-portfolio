import React from "react";

import "../../styles.css";
import avatar from "../../../images/avatar.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function Home() {
  return (
    <div className="MainSectionContainer ">
      <div className="IntroContainer ">
        <div className="IntroTop ">
          <div className="IntroLeft">
            <img src={avatar} alt="" className="IntroAvatar" />
          </div>
          <div className="IntroDesc">
            Hi! I'm <strong>Tong Ha</strong> <br />
            <br />I graduated from{" "}
            <strong>University of Houston-Downtown</strong> in 2021 with a
            degree in <strong>Computer Science</strong>.
            <br />
            <br />
            I have some experience in front-end development, and also interested
            in back-end development. I love to create beautiful and performant
            products with delightful user experiences.
            <br />
            <br />
            My <strong>front-end</strong> knowledge include{" "}
            <strong>ReactJS.</strong>
            <br />
            <br />
            My <strong>back-end</strong> knowledge include{" "}
            <strong>Spring Boot.</strong>
          </div>
        </div>
        <div className="IntroContact">
          <div className="ContactInfoContainer">
            <div className="IntroContactDetail">
              <AiOutlineMail /> haquoctong59@gmail.com
            </div>
            <div className="IntroContactDetail">
              <BsTelephone /> (346) 219-1755
            </div>
          </div>
          <div className="ContactSocial">
            <FaLinkedinIn className="ContactIcon" />
            <FaGithub className="ContactIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
