import React from "react";
import monkCapitalLogo from "../../assets/images/monkcapital-logo.avif";
import sgrsLogo from "../../assets/images/sgrs-logo.jpg";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="e-container">
      <h2>Experience</h2>
      <div className="companies-contanier">
        <div className="ex-1">
          <img src={monkCapitalLogo} alt="Monk Capital" />
          <div className="designation">
            <h3>Full Stack Developer</h3>
            <p>Monk Capital Pvt. Ltd. / Credit Yantra</p>
            <p>Oct 2024 - Present</p>
            <p>Hyderabad</p>
            <p>• Built and maintained the MoneyMonk React Native personal loan app, improving UI, performance, and user journeys.</p>
            <p>• Created a web landing experience at moneymonkapp.in to guide users to the Google Play download flow.</p>
            <p>• Integrated NestJS APIs with Swagger, MongoDB/MySQL persistence, and secure fintech workflows.</p>
            <p>• Led client customizations, deployment support, and bug fixes for production users.</p>
          </div>
        </div>
        <div className="ex-1">
          <img src="https://www.unifo.in/assets/images/unifo.svg" alt="unifo" />
          <div className="designation">
            <h3>SDE 1</h3>
            <p>Unifo Solutions Pvt. Ltd.</p>
            <p>Apr 2023 - Jan 2024</p>
            <p>Chennai (On-site)</p>
            <p>• Developed React pages with Material-UI customized components for a polished user experience.</p>
            <p>• Identified and resolved UI bugs, improving product quality and customer satisfaction.</p>
            <p>• Used Gatsby and AWS (S3, ECS, ECR) to enhance performance and support production deployment.</p>
          </div>
        </div>
        <div className="ex-1">
          <img src={sgrsLogo} alt="sgrs" />
          <div className="designation">
            <h3>Frontend Engineering Intern</h3>
            <p>SGRS Academic Pvt. Ltd.</p>
            <p>2022</p>
            <p>Remote</p>
            <p>• Built responsive React components with Material UI and Redux for academic web products.</p>
            <p>• Contributed to user-friendly interfaces and polished workflows with Axios-driven API calls.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
