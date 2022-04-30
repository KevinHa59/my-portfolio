import React, { useEffect } from "react";
import "../styles.css";
import sign from "../../images/signature.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  function hamburgerMenuHandler() {
    const NavBarContainer = document.querySelector(".NavBarContainer");
    NavBarContainer.classList.toggle("showMenu");
  }
  function hamburgerCloseHandler() {
    const NavBarContainer = document.querySelector(".NavBarContainer");
    NavBarContainer.classList.remove("showMenu");
  }
  useEffect(() => {
    const NavLink = document.querySelectorAll(".NavBarLink");

    NavLink.forEach((item) => {
      item.addEventListener("click", hamburgerCloseHandler);
    });
  }, []);

  return (
    <div className="NavBarMainContainer">
      <div className="BannerContainer">
        <img src={sign} alt="" />
      </div>
      <div className="NavBarContainer ">
        <a href="#Home" className="NavBarLink">
          HOME
        </a>
        <a href="#Skill" className="NavBarLink">
          SKILLS
        </a>
        <a href="#Project" className="NavBarLink">
          PROJECTS
        </a>
        <a href="#Experience" className="NavBarLink">
          EXPERIENCE
        </a>
        <a href="#Education" className="NavBarLink">
          EDUCATION
        </a>
        <a href="/" className="NavBarLink">
          MY RESUME
        </a>
      </div>
      <div
        className="HamburgerButtonContainer"
        onClick={() => hamburgerMenuHandler()}
      >
        <GiHamburgerMenu className="HamButton" />
      </div>
    </div>
  );
}
