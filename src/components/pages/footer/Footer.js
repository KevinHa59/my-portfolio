import React from "react";
import "../../styles.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="MainFooterContainer">
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
  );
}
