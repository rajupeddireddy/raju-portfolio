import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import NearMeSharpIcon from "@mui/icons-material/NearMeSharp";
import AndroidIcon from "@mui/icons-material/Android";
import { Tooltip, IconButton } from "@mui/material";
import moneymonkLogo from "../../assets/images/moneymonk-logo.png";
import wikipediaLogo from "../../assets/images/wikipedia-logo.svg";
import weatherLogo from "../../assets/images/weather-logo.svg";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="work-container">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img
            src={moneymonkLogo}
            alt="moneymonk"
            className="website-logo"
          />
          <div>
            <h4>MoneyMonk Personal Loan App</h4>
            <p>
              <span>Technologies used:</span> React Native, NestJS, Swagger,
              MongoDB, MySQL, Material UI, Axios, AWS
            </p>
            <p>
              Built and maintained the MoneyMonk fintech mobile app with a clean
              UI, performance optimizations, and secure API integrations.
            </p>
          </div>
          <div className="links-icons">
            <Tooltip title="Open landing page">
              <IconButton
                component="a"
                href="https://moneymonkapp.in/"
                target="_blank"
                rel="noreferrer"
              >
                <NearMeSharpIcon
                  fontSize="large"
                  color="primary"
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open Google Play listing">
              <IconButton
                component="a"
                href="https://play.google.com/store/search?q=moneymonk&c=apps"
                target="_blank"
                rel="noreferrer"
              >
                <AndroidIcon
                  fontSize="large"
                  color="success"
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="nxttrendz"
            className="website-logo"
          />
          <div>
            <h4>ECommerce Clone - Amazon, Flipkart</h4>
            <p>
              <span>Technologies used:</span> React JS, JS, Context APi, CSS,
              Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
              Authorization, Authentication{" "}
            </p>
          </div>
          <div className="links-icons">
            <Tooltip title="open code">
              <IconButton
                component="a"
                href="https://github.com/rajupeddireddy/nxt-trenz-ecommerce"
                target="_blank"
              >
                <GitHubIcon
                  fontSize="large"
                  sx={{ color: "#000" }}
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="username: praneetha,  password: praneetha@2021"
              href="https://raju71nxtgen.ccbp.tech/"
              target="_blank"
            >
              <IconButton>
                <NearMeSharpIcon
                  fontSize="large"
                  color="primary"
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <div className="project-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png?20221102143815"
            alt="nxttrendz"
            className="website-logo"
          />
          <div>
            <h4>Contact Picker</h4>
            <p>
              <span>Technologies used:</span>Reactjs, Material Ui
            </p>
          </div>
          <div className="links-icons">
            {/* <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' /> */}
            <Tooltip title="open code">
              <IconButton
                component="a"
                href="https://github.com/rajupeddireddy/contact-picker"
                target="_blank"
              >
                <GitHubIcon
                  fontSize="large"
                  sx={{ color: "#000" }}
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="open site"
              components="a"
              href="https://contact-picker-reactjs.netlify.app"
              target="_blank"
            >
              <IconButton>
                <NearMeSharpIcon
                  fontSize="large"
                  color="primary"
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="project-card">
          <img
            src={wikipediaLogo}
            alt="wikipedia"
            className="website-logo"
          />
          <div>
            <h4>Wikipedia Search Application</h4>
            <p>
              <span>Technologies used:</span> HTML, CSS, JS, REST API Calls,
              Bootstrap
            </p>
          </div>
          <div className="links-icons">
            {/* <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' /> */}

            <Tooltip title="open site">
              <IconButton
                component="a"
                href="http://raju1wikipedia.ccbp.tech"
                target="_blank"
              >
                <NearMeSharpIcon
                  fontSize="large"
                  color="primary"
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://ik.imagekit.io/e5kg8mysj/todo-img.png?updatedAt=1713028862990"
            alt="nxttrendz"
            className="website-logo"
          />
          <div>
            <h4>Todos Application </h4>
            <p>
              <span>Technologies used:</span>HTML, CSS, JS, Bootstrap{" "}
            </p>
          </div>
          <div className="links-icons">
            {/* <GitHubIcon fontSize='large' sx={{color:'#000'}} className='git-icon' /> */}

            <Tooltip
              title="open site"
              components="a"
              href="http://raju1todosapp.ccbp.tech"
              target="_blank"
            >
              <IconButton>
                <NearMeSharpIcon
                  fontSize="large"
                  color="primary"
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://res.cloudinary.com/dh4d9iuty/image/upload/v1632986851/Tasty_Kitchen_lc3zjq.png"
            alt="nxttrendz"
            className="website-logo"
          />
          <div>
            <h4>Tasty Kitchen</h4>
            <p>
              <span>Technologies used:</span>HTML, CSS, JS, Bootstrap{" "}
            </p>
          </div>
          <div className="links-icons">
            <Tooltip title="open code">
              <IconButton
                component="a"
                href="https://github.com/rajupeddireddy/tasty-kitchen"
                target="_blank"
              >
                <GitHubIcon
                  fontSize="large"
                  sx={{ color: "#000" }}
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>

            {/* <NearMeSharpIcon fontSize='large' color='primary' className='git-icon'/> */}
          </div>
        </div>

        <div className="project-card">
          <img
            src={weatherLogo}
            alt="weather-app"
            className="website-logo"
          />
          <div>
            <h4>Weather App</h4>
            <p>
              <span>Technologies used:</span>React JS, Redux, Typescript, Open
              Weather APi, Material UI, Routing, CSS
            </p>
          </div>
          <div className="links-icons">
            <Tooltip title="open code">
              <IconButton
                component="a"
                href="https://github.com/rajupeddireddy/weather-app"
                target="_blank"
              >
                <GitHubIcon
                  fontSize="large"
                  sx={{ color: "#000" }}
                  className="git-icon"
                />
              </IconButton>
            </Tooltip>
            {/* <NearMeSharpIcon fontSize='large' color='primary' className='git-icon'/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
