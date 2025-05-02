import React from "react";
import feemonkImg from "../../assets/images/feemonk-logo.png";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="e-container">
      <h2>Experience</h2>
      <div className="companies-contanier">
        <div className="ex-1">
          <img src="https://www.unifo.in/assets/images/unifo.svg" alt="unifo" />
          <div className="designation">
            <h3>SDE 1</h3>
            <p>Unifo Solutions Pvt.Ltd</p>
            <p>Apr 2023 - Jan 2024</p>
            <p>Chennai (On-site)</p>
          </div>
        </div>
        <div className="ex-1">
          <img src={feemonkImg} alt="sgrs" />
          <div className="designation">
            <h3>Full stack Developer</h3>
            <p>Feemonk</p>
            <p>Oct 2024 - Ongoing</p>
            <p>Hyderabad</p>
          </div>
        </div>
      </div>
    </div>
  );
}
