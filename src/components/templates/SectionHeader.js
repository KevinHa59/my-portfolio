import React from "react";
import "../styles.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsCircle } from "react-icons/bs";

export default function SectionHeader({ title }) {
  return (
    <div className="SectionTitle">
      <div className="lineLeft" />
      <BsCircle className="SectionTitleIcon" />
      <MdArrowBackIosNew className="SectionTitleIcon" />
      <div className="SectionLabel">{title}</div>
      <MdArrowForwardIos className="SectionTitleIcon" />
      <BsCircle className="SectionTitleIcon" />
      <div className="lineRight" />
    </div>
  );
}
